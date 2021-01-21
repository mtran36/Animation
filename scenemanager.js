class SceneManager {
    constructor(game) {
        this.game = game;

        this.milkAndMocha = new MilkAndMocha(this.game, 0, 60); // Moves the location of eevee
        this.loadBackground();
    }

    loadBackground() {
        let background = new Background(this.game, 0, 0);
        this.game.addEntity(background);

        background = new Floor(this.game, 0, 500);
        this.game.addEntity(background);

        this.game.addEntity(this.milkAndMocha);
    }
}