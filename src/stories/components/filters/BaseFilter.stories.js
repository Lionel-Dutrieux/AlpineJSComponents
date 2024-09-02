import { compileTemplate } from "@stories/utils/handlebarsHelper.js";
import BaseFilterTemplate from "@components/filters/base-filter/baseFilter.html?raw";

import * as ProductCardStorie from "@stories/components/cards/ProductCard.stories.js";
import * as ToggleFilterStorie from "@stories/components/filters/ToggleFilter.stories.js";

/**
 *
 * ### Examples to Fire Events
 *
 * #### 1. **Firing an `addFilter` Event**
 * The `addFilter` event is used to add a new filter to the base filter.
 *
 * Available conditions:
 * - CONTAIN: 'contain'
 * - GREATER_THAN: 'greaterThan'
 * - LESS_THAN: 'lessThan'
 * - NUMBER_EQUAL: 'numberEqual'
 * - BETWEEN: 'between'
 *
 * ```javascript
 * const event = new CustomEvent('baseFilter', {
 *     detail: {
 *         id: 'your-element-id',        // The ID of the element where the baseFilter is applied.
 *         method: 'addFilter',          // Method to add a filter.
 *         name: 'your-filter-name',     // The name of the filter (e.g., 'category', 'price').
 *         condition: 'contain',         // The condition for the filter (e.g., 'contain', 'greaterThan').
 *         value: 'your-filter-value'    // The value to filter by (e.g., 'electronics', '50').
 *     }
 * });
 * document.dispatchEvent(event);
 * ```
 *
 * ##### Example Usage:
 *
 * ```javascript
 * const event = new CustomEvent('baseFilter', {
 *     detail: {
 *         id: 'base-filter-12345',
 *         method: 'addFilter',
 *         name: 'category',
 *         condition: 'contain',
 *         value: 'electronics'
 *     }
 * });
 * document.dispatchEvent(event);
 * ```
 *
 * This will add a filter that checks if the `category` attribute of an element contains the value "electronics".
 *
 * #### 2. **Firing a `removeFilter` Event**
 * The `removeFilter` event removes a specific filter that has been added.
 *
 * ```javascript
 * const event = new CustomEvent('baseFilter', {
 *     detail: {
 *         id: 'your-element-id',        // The ID of the element where the baseFilter is applied.
 *         method: 'removeFilter',       // Method to remove a filter.
 *         name: 'your-filter-name',     // The name of the filter (e.g., 'category', 'price').
 *         value: 'your-filter-value'    // The value of the filter to be removed (e.g., 'electronics', '50').
 *     }
 * });
 * document.dispatchEvent(event);
 * ```
 *
 * ##### Example Usage:
 *
 * ```javascript
 * const event = new CustomEvent('baseFilter', {
 *     detail: {
 *         id: 'base-filter-12345',
 *         method: 'removeFilter',
 *         name: 'category',
 *         value: 'electronics'
 *     }
 * });
 * document.dispatchEvent(event);
 * ```
 *
 * This will remove the filter for the `category` attribute with the value "electronics".
 *
 * #### 3. **Firing a `resetFilter` Event**
 * The `resetFilter` event resets all filters, clearing them and restoring the original elements.
 *
 * ```javascript
 * const event = new CustomEvent('baseFilter', {
 *     detail: {
 *         id: 'your-element-id',        // The ID of the element where the baseFilter is applied.
 *         method: 'resetFilter'         // Method to reset all filters.
 *     }
 * });
 * document.dispatchEvent(event);
 * ```
 *
 * ##### Example Usage:
 *
 * ```javascript
 * const event = new CustomEvent('baseFilter', {
 *     detail: {
 *         id: 'base-filter-12345',
 *         method: 'resetFilter'
 *     }
 * });
 * document.dispatchEvent(event);
 * ```
 *
 * This will reset all the filters and restore the original DOM elements.
 *
 * #### 4. **Firing a `getFilters` Event**
 * The `getFilters` event retrieves all current filters.
 *
 * ```javascript
 * const event = new CustomEvent('baseFilter', {
 *     detail: {
 *         id: 'your-element-id',        // The ID of the element where the baseFilter is applied.
 *         method: 'getFilters'          // Method to get all current filters.
 *     }
 * });
 * document.dispatchEvent(event);
 *
 * document.addEventListener('baseFilterResponse', (event) => {
 *     if (event.detail.id === 'your-element-id') {
 *         console.log(event.detail.filters); // Logs the current filters
 *     }
 * });
 * ```
 *
 * ##### Example Usage:
 *
 * ```javascript
 * const event = new CustomEvent('baseFilter', {
 *     detail: {
 *         id: 'base-filter-12345',
 *         method: 'getFilters'
 *     }
 * });
 * document.dispatchEvent(event);
 *
 * document.addEventListener('baseFilterResponse', (event) => {
 *     if (event.detail.id === 'base-filter-12345') {
 *         console.log(event.detail.filters); // Logs the current filters
 *     }
 * });
 * ```
 *
 * This will retrieve and log all the current filters applied to the element with ID "base-filter-12345".
 *
 * ### Important Notes
 *
 * - **Element ID**: Replace `'your-element-id'` with the actual ID of the element where the `baseFilter` is initialized. If the ID is not set manually, it will be auto-generated (e.g., `base-filter-abc123`).
 * - **Filter Conditions**: The conditions must match those defined in the `FILTER_CONDITIONS` enum (`contain`, `greaterThan`, `lessThan`, `numberEqual`, `between`).
 *
 * These examples demonstrate how to trigger each available method in your `baseFilter` implementation using events.
 *
 * ![Base Filter Example](https://i.lionel-dutrieux.com/u/pMfOjY.gif)
 *
 */

