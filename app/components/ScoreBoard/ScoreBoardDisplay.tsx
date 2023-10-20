
import styles from './scoreBoardDisplay.module.css';

export default function ScoreBoardDisplay(props: ScoreBoardData) {
    const {frames, totalScore} = props;


    return (
        <div>
            <h2>Scoreboard</h2>
            <table className={styles.scoreboardTable}>
                <tbody>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>

                </tr>

                <tr>
                    {Array.from({length: 10}, (_, index) => {
                        const frame = frames[index] || {cumulativeScore: null, textContent: '', pins : null};
                        return (
                            <td key={index}>
                                <span className={styles.pinsBox}>{frame.pins ?? ''}</span>
                                <span className={styles.contentBox}>{frame.textContent ?? ''}</span>
                                <span className={styles.scoreBox}>{frame.cumulativeScore ?? ''}</span>
                            </td>
                        );
                    })}
                </tr>
                </tbody>
            </table>

            <div>
                <strong>Total Score: {totalScore}</strong>
            </div>
        </div>
    );
}