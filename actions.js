/* changes page to info section*/
function toInfo() {
	
	location.assign("https://tiisus.github.io/info.html");
	
}

/* changes page to easter egg section*/
function toExit() {
	
	location.assign("");
	
}

/* changes page to portfolio section*/
function toPortfolio(){
	
	location.assign("https://tiisus.github.io/display.html");
	
}

/* changes page to developer section*/
function toDev(){
	
	location.assign("https://tiisus.github.io/dev.html");
	
}

/* transports to Theseus */
function toTheseus() {
	
	
	
}

/* transports to friend */
function toTimo() {
	
	location.assign("https://timokar.github.io/");
	
}

/* takes back to mainpage */
function toMain(){

	location.assign("https://tiisus.github.io/");
}

/* changes page to digital section*/
function toDigi(){
	
	location.assign("https://tiisus.github.io/digital.html");
	
}

/* changes page to developer section*/
function toMixed(){
	
	location.assign("https://tiisus.github.io/other.html");
	
}

/* changes page to developer section*/
function toPhotos(){
	
	location.assign("https://tiisus.github.io/photos.html");
	
}

/* takes back to linkedin */
function toLinkd(){

	
}

/* takes back to artstation */
function toStation(){

	
}


/*modal stuff*/
/*opens popup using ID*/

function openPop(id){
	
	var popup = id;
	popup.style.display = "block";
	
}

/*closes popup using ID*/

function closePop(id) {
	
	var popup = id;
	popup.style.display = "none";
	
}

/*just ignore this*/

function infopop(){
	
	
}

/*flips the cards in profilepage*/

function flip(id,id2){
	
	/*id.src='./art/huolto.gif';*/
	
	if (id2.style.display == "none") {
	id.style.display = "none";
	id2.style.display = "block";
	
	}
	
	else {
		
	id.style.display = "block";
	id2.style.display = "none";
	}
	
}
