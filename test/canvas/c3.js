(function() {
    var
    // Obtain a reference to the canvas element using its id.
        htmlCanvas = document.getElementById('can2'),
    // Obtain a graphics context on the canvas element for drawing.
        context = htmlCanvas.getContext('2d');
        
        cto = htmlCanvas.offsetHeight;
        ctc = htmlCanvas.clientHeight;
        cts = htmlCanvas.scrollHeight;

        cwo = htmlCanvas.offsetWidth;
        cwc = htmlCanvas.clientWidth;
        cws = htmlCanvas.scrollWidth;
        
        img = document.getElementById('im');

   // Start listening to resize events and draw canvas.
   
   context.canvas.height = document.documentElement.clientHeight;
   context.canvas.width = document.documentElement.clientWidth;
    console.log(cto,ctc,cts)
    console.log(cwo,cwc,cws)

   initialize();
   


   function initialize() {
       window.addEventListener("resize", resizeCanvas);
       resizeCanvas();
    }
    function redraw() {
       context.strokeStyle = 'blue';
       context.lineWidth = '3';

       context.strokeRect(cwo*0.35, ctc*0.008, cwc*0.4, cto)
       context.strokeRect(cwo*0.35, ctc*0.008, cwc*0.4, ctc)
       context.beginPath();
       context.moveTo((cwo*0.557), (cto*0.3));
       context.lineTo((cwo*0.583), (cto*0.3));
       context.lineTo((cwo*0.568), ctc*0.99);
       context.lineTo((cwo*0.543), cto*0.99);
       context.lineTo((cwo*0.557), (cto*0.3));
       context.strokeStyle = 'red';
       context.stroke();

       
    }

    function li(){
        context.lineWidth = '5';
        context.strokeStyle = 'red';
        context.beginPath();
        context.moveTo((cwo*0.42), (ctc/100)*31.5);
        context.lineTo((cwo*0.42), ctc*0.99);
        context.stroke();
        
        for(let i = 0; i<=100; i++){
            context.lineWidth = '2';
            if(i % 10 === 0){
                var si = cwo*0.012;
                context.font =  " "+si+"px Verdana"
                context.fillStyle = "red";
                context.fillText(i ,cwo*0.37, (ctc*0.99)-(((ctc-((ctc/100)*31.5))/100)*i)+5)
                context.beginPath();
                context.moveTo(cwo*0.41, (i*(((ctc*0.99)-((ctc/100)*31.5))/100))+(ctc/100)*31.5);
                context.lineTo(cwo*0.43, (i*(((ctc*0.99)-((ctc/100)*31.5))/100))+(ctc/100)*31.5);
                context.stroke();
            }

            else{
                context.beginPath();
                context.moveTo(cwo*0.415, (i*(((ctc*0.99)-((ctc/100)*31.5))/100))+(ctc/100)*31.5);
                context.lineTo(cwo*0.425, (i*(((ctc*0.99)-((ctc/100)*31.5))/100))+(ctc/100)*31.5 );
                context.stroke();
            }
        }
           
    }
    function bar(){
        
        var grd = context.createLinearGradient(0, 0, 0,(cto*0.695) );
            
        grd.addColorStop(0.4,"red");
        grd.addColorStop(0.9,"orange");
        grd.addColorStop(1,"green");
        context.fillStyle = grd;
        context.fillRect((cwo*0.65), (ctc*0.315), cwc*0.02, (ctc*0.675));
        
    }

    function back(){

        context.drawImage(img, 0, 0, cwc ,ctc);
    }
    function resizeCanvas() {
        
        context.canvas.height = document.documentElement.clientHeight*1;
        context.canvas.width = document.documentElement.clientWidth*1;
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
    }
})();