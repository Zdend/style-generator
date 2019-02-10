import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Slider, { defaultValueReducer } from '@material-ui/lab/Slider';
import { StateType, getRule, Creators } from '../../reducers/rules';
import ModuleGroup from '../module-group';
import { SketchPicker } from 'react-color';
import './index.scss';

type SidebarProps = React.FC<{ ruleState: StateType, ruleDispatch: Function }>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Sidebar: SidebarProps = ({ ruleState, ruleDispatch }) => {
    const findRule = (rule: string, defaultValue?: any) => getRule(ruleState)(rule) || defaultValue;
    const changeRule = (rule: string) => (e: InputEvent) => ruleDispatch(Creators.updateRule(rule, e.target.value));
    const changeRuleCustom = (rule: string, value: any) => ruleDispatch(Creators.updateRule(rule, value));
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
            <ModuleGroup title="Border">
                <Slider
                    className="p1"
                    value={findRule('border-radius', '0').replace('%', '')}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(_, value) => changeRuleCustom('border-radius', `${value}%`)}
                    />
            </ModuleGroup>
            <ModuleGroup title="Color">
                <SketchPicker 
                    color={findRule('background-color')} 
                    onChange={(color) => changeRuleCustom('background-color', color.rgb)} 
                />
            </ModuleGroup>
        </div>
    );
};

export default Sidebar;