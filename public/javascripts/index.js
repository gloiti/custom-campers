   
var images=new Array(
	'/images/fotos-pasando/foto1.jpg',
    '/images/fotos-pasando/foto3.jpg',
    '/images/fotos-pasando/foto4.jpg',
    '/images/fotos-pasando/foto6.jpg'
);

var messages= new Array(

	
);

var usedImages = {};
var usedImagesCount = 0;

function ImagePassing(){
        
    var index = Math.floor(Math.random() * (images.length));
    if (!usedImages[index]){
        document.getElementById("image").src=images[index];
        usedImages[index] = true;
        usedImagesCount=usedImagesCount+1;
        if (usedImagesCount === images.length){
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        ImagePassing();
    }
}
   

onload=function()
    
    {
        ImagePassing();
        setInterval(ImagePassing,4000);
    }
