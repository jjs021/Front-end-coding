var width = window.innerWidth;
var height = window.innerHeight;


var svg = d3.select("#squareContainer")
   .append("svg")
   .attr("width", width)
   .attr("height", height);

 
    let maxW = Math.floor(width/100);
    let maxH = Math.floor(height/100);
    console.log("maxW: "+ maxW);
    console.log("maxH: "+ maxH);

    let x  = 0;
    let y  = 0;

   for (let t = 0; t <= maxW; t++) {

        x  = t*100

        for (let i=0; i <= maxH;  i++ )  {

            svg.append("rect")
            .attr("x", x)
            .attr("y", y+(i*100))
            .attr("width", 100)
            .attr("height", 100)
            .attr("fill",  d3.rgb(100-(i*15), 50+(t*10), 100+(i*15)) );


        }
 
           
        


      
      };
     
        
 


   
    