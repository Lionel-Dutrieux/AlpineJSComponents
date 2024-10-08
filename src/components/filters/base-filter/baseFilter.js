import autoAnimate from "@formkit/auto-animate";

/**
 * Version of the base filter.
 * @type {string}
 */
const VERSION = "1.0.0";

/**
 * Filter conditions constants.
 * @enum {string}
 */
const FILTER_CONDITIONS = {
    CONTAIN: "contain",
    GREATERTHAN: "greaterThan",
    LESSTHAN: "lessThan",
    NUMBEREQUAL: "numberEqual",
    BETWEEN: "between",
};

/**
 * Base filter function to filter DOM elements based on specified conditions.
 * @param {Object} options - The options for the base filter.
 * @param {string} [options.condition='some'] - The condition to apply ('all' or 'some').
 * @param {boolean} [options.updateUrlParams=false] - Whether to update URL parameters when a filter is applied.
 * @param {boolean} [options.autoInit=true] - Whether to automatically initialize the filter.
 * @param {boolean} [options.animation=true] - Whether to animate the filter.
 * @returns {Object} The base filter object.
 */
export default function baseFilter({
    condition = "some",
    updateUrlParams = false,
    autoInit = true,
    animation = true,
} = {}) {
    return {
        filters: {},
        originalChildren: [],
        condition: condition, // Can be 'all' or 'some'
        filteredChildren: [],
        updateUrlParams: updateUrlParams,

        /**
         * Initializes the base filter.
         */
        init(init = false) {
            if (autoInit || init) {
                if (animation) autoAnimate(this.$el);
                this.ensureUniqueId();
                this.setupEventListener();
                this.originalChildren = Array.from(this.$el.children);
                this.applyFilters();
                this.checkUrlParams();
            }
        },

        /**
         * Ensures the element has a unique ID.
         */
        ensureUniqueId() {
            if (!this.$el.id) {
                this.$el.id = `base-filter-${Math.random().toString(36).substr(2, 9)}`;
            }
        },

        /**
         * Sets up the event listener for the base filter.
         */
        setupEventListener() {
            const id = this.$el.id;
            document.addEventListener("baseFilter", (event) => {
                if (event.detail.id === id) {
                    this.handleFilterEvent(event.detail);
                }
            });
        },

        /**
         * Handles the filter event.
         * @param {Object} detail - The event detail.
         * @param {string} detail.method - The method to apply ('addFilter', 'removeFilter', 'resetFilter', 'getFilters').
         * @param {string} detail.name - The name of the filter.
         * @param {string} detail.condition - The condition of the filter.
         * @param {string} detail.value - The value of the filter.
         */
        handleFilterEvent(detail) {
            const { method, name, condition, value } = detail;
            switch (method) {
                case "addFilter":
                    this.addFilter(name, condition, value);
                    break;
                case "removeFilter":
                    this.removeFilter(name, value);
                    break;
                case "resetFilter":
                    this.resetFilter();
                    break;
                case "getFilters":
                    this.getFilters();
                    break;
                case "init":
                    this.init(true);
                    break;
            }
            this.applyFilters();
        },

        /**
         * Adds a filter.
         * @param {string} name - The name of the filter.
         * @param {string} condition - The condition of the filter.
         * @param {string} value - The value of the filter.
         */
        addFilter(name, condition, value) {
            if (!this.filters[name]) {
                this.filters[name] = [];
            }
            const filterExists = this.filters[name].some(
                (filter) => filter.condition === condition && filter.value === value.toLowerCase()
            );
            if (!filterExists) {
                this.filters[name].push({ condition, value: value.toLowerCase() });
                if (this.updateUrlParams) {
                    this.updateUrl();
                }
            }
        },

        /**
         * Removes a filter.
         * @param {string} name - The name of the filter.
         * @param {string} value - The value of the filter.
         */
        removeFilter(name, value) {
            if (this.filters[name]) {
                this.filters[name] = this.filters[name].filter(
                    (filter) => filter.value !== value.toLowerCase()
                );
                if (this.filters[name].length === 0) {
                    delete this.filters[name];
                }
                if (this.updateUrlParams) {
                    this.updateUrl();
                }
            }
        },

        /**
         * Resets all filters.
         */
        resetFilter() {
            this.filters = {};
            this.filteredChildren = [];
            this.$el.innerHTML = "";
            this.originalChildren.forEach((child) => this.$el.appendChild(child));
            if (this.updateUrlParams) {
                this.updateUrl();
            }
            this.getFilters();
        },

        /**
         * Retrieves all current filters.
         */
        getFilters() {
            const event = new CustomEvent("baseFilterResponse", {
                detail: {
                    id: this.$el.id,
                    filters: this.filters,
                },
            });
            document.dispatchEvent(event);
        },

        /**
         * Applies the filters to the children elements.
         */
        applyFilters() {
            if (Object.keys(this.filters).length === 0) {
                // No filters, re-add the original children
                this.updateDOM(this.originalChildren);
            } else {
                const newFilteredChildren = this.originalChildren.filter((child) =>
                    this.shouldShowChild(child)
                );
                if (this.shouldUpdateDOM(newFilteredChildren)) {
                    this.updateDOM(newFilteredChildren);
                }
            }
        },

        /**
         * Determines if a child element should be shown based on the filters.
         * @param {Element} child - The child element.
         * @returns {boolean} True if the child should be shown, false otherwise.
         */
        shouldShowChild(child) {
            if (this.condition === "all") {
                return Object.entries(this.filters).every(([name, filters]) => {
                    const attributeValue = child.getAttribute(`filter-${name}`);
                    if (!attributeValue) return false;
                    const attributeValues = attributeValue.toLowerCase().split(",");
                    return filters.every(({ condition, value }) =>
                        this.isMatch(attributeValues, condition, value)
                    );
                });
            } else if (this.condition === "some") {
                return Object.entries(this.filters).some(([name, filters]) => {
                    const attributeValue = child.getAttribute(`filter-${name}`);
                    if (!attributeValue) return false;
                    const attributeValues = attributeValue.toLowerCase().split(",");
                    return filters.some(({ condition, value }) =>
                        this.isMatch(attributeValues, condition, value)
                    );
                });
            }
            return true;
        },

        /**
         * Checks if an attribute value matches a filter condition.
         * @param {string[]} attributeValues - The attribute values.
         * @param {string} condition - The filter condition.
         * @param {string} value - The filter value.
         * @returns {boolean} True if the attribute value matches the filter condition, false otherwise.
         */
        isMatch(attributeValues, condition, value) {
            return attributeValues.some((attrValue) => {
                switch (condition) {
                    case FILTER_CONDITIONS.CONTAIN:
                        return attrValue.includes(value);
                    case FILTER_CONDITIONS.GREATERTHAN:
                        return !isNaN(attrValue) && parseFloat(attrValue) > parseFloat(value);
                    case FILTER_CONDITIONS.LESSTHAN:
                        return !isNaN(attrValue) && parseFloat(attrValue) < parseFloat(value);
                    case FILTER_CONDITIONS.NUMBEREQUAL:
                        return !isNaN(attrValue) && parseFloat(attrValue) === parseFloat(value);
                    case FILTER_CONDITIONS.BETWEEN:
                        const [min, max] = value.split(",");
                        return (
                            !isNaN(min) &&
                            !isNaN(max) &&
                            parseFloat(attrValue) >= parseFloat(min) &&
                            parseFloat(attrValue) <= parseFloat(max)
                        );
                    default:
                        console.warn(`Unknown filter condition: ${condition}`);
                        return false;
                }
            });
        },

        /**
         * Determines if the DOM should be updated based on the filtered children.
         * @param {Element[]} newFilteredChildren - The new filtered children.
         * @returns {boolean} True if the DOM should be updated, false otherwise.
         */
        shouldUpdateDOM(newFilteredChildren) {
            return (
                this.filteredChildren.length !== newFilteredChildren.length ||
                !this.filteredChildren.every((child, index) => child === newFilteredChildren[index])
            );
        },

        /**
         * Updates the DOM with the new filtered children.
         * @param {Element[]} newFilteredChildren - The new filtered children.
         */
        updateDOM(newFilteredChildren) {
            this.$el.innerHTML = "";
            newFilteredChildren.forEach((child) => this.$el.appendChild(child));
            this.filteredChildren = newFilteredChildren;
        },

        /**
         * Checks URL parameters for filters and applies them.
         */
        checkUrlParams() {
            const params = new URLSearchParams(window.location.search);
            params.forEach((value, key) => {
                if (key.startsWith("filter_")) {
                    let [name, condition] = key.replace("filter_", "").split("_");
                    condition = condition || "contain"; // Set default condition to 'contain' if undefined
                    const values = value.split("|"); // Split the value on '|'
                    values.forEach((val) => {
                        this.addFilter(name, condition, val);
                    });
                }
            });
            this.applyFilters();
            this.getFilters();
        },

        /**
         * Updates the URL parameters based on the current filters.
         */
        updateUrl() {
            const params = new URLSearchParams(window.location.search);
            Object.keys(this.filters).forEach((name) => {
                const filterValues = {};
                this.filters[name].forEach(({ condition, value }) => {
                    const key = `filter_${name}_${condition}`;
                    if (!filterValues[key]) {
                        filterValues[key] = [];
                    }
                    filterValues[key].push(value);
                });
                Object.keys(filterValues).forEach((key) => {
                    params.set(key, filterValues[key].join("|"));
                });
            });
            // Remove any params that are no longer in the filters
            Array.from(params.keys()).forEach((key) => {
                if (key.startsWith("filter_")) {
                    const [name, condition] = key.replace("filter_", "").split("_");
                    if (
                        !this.filters[name] ||
                        !this.filters[name].some((filter) => filter.condition === condition)
                    ) {
                        params.delete(key);
                    }
                }
            });
            const newUrl = `${window.location.pathname}?${params.toString()}`;
            window.history.replaceState({}, "", newUrl);
        },
    };
}
