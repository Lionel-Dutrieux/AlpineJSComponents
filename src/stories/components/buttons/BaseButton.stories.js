import { compileTemplate } from '@stories/utils/handlebarsHelper.js';
import BaseButtonTemplate from '@components/buttons/base-button/baseButton.html?raw';
import BaseButtonIconTemplate from '@components/buttons/base-button/baseButtonIcon.html?raw';

/**
 * This component renders a primary button.
 * Developers can modify the button element to an `<a>` link if needed.
 *
 * This component provides a button with customizable enable and disable functionality.
 * It listens for a custom event named `baseButton` with details containing the button's ID and the method (`enable` or `disable`) to be executed.
 * 
 * The button also supports `isPressed` and `isDisabled` states in the `x-data` context.
 *
 * Example of firing a custom event to toggle the button's state using vanilla JavaScript:
 *
 * ```javascript
 * const event = new CustomEvent('baseButton', {
 *     detail: {
 *         id: 'buttonId',
 *         method: 'disable',
 *     }
 * });
 * document.dispatchEvent(event);
 * ```
 *
 * The button can also bind to an Alpine.js store for reactivity.
 * Example of using the store-based functionality:
 *
 * ```html
 * <div x-data="{ isButtonEnabled: true }">
 *     <button x-data="baseButton({ storeName: 'myStore', storeProperty: 'isButtonEnabled' })" id="buttonId">
 *         Base Button
 *     </button>
 *     <button @click="$store.myStore.isButtonEnabled = !$store.myStore.isButtonEnabled">
 *         Toggle Button State
 *     </button>
 * </div>
 * ```
 */
export default {
    title: 'Base Components/Buttons/Base Button',
    parameters: {
        layout: "centered",
        version: "1.0.0",
    },
    tags: ['autodocs'],
    argTypes: {
        elementType: { control: 'select', options: ['a', 'button'] }
    },
};

export const baseButton = (args) => {
    return compileTemplate(BaseButtonTemplate, args);
};

baseButton.args = {
    text: "Base Button",
    elementType: "button",
    isDisabled: false,
};

export const baseButtonDisabled = (args) => {
    return compileTemplate(BaseButtonTemplate, args);
};

baseButtonDisabled.args = {
    text: "Base Button Disabled",
    elementType: "button",
    isDisabled: true,
};

export const baseButtonIcon = (args) => {
    return compileTemplate(BaseButtonIconTemplate, args);
};

baseButtonIcon.args = {
    text: "Base Button Icon",
    elementType: "button",
    icon: 'fa-solid fa-magnifying-glass',
    isDisabled: false,
};