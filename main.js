// Create a reference for the canvas
var canvas = new fabric.Canvas('myCanvas')

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}
function load_img() {
	fanric.Image.fromURL("golf-h1.png" , function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();

}

function new_image()
{
	fabric.Image.fromURL("ball.png" , function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

if((ball_x==hole_x)&&(ball_y==hole_y)) {
	canvas.remove(ball_obj);
}

document.getElementById("hd3").innerHTML="You have Hit the Goal";
document.getElementById("myCanvas").style.borderColor="red";



function uploadimg() {


	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			
		}
		//write a code to check the type of key pressed
	    else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	//upload respective image with the message. 

}
function numberkey()
{
	
}
function arrowkey()
{
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
