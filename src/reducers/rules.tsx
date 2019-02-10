import { Hidden } from "@material-ui/core";

export const initialState = {
    'background-color': 'blue',
    width: '200px',
    height: '150px',
}

export function init() {
    return { ...initialState };
}

export const Types = {
    UPDATE_RULE: 'UPDATE_RULE',
    RESET: 'RESET'
};

export const Creators = {
    updateRule: (rule: string, value: string) => ({ type: Types.UPDATE_RULE, rule, value })
};

export type StateType = {
    [key: string]: any
};

type ActionType = { 
    type: string, 
    rule?: string, 
    value?: string 
};

export default function reducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
      case Types.UPDATE_RULE:
        if (!action.rule) {
            throw new Error();
        }
        return { ...state, [action.rule]: action.value };
      case Types.RESET:
        return init();
      default:
        throw new Error();
    }
}

export const getRule = (state: StateType) => (rule: string) => state[rule];
export const getRules = (state: StateType) => Object.entries(state);
export const getCSS = (state: StateType) => {
    return Object.entries(state).map(([key, value]) => {
        return `${key}: ${value};`;
    }).join('\n');
};

