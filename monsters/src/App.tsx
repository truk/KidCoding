import React, { useState } from 'react';
import { Battle } from './components/Battle/Battle';
import { SkillType, MonsterModel } from './types';
import { Messages } from './components/Messages/Messages';

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
        <div>
            {isFighting ?
                <Battle attacker={myMonster} defender={opponentMonster} complete={BattleComplete} addMessage={addMessage} />
                :
                <button onClick={startBattle}>Start Battle</button>}
            <Messages messages={messages} />
        </div>
    );
}

export default App;
