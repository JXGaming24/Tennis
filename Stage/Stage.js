/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 294.87749725239723,
        y: 329.211385
      })
    ];

    this.sounds = [
      new Sound("pop", "./Stage/sounds/pop.wav"),
      new Sound(
        "Cool Upbeat Background Music",
        "./Stage/sounds/Cool Upbeat Background Music.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
    this.vars.score = 0;
  }

  *whenGreenFlagClicked() {
    for (let i = 0; i < 10; i++) {
      yield* this.playSoundUntilDone("Cool Upbeat Background Music");
      yield;
    }
  }
}
