(function () {
    var
        // Obtain a reference to the canvas element using its id.
        htmlCanvas = document.getElementById('can2'),
        // Obtain a graphics context on the canvas element for drawing.
        context = htmlCanvas.getContext('2d');
        document.getElementById("ok").addEventListener("click", myFunction);
        document.getElementById("clear").addEventListener("reset",my);
        

    cto = htmlCanvas.offsetHeight;
    ctc = htmlCanvas.clientHeight;
    cts = htmlCanvas.scrollHeight;

    cwo = htmlCanvas.offsetWidth;
    cwc = htmlCanvas.clientWidth;
    cws = htmlCanvas.scrollWidth;

    img = document.getElementById('im');




    console.log(cto, ctc, cts)
    console.log(cwo, cwc, cws)

    initialize();
    cal();

    function my(){
        document.getElementById("num").value;
    }

    function initialize() {
        // Register an event listener to call the resizeCanvas() function 
        // each time the window is resized.
        window.addEventListener("resize", resizeCanvas, false);
        // Draw canvas border for the first time.
        resizeCanvas();
        
    }

    function myFunction() {
       var num = document.getElementById("num").value;
       var d = num/100;
        cal(d);
    }

   

    function bar() {

        var grd = context.createLinearGradient(0, 0, 0, (cto * 0.988));

        grd.addColorStop(0.2, "red");
        grd.addColorStop(0.4, "orange");
        grd.addColorStop(0.7, "green");
        context.fillStyle = grd;
        context.fillRect((cwo * 0.65), (cto * 0.025), cwc * 0.02, (cto * 0.95));


    }

    function redraw() {
        context.strokeStyle = 'blue';
        context.lineWidth = '3';

        context.strokeRect(cwo * 0.35, ctc * 0.008, cwc * 0.4, cto)
        context.beginPath();
        context.moveTo((cwo * 0.5), (ctc * 0.015));
        context.lineTo((cwo * 0.595), (ctc * 0.017));
        context.lineTo((cwo * 0.575), ctc * 0.98);
        context.lineTo((cwo * 0.485), ctc * 0.98);
        context.lineTo((cwo * 0.5), (ctc * 0.015));
        context.strokeStyle = 'red';
        context.stroke();


    }

    function li(x) {
        context.lineWidth = '5';
        context.strokeStyle = 'red';
        context.beginPath();
        context.moveTo((cwo * 0.42), (ctc / 100) * 2);
        context.lineTo((cwo * 0.42), ctc * 0.99);
        context.stroke();

        for (let i = 0; i <= 100; i++) {
            context.lineWidth = '2';
            if (i % 10 === 0) {
                var si = cwo * 0.012;
                context.font = " " + si + "px Verdana"
                context.fillStyle = "red";
                context.fillText(i, cwo * 0.37, (ctc * 0.99) - (((ctc - ((ctc / 100) * 2)) / 100) * i) * 0.98)
                context.beginPath();
                context.moveTo(cwo * 0.41, (i * (((ctc * 0.99) - ((ctc / 100) * 2)) / 100)) + (ctc / 100) * 2);
                context.lineTo(cwo * 0.43, (i * (((ctc * 0.99) - ((ctc / 100) * 2)) / 100)) + (ctc / 100) * 2);
                context.stroke();
            }

            else {
                context.beginPath();
                context.moveTo(cwo * 0.415, (i * (((ctc * 0.99) - ((ctc / 100) * 2)) / 100)) + (ctc / 100) * 2);
                context.lineTo(cwo * 0.425, (i * (((ctc * 0.99) - ((ctc / 100) * 2)) / 100)) + (ctc / 100) * 2);
                context.stroke();
            }
        }
        

    }

    function cal(x) {
        var g = x;
        context.lineWidth = '10';
        context.strokeStyle = 'red';
        context.beginPath();
        context.moveTo((cwo*g), 100);
        context.lineTo((cwo*g), 100);
        context.stroke();
        console.log(g);
    }
    

    function back() {

        context.drawImage(img, 0, 0, cwc, ctc);
    }
    function resizeCanvas() {
        context.canvas.height = document.documentElement.clientHeight * 1;
        context.canvas.width = document.documentElement.clientWidth * 1;
        cto = htmlCanvas.offsetHeight;
        ctc = htmlCanvas.clientHeight;
        cts = htmlCanvas.scrollHeight;

        cwo = htmlCanvas.offsetWidth;
        cwc = htmlCanvas.clientWidth;
        cws = htmlCanvas.scrollWidth;

        
        back();
        redraw()
        
        bar();
        li();
        cal();

    }
})();