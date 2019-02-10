import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Slider, { defaultValueReducer } from '@material-ui/lab/Slider';
import { StateType, getRule, Creators } from '../../reducers/rules';
import ModuleGroup from '../module-group';
import ColorPicker from '../color-picker';
import './index.scss';

type SidebarProps = React.FC<{ ruleState: StateType, ruleDispatch: Function }>;
type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

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
                    value={findRule('border-radius')}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(_, value) => changeRuleCustom('border-radius', value)}
                    />
            </ModuleGroup>
            <ModuleGroup title="Color">
                <InputLabel>Background</InputLabel>
                <ColorPicker 
                    color={findRule('background-color')} 
                    onChange={(color) => changeRuleCustom('background-color', color.rgb)} 
                />
                <InputLabel>Text</InputLabel>
                <ColorPicker 
                    color={findRule('color')} 
                    onChange={(color) => changeRuleCustom('color', color.rgb)} 
                />
            </ModuleGroup>
            <ModuleGroup title="Text">
                <InputLabel>Size</InputLabel>
                <Slider
                    className="p1"
                    value={findRule('font-size')}
                    min={0}
                    max={200}
                    step={1}
                    onChange={(_, value) => changeRuleCustom('font-size', value)}
                />
                <FormControl className="w-100">
                    <InputLabel htmlFor="text-align">
                        Alignment
                    </InputLabel>
                
                    <Select
                        className="w-100"
                        value={findRule('text-align', 'left')}
                        onChange={changeRule('text-align')}
                    >
                        <MenuItem value="left">Left</MenuItem>
                        <MenuItem value="center">Center</MenuItem>
                        <MenuItem value="right">Right</MenuItem>
                    </Select>
                </FormControl>
            </ModuleGroup>
        </div>
    );
};

export default Sidebar;