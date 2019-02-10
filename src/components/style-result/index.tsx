import React from 'react';
import { StateType, getRules } from '../../reducers/rules';
import './index.scss';

type StyleResultProps = React.FC<{ ruleState: StateType }>;

const StyleResult: StyleResultProps = ({ ruleState }) => {
    return (
        <pre className="style-result">
            <code>{getRules(ruleState).map(([key, value]) => (
                <div key={key} className="style__block">
                    <span className="style__attr">{key}</span>: <span className="style__val">{value}</span>;
                </div>
            ))}</code>
        </pre>
    );
};

export default StyleResult;