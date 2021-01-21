class MilkAndMocha {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spriteSheet_flyingkick = ASSET_MANAGER.getAsset("./sprites/flyingkick.png");
        this.spriteSheet_cheekpull = ASSET_MANAGER.getAsset("./sprints/cheekpull.png");

        this.facing = 0; // 0 = right, 1 = left
        this.stage = 0;
        this.animations = [];
        this.loadAnimation();
    };

    loadAnimation() {
        for (var i = 0; i < 6; i++) {
            this.animations.push([]);
            for (var j = 0; j < 3; j++) {
                this.animations[i].push([]);
            }
        };

        //this.animations[0][0] = new Animator(this.spriteSheet_eevee, 2615, 0, 320, 320, 1, 0.2, 50, false, true);
        this.animations[0][0] = new Animator(this.spriteSheet_flyingkick, 0, 0, 320, 320, 8, 0.2, 50, false, true);
        this.animations[0][1] = new Animator(this.spriteSheet_cheekpull, 0, 0, 320, 320, 11, 0.2, 50, false, true);
    }
    update() {

    }

    draw(ctx) {
        this.animations[this.stage][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    }
}