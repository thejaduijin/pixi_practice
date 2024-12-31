const app = new PIXI.Application();

await app.init({ background: '#1099bb', resizeTo: window });
document.body.appendChild(app.canvas);


await PIXI.Assets.load('./assets/loading-screen/Loading_Screen_Background.png');
let backgroundImage = PIXI.Sprite.from('./assets/loading-screen/Loading_Screen_Background.png');
backgroundImage.anchor.set(1);
backgroundImage.width = window.innerWidth;
backgroundImage.height = window.innerHeight;

// app.stage.addChild(backgroundImage);

const backgroundImageContainer = new PIXI.Container({
    x: app.screen.width,
    y: app.screen.height
});
backgroundImageContainer.addChild(backgroundImage);
app.stage.addChild(backgroundImageContainer);

const label = new PIXI.Text({
    text: 'I AM PIXI TEXT',
    style: { fill: '#ffffff' },
    position: { x: app.screen.width / 2, y: 0 }
});

app.stage.addChild(label);


const uiContainer = new PIXI.Container({
    x: 0,
    y: 0,
});

await PIXI.Assets.load('./assets/reelFrame.png');
let reelFrame = PIXI.Sprite.from('./assets/reelFrame.png');
reelFrame.anchor.set(0.5); // Center the anchor point
reelFrame.width = app.screen.width / 1.5;
reelFrame.height = app.screen.height / 1.5;
reelFrame.x = app.screen.width / 2;
reelFrame.y = app.screen.height / 2;

uiContainer.name = "UiContainer"
uiContainer.addChild(reelFrame)
app.stage.addChild(uiContainer);


// Handle resizing
function onResize() {
    if (window.innerWidth >= 1150) {
        reelFrame.scale.set(0.8);
    } else if (window.innerWidth >= 780) {
        reelFrame.scale.set(0.6);
    } else if (window.innerWidth < 780) {
        reelFrame.scale.set(0.4);
        return;
    }
    backgroundImageContainer.x = app.screen.width;
    backgroundImageContainer.y = app.screen.height;
    backgroundImageContainer.width = window.innerWidth;
    backgroundImageContainer.height = window.innerHeight;

    label.x = app.screen.width / 2;
    label.y = 0;

    // reelFrame.width = app.screen.width / 1.5;
    // reelFrame.height = app.screen.height / 1.5;
    reelFrame.x = app.screen.width / 2;
    reelFrame.y = app.screen.height / 2;

}

// Listen for resize events
window.addEventListener('resize', onResize);

// Initial resize
onResize();

