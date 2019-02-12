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
                <div className="form-group mb-2">
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
                <InputLabel>Padding</InputLabel>
                <Slider
                    className="p1"
                    value={findRule('padding', 5)}
                    min={0}
                    max={200}
                    step={1}
                    onChange={(_, value) => changeRuleCustom('padding', value)}
                />
            </ModuleGroup>
            <ModuleGroup title="Border">
                <InputLabel>Radius</InputLabel>
                <Slider
                    className="p1 mb-2"
                    value={findRule('border-radius', 0)}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(_, value) => changeRuleCustom('border-radius', value)}
                    />
                <InputLabel>Width</InputLabel>
                <Slider
                    className="p1 mb-2"
                    value={findRule('border-width', 0)}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(_, value) => changeRuleCustom('border-width', value)}
                    />
                <InputLabel>Color</InputLabel>
                <ColorPicker 
                    color={findRule('border-color')} 
                    onChange={(color) => changeRuleCustom('border-color', color.rgb)} 
                />
            </ModuleGroup>
            <ModuleGroup title="Color">
                <InputLabel>Background</InputLabel>
                <ColorPicker 
                    color={findRule('background-color')} 
                    onChange={(color) => changeRuleCustom('background-color', color.rgb)} 
                    className="mb-2"
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
                    className="p1 mb-2"
                    value={findRule('font-size', 16)}
                    min={0}
                    max={200}
                    step={1}
                    onChange={(_, value) => changeRuleCustom('font-size', value)}
                />
                <InputLabel htmlFor="text-align">
                    Alignment
                </InputLabel>
                
                <Select
                    displayEmpty
                    className="w-100"
                    value={findRule('text-align', '')}
                    onChange={changeRule('text-align')}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="left">Left</MenuItem>
                    <MenuItem value="center">Center</MenuItem>
                    <MenuItem value="right">Right</MenuItem>
                </Select>
            </ModuleGroup>
        </div>
    );
};

export default Sidebar;