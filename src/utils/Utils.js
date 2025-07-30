import DOMPurify from 'dompurify';

//this function is used to sanitize inputs to prevent xss attacks
export const sanitizeInputs = (value) => {
    const sanitizedValue = DOMPurify.sanitize(value);
    return sanitizedValue;
}

//to get logos for job role
import {
    faCode,
    faChartBar,
    faRobot,
    faLaptopCode,
    faCogs,
    faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

export const roleIconMap = {
    'python': faCode,
    'frontend': faLaptopCode,
    'devops': faCogs,
    'data': faChartBar,
    'machine-learning': faRobot,
    'full-stack': faLayerGroup,
};

export const formatMonthYear = (dateString) => {
    if (!dateString || dateString.toLowerCase() === "present") {
        return "Present";
    }
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
    }).format(date);
};
