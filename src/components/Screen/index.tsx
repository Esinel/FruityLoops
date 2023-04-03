import { Collectible } from "../../types";
import styles from "./index.module.css";
import Confetti from 'react-confetti';
import Tile from "../Tile";

type ScreenProps = {
    collectables: Array<Collectible>,
    onSelectedCollectible: Function,
    totalScore: number,
    totalBonusScore: number
}

function Screen({ collectables, onSelectedCollectible, totalScore, totalBonusScore }: ScreenProps) {

    return (
        <div className={styles.container}>
            <div className={styles.sectionHeader}>
                <div>Kahoot!</div>
                <div className={styles.headerPoints}>
                    <span>Points: {totalScore}</span>
                    <span>Bonus: {totalBonusScore}</span>
                </div>
            </div>

            { collectables.length === 0 ? 
                <div className={styles.completedGameScreen}>
                    <div className={styles.completedGameMessage}>
                        <div style={{fontSize: '2em'}}>Congratulations! 🎉</div>
                        <br/>
                        <div>You have completed the game!</div>
                    </div>
                    <div className={styles.confettiContainer}>
                        <Confetti
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            :
                <div className={styles.activeGameScreen}>
                    <div className={styles.title}>Choose your fruits:</div>
                    <div className={styles.collectablesContainer}>
                        { collectables.map((collectable, index) => {
                            return (
                                <Tile 
                                    key={index} 
                                    collectable={collectable}
                                    handleClick={onSelectedCollectible}
                                >
                                    {collectable.label}
                                </Tile>
                            );
                        })} 
                    </div>
                </div>
            }
        </div>
    )
}

export default Screen;