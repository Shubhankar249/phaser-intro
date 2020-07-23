let config ={
    // Defining meta-data
    type: Phaser.CANVAS,     //canvas of webGl
    width: 800,
    height: 600,
    scene: {    // scene object contains the 3 main fun -> preload(to load assets), create(init), update
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config); // Phaser provides a game skeleton using a config object containing meta-data about game


function preload() {
    console.log("preload called");
}

function create() {
    console.log('create called');
}

function update() {
    console.log('hello');
}
