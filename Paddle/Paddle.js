/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Paddle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("paddle", "./Paddle/costumes/paddle.svg", { x: 44, y: 7 })
    ];

    this.sounds = [new Sound("boing", "./Paddle/sounds/boing.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.goto(130, -140);
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.move(10);
      this.y = -140;
      yield;
    }
  }
}
