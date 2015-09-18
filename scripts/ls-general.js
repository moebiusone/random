
function getSenses() {
	var senses=new Array();
	senses[0]='Sight';
	senses[1]='Hearing';
	senses[2]='Smell';
	senses[3]='Touch';
	senses[4]='Taste';
	senses[5]=1;
	senses[6]=2;
	senses[7]=3;

	var whichsense=Math.floor(Math.random()*(senses.length));
	if (typeof whichsense === "number" && senses[whichsense] == 1) {
		whichsense=Math.floor(Math.random()*(senses.length));
		while (whichsense > 4) {
			whichsense=Math.floor(Math.random()*(senses.length));
		}
		var sense = senses[whichsense];
		return sense;
	} else if (typeof whichsense === "number" && senses[whichsense] > 1) {
		var output=new Array();
		var count = senses[whichsense];
		for (var int = 0; int < count; int++) {
			whichsense=Math.floor(Math.random()*(senses.length));
			while (whichsense > 4) {
				whichsense=Math.floor(Math.random()*(senses.length));
			}
			var sense = senses[whichsense];
			output[int] = sense;
		}
		return output;
	} else {
		var sense = senses[whichsense];
		return sense;
	}
}

function addItemToArray(array, newElement) {
	array.push(newElement);
}

function clearArray(array){
	array.length = 0;
}

function getItemFromArray(array) {
	var randomnumber=Math.floor(Math.random()*(array.length));
	var randomelement = array[randomnumber];
	return randomelement;
}

var descriptiveElement = new Array();

function addDescriptiveElement(newElement) {
	addItemToArray(descriptiveElement, newElement);
}

function clearDescriptiveElementArray(){
	clearArray(descriptiveElement);
}

function getDescriptiveElement() {
	return getItemFromArray(descriptiveElement);
}

var sensoryDescriptors = new Array();

function addSensoryDescriptor(newElement) {
	addItemToArray(sensoryDescriptors, newElement);
}

function clearSensoryDescriptorArray(){
	clearArray(sensoryDescriptors);
}

function getSenseDescriptor() {
	return getItemFromArray(sensoryDescriptors);
}
