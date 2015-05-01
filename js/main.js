running = false;
frames = 0;
resizeCanvas();
setInterval(function(){
	document.getElementById("fpsN").innerHTML = Math.round(frames)+" FPS";
	frames = 0;
},1000);
function resizeCanvas() {
	var canvas = document.getElementById("glitch");
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-350;
}
function generatePixel(color,x,y,size) {

	var canvas = document.getElementById("glitch");
	var ctx = canvas.getContext("2d");
	if(document.getElementById('rotate').checked){
		rotateRandom();
	}

			ctx.fillStyle = color;
	ctx.fillRect(x,y,size,size);

	



}
function sizingRandom(minsize) {
	var generated = Math.floor((Math.random()*100+minsize));
	return generated;
}
function rotateRandom() {
	var canvas = document.getElementById("glitch");
	var ctx = canvas.getContext("2d");
	ctx.rotate(Math.random()*(2*Math.PI));
}

function generate() {
	resizeCanvas();
	var pxs = Math.floor(document.getElementById('pxsize').value);
	var moving = document.getElementById("mv").checked;
	var fps = document.getElementById("fps").value;
	if(typeof(pxs) == "number" && pxs >= 1) {
		if(moving) {
			running = true;
			setInterval(
				function(){ 
					if(running) {
						resizeCanvas();
						fillCanvas(pxs);

						frames++;
					}
				}, Math.floor(1000/fps));

		} else {

			fillCanvas(pxs);
		}
		
	}else {
		alert('Pixel size is not a valid number ! ');
	} 
}