export default {
    title: "Base Components/Filters/Base Filter",
    parameters: {
        layout: "centered",
        version: "1.0.0",
    },
    tags: ["autodocs"],
};

export const baseFilter = (args) => {
    return compileTemplate(BaseFilterTemplate, args);
};

baseFilter.args = {
    nikeFilterToggle: ToggleFilterStorie.toggleFilter({
        toggleText: "Nike",
        containerId: "myFilterContainer",
        filterName: "name",
        filterCondition: "contain",
        filterValue: "nike",
    }),
    pumaFilterToggle: ToggleFilterStorie.toggleFilter({
        toggleText: "Puma",
        containerId: "myFilterContainer",
        filterName: "name",
        filterCondition: "contain",
        filterValue: "puma",
    }),
    lessThan100FilterToggle: ToggleFilterStorie.toggleFilter({
        toggleText: "Less than 100€",
        containerId: "myFilterContainer",
        filterName: "price",
        filterCondition: "lessThan",
        filterValue: "100",
    }),
    card1: ProductCardStorie.productCard({
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Nike Air Max 270",
        size: "41",
        price: "120",
        tag: "New",
    }),
    card2: ProductCardStorie.productCard({
        name: "Fila Disruptor II",
        price: "150",
        size: "42",
        image: "https://images.unsplash.com/photo-1579446565308-427218a2c60e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Promo",
    }),
    card3: ProductCardStorie.productCard({
        name: "Puma RS-X",
        price: "110",
        size: "43",
        image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "New",
    }),
    card4: ProductCardStorie.productCard({
        name: "Reebok Classic Leather",
        price: "90",
        size: "40",
        image: "https://images.unsplash.com/photo-1704951108136-0153f403c5cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Exclusive",
    }),
    card5: ProductCardStorie.productCard({
        name: "Converse Chuck Taylor",
        price: "70",
        size: "44",
        image: "https://images.unsplash.com/photo-1556048219-bb6978360b84?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "New",
    }),
    card6: ProductCardStorie.productCard({
        name: "Vans Old Skool",
        price: "65",
        size: "41",
        image: "https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Promo",
    }),
    card7: ProductCardStorie.productCard({
        name: "Adidas Ultraboost",
        price: "180",
        size: "42",
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "New",
    }),
    card8: ProductCardStorie.productCard({
        name: "New Balance 574",
        price: "100",
        size: "43",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Popular",
    }),
    card9: ProductCardStorie.productCard({
        name: "Asics Gel-Kayano 27",
        price: "160",
        size: "41",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "New",
    }),
    card10: ProductCardStorie.productCard({
        name: "Jordan 1 Retro",
        price: "200",
        size: "44",
        image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Exclusive",
    }),
    card11: ProductCardStorie.productCard({
        name: "Nike Blazer Mid '77",
        price: "105",
        size: "42",
        image: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Classic",
    }),
    card12: ProductCardStorie.productCard({
        name: "Under Armour HOVR Phantom",
        price: "140",
        size: "41",
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Promo",
    }),
};
