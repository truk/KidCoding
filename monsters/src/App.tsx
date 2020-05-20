import React, { useState } from 'react';
import { Battle } from './components/Battle/Battle';
import { SkillType, MonsterModel } from './types';
import { Messages } from './components/Messages/Messages';
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {

    const [isFighting, setFighting] = useState<boolean>(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [myMonster, setMyMonster] = useState<MonsterModel>({
        Level: 1,
        Name: 'Catwad',
        Life: 100,
        Strength: 20,
        Speed: 20,
        Stamina: 20,
        Image: "https://vignette.wikia.nocookie.net/monster-legends-competitive/images/1/1f/Lord_Moltus.png/revision/latest?cb=20180930232509&path-prefix=fr",
        Skills:
            [{ Type: SkillType.OneEnemy, Description: 'Firebolt', Power: 10 }]
    })

    const opponentMonster =
    {
        Level: 1,
        Name: 'Dogman',
        Life: 100,
        Strength: 20,
        Speed: 20,
        Stamina: 20,
        Image: "https://gamerdan.com/monster-legends/wp-content/uploads/sites/8/2018/08/Ixofex-1.png",
        Skills:
            [{ Type: SkillType.OneEnemy, Description: 'Bark', Power: 10 }]
    }

    function BattleComplete(success: boolean) {
        setFighting(false);
        if (success) {
            setMyMonster(Object.assign(myMonster, { Level: myMonster.Level + 1, Life: myMonster.Life + 20 }));
        }
    }

    function addMessage(message: string) {
        setMessages(messages => [...messages, message]);
    }

    function startBattle() {
        setMessages([]);
        setFighting(true);
    }

    return (
        <div className="root">
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    {isFighting ?
                        <Battle attacker={myMonster} defender={opponentMonster} complete={BattleComplete} addMessage={addMessage} />
                        :
                        <button onClick={startBattle}>Start Battle</button>}
                </Grid>
                <Grid item xs={2}>
                    <Messages messages={messages} />
                </Grid>
            </Grid>

        </div>
    );
}

export default App;
