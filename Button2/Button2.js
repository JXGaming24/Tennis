/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button2/costumes/button2-a.svg", {
        x: 60.00000000000003,
        y: 26.143500000000017
      }),
      new Costume("button2-b", "./Button2/costumes/button2-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.score = 0;
    this.size = 50;
    this.goto(-200, 140);
    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < 7; i++) {
        this.createClone();
        this.x += 65;
        yield;
      }
      this.x = -200;
      this.y += -30;
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      if (this.touching(this.sprites["TennisBall"].andClones())) {
        this.broadcast("bounce");
        this.stage.vars.score += 1;
        this.deleteThisClone();
      }
      yield;
    }
  }
}
