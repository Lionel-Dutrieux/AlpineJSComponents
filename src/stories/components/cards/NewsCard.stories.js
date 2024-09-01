import { compileTemplate } from '@stories/utils/handlebarsHelper.js';
import NewsCardTemplate from '@components/cards/news-card/newsCard.html?raw';

export default {
    title: 'Components/Cards/News Card',
    parameters: {
        layout: "centered",
        version: "1.0.0",
    },
    argTypes: {
        date: { control: 'text' },
    },
};

export const newsCard = (args) => {
    return compileTemplate(NewsCardTemplate, args);
};

newsCard.args = {
    date: 'June 4, 2020',
    tag: 'Animals',
    title: 'Hero dog protected human',
    description: 'A hero dog saved a human from a burning building. The dog was awarded a medal of honor.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};