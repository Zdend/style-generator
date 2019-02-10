import React from 'react';
import './index.scss';

const ModuleGroup: React.FC<{ title: string }> = ({ title, children }) => (
    <div className="module-group">
        <div className="module-group__title">{title}</div>
        <div>
            {children}
        </div>
    </div>
);

export default ModuleGroup;