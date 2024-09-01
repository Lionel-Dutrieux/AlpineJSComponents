import { compileTemplate } from '@stories/utils/handlebarsHelper.js';
import BaseProgressTemplate from '@components/progressbars/base-progressbar/baseProgressbar.html?raw';

export default {
    title: 'Base Components/Progressbars/Base Progress',
    parameters: {
        layout: "centered",
        version: "1.0.0",
    },
    tags: ['autodocs'],
    argTypes: {
        initialProgress: { control: 'number' },
        showControls: { control: 'boolean' },
    },
};

/**
 * This component renders a progress bar with customizable progress value.
 * It listens for a custom event named `baseProgress` with details containing the progress value to be set.
 * Optionally, it can bind to an Alpine.js store for reactivity.
 *
 * Example of firing a custom event to update the progress bar's value using vanilla JavaScript:
 *
 * ```javascript
 * const event = new CustomEvent('baseProgress', {
 *     detail: {
 *         id: 'progressBarId',
 *         method: 'updateProgress',
 *         progress: 75,
 *     }
 * });
 * document.dispatchEvent(event);
 * ```
 *
 * The progress bar can also bind to an Alpine.js store for reactivity.
 * Example of using the store-based functionality:
 *
 * ```html
 * <div x-data="">
 *     <div x-data="baseProgress({ storeName: 'myStore', storeProperty: 'progressValue' })" id="progressBarId">
 *         <!-- Progress bar content -->
 *     </div>
 *     <button @click="$store.myStore.progressValue = 75">
 *         Set Progress to 75%
 *     </button>
 * </div>
 * ```
 */
export const baseProgress = (args) => {
    return compileTemplate(BaseProgressTemplate, args);
};

baseProgress.args = {
    initialProgress: 50,
    showControls: false,
};