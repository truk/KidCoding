import React, { useState } from 'react';
import { Actions } from './Actions';
import { Monster } from '../Monster/Monster';
import { MonsterModel } from '../../types';

export interface BattleProps {
    attacker: MonsterModel;
    defender: MonsterModel;
    complete: (success: boolean) => void;
    addMessage: (message: string) => void;
}

export function Battle({ attacker, defender, complete, addMessage }: BattleProps) {

    const [myMonster, setMyMonster] = useState<MonsterModel>(attacker);
    const [yourMonster, setYourMonster] = useState<MonsterModel>(defender);

    function Attack() {
        const me = Object.assign({}, myMonster);
        const you = Object.assign({}, yourMonster);

        you.Life -= me.Strength;
        addMessage(`You attack for ${me.Strength} points`);
        if (you.Life <= 0) {
            addMessage("You defeated your opponent!");
            return complete(true);
        }

        me.Life -= you.Strength;
        addMessage(`You lose ${you.Strength} points`);
        if (me.Life <= 0) {
            addMessage("You have died :(");
            return complete(false);
        }

        setMyMonster(me);
        setYourMonster(you);
    }

    return (
        <div>
            <table><tbody><tr>
                <td><h1>Me</h1><Monster monster={myMonster} /></td>
                <td><Actions attack={Attack} /></td>
                <td><h1>Opponent</h1><Monster monster={yourMonster} /></td>
            </tr></tbody></table>
        </div>
    )
}