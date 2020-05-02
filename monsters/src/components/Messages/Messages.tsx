import React from 'react';

export interface MessagesProps {
    messages: string[];
}

export function Messages({ messages }: MessagesProps) {
    return (
        <div>
            <ul>
                {messages.map((m: string, i: number) => (<li key={i}>{m}</li>))}
            </ul>
        </div>
    )
}
