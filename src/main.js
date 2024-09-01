import Alpine from 'alpinejs';

// Components
import autoAnimateComponent from '@js/autoAnimateComponent.js';
import baseButton from '@components/buttons/base-button/baseButton.js';
import baseProgress from '@components/progressbars/base-progressbar/baseProgressbar.js';
import baseFilter from '@components/filters/base-filter/baseFilter.js';

// CSS
import '../src/styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@components/buttons/base-button/baseButton.css';


// Initialize Dependencies
window.Alpine = Alpine;


document.addEventListener('alpine:init', () => {
    Alpine.data('autoAnimate', autoAnimateComponent);
    Alpine.data('baseButton', baseButton);
    Alpine.data('baseProgress', baseProgress);
    Alpine.data('baseFilter', baseFilter);


    // Register Alpine.js TEST stores
    Alpine.store("myStore", {
        myProperty: 0,
    });
})

Alpine.start();

console.log('Alpine.js initialized');