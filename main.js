function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

function preload() {
    classifier = ml5.imageClassifier('doodleNet');
}

function clearCanvas() {
    background("white");
}