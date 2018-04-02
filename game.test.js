const Game = require('./game').Game; 
const Player = require('./characters').Player; 
const Enemy  = require('./characters').Enemy; 

// let player = new Player.Player("Player", 10, 1); 
// let enemy = new Enemy.Enemy("Enemy", 10, 10); 
let player = new Player("P", 10, 10); 
let enemy = new Enemy("E", 10, 10); 
const game = new Game(player, enemy); 

test('player[10] attacks enemy[10] to equal 0', () => { 
	expect(game.attack()).toBe(-10); 
}); 