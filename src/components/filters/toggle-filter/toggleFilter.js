/**
 * Version of the toggle filter.
 * @type {string}
 */
const VERSION = "1.0.0";

export default function toggleFilter(mainContainerId, filterName, filterCondition, filterValue) {
    return {
        checked: false,
        mainContainerId: mainContainerId,
        filterName: filterName,
        filterCondition: filterCondition,
        filterValue: filterValue,

        init() {
            document.addEventListener("baseFilterResponse", this.handleFilterResponse.bind(this));
        },

        toggleFilter() {
            this.checked = !this.checked;
            this.updateFilter();
        },

        handleFilterResponse(event) {
            if (event.detail.id === this.mainContainerId) {
                const filters = event.detail.filters;

                // Check if the filter with the same name, condition, and value exists
                const filterExists = filters[this.filterName]?.some(
                    (filter) =>
                        filter.condition.toLowerCase() === this.filterCondition.toLowerCase() &&
                        filter.value.toLowerCase() === this.filterValue.toLowerCase()
                );

                // Enable or disable based on the existence of the filter
                this.checked = filterExists;
            }
        },

        updateFilter() {
            const event = new CustomEvent("baseFilter", {
                detail: {
                    id: this.mainContainerId,
                    method: this.checked ? "addFilter" : "removeFilter",
                    name: this.filterName,
                    condition: this.filterCondition,
                    value: this.filterValue,
                },
            });
            document.dispatchEvent(event);
        },
    };
}
