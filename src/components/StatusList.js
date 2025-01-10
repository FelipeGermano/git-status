import React from 'react';
import ComponentItem from './ComponentItem';

function StatusList({ statusData }) {
    return (
        <div className="status-list">
            {statusData.length === 0 ? (
                <p>Nenhum status disponível. Clique em \"Obter Status\".</p>
            ) : (
                statusData.map((component) => (
                    <ComponentItem key={component.id} component={component} />
                ))
            )}
        </div>
    );
}

export default StatusList;
