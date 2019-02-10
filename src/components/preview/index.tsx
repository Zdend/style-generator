import React from 'react';
import { StateType, getCSS } from '../../reducers/rules';
import './index.scss';

type PreviewProps = React.FC<{ ruleState: StateType }>;

const Preview: PreviewProps = ({ ruleState }) => {
    const styles = `.preview-component {\n${getCSS(ruleState)}\n}`;
    return (
        <div className="preview">
            <style>      
                {styles}
            </style>
            <div className="preview-component">TEST</div>
        </div>
    );
};

export default Preview;