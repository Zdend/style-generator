import React from 'react';
import { StateType, getCSS } from '../../reducers/rules';
import './index.scss';

type PreviewProps = React.FC<{ ruleState: StateType, element: string }>;

const Preview: PreviewProps = ({ ruleState, element }) => {
    const styles = `.preview-component {\n${getCSS(ruleState)}\n}`;
    return (
        <div className="preview">
            <style>      
                {styles}
            </style>
            {(() => {
                switch(element) {
                    case 'div': return <div className="preview-component">TEST</div>;
                    case 'input': return <input type="text" className="preview-component" defaultValue="John Doe" />;
                    case 'button': return <button type="button" className="preview-component">Submit</button>;
                    default: return <div className="preview-component">TEST</div>;
                }
            })()}
        </div>
    );
};

export default Preview;