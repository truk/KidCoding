import React, { useState } from 'react';
import { Actions } from './Actions';
import { Monster } from '../Monster/Monster';
import { MonsterModel } from '../../types';
import Grid from '@material-ui/core/Grid';
import '../../App.css';

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
        <div className="root">
            <Grid container spacing={3}>
                <Grid item xs={4}><h1>Me</h1><Monster monster={myMonster} /></Grid>
                <Grid item xs={4}><Actions attack={Attack} /></Grid>
                <Grid item xs={4}><h1>Opponent</h1><Monster monster={yourMonster} /></Grid>
            </Grid>
        </div>
    )
}