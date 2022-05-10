# canvas-leaf
## Over view leaflet-canvas
This project is draw canel rounting in Bangkok, when you click at line and information show at side bar. 
In this project consist 2 component is Leaflet and HTML Canvas.
<a href="https://filezeed.com/ib/Ux9TkHNiBF"><img src="https://filezeed.s3.us-west-1.wasabisys.com/Ux9TkHNiBF.JPG" alt="Ux9TkHNiBF"/></a>
- Leaflet is manage  map for display canal line  and other on map.
- Canvas is manage  of scale, box, color bar for image water level. 
## Leaflet
Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps
<a href="https://drive.google.com/file/d/1dBPplHLBi5U26eDPKU4Y8byekP8nraSN/view?usp=sharing"><img src="https://filezeed.s3.us-west-1.wasabisys.com/Doeje7w07C.png" alt="Doeje7w07C"/></a>
### Function
Leaflet use for handling map example control map base, mouse even, marker on map and etc.
#### How to use leaflet in Javascript(JS)
document.getElementById('ID') : Use for import elementID, that you interested  from HTML and set variable nane
#### Ex
``` javascript
var htmlCanvas = document.getElementById('can2');
```
### L.tileLayer
 Used to load and display tile layers on the map.
##### Ex
```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);
```
### Function leaflet click at line
#### Ex
```javascript
function click() {

            info.onAdd = function (map) {
                this._div = L.DomUtil.create('iframe', 'info'); // create a div with a class "info"
                // this._div.id = 'can';

                this.update();
                return this._div;
            };

            // method that we will use to update the control based on feature properties passed
            info.update = function () {
                this._div.src = feature.properties.media;
            };
            info.addTo(map);
            var b = document.getElementById("h").innerHTML = feature.properties.name;
            var d = document.getElementById("h3").innerHTML = feature.properties.density;
            };
```
function click is handling click even when your ckick at line  from example i'm use iframe for show water-level on map and use (document.getElementById("h").innerHTML) for show information of canal at side-bar.

- function style will return where the return value contains fillcolor which is the fill color of the data feature properties density. It takes a value from the getColor function that returns a color value weight is the color is the color weight, opacity is the transparency of the line color is the command to add the color in datasets based on the density at the file line.js by use the function return name getColor.
Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse GeoJSON data and display(line) it on the map.
```javascript
function style(feature) {
        return {
            fillColor: getColor(feature.properties.density),
            weight: 5,
            opacity: 1,
            color: getColor(feature.properties.density),
            dashArray: '3',
            fillOpacity: 0.7,
        };
    }
```
- Function getColor is the function to criteria-based color assignments
```javascript
function getColor(d) {
        return d > 10 ? '#800026' :
            d > 7 ? '#BD0026' :
                d > 6 ? '#E31A1C' :
                    d > 5 ? '#FC4E2A' :
                        d > 4 ? '#FD8D3C' :
                            d > 3 ? '#FEB24C' :
                                d > 2 ? '#FED976' :
                                    '#FFEDA0';
    }
```

## GeoJson 
Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse GeoJSON data and display(line) it on the map.
### Type and Feature in GeoJson
#### EX 
```javascript
// Format Geojson
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```
- "type" is display type of data<br>
<a href="https://filezeed.com/ib/CP9bmkCprU"><img src="https://filezeed.s3.us-west-1.wasabisys.com/CP9bmkCprU.JPG" alt="CP9bmkCprU"/></a>
- "properties" is information of data
#### EX
<a href="https://filezeed.com/ib/lPeg5lMHEd"><img src="https://filezeed.s3.us-west-1.wasabisys.com/lPeg5lMHEd.JPG" alt="lPeg5lMHEd"/></a>
### Add GeoJson
```javascript
L.geoJson(line).addTo(map);
```
line variable is data latitude and longitude in file JavaScrip for draw lines on map

### Option Geoson
<a href="https://filezeed.com/ib/ytKTEGe0A5"><img src="https://filezeed.s3.us-west-1.wasabisys.com/ytKTEGe0A5.JPG" alt="ytKTEGe0A5"/></a>

## HTML Canvas
Added in HTML5, the HTML <canvas> element can be used to draw graphics via scripting in JavaScript. For example, it can be used to draw graphs, make photo compositions, create animations or even do real-time video processing or rendering.
  
### Function in Canvas
 i'm use canvas for create graphics example border, scale, square and etc, and i'm creation function for draw line when your input data inbox.
  <a href="https://filezeed.com/ib/PZu1X84VOX"><img src="https://filezeed.s3.us-west-1.wasabisys.com/PZu1X84VOX.JPG" alt="PZu1X84VOX"/></a>

  ### Start canvas
 - Create canvas in HTML.
 ```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
    
</head>

<body>
    <canvas id="canvas"></canvas>
    <script src="1.js"></script>
</body>

</html>
    
``` 
- Create javascripy for import canvas ID in HTML into javascript by use "document.getElementById(id)"
#### EX
```javascript
  var htmlCanvas = document.getElementById('can2'),
      context = htmlCanvas.getContext('2d');
        
```
And you can write this
  
```javascript
  var htmlCanvas = document.getElementById('can2').getContext('2d')     
```
### Function level_water
 
 -  in HTML create button for send value to level_waterfunction and button clear_function for clear line
 
  ```HTML
   <p>
    <h4 style="color: aquamarine;">Input number</h4><input id="Number" type="number"> //Set Input only Number
    </p>
    <p>
        <button id="level_water()" onclick="level_water()">Enter</button>
        <button id="clear_function" onclick="clear_function()">Clears</button>
    </p>
 ```

