var initialFloorplanWidth = 0;
var initialFloorplanHeight = 0;
var canvasImage = new Image();
documentReady = function () {
    preloadFloorplan();
}
preloadFloorplan = function () {
    onLoad = function () {
        initialFloorplanHeight = canvasImage.height;
        initialFloorplanWidth = canvasImage.width;
        var canvasHtml = '<canvas id="MainCanvas" width="' + initialFloorplanWidth + '" height="' + initialFloorplanHeight + '">Canevas non supportés</canvas>';
        $("#MainContainer").append(canvasHtml);
        var canvas = $("#MainCanvas")[0];
        var canvasContext = canvas.getContext("2d");
        canvasContext.drawImage(canvasImage, 0, 0);
    }
    canvasImage.onload = onLoad;
    canvasImage.src = "1.png";
}