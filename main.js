import kaboom from "kaboom";

const WIDTH = 1024;
const HEIGHT = 576;
const SCALE = 1.25;

kaboom({
  background: [134, 135, 247],
  width: WIDTH,
  height: HEIGHT,
  scale: SCALE,
});

//HEIGHT: 19 VALUES
// 0
// 32
// 64
// 96
// 128
// 160
// 192
// 224
// 256
// 288
// 320
// 352
// 384
// 416
// 448
// 480
// 512
// 544
// 576

// WIDTH: 33 VALUES
// 0
// 32
// 64
// 96
// 128
// 160
// 192
// 224
// 256
// 288
// 320
// 352
// 384
// 416
// 448
// 480
// 512
// 544
// 576
// 608
// 640
// 672
// 704
// 736
// 768
// 800
// 832
// 864
// 896
// 928
// 960
// 992
// 1024

loadRoot("sprites/");
loadAseprite(
  "player",
  "/playerSpritesheet/player.png",
  "/playerSpritesheet/player.json"
);
loadSprite("tile1", "/tiles/1 Tiles/Tile_01.png");
loadSprite("tile2", "/tiles/1 Tiles/Tile_02.png");
loadSprite("tile3", "/tiles/1 Tiles/Tile_03.png");
loadSprite("tile4", "/tiles/1 Tiles/Tile_04.png");

// add([sprite("tile1"), pos(0, 570), area(), solid()]);
// add([sprite("tile1"), pos(32, 570), area(), solid()]);
// add([sprite("tile1"), pos(64, 570), area(), solid()]);
// add([sprite("tile1"), pos(96, 570), area(), solid()]);
// add([sprite("tile1"), pos(128, 570), area(), solid()]);
// add([sprite("tile1"), pos(160, 570), area(), solid()]);
// add([sprite("tile1"), pos(192, 570), area(), solid()]);
// add([sprite("tile1"), pos(224, 570), area(), solid()]);
// add([sprite("tile1"), pos(256, 570), area(), solid()]);
// add([sprite("tile1"), pos(288, 570), area(), solid()]);
// add([sprite("tile1"), pos(320, 570), area(), solid()]);
// add([sprite("tile1"), pos(352, 570), area(), solid()]);
// add([sprite("tile1"), pos(384, 570), area(), solid()]);
// add([sprite("tile1"), pos(416, 570), area(), solid()]);
// add([sprite("tile1"), pos(448, 570), area(), solid()]);
// add([sprite("tile1"), pos(480, 570), area(), solid()]);
// add([sprite("tile1"), pos(512, 570), area(), solid()]);
// add([sprite("tile1"), pos(544, 570), area(), solid()]);
// add([sprite("tile1"), pos(576, 570), area(), solid()]);
// add([sprite("tile1"), pos(608, 570), area(), solid()]);
// add([sprite("tile1"), pos(640, 570), area(), solid()]);
// add([sprite("tile1"), pos(672, 570), area(), solid()]);
// add([sprite("tile1"), pos(704, 570), area(), solid()]);
// add([sprite("tile1"), pos(736, 570), area(), solid()]);
// add([sprite("tile1"), pos(768, 570), area(), solid()]);
// add([sprite("tile1"), pos(800, 570), area(), solid()]);
// add([sprite("tile1"), pos(832, 570), area(), solid()]);
// add([sprite("tile1"), pos(864, 570), area(), solid()]);
// add([sprite("tile1"), pos(896, 570), area(), solid()]);
// add([sprite("tile1"), pos(928, 570), area(), solid()]);
// add([sprite("tile1"), pos(960, 570), area(), solid()]);
// add([sprite("tile1"), pos(992, 570), area(), solid()]);
// add([sprite("tile1"), pos(1024, 570), area(), solid()]);

const LEVELS20 = [
  [
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "{==============================================================================================}",
    "------------------------------------------------------------------------------------------------",
  ],
];

// const LEVELS = [
//   [
//     "                                                                                                ",
//     "                                                                                                ",
//     "                                                                                                ",
//     "                                                                                                ",
//     "                                                                                                ",
//     "                                                                                                ",
//     "                                                                                                ",
//     "      -?-b-                                                                                     ",
//     "                                                    ?        ?                                  ",
//     "                                                                                                ",
//     "                                      _                 ?                                       ",
//     "                                 _    |                                                         ",
//     "                           _     |    |                _                                        ",
//     "       E                   |     |    |   E   E        |                            H           ",
//     "================     ===========================================================================",
//     "================     ===========================================================================",
//   ],
//   [
//     "                                                                                             ",
//     "                                                                                             ",
//     "                                                                                             ",
//     "                                       ?                                                     ",
//     "                                                                                             ",
//     "                                   -?-                                                       ",
//     "                                                                                             ",
//     "      -?-b-                  -?-                                                             ",
//     "                                                                                             ",
//     "                                                                                             ",
//     "                                                                                             ",
//     "                                                                                             ",
//     "       _                                            _                                        ",
//     "       |                                            |          E    E            H           ",
//     "=============================================================================================",
//     "================     ========================================================================",
//   ],
// ];

