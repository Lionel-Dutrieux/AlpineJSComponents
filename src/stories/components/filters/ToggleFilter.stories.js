import { compileTemplate } from "@stories/utils/handlebarsHelper.js";
import ToggleFilterTemplate from "@components/filters/toggle-filter/toggleFilter.html?raw";

export default {
    title: "Base Components/Filters/Toggle Filter",
    parameters: {
        layout: "centered",
        version: "1.0.0",
    },
    tags: ["autodocs"],
};

export const toggleFilter = (args) => {
    return compileTemplate(ToggleFilterTemplate, args);
};

toggleFilter.args = {
    toggleText: "Nike",
    containerId: "myFilterContainer",
    filterName: "name",
    filterCondition: "contain",
    filterValue: "nike",
};