Function level_water use to handling position of line when you input percent height of water in canal.Value recive  by use "first.Value"

  ```javascript
    var level_water = function () {
            var num = Number(first.value);
            // if (document.all.run2.checked == true) {
            //     func_chk();
            //     // context.clearRect(0, 0, document.documentElement.clientWidth * 0.315, document.documentElement.clientHeight * 0.299);
            //     // lok_num = 1;
            // }
            // เงื่อนไข้ในการเช็คค่า Input ที่รับมา
            if (num >= 0 && num <= 100) {
                var num2 = 0.3;
                var num3 = 0.452;
                var num4 = num3 - num2;
                var sum = (0.3 * num) / 100;
                var sum2 = num3 - sum;
                y5 = document.documentElement.clientHeight * sum2;
                func_chk();

                //                             เส้นระดับน้ำ
                context.canvas.width2 = document.documentElement.clientWidth * 0.315;
                context.canvas.height2 = document.documentElement.clientHeight * 0.299;
                context.canvas.width3 = document.documentElement.clientWidth * 0.25;
                context.canvas.height3 = document.documentElement.clientHeight * 0.307;

                context.restore();
                context.beginPath();
                context.strokeStyle = 'blue'
                context.moveTo(context.canvas.width2, y5);
                context.lineTo(context.canvas.width3, y5);
                context.stroke();
                context.closePath();
                lok_num = 0;
            }
            else {
                alert("Please enter number 0-100% ");
            }
        }
  ```
  - For Clear_function() function It is a call to the function of the display to be the same.  and set a value to clear the value entered from Input
             
```javascript
  var clear_function =  function(){
            first.value='';
            func_chk();//function check checkbox is working?
        }
  ```                 
  ### Draw
### square
- .fillRect(x,y,height,width)
```javascript
   context.fillRect((cwo*0.65), (cto*0.025), cwc*0.02, (cto*0.95));
```
- .strokeRect(x,y,height,width)
```javascript
   context.strokeRect(cwo*0.35, ctc*0.008, cwc*0.4, cto);
```
### Line
<dl>
  <dt>Function</dt>
  <dd>context.beginPath() : to set the path</dd>
  <dd>context.moveTo(x, y) : starting position to draw</dd>
  <dd>context.lineTo(x, y) : end of drawing</dd>
  <dd>context.lineWidth : this defines the size of the line</dd>
  <dd>context.strokeStyle : defines the color of the line</dd>
</dl>
#### Ex 
```javascript
   context.beginPath();
   context.moveTo(cwo*0.415, (i*(((ctc*0.99)-((ctc/100)*2))/100))+(ctc/100)*2);
   context.lineTo(cwo*0.425, (i*(((ctc*0.99)-((ctc/100)*2))/100))+(ctc/100)*2 );
   context.stroke();
```
        
### Text
<dl>
  <dt>Function</dt>
  <dd>fillText(text, x, y) : show the  Text as normally </dd>
  <dd>strokeText(text, x, y) : draws only the border Text and the other important methods as well</dd>
  <dd>font : set the size and the font that you want to use</dd>
  <dd>fillStyle : set the color of the Text in the same way as drawing square, circle, lines</dd>
  <dd>textAlign : you can define text-align</dd>
</dl>
  
 #### Ex

  ```javascript
    var si = cwo*0.012;
    context.font =  " "+si+"px Verdana"
    context.fillStyle = "red";
    context.fillText(Hello , 0, 0);  
  ```
  
<img src="https://i.stack.imgur.com/5AAyW.png"/>  
  
### For the length and width had set.
Refer to this [link](https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively)
  
### ResizeCanvas
  ```javascript
      window.addEventListener("resize", resizeCanvas,false);
   ```
  Function resizeCanvas
  ```javascript
      function resizeCanvas() {
        context.canvas.height = document.documentElement.clientHeight*1;
        context.canvas.width = document.documentElement.clientWidth*1;
        context.drawImage(img, 0, 0, cwc ,ctc);         
   ```
## Resources
  Where to discover more about Canvas.
### Websites and Tutorials
  #### Canvas
  - [Resize HTML5 Canvas](https://stackoverflow.com/questions/1664785/resize-html5-canvas-to-fit-window)
  - [W3Schools](https://www.w3schools.com/html/html5_canvas.asp)
  - [Learn HTML5 Canvas By Creating A Drawing App](https://youtu.be/3GqUM4mEYKA)
  #### Leaflet
  - [leaflet](https://leafletjs.com/reference-1.7.1.html#geojson)
  - [Map Tutorial using LeafletJS](https://youtu.be/EmfE9VyAYcY)
  - [How To Create A Choropleth Map Using Leaflet](https://youtu.be/G24uJ9rrl1w)
  - [Learn leaflet JS](https://youtube.com/playlist?list=PLDmvslp_VR0xjh7wGMNd_1kk0zUox6Sue)
  #### Data GeoJson
  - [แผนที่ แผนผังคลองในเขต กทม.](https://www.google.com/maps/d/viewer?ie=UTF8&oe=UTF8&msa=0&showlabs=1&mid=18k3-SzfIvl-RilpwW1XLbxDrdqg&ll=13.89391098851052%2C100.6247525&z=10)
