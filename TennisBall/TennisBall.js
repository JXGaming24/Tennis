/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TennisBall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tennisball", "./TennisBall/costumes/tennisball.png", {
        x: 30,
        y: 30
      })
    ];

    this.sounds = [new Sound("pop", "./TennisBall/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bounce" },
        this.whenIReceiveBounce
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.direction = this.random(135, 180);
    yield* this.wait(1);
    while (true) {
      this.move(10);
      if (this.x == 240 || this.x == -240) {
        this.broadcast("game over");
      }
      if (this.touching(this.sprites["Paddle"].andClones())) {
        yield* this.broadcastAndWait("bounce");
      }
      yield;
    }
  }

  *whenIReceiveBounce() {
    this.direction = 180 - this.direction;
    for (
      let i = 0;
      i < !this.touching(this.sprites["Paddle"].andClones());
      i++
    ) {
      this.move(10);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.y < -140) {
        this.broadcast("game over");
      }
      yield;
    }
  }
}