const levelConf = {
  // grid size
  width: 32,
  height: 32,
  pos: vec2(0, 0),
  // define each object as a list of components
  "{": () => [sprite("tile1"), area(), solid(), "ground"],
  "=": () => [sprite("tile2"), area(), solid(), "ground"],
  "}": () => [sprite("tile3"), area(), solid(), "ground"],
  "-": () => [sprite("tile3"), area(), solid(), "underground"],
  //   "-": () => [sprite("brick"), area(), solid(), origin("bot"), "brick"],
  //   H: () => [
  //     sprite("castle"),
  //     area({ width: 1, height: 240 }),
  //     origin("bot"),
  //     "castle",
  //   ],
  //   "?": () => [
  //     sprite("questionBox"),
  //     area(),
  //     solid(),
  //     origin("bot"),
  //     "questionBox",
  //     "coinBox",
  //   ],
  //   b: () => [
  //     sprite("questionBox"),
  //     area(),
  //     solid(),
  //     origin("bot"),
  //     "questionBox",
  //     "mushyBox",
  //   ],
  //   "!": () => [
  //     sprite("emptyBox"),
  //     area(),
  //     solid(),
  //     // bump(),
  //     origin("bot"),
  //     "emptyBox",
  //   ],
  //   c: () => [
  //     sprite("coin"),
  //     area(),
  //     solid(),
  //     //bump(64, 8),
  //     cleanup(),
  //     lifespan(0.4, { fade: 0.01 }),
  //     origin("bot"),
  //     "coin",
  //   ],
  //   M: () => [
  //     sprite("bigMushy"),
  //     area(),
  //     solid(),
  //     //patrol(10000),
  //     body(),
  //     cleanup(),
  //     origin("bot"),
  //     "bigMushy",
  //   ],
  //   "|": () => [sprite("pipeBottom"), area(), solid(), origin("bot"), "pipe"],
  //   _: () => [sprite("pipeTop"), area(), solid(), origin("bot"), "pipe"],
  //   E: () => [
  //     sprite("enemies", { anim: "Walking" }),
  //     area({ width: 16, height: 16 }),
  //     solid(),
  //     body(),
  //     //patrol(50),
  //     //enemy(),
  //     origin("bot"),
  //     "badGuy",
  //   ],
  //   p: () => [
  //     sprite("mario", { frame: 0 }),
  //     area({ width: 16, height: 16 }),
  //     body(),
  //     //mario(),
  //     //bump(150, 20, false),
  //     origin("bot"),
  //     "player",
  //   ],
};

scene("start", () => {
  add([
    text("Press enter to start", { size: 24 }),
    pos(vec2(160, 120)),
    origin("center"),
    color(255, 255, 255),
  ]);

  keyRelease("enter", () => {
    go("game");
  });
});

go("start");

scene("game", (levelNumber = 0) => {
  layers(["bg", "game", "ui"], "game");

  const level = addLevel(LEVELS20[levelNumber], levelConf);

  // add([sprite("cloud"), pos(20, 50), layer("bg")]);

  // add([sprite("hill"), pos(32, 208), layer("bg"), origin("bot")]);

  // add([sprite("shrubbery"), pos(200, 208), layer("bg"), origin("bot")]);

  add([
    text("Level " + (levelNumber + 1), { size: 24 }),
    pos(vec2(160, 120)),
    color(255, 255, 255),
    origin("center"),
    layer("ui"),
    lifespan(1, { fade: 0.5 }),
  ]);

  const player = add([
    sprite("player", {
      animSpeed: 0.75,
      anim: "Idle",
    }),
    pos(100, 200),
    area(),
    body(),
    health(8),
    //   doubleJump(),
    "player",
    "friendly",
    {
      dead: false,
      speed: 240,
    },
  ]);

  const SPEED = 200;

  // Animate on walk
  // right
  onKeyDown("right", () => {
    player.flipX(false);
    player.move(SPEED, 0);
  });

  onKeyPress("right", () => {
    player.play("Walk");
  });

  onKeyRelease("right", () => {
    player.play("Idle");
  });

  //left
  onKeyDown("left", () => {
    player.flipX(true);
    if (toScreen(player.pos).x > 20) {
      player.move(-SPEED, 0);
    }
  });

  onKeyPress("left", () => {
    player.play("Walk");
  });

  onKeyRelease("left", () => {
    player.play("Idle");
  });

  // Jump on space
  onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump();
    }
  });

  // Attack1 on z key
  onKeyPress("z", () => {
    player.play("Attack1");
  });

  onKeyRelease("z", () => {
    player.play("Idle");
  });

  // Attack1 on x key
  onKeyPress("x", () => {
    player.play("Attack2");
  });

  onKeyRelease("x", () => {
    player.play("Idle");
  });

  // Emote on c key
  onKeyPress("c", () => {
    player.play("Emote");
  });

  onKeyRelease("c", () => {
    player.play("Idle");
  });

  // Camera follow
  player.onUpdate(() => {
    var currentCam = camPos();
    if (currentCam.x < player.pos.x) {
      camPos(player.pos.x, currentCam.y);
    }
  });
});
