class Character { 
	constructor(name, health, damage) { 
		this.name = name; 
		this.health = health; 
		this.damage = damage; 
	} 
} 

class Player extends Character { 
} 
class Enemy extends Character { 
} 

module.exports.Characters =  Character; 
module.exports.Player =  Player; 
module.exports.Enemy =  Enemy; 