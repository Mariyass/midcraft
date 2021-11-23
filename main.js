var canvas=new fabric.Canvas(myCanvas);
var block_img_width=30;
var block_img_height=30;

var player_x=10;
var player_y=10;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;

        block_object.scaleToHeight(block_img_height);
        block_object.scaleToWidth(block_img_width);

        block_object.set({
            top:player_y,
            left:player_x
            
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true && keyPressed=="80")
    {
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey==true && keyPressed== "77"){
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    
    }
    if(keyPressed=="67"){
        new_image("cloud.jpg");
    }
    if(keyPressed=="68"){
        new_image("dark_green.png");
    }
    if(keyPressed=="71"){
        new_image("ground.png");
    }
    if(keyPressed=="76"){
        new_image("light_green.png");
    }
    if(keyPressed=="82"){
        new_image("roof.jpg");
    }
    if(keyPressed=="84"){
        new_image("trunk.jpg");
    }
    if(keyPressed=="85"){
        new_image("unique.png");
    }
    if(keyPressed=="87"){
        new_image("wall.jpg");
    }
    if(keyPressed=="89"){
        new_image("yellow_wall.png");
    }
    if(keyPressed=="38"){
        up()
    }
    if(keyPressed=="40"){
        down()
    }
    if(keyPressed=="37"){
        left()
    }
    if(keyPressed=="39"){
        right()
    }
}

