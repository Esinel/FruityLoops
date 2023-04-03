import React from 'react';
import './App.css';
import Screen from './components/Screen'
import Scoreboard from './components/Scoreboard';
import { shuffleArray } from './util';
import { collectablesTrackerConfig } from './config';
import { Collectible } from './types';

const initialCollectables: Array<Collectible> = setupGame();
const initialScoreTracker = collectablesTrackerConfig();

function App() {

  const [totalScore, setTotalScore] = React.useState(0);
  const [totalBonusScore, setTotalBonusScore] = React.useState(0);
  const [activeCollectables, setActiveCollectables] = React.useState(initialCollectables);
  const [scoreTracker, setScoreTracker] = React.useState(initialScoreTracker);

  React.useEffect(() => {
    const total = scoreTracker.reduce((acc, curr) => acc += curr.totalPoints, 0)
    const totalBonus = scoreTracker.reduce((acc, curr) => acc += curr.totalBonusPoints, 0)
    setTotalScore(total);
    setTotalBonusScore(totalBonus);
  }, [scoreTracker])

  function newGame() {
    const newCollectables: Array<Collectible> = setupGame();
    setActiveCollectables(newCollectables);
    const newScoreTracker = collectablesTrackerConfig();
    setScoreTracker(newScoreTracker);
  }

  function handleChosenCollectible(collectedItem: Collectible) {
    const newScoreTracker = getNewScore(collectedItem);
    setScoreTracker(newScoreTracker);
    setActiveCollectables(activeCollectables.filter(collectable => collectable.id !== collectedItem.id));
  }

  function getNewScore(collectedItem: Collectible) {
    let total = 0;
    const newScore = scoreTracker.map(collectableTracker => {
      if (collectableTracker.label === collectedItem.label) {
        collectableTracker.selected += 1;

        if (collectableTracker.config.bonus) {
          let bonus = 0;
          const bonusesAchieved = Math.floor(collectableTracker.selected / collectableTracker.config.bonus.trigger);
          bonus += bonusesAchieved * collectableTracker.config.bonus.points;
          if (bonusesAchieved > 0) {
            collectableTracker.totalBonusPoints = bonus - collectableTracker.config.bonus.trigger * bonusesAchieved * collectableTracker.points;
          }
          const remainingItemsAfterBonus = collectableTracker.selected % collectableTracker.config.bonus.trigger;
          total += bonus + remainingItemsAfterBonus * collectableTracker.points;
        } else {
          const scorePerItem = collectableTracker.selected * collectableTracker.points;
          total += scorePerItem;
        }

        collectableTracker.totalPoints = total;
        
      }
      return collectableTracker;
    });

    return newScore;
  }

  return (
    <div className='App'>

      <main>

        <div className='main-screen'>
          <Screen 
            collectables={activeCollectables} 
            onSelectedCollectible={handleChosenCollectible} 
            totalScore={totalScore} 
            totalBonusScore={totalBonusScore}
          />
        </div>


        <div className='side-screen'>
          <Scoreboard 
            totalScore={totalScore} 
            totalBonusScore={totalBonusScore}
            scoreTracker={scoreTracker} 
            onNewGame={newGame} 
          />
        </div>

      </main>
    </div>
  );
}


// CREATE INSTANCES OF COLLECTABLES BASED ON THEIR CONFIG
function setupGame() {
  const collectables: Array<any> = [];
  const config = collectablesTrackerConfig();
  config.forEach((collectiblesTracker) => {
    for (let i = 0; i < collectiblesTracker.count; i++) {
        collectables.push({...collectiblesTracker,  id: `${collectiblesTracker.label}${i}` })
    }
  })

  shuffleArray(collectables);
  return collectables;
}

export default App;
