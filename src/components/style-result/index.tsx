import React, { useEffect, useState } from 'react';
import { StateType, getRules, getCSS } from '../../reducers/rules';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import './index.scss';

type StyleResultProps = React.FC<{ ruleState: StateType }>;

const StyleResult: StyleResultProps = ({ ruleState }) => {
    let textInput = React.createRef<HTMLTextAreaElement>();
    function handleClick() {
        if (!textInput || !(textInput.current instanceof HTMLTextAreaElement)) {
            return;
        }
        textInput.current.select();
        document.execCommand('copy');
    }
    return (
        <div className="style-result">
            <Tooltip title="Copy" aria-label="Copy" className="style__code-btn">
                <Fab color="primary" onClick={handleClick}>
                    <CodeIcon />
                </Fab>
            </Tooltip>
            <textarea className="style__hidden-away" ref={textInput} defaultValue={getCSS(ruleState)} />
            <pre className="style-result__code">
                <code>{getRules(ruleState).filter(([_, v]) => v).map(([key, value]) => (
                    <div key={key} className="style__block">
                        <span className="style__attr">{key}</span>: <span className="style__val">{value}</span>;
                    </div>
                ))}</code>
            </pre>
        </div>
    );
};

export default StyleResult;