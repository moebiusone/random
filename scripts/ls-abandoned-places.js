
function getAbandonedPlace() {
	clearDescriptiveElementArray();
	addDescriptiveElement("Ruin");
	addDescriptiveElement("Remains");
	addDescriptiveElement("Monument");
	addDescriptiveElement("Statue");
	addDescriptiveElement("Marker");
	addDescriptiveElement("Garden");
	addDescriptiveElement("Trees");
	addDescriptiveElement("Clearing");
	addDescriptiveElement("Path");
	addDescriptiveElement("Stone");
	addDescriptiveElement("Bone");
	addDescriptiveElement("Burial");
	addDescriptiveElement("Cairn");
	addDescriptiveElement("Maze");
	addDescriptiveElement("Building");
	addDescriptiveElement("Cave");
	addDescriptiveElement("Metal");
	addDescriptiveElement("Ash");
	addDescriptiveElement("Tides");
	addDescriptiveElement("Echoes");
	
	clearSensoryDescriptorArray();
	addSensoryDescriptor("Scattered");
	addSensoryDescriptor("Piled");
	addSensoryDescriptor("Orderly");
	addSensoryDescriptor("Chaotic");
	addSensoryDescriptor("Covered");
	addSensoryDescriptor("Worn");
	addSensoryDescriptor("Hidden");
	addSensoryDescriptor("Distant");
	addSensoryDescriptor("Near");
	addSensoryDescriptor("Artistic");
	addSensoryDescriptor("Golden");
	addSensoryDescriptor("Silver");
	addSensoryDescriptor("Reflective");
	addSensoryDescriptor("Overgrown");
	addSensoryDescriptor("Poisoned");
	addSensoryDescriptor("Tainted");
	addSensoryDescriptor("Quaint");
	addSensoryDescriptor("Glistening");
	addSensoryDescriptor("Bulbous");
	addSensoryDescriptor("Dim");
	addSensoryDescriptor("Circular");
	addSensoryDescriptor("Square");
	addSensoryDescriptor("Oblong");
	addSensoryDescriptor("Sturdy");
	addSensoryDescriptor("Weakened");
	addSensoryDescriptor("Burned");
	addSensoryDescriptor("Scarred");
	addSensoryDescriptor("Dusty");
	addSensoryDescriptor("Ripe");
	addSensoryDescriptor("Vast");
	addSensoryDescriptor("Cold");
	addSensoryDescriptor("Smooth");
	addSensoryDescriptor("Flat");
	addSensoryDescriptor("Spoiled");
	addSensoryDescriptor("Quiet");
	addSensoryDescriptor("Deafening");
	addSensoryDescriptor("Melodic");
	addSensoryDescriptor("Gritty");
	addSensoryDescriptor("Dank");
	addSensoryDescriptor("Dark");
	addSensoryDescriptor("Vibrating");
	addSensoryDescriptor("Uneven");
	addSensoryDescriptor("Grassy");
	addSensoryDescriptor("Populous");
	addSensoryDescriptor("Miniature");
	addSensoryDescriptor("Clear");
	addSensoryDescriptor("Steely");
	addSensoryDescriptor("Polished");
	addSensoryDescriptor("Empty");
	addSensoryDescriptor("Crowded");

	var senses = getSenses();
	if (senses instanceof Array) {
		document.write('<ul>');
		for (var int = 0; int < senses.length; int++) {
			document.write('<li>' + senses[int] + ': ' + 	getDescriptiveElement() + '- ' + getSenseDescriptor() + 	'</li>');
		}
		document.write('</ul>');
	} else {
		document.write('<ul>');
		document.write('<li>' + senses + ': ' + 	getDescriptiveElement() + '- ' + getSenseDescriptor() + 	'</li>');
		document.write('</ul>');
	}
}