function stop() {
	running = false;
}
function fillCanvas(pxsize){

	var canvas = document.getElementById("glitch");
	var colorSet = document.getElementById("colorSet").value;
	var ctx = canvas.getContext("2d");
		if(document.getElementById('ransize').checked) {
		pxsize = sizingRandom(pxsize);
		} 

	for (var i = 0; i < canvas.width; i += pxsize) {

		for (var j = 0; j < canvas.height; j+=pxsize) {
			switch(colorSet) {
				case "nes" :
					generatePixel(random8bitNESColor(),i,j,pxsize);
					break;
				case "all" :
					generatePixel(randomAllColor(),i,j,pxsize);
					break;
				case "blue" :
					generatePixel(randomBlueColor(),i,j,pxsize);
					break;
			}
		 	

		}
	}
}
function randomAllColor() {
	var chars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	var color = "#";
	for (var i = 0; i < 6; i++) {
		var ranIndex = Math.floor(Math.random()*chars.length);
		color += chars[ranIndex];
	};
	return color;
}
function randomBlueColor() {

	var colors = [];
	colors.push("#838B8B");
	colors.push("#7A8B8B");
	colors.push("#C1CDCD");
	colors.push("#668B8B");
	colors.push("#B4CDCD");
	colors.push("#2F4F4F");
	colors.push("#2F4F4F");
	colors.push("#5F9F9F");
	colors.push("#C0D9D9");
	colors.push("#528B8B");
	colors.push("#E0EEEE");
	colors.push("#96CDCD");
	colors.push("#388E8E");
	colors.push("#79CDCD");
	colors.push("#D1EEEE");
	colors.push("#8FD8D8");
	colors.push("#66CCCC");
	colors.push("#ADEAEA");
	colors.push("#70DBDB");
	colors.push("#AEEEEE");
	colors.push("#AFEEEE");
	colors.push("#8DEEEE");
	colors.push("#37FDFC");
	colors.push("#008080");
	colors.push("#008B8B");
	colors.push("#00CDCD");
	colors.push("#00EEEE");
	colors.push("#00FFFF");
	colors.push("#00FFFF");
	colors.push("#97FFFF");
	colors.push("#BBFFFF");
	colors.push("#E0FFFF");
	colors.push("#F0FFFF");
	colors.push("#00CED1");
	colors.push("#5F9EA0");
	colors.push("#00868B");
	colors.push("#00C5CD");
	colors.push("#00E5EE");
	colors.push("#00F5FF");
	colors.push("#67E6EC");
	colors.push("#4A777A");
	colors.push("#05EDFF");
	colors.push("#53868B");
	colors.push("#73B1B7");
	colors.push("#05E9FF");
	colors.push("#7AC5CD");
	colors.push("#8EE5EE");
	colors.push("#05B8CC");
	colors.push("#98F5FF");
	colors.push("#B0E0E6");
	colors.push("#C1F0F6");
	colors.push("#39B7CD");
	colors.push("#65909A");
	colors.push("#0EBFE9");
	colors.push("#C3E4ED");
	colors.push("#68838B");
	colors.push("#63D1F4");
	colors.push("#9AC0CD");
	colors.push("#50A6C2");
	colors.push("#ADD8E6");
	colors.push("#B2DFEE");
	colors.push("#00688B");
	colors.push("#0099CC");
	colors.push("#009ACD");
	colors.push("#00B2EE");
	colors.push("#00BFFF");
	colors.push("#BFEFFF");
	colors.push("#33A1C9");
	colors.push("#507786");
	colors.push("#87CEEB");
	colors.push("#38B0DE");
	colors.push("#0BB5FF");
	colors.push("#42C0FB");
	colors.push("#6996AD");
	colors.push("#539DC2");
	colors.push("#236B8E");
	colors.push("#3299CC");
	colors.push("#0198E1");
	colors.push("#33A1DE");
	colors.push("#607B8B");
	colors.push("#35586C");
	colors.push("#5D92B1");
	colors.push("#8DB6CD");
	colors.push("#325C74");
	colors.push("#A4D3EE");
	colors.push("#82CFFD");
	colors.push("#67C8FF");
	colors.push("#B0E2FF");
	colors.push("#87CEFA");
	colors.push("#6CA6CD");
	colors.push("#4A708B");
	colors.push("#9BC4E2");
	colors.push("#7EC0EE");
	colors.push("#87CEFF");
	colors.push("#517693");
	colors.push("#5D7B93");
	colors.push("#42647F");
	colors.push("#4682B4");
	colors.push("#4F94CD");
	colors.push("#5CACEE");
	colors.push("#63B8FF");
	colors.push("#525C65");
	colors.push("#36648B");
	colors.push("#62B1F6");
	colors.push("#74BBFB");
	colors.push("#F0F8FF");
	colors.push("#4E78A0");
	colors.push("#0D4F8B");
	colors.push("#708090");
	colors.push("#708090");
	colors.push("#778899");
	colors.push("#778899");
	colors.push("#6183A6");
	colors.push("#9FB6CD");
	colors.push("#7D9EC0");
	colors.push("#104E8B");
	colors.push("#1874CD");
	colors.push("#1C86EE");
	colors.push("#60AFFE");
	colors.push("#007FFF");
	colors.push("#1E90FF");
	colors.push("#6C7B8B");
	colors.push("#B7C3D0");
	colors.push("#739AC5");
	colors.push("#75A1D0");
	colors.push("#B9D3EE");
	colors.push("#499DF5");
	colors.push("#C6E2FF");
	colors.push("#3B6AA0");
	colors.push("#7AA9DD");
	colors.push("#0276FD");
	colors.push("#003F87");
	colors.push("#6E7B8B");
	colors.push("#506987");
	colors.push("#A2B5CD");
	colors.push("#4372AA");
	colors.push("#26466D");
	colors.push("#1D7CF2");
	colors.push("#687C97");
	colors.push("#344152");
	colors.push("#50729F");
	colors.push("#4973AB");
	colors.push("#B0C4DE");
	colors.push("#3063A5");
	colors.push("#BCD2EE");
	colors.push("#7EB6FF");
	colors.push("#CAE1FF");
	colors.push("#4D71A3");
	colors.push("#2B4F81");
	colors.push("#4981CE");
	colors.push("#88ACE0");
	colors.push("#5993E5");
	colors.push("#3A66A7");
	colors.push("#3579DC");
	colors.push("#5190ED");
	colors.push("#42526C");
	colors.push("#4D6FAC");
	colors.push("#2C5197");
	colors.push("#6495ED");
	colors.push("#6D9BF1");
	colors.push("#5B90F6");
	colors.push("#1464F4");
	colors.push("#3A5894");
	colors.push("#7093DB");
	colors.push("#1B3F8B");
	colors.push("#5971AD");
	colors.push("#0147FA");
	colors.push("#3D59AB");
	colors.push("#27408B");
	colors.push("#3A5FCD");
	colors.push("#4169E1");
	colors.push("#436EEE");
	colors.push("#003EFF");
	colors.push("#4876FF");
	colors.push("#A9ACB6");
	colors.push("#22316C");
	colors.push("#162252");
	colors.push("#3B4990");
	colors.push("#283A90");
	colors.push("#6F7285");
	colors.push("#838EDE");
	colors.push("#E6E8FA");
	colors.push("#7D7F94");
	colors.push("#2E37FE");
	colors.push("#2F2F4F");
	colors.push("#42426F");
	colors.push("#8F8FBC");
	colors.push("#5959AB");
	colors.push("#7171C6");
	colors.push("#D9D9F3");
	colors.push("#23238E");
	colors.push("#3232CC");
	colors.push("#3232CD");
	colors.push("#191970");
	colors.push("#E6E6FA");
	colors.push("#000033");
	colors.push("#000080");
	colors.push("#00008B");
	colors.push("#00009C");
	colors.push("#0000CD");
	colors.push("#0000EE");
	colors.push("#0000FF");
	colors.push("#3333FF");
	colors.push("#4D4DFF");
	colors.push("#6666FF");
	colors.push("#AAAAFF");
	colors.push("#CCCCFF");
	colors.push("#F8F8FF");
	colors.push("#5B59BA");
	colors.push("#120A8F");
	colors.push("#302B54");
	colors.push("#483D8B");
	colors.push("#473C8B");
	colors.push("#3B3178");
	colors.push("#6A5ACD");
	colors.push("#6959CD");
	colors.push("#7A67EE");
	colors.push("#8470FF");
	colors.push("#836FFF");
	colors.push("#7B68EE");
	colors.push("#3300FF");
	colors.push("#5D478B");
	colors.push("#9F79EE");
	colors.push("#8968CD");
	colors.push("#9370DB");
	colors.push("#AB82FF");
	colors.push("#6600FF");
	colors.push("#380474");
	var randomColor = Math.floor(Math.random()*colors.length);

	return colors[randomColor];

}

function random8bitNESColor() {
var colors = [];
colors.push("#7C7C7C");
colors.push("#0000FC");
colors.push("#0000BC");
colors.push("#4428BC");
colors.push("#940084");
colors.push("#A80020");
colors.push("#A81000");
colors.push("#881400");
colors.push("#503000");
colors.push("#007800");
colors.push("#006800");
colors.push("#005800");
colors.push("#004058");
colors.push("#000000");
colors.push("#000000");
colors.push("#000000");
colors.push("#BCBCBC");
colors.push("#0078F8");
colors.push("#0058F8");
colors.push("#6844FC");
colors.push("#D800CC");
colors.push("#E40058");
colors.push("#F83800");
colors.push("#E45C10");
colors.push("#AC7C00");
colors.push("#00B800");
colors.push("#00A800");
colors.push("#00A844");
colors.push("#008888");
colors.push("#000000");
colors.push("#000000");
colors.push("#000000");
colors.push("#F8F8F8");
colors.push("#3CBCFC");
colors.push("#6888FC");
colors.push("#9878F8");
colors.push("#F878F8");
colors.push("#F85898");
colors.push("#F87858");
colors.push("#FCA044");
colors.push("#F8B800");
colors.push("#B8F818");
colors.push("#58D854");
colors.push("#58F898");
colors.push("#00E8D8");
colors.push("#787878");
colors.push("#000000");
colors.push("#000000");
colors.push("#FCFCFC");
colors.push("#A4E4FC");
colors.push("#B8B8F8");
colors.push("#D8B8F8");
colors.push("#F8B8F8");
colors.push("#F8A4C0");
colors.push("#F0D0B0");
colors.push("#FCE0A8");
colors.push("#F8D878");
colors.push("#D8F878");
colors.push("#B8F8B8");
colors.push("#B8F8D8");
colors.push("#00FCFC");
colors.push("#F8D8F8");
colors.push("#000000");
colors.push("#000000");

var randomColor = Math.floor(Math.random()*colors.length);

return colors[randomColor];

}