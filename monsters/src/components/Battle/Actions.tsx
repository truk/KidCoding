import React from 'react';

export interface ActionsProps {
    attack: () => void;
}

export function Actions({ attack }: ActionsProps) {
    return (
        <div>
            <button onClick={attack}>Attack</button>
        </div>
    )
}
