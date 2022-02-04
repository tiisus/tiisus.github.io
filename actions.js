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
	
	location.assign("https://www.theseus.fi/handle/10024/504732");
	
}

/* takes back to mainpage */
function toMain(){

	location.assign("https://tiisus.github.io/");
}

/* takes back to linkedin */
function toLinkd(){

	location.assign("");
}

/* takes back to artstation */
function toStation(){

	location.assign("");
}


/*modal stuff*/

function openPop(id){
	
	var popup = id;
	popup.style.display = "block";
	
}

function closePop(id) {
	
	var popup = id;
	popup.style.display = "none";
	
}

function infopop(){
	
	
}
