
function getShipwrecks() {
	clearDescriptiveElementArray();
	addDescriptiveElement("Hull");
	addDescriptiveElement("Hold");
	addDescriptiveElement("Mast");
	addDescriptiveElement("Sails");
	addDescriptiveElement("Deck");
	addDescriptiveElement("Figurehead");
	addDescriptiveElement("Boom");
	addDescriptiveElement("Crow's Nest");
	addDescriptiveElement("Stern");
	addDescriptiveElement("Berth");
	addDescriptiveElement("Bilge");
	addDescriptiveElement("Bow");
	addDescriptiveElement("Bridge");
	addDescriptiveElement("Brig");
	addDescriptiveElement("Bulwark");
	addDescriptiveElement("Cabin");
	addDescriptiveElement("Forecastle");
	addDescriptiveElement("Galley");
	addDescriptiveElement("Helm");
	addDescriptiveElement("Keel");
	
	clearSensoryDescriptorArray();
	addSensoryDescriptor("Wet");
	addSensoryDescriptor("Dry");
	addSensoryDescriptor("Oiled");
	addSensoryDescriptor("Frayed");
	addSensoryDescriptor("Metallic");
	addSensoryDescriptor("Splintered");
	addSensoryDescriptor("Clammy");
	addSensoryDescriptor("Bright");
	addSensoryDescriptor("Dim");
	addSensoryDescriptor("Colorless");
	addSensoryDescriptor("Hazy");
	addSensoryDescriptor("Rusted");
	addSensoryDescriptor("Tarnished");
	addSensoryDescriptor("Flapping");
	addSensoryDescriptor("Clanging");
	addSensoryDescriptor("Creaky");
	addSensoryDescriptor("Groaning");
	addSensoryDescriptor("Rumbling");
	addSensoryDescriptor("Scratching");
	addSensoryDescriptor("Damp");
	addSensoryDescriptor("Bony");
	addSensoryDescriptor("Howling");
	addSensoryDescriptor("Spongy");
	addSensoryDescriptor("Gloomy");
	addSensoryDescriptor("Spoiled");
	addSensoryDescriptor("Rotten");
	addSensoryDescriptor("Silky");
	addSensoryDescriptor("Sparkling");
	addSensoryDescriptor("Streaked");
	addSensoryDescriptor("Bellowing");
	addSensoryDescriptor("Clamoring");
	addSensoryDescriptor("Gurgling");
	addSensoryDescriptor("Squawking");
	addSensoryDescriptor("Bristly");
	addSensoryDescriptor("Gritty");
	addSensoryDescriptor("Sticky");
	addSensoryDescriptor("Refreshing");
	addSensoryDescriptor("Sharp");
	addSensoryDescriptor("Leathery");
	addSensoryDescriptor("Hard");
	addSensoryDescriptor("Soft");
	addSensoryDescriptor("Soaked");
	addSensoryDescriptor("Billowing");
	addSensoryDescriptor("Ripe");
	addSensoryDescriptor("Ringing");
	addSensoryDescriptor("Silent");
	addSensoryDescriptor("Caked");
	addSensoryDescriptor("Wooden");
	addSensoryDescriptor("Canvassed");
	addSensoryDescriptor("Ceramic");

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


