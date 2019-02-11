export const serialiseRules = (rule: string, v: any) => {
    switch(rule) {
        case 'background-color':
        case 'color':
        case 'border-color':
            if (!v || !v.r) {
                return null;
            }
            const { r, g, b, a } = v;
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        case 'border-radius':
            return `${v}%`;
        case 'font-size':
        case 'padding':
        case 'border-width':
            return `${v}px`;
        default:
            return v;
    }
};