const Player = require('./characters').Player; 
const Enemy  = require('./characters').Enemy; 

class Game { 
	constructor(player, enemy) { 
		this.player = player; 
		this.enemy = enemy; 
	} 
	
	attack() { 
		console.log(` ${this.player.name} Attacking ${this.enemy.name}`); 	
		console.log(` Enemy health: ${enemy.health}`); 
		console.log(` Player health: ${player.health}`); 
		return enemy.health -= player.damage; 
	} 
} 

let player = new Player("P", 10, 10); 
let enemy = new Enemy("E", 10, 10); 
let game = new Game(player, enemy); 
game.attack(); 
 
module.exports.Game =  Game ; 
