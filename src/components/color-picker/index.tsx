import React,  { useState } from 'react';
import { SketchPicker, SketchPickerProps } from 'react-color';
import { serialiseRules } from '../../utils/serialiser';
import './index.scss';

const ColorPicker: React.FC<SketchPickerProps & { className?: string }> = ({ color, className = '', ...rest }) => {
    const [ open, toggle ] = useState(false);

    return (
        <div className={className}>
            <button type="button" 
                onClick={() => toggle(!open)} 
                className="color-picker__button"
                style={{ 
                    background: serialiseRules('color', color)
                }}>
                {open && 'Close'}
            </button>

            {open && <SketchPicker 
                width="90%"
                {...rest}
                color={color}
            />}
        </div>
    );
};

export default ColorPicker;