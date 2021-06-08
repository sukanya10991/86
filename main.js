var canvas = new fabric.Canvas('icantstopme');
block_image_width = 50;
block_image_height = 50;
player_x = 10;
player_y = 10;
var block_object = "";
var player_object = "";

function playerUpdate() {
   fabric.Image.fromURL("lightstick.png", function (Img) {
      player_object = Img;
      player_object.scaleToWidth(150);
      player_object.scaleToHeight(140);
      player_object.set({
         top: player_y,
         left: player_x,
      });
      canvas.add(player_object);
   });
}

function new_image(get_image) {
   fabric.Image.fromURL(get_image, function (Img) {
      block_object = Img;
      block_object.scaleToWidth(block_image_width);
      block_object.scaleToHeight(block_image_height);
      block_object.set({
         top: player_y,
         left: player_x,
      });
      canvas.add(block_object);
   });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
   keypressed = e.keyCode;
   console.log(keypressed);
   if (e.shiftKey == true && keypressed == '78') {
      console.log("Shift and n key pressed together");
      block_image_height = block_image_height + 10;
      block_image_width = block_image_width + 10;
      document.getElementById("current_height").innerHTML = block_image_height;
      document.getElementById("current_width").innerHTML = block_image_width;
   }
   if (e.shiftKey == true && keypressed == '77') {
      console.log("Shift and m key pressed together");
      block_image_height = block_image_height - 10;
      block_image_width = block_image_width - 10;
      document.getElementById("current_height").innerHTML = block_image_height;
      document.getElementById("current_width").innerHTML = block_image_width;
   }
   if (keypressed == '38') {
      up();
      console.log("up arrow key pressed");
   }
   if (keypressed == '40') {
      down();
      console.log("down arrow key pressed");
   }
   if (keypressed == '37') {
      left();
      console.log("left arrow key pressed");
   }
   if (keypressed == '39') {
      right();
      console.log("right arrow key pressed");
   }
   if (keypressed == '81') {
      new_image('jennieface1.png');
      console.log("q key pressed face 1 drawn");
   }
   if (keypressed == '87') {
      new_image('jennieface2.png');
      console.log("w key pressed face 2 drawn");
   }
   if (keypressed == '69') {
      new_image('jisooface1.png');
      console.log("e key pressed face 3 drawn");
   }
   if (keypressed == '82') {
      new_image('jisooface2.png');
      console.log("r key pressed face 4 drawn");
   }
   if (keypressed == '84') {
      new_image('lisaface1.png');
      console.log("t key pressed face 5 drawn");
   }
   if (keypressed == '89') {
      new_image('lisaface2.png');
      console.log("y key pressed face 6 drawn");
   }
   if (keypressed == '85') {
      new_image('roséface1.png');
      console.log("u key pressed face 7 drawn");
   }
   if (keypressed == '73') {
      new_image('roséface8.png');
      console.log("i key pressed face 8 drawn");
   }
   if (keypressed == '79') {
      new_image('jennieclothes1.png');
      console.log("o key pressed outfit 1 drawn");
   }
   if (keypressed == '80') {
      new_image('jennieclothes2.png');
      console.log("p key pressed outfit 2 drawn");
   }
   if (keypressed == '65') {
      new_image('jisooclothes1.png');
      console.log("a key pressed outfit 3 drawn");
   }
   if (keypressed == '83') {
      new_image('jisooclothes2.png');
      console.log("s key pressed outfit 4 drawn");
   }
   if (keypressed == '68') {
      new_image('lisaclothes1.png');
      console.log("d key pressed outfit 5 drawn");
   }
   if (keypressed == '70') {
      new_image('lisaclothes2.png');
      console.log("f key pressed outfit 6 drawn");
   }
   if (keypressed == '71') {
      new_image('roséclothes1.png');
      console.log("g key pressed outfit drawn");
   }
   if (keypressed == '72') {
      new_image('roséclothes2.png');
      console.log("h key pressed outfit 8 drawn");
   }
   if (keypressed == '74') {
      new_image('jennieshoes1.png');
      console.log("j key pressed shoes 1 drawn");
   }
   if (keypressed == '75') {
      new_image('jennieshoes2.png');
      console.log("k key pressed shoes 2 drawn");
   }
   if (keypressed == '76') {
      new_image('jisooshoes1.png');
      console.log("l key pressed shoes 3 drawn");
   }
   if (keypressed == '90') {
      new_image('jisooshoes2.png');
      console.log("z key pressed shoes 4 drawn");
   }
   if (keypressed == '88') {
      new_image('lisashoes1.png');
      console.log("x key pressed shoes 5 drawn");
   }
   if (keypressed == '67') {
      new_image('lisashoes2.png');
      console.log("c key pressed shoes 6 drawn");
   }
   if (keypressed == '86') {
      new_image('roséshoes2.png');
      console.log("v key pressed shoes 7 drawn");
   }
   if (keypressed == '66') {
      new_image('roséshoes1.png');
      console.log("b key pressed shoes 8 drawn");
   }
}

function up() {
   if (player_y >= 0) {
      player_y = player_y - block_image_height;
      console.log("block image height=" + block_image_width);
      console.log("up arrow pressed x=" + player_x + "y=" + player_y);
      canvas.remove(player_object);
      playerUpdate();
   }
}

function down() {
   if (player_y <= 660) {
      player_y = player_y + block_image_height;
      console.log("block image height=" + block_image_width);
      console.log("down arrow pressed x=" + player_x + "y=" + player_y);
      canvas.remove(player_object);
      playerUpdate();
   }
}

function left() {
   if (player_x >= 0) {
      player_x = player_x - block_image_width;
      console.log("block image height=" + block_image_width);
      console.log("left arrow pressed x=" + player_x + "y=" + player_y);
      canvas.remove(player_object);
      playerUpdate();
   }
}

function right() {
   if (player_x <= 860) {
      player_x = player_x + block_image_width;
      console.log("block image height=" + block_image_width);
      console.log("right arrow pressed x=" + player_x + "y=" + player_y);
      canvas.remove(player_object);
      playerUpdate();
   }
}