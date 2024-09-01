/**
 * ProgressBar Component
 * 
 * This component provides a progress bar with customizable progress value.
 * It listens for a custom event named 'baseProgress' with details containing the progress value to be set.
 * Optionally, it can bind to an Alpine.js store for reactivity.
 * 
 * @param {Object} options - Configuration options for the progress bar.
 * @param {number} [options.initialProgress=0] - Initial progress value of the progress bar.
 * @param {string} [options.storeName] - Name of the Alpine.js store to bind to.
 * @param {string} [options.storeProperty] - Property of the Alpine.js store to bind to.
 * 
 * @returns {Object} The progress bar component with methods to handle its state and events.
 */
export default function baseProgress({ initialProgress = 0, storeName, storeProperty } = {}) {
    return {
        progress: initialProgress,
        get isCompleted() {
            return this.progress >= 100;
        },
        get hasNoProgress() {
            return this.progress <= 0;
        },
        init() {
            this.updateProgress(this.progress);

            // Check if the element has an ID
            if (this.$el.id) {
                const id = this.$el.id;

                // Add event listener for baseProgress event
                document.addEventListener('baseProgress', (event) => {
                    if (event.detail.id === id) {
                        if (event.detail.method === 'updateProgress') {
                            this.updateProgress(event.detail.progress);
                        }
                    }
                });
            }

            // Bind to Alpine.js store if provided
            if (storeName && storeProperty) {
                this.$watch(`$store.${storeName}.${storeProperty}`, (value) => {
                    this.updateProgress(value);
                });

                // Initialize progress with the store value
                this.updateProgress(this.$store[storeName][storeProperty]);

                // Set the initial progress value to the store if provided
                if (initialProgress !== 0) {
                    this.$store[storeName][storeProperty] = initialProgress;
                }
            }
        },
        updateProgress(value) {
            if (value > 100) {
                value = 100;
            }
            this.progress = value;

            // Add or remove the complete class based on the progress value
            if (this.isCompleted) {
                this.$el.classList.add('is-complete');
            } else {
                this.$el.classList.remove('is-complete');
            }
        },
    };
}