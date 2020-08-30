let tween, prizes={
    count:12,
    prize: ['CB Book', '3000 CB Credits', '35%OFF', 'Hard Luck', '70% OFF', 'CB Swagpack', '100% OFF', 'Netflix Subs', '50% OFF','Amazon Voucher', '2 Extra Spins', 'CB Tshirt']
};
let config ={
    // Defining meta-data
    type: Phaser.CANVAS,     //canvas of webGl
    width: 800,
    height: 700,
    scene: {    // scene object contains the 3 main fun -> preload(to load assets), create(init), update
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config); // Phaser provides a game skeleton using a config object containing meta-data about game


function preload() {
    //console.log("preload called" + this);   // this refers here to the scene object which has various methods by phaser that we can use to do tasks
    this.load.image('back', './assets/back.jpg');  // loads the image to the scene  @params: key, url
    this.load.image('wheel', './assets/wheel.png');
    this.load.image('pin', './assets/pin.png');
    this.load.image('stand', './assets/stand.png');
}

function create() {
    //console.log('create called');
    let W = game.config.width, H = game.config.height;

    this.back = this.add.sprite(W/2,H/2, 'back');    // @params coordinates of screen to place center of image , name of image
    this.back.setScale(0.20);    // sets the dimension of image to fit in

    this.wheel = this.add.sprite(W/2, H/2, 'wheel');
    this.wheel.setScale(0.27);
    this.wheel.depth = 1;    // default 0 used as z-index to decide which objects before other objects

    this.pin = this.add.sprite(W/2, H/2 - 275, 'pin');
    this.pin.setScale(0.25);
    this.pin.depth=1;

    this.stand = this.add.sprite(W/2, H/2+275, 'stand'); // appears in front of wheel (we can create this before wheel so that wheel is in front or set depth)
    this.stand.setScale(0.25);

    this.input.on('pointerdown', spinWheel, this);  // event-listener in phaser for mouse-click
    this.gameText = this.add.text(10, 10, 'Welcome!!', {color:'black', font: '35px'});

}

function update() {
    //console.log('hello');

    //this.wheel.angle+=2.8;  // rotates the wheel
}

function spinWheel() {
    // console.log(this);  // scene object passed as context param from input.on
    this.gameText.setText('Spinning');
    let angle = Phaser.Math.Between(0,prizes.count-1);
    console.log(angle,angle*30);
    tween = this.tweens.add({    // helps to spin wheel for a set duration
        targets: this.wheel,
        angle: 1440 - angle*30,
        ease: 'Cubic.easeOut',
        duration:5000,
        callbackScope: this,    // used to refer scene object in callback fun
        onComplete: function (){this.gameText.setText(`You won ${prizes.prize[angle]}!!`)}
    })
}
