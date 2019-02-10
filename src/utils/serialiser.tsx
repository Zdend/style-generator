export const serialiseRules = (rule: string, v: any) => {
    switch(rule) {
        case 'background-color':
        case 'color':
            const { r, g, b, a } = v;
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        case 'border-radius':
            return `${v}%`;
        case 'font-size':
            return `${v}px`;
        default:
            return v;
    }
};