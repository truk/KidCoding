import React from 'react';
import { MonsterModel } from '../../types';

export interface MonsterProps {
    monster: MonsterModel;
}

export function Monster({ monster }: MonsterProps) {
    return (
        <div>
            <table>
                <tbody>
                    <tr><td colSpan={2}><img src={monster.Image} alt="monster" /></td></tr>
                    <tr><td>Name:</td><td>{monster.Name}</td></tr>
                    <tr><td>Life:</td><td>{monster.Life}</td></tr>
                    <tr><td>Level:</td><td>{monster.Level}</td></tr>
                </tbody>
            </table>
        </div>
    )
}