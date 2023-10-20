'use client';
import {useName} from "@/app/context/userContext";
import {useEffect, useState} from "react";
import ScoreBoardDisplay from "@/app/components/ScoreBoard/ScoreBoardDisplay";
import {addRoll, getScoreBoard} from "@/app/lib/webServices/scoreboardWebServices";
import {initialScoreBoard} from "@/app/lib/types";
import styles from './scoreBoardComponent.module.css';



export default function ScoreBoardComponent(){

    const { name} = useName();
    const [currentRoll, setCurrentRoll] = useState<string>('');
    const [scoreboardData, setScoreboardData] = useState(initialScoreBoard);
    const [error, setError] = useState<string>('');


    const handleRoll = async ()=> {
        if (!isNaN(parseInt(currentRoll))) {
            const rollValue = parseInt(currentRoll);
            console.log('current roll', rollValue);
            try{
                const response = await addRoll(name, rollValue);
                setError('');
                const responseScoreData = await getScoreBoard(name);
                setScoreboardData(responseScoreData ?? scoreboardData);
                setCurrentRoll('');
            }catch (e){
                console.log(e);
                setError(e.message);
            }


        }
    }

    useEffect(() => {
        setError('');

    }, [setError, setScoreboardData]);

    return (
        <div className={styles.scoreboardContainer}>
            <div className={styles.inputColumn}>
                <p className={styles.message}>
                    Welcome {name}. All the best!!!
                </p>
                <div className={styles.inputContainer}>
                    <div className={styles.inputRow}>
                        <input className={styles.inputBox}
                               placeholder="Enter Roll"
                               type='text'
                               value={currentRoll}
                               onChange={(e) => setCurrentRoll(e.target.value)}
                        />
                        <button className={styles.roundButton} onClick={handleRoll}>Submit Roll</button>
                    </div>
                    {error && <div className={styles.error}>{error}</div>}
                </div>
            </div>

            <div className={styles.scoreboardColumn}>
                <ScoreBoardDisplay frames={scoreboardData.frames} totalScore={scoreboardData.totalScore} />
            </div>
        </div>
    );
}