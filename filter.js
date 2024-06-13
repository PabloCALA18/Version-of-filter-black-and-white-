let img;

function preload(){
img = loadImage('https://http2.mlstatic.com/D_NQ_NP_889329-MLA45348240830_032021-O.webp')
}
function setup(){
createCanvas(img.width,img.height);
for(let pixelX = 0; pixelX < img.width; pixelX++){
  for(let pixelY = 0; pixelY < img.height; pixelY++){
   
    let value = img.get(pixelX,pixelY)

     let Red   = value[0]
     let Green = value[1]
     let Blue  = value[2]

     let Gray  = Red * 0.3 + Green * 0.59 + Blue * 0.11
     img.set(pixelX, pixelY, Gray)
  }  
}
img.updatePixels()
}
function draw(){
image(img,0,0);
}