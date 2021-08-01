const config ={
	width:800,
	height:600,
	parent:"container",
	type: Phaser.AUTO,
	physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
	scene:{
		preload:preload,
		create:create,
		update: update,
		debug:true
	}
}

var mario;

var game = new Phaser.Game(config);

function preload(){
	this.load.image("mario","./assets/mario.png");
	this.load.image("block","./assets/block.png");
}
function create(){

	mario = this.physics.add.image(200, 300, 'mario').setScale(0.25);

	var block = this.physics.add.staticImage(600, 300, 'block');

	this.physics.accelerateToObject(mario, block, 60, 300, 300);

	var collider = this.physics.add.overlap(mario, block, function (marioOnBlock)
    {
        marioOnBlock.body.stop();

        this.physics.world.rfemoveCollider(collider);
    }, null, this);
}
function update(time,delta){
	//FAMILIA PLUCHE

	
}