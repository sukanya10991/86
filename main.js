var canvas= fabric.Canvas('hello');
block_image_width=50;
block_image_height=50;
player_x=10;
player_y=10;
var block_object="";
var player_object="";
function playerUpdate(){
fabric.fromURL("light stick.png"),function (Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x,
});
canvas.add(player_object);
}
}
function new_image(get_image){
    fabric.fromURL(get_image,function (Img){
        block_object=Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_object);
        });
}