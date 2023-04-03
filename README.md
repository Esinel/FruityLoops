# Getting Started with Fruity Loops

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The point of this game is to collect all the different fruits 🥝 🍓 🍌 🍋 🍉 🥑

Some fruits are worth more if collected in multiples: collect n of them, and you’ll get y points.

The game configuration can be found in './config.ts'.


## Steps on how to start the game


### `#1 - First configure the game by editing the config.ts file - example:`

```typescript
{
	label: '🥝', // define the fruit
	id: '1', // define the unique id of the class of the fruit≠
	points: 50, // points you gain by selecting one fruit
	count: 3, // how many instances of the this particular fruit is generated
	selected: 0, // how many fruits are selected 
	totalPoints: 0, // total points gained by selecting this fruit
	totalBonusPoints: 0, // total bonus points gained by selecting this fruit
	config: {
		color: 'red', // background color of the tile that is holding the fruit
		bonus: {
			trigger: 3, // how many instances of this fruit triggers the bonus points
			points: 200 // value of the bonus
		}
	},
}
```

The configuration contains the array of these conf objects for different type of fruits.

### `#2 - npm install`

Install all the dependencies.

### `#3 - npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.