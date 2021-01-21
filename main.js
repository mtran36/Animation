var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./background/sky.png");
ASSET_MANAGER.queueDownload("./background/floor.png");
ASSET_MANAGER.queueDownload("./sprites/flyingkick.png");
ASSET_MANAGER.queueDownload("./sprites/cheekpull.png");

ASSET_MANAGER.downloadAll(function () {

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
