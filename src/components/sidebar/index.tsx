import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import './index.scss';
import { StateType, getRule, Creators } from '../../reducers/rules';

const ModuleGroup: React.FC<{ title: string }> = ({ title, children }) => (
    <div className="module-group">
        <div className="module-group__title">{title}</div>
        <div>
            {children}
        </div>
    </div>
);

type SidebarProps = React.FC<{ ruleState: StateType, ruleDispatch: Function }>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Sidebar: SidebarProps = ({ ruleState, ruleDispatch }) => {
    const findRule = getRule(ruleState);
    const changeRule = (rule: string) => (e: InputEvent) => ruleDispatch(Creators.updateRule(rule, e.target.value));
    return (
        <div className="p1">
            <ModuleGroup title="Dimensions">
                <div className="form-group">
                    <TextField
                        id="outlined-width"
                        label="Width"
                        value={findRule('width')}
                        onChange={changeRule('width')}
                        margin="normal"
                        variant="outlined"
                        className="form-group__half"
                    />
                    <TextField
                        id="outlined-height"
                        label="Height"
                        value={findRule('height')}
                        onChange={changeRule('height')}
                        margin="normal"
                        variant="outlined"
                        className="form-group__half"
                        />
                </div>
            </ModuleGroup>
        </div>
    );
};

export default Sidebar;