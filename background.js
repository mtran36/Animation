class Background {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spriteSheet = ASSET_MANAGER.getAsset("./background/sky.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spriteSheet, 0, 0, 626, 417, this.x, this.y, PARAMS.CANVASWIDTH, PARAMS.CANVASHEIGHT);
    }
}

class Floor {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spriteSheet = ASSET_MANAGER.getAsset("./background/floor.png");
    };

    update() {

    }

    draw(ctx) {
        ctx.drawImage(this.spriteSheet, 0, 265, 900, 360, this.x, this.y, PARAMS.CANVASWIDTH, 800)
    }
}