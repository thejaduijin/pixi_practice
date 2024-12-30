// const app = new PIXI.Application();

// await app.init({ background: '#1099bb', resizeTo: window });
// document.body.appendChild(app.canvas);

// await PIXI.Assets.load('./images/logo.png');
// let sprite = PIXI.Sprite.from('./images/logo.png');
// sprite.anchor.set(0.5);
// app.stage.addChild(sprite);

// // Create a container and add the sprite to it
// const container = new PIXI.Container();
// container.x = app.screen.width / 2;
// container.y = app.screen.height / 2;
// container.addChild(sprite);
// app.stage.addChild(container);

// // Create a responsive label
// const label = new PIXI.Text('I AM A TEXT', {
//     fill: '#ffffff',
//     fontSize: 24,
// });
// label.anchor.set(0.5);
// label.x = app.screen.width / 3;
// label.y = app.screen.height - 50;
// app.stage.addChild(label);

// // Update positions on each frame
// let elapsed = 0.0;
// app.ticker.add((ticker) => {
//     elapsed += ticker.deltaTime;
//     sprite.x = Math.cos(elapsed / 50.0) * 100.0;
// });

// // Handle resizing
// function onResize() {
//     // Center the container
//     container.x = app.screen.width / 2;
//     container.y = app.screen.height / 2;

//     // Reposition the label
//     label.x = app.screen.width / 2;
//     label.y = app.screen.height - 50;
// }

// // Listen for resize events
// window.addEventListener('resize', onResize);

// // Initial resize adjustment
// onResize();
