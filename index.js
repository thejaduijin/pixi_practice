const app = new PIXI.Application();
globalThis.__PIXI_APP__ = app;

await app.init({ background: '#1099bb', resizeTo: window });
document.body.appendChild(app.view);


await PIXI.Assets.load('./images/logo.png');
let sprite = PIXI.Sprite.from('./images/logo.png');


app.stage.addChild(sprite);

let elapsed = 0.0;
app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});


// let elapsed1 = 0.0;
// app.ticker.add((ticker) => {
//     elapsed1 += ticker.deltaTime;
//     sprite.y = 100.0 + Math.cos(elapsed1 / 50.0) * 100.0;
// });