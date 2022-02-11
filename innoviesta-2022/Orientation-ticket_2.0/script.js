const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
// const canvas2 = document.getElementById('canvas')
// const tmpCtx = canvas2.getContext('2d')
const myCanvas = document.getElementById("canvas2");
const myContext = myCanvas.getContext("2d");
const nameInput1 = document.getElementById('fname')
const nameInput2 = document.getElementById('lname')
const downloadBtn = document.getElementById('download-btn')
const upimg = document.getElementById('imageInput')
const nxt=document.getElementById('nxt-btn')
const reset=document.getElementById('reset-btn')
const regenerate=document.getElementById('regenerate-btn')
const image = new Image()
image.src = 'certificate.png'


    // Testing
    

    function drawCenteredText(text,centerX,centerY){

        // save the unaltered context
        ctx.save();

        // approximate the font height
        var approxFontHeight=parseInt(ctx.font);

        // alter the context to center-align the text
        ctx.textAlign="center";

        // draw the text centered at [centerX,centerY]
        ctx.fillText(text,centerX,centerY+approxFontHeight/4);

        // restore the unaltered context
        ctx.restore();

        // draw some guidelines just for testing
        ctx.beginPath();
        ctx.moveTo(centerX,0);
        ctx.lineTo(centerX,7);
        ctx.moveTo(0,centerY);
        ctx.lineTo(310,centerY);
        ctx.stroke();
	}


image.onload = function () {
	drawImage()
	
}

function drawImage(){
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}
function drawImage1() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	
	ctx.font = '60px lemon milk'
	ctx.fillStyle = '#FFFFFF'
	// ctx.fillText(nameInput1.value, 1630, 750)
	drawCenteredText(nameInput1.value,1925,700);
}



// nameInput1.addEventListener('change', function () {
// 	drawImage1();

// })




upimg.addEventListener('change',(e)=>{
	let imageFile = e.target.files[0]; //here we get the image file
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image(); // Creates image object
        myImage.src = e.target.result; // Assigns converted image to image object
        myImage.onload = function(ev) {
        //   var myCanvas = document.getElementById("canvas2"); // Creates a canvas object
        //   var myContext = myCanvas.getContext("2d"); // Creates a contect object
        //   myCanvas.width = myImage.width; // Assigns image's width to canvas
        //   myCanvas.height = myImage.height; // Assigns image's height to canvas
        //   myContext.drawImage(myImage,0,0,myCanvas.width,myCanvas.height); // Draws the image on canvas
          const imgData = myCanvas.toDataURL("image/png",0.75).replace("image/png", "image/octet-stream"); // Assigns image base64 string in jpeg format to a variable
		  ctx.beginPath();
		  ctx.arc(1920,410,200,0,Math.PI * 2, true);
		  ctx.closePath();
		  ctx.clip();
    		ctx.drawImage(myImage,1720,180,400,500);
			ctx.beginPath();
			ctx.arc(0,0,100,0,Math.PI * 2, true);
			ctx.clip();
			ctx.closePath();
			ctx.restore();
		}
		
	}
    upimg.style.display="none";
    document.getElementById('download').style.display="block";
});

downloadBtn.addEventListener('click', function () {
	// ctx.drawImage(imgData,600,250)
	downloadBtn.href = canvas.toDataURL('image/png')
	downloadBtn.download = 'Orientation ticket'
    document.getElementById('download').style.display="none";
    document.getElementById('reset').style.display="none";
    document.getElementById('regenerate').style.display="block";
});

nxt.addEventListener('click',()=>{
    document.getElementById('imageInput').style.display="block";
    document.getElementById('nm').style.display="none";
    document.getElementById('fname').style.display="none";
    document.getElementById('nxt').style.display="none";
    drawImage1();
})

reset.addEventListener('click',()=>{
    window.location.reload();
})
regenerate.addEventListener('click',()=>{
    window.location.reload();
})

// var thumbImg = document.createElement('img');

// thumbImg.src = 'path_to_image';
// thumbImg.onload = function() {
//     tmpCtx.save();
//     tmpCtx.beginPath();
//     tmpCtx.arc(25, 25, 25, 0, Math.PI * 2, true);
//     tmpCtx.closePath();
//     tmpCtx.clip();

//     tmpCtx.drawImage(thumbImg, 0, 0, 50, 50);

//     tmpCtx.beginPath();
//     tmpCtx.arc(0, 0, 25, 0, Math.PI * 2, true);
//     tmpCtx.clip();
//     tmpCtx.closePath();
//     tmpCtx.restore();
// };

function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}
function next(){
    
}