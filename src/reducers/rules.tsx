import { serialiseRules } from '../utils/serialiser';

export const initialState = {
    'background-color': { r: 234, g: 100, b: 50, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    width: '200px',
    height: '150px',
    'border-style': 'solid'
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
            throw new Error('Unspecified rule');
        }
        if (!action.value) {
            const { ...stateCopy } = state;
            delete stateCopy[action.rule];
            return stateCopy;
        }
        return { ...state, [action.rule]: action.value };
      case Types.RESET:
        return init();
      default:
        throw new Error();
    }
}

export const getRule = (state: StateType) => (rule: string) => state[rule];

export const getRules = (state: StateType) => Object.entries(state).map(([key, value]) => ([key, serialiseRules(key, value)]));

export const getCSS = (state: StateType) => {
    return Object.entries(state).filter(([k, v]) => serialiseRules(k, v)).map(([key, value]) => {
        return `${key}: ${serialiseRules(key, value)};`;
    }).join('\n');
};

