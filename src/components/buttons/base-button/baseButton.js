/**
 * BaseButton Component
 * 
 * This component provides a button with customizable enable and disable functionality.
 * It listens for a custom event named 'baseButton' with details containing the button's ID and the method ('enable' or 'disable') to be executed.
 * Optionally, it can bind to an Alpine.js store for reactivity.
 * 
 * @param {Object} options - Configuration options for the button.
 * @param {boolean} [options.isDisabled=false] - Initial disabled state of the button.
 * @param {string} [options.storeName] - Name of the Alpine.js store to bind to.
 * @param {string} [options.storeProperty] - Property of the Alpine.js store to bind to.
 * 
 * @returns {Object} The button component with methods to handle its state and events.
 */
export default function baseButton({ isDisabled = false, storeName, storeProperty } = {}) {
    return {
        isPressed: false,
        isDisabled: isDisabled,
        init() {
            this.$el.addEventListener('mousedown', this.handleMouseDown.bind(this));
            this.$el.addEventListener('mouseup', this.handleMouseUp.bind(this));
            this.$el.addEventListener('mouseleave', this.handleMouseUp.bind(this));
            this.$el.disabled = this.isDisabled;

            // Add or remove the disabled class based on the initial state
            if (this.isDisabled) {
                this.$el.classList.add('is-disabled');
            } else {
                this.$el.classList.remove('is-disabled');
            }

            // Check if the element has an ID
            if (this.$el.id) {
                const id = this.$el.id;

                // Add event listener for baseButton event
                document.addEventListener('baseButton', (event) => {
                    if (event.detail.id === id) {
                        if (event.detail.method === 'enable') {
                            this.enable();
                        } else if (event.detail.method === 'disable') {
                            this.disable();
                        }
                    }
                });
            }

            // Bind to Alpine.js store if provided
            if (storeName && storeProperty) {
                this.$watch(`$store.${storeName}.${storeProperty}`, (value) => {
                    if (value) {
                        this.enable();
                    } else {
                        this.disable();
                    }
                });

                // Initialize button state with the store value
                if (this.$store[storeName][storeProperty]) {
                    this.enable();
                } else {
                    this.disable();
                }
            }
        },
        handleMouseDown() {
            if (!this.isDisabled) {
                this.isPressed = true;
                this.isActive = true;
                this.$el.classList.add('is-pressed');
            }
        },
        handleMouseUp() {
            if (!this.isDisabled) {
                this.isPressed = false;
                this.isActive = false;
                this.$el.classList.remove('is-pressed');
            }
        },
        enable() {
            this.isDisabled = false;
            this.$el.disabled = false;
            this.$el.classList.remove('is-disabled');
        },
        disable() {
            this.isDisabled = true;
            this.isPressed = false;
            this.isActive = false;
            this.$el.disabled = true;
            this.$el.classList.add('is-disabled');
            this.$el.classList.remove('is-pressed');
        },
    };
}