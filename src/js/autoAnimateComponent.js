import autoAnimate from '@formkit/auto-animate'

export default function autoAnimateComponent() {
    return {
        init() {
            const component = this.$el;
            autoAnimate(component);
        }
    };
}