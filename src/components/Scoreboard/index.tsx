import Tile from '../Tile';
import styles from './index.module.css';

type ScoreboardProps = {
    totalScore: number, 
    totalBonusScore: number, 
    scoreTracker: Array<any>, 
    onNewGame: Function
}

export default function Scoreboard ({ totalScore, totalBonusScore, scoreTracker, onNewGame }: ScoreboardProps) {
    
    return (
        <div className={styles.container}>
            <div className={styles.sectionHeader}>
                PLAYER ITEMS
            </div>

            <div className={`${styles.flex3} ${styles.listTitles}`}>
                <div>ITEM</div>
                <div>QTY</div>
                <div>SCORE</div>
            </div>

            <div className={styles.itemsContainer}>
                {scoreTracker.map((tracker, index) => {
                    return (
                        <div key={index} className={styles.flex3}>
                            <div>
                                <Tile style={{width: '12px', height: '12px', margin: '0 auto', fontSize: '1.2em'}} key={index} collectable={tracker}>{tracker.label}</Tile>
                            </div>
                            <div>{tracker.selected}</div>
                            <div className={styles.totalPerItem}>{tracker.totalPoints}</div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.scoreboardFooter}>
                <div className={styles.gameBonuses}>
                    Bonuses: {totalBonusScore}
                </div>

                <div className={styles.gameSummary}>
                    <div>Total: {totalScore}</div>
                    <div>
                        <button onClick={() => onNewGame()}>New Game</button>
                    </div>
                </div>
            </div>
        </div>
    )
}