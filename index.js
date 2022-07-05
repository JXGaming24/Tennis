import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Paddle from "./Paddle/Paddle.js";
import TennisBall from "./TennisBall/TennisBall.js";
import Button2 from "./Button2/Button2.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Paddle: new Paddle({
    x: -47.23567514120013,
    y: -140,
    direction: -24.965668021105785,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  TennisBall: new TennisBall({
    x: 0,
    y: 0,
    direction: 159,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Button2: new Button2({
    x: 190,
    y: 50,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
