function setup() {
  var url= 'http://api.open-notify.org/iss-now.json'
  // loadJSON(path, callback)  
  loadJSON(url,gotISS);
  resizeCanvas(1800,1000);
 background(0, 11, 163)
  setInterval (function(){
    loadJSON(url,gotISS);
  }
  ,8000);
  
    
    


  

}

function gotISS(json) {
 

  var latitude = json.iss_position.latitude;
  var longitude = json.iss_position.longitude;
  
    console.log(latitude);
    console.log(longitude);
    
    var x = map(latitude,-180, 180,0,width);
    var y = map(longitude,-180,180,0,height);
  

  

    
    
     var c5 = color(254, 202, 1);
  fill(c5);
  noStroke();
    ellipse(y,x,10,10);
    triangle(y, x, x, y, x+1, y+1);
   
 
    
    
      
     var c6 = color(0, 252, 195);
  fill(c6);
  noStroke();
    ellipse(y-200,x-200,10,10);
    triangle(y-200, x-200, x, y, x+1, y+1);
    
     
        var c4 = color(250,10,0);
  fill(c4);
  noStroke();
    ellipse(x,y,10,10);
    
  }







