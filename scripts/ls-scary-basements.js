
function getScaryBasements() {
	clearDescriptiveElementArray();
	addDescriptiveElement('Animals');
	addDescriptiveElement('Bugs');
	addDescriptiveElement('Toys');
	addDescriptiveElement('Print');
	addDescriptiveElement('Art');
	addDescriptiveElement('Kitch');
	addDescriptiveElement('Entry');
	addDescriptiveElement('Sports');
	addDescriptiveElement('Storage');
	addDescriptiveElement('Tools');
	addDescriptiveElement('Music');
	addDescriptiveElement('Religion');
	addDescriptiveElement('Clothing');
	addDescriptiveElement('Furniture');
	addDescriptiveElement('Game');
	addDescriptiveElement('Exit');
	addDescriptiveElement('Weapon');
	addDescriptiveElement('Trash');
	addDescriptiveElement('Glass');
	addDescriptiveElement('Lighting');
	
	clearSensoryDescriptorArray();
	addSensoryDescriptor('Wet');
	addSensoryDescriptor('Dry');
	addSensoryDescriptor('Greasy');
	addSensoryDescriptor('Hot');
	addSensoryDescriptor('Cold');
	addSensoryDescriptor('Hairy');
	addSensoryDescriptor('Metallic');
	addSensoryDescriptor('Clammy');
	addSensoryDescriptor('Bright');
	addSensoryDescriptor('Colorless');
	addSensoryDescriptor('Hazy');
	addSensoryDescriptor('Tarnished');
	addSensoryDescriptor('Shadowy');
	addSensoryDescriptor('Faded');
	addSensoryDescriptor('Buzz');
	addSensoryDescriptor('Cackle');
	addSensoryDescriptor('Creak');
	addSensoryDescriptor('Groan');
	addSensoryDescriptor('Mutter');
	addSensoryDescriptor('Rumble');
	addSensoryDescriptor('Screech');
	addSensoryDescriptor('Thump');
	addSensoryDescriptor('Crawly');
	addSensoryDescriptor('Creepy');
	addSensoryDescriptor('Dusty');
	addSensoryDescriptor('Silky');
	addSensoryDescriptor('Sticky');
	addSensoryDescriptor('Bitter');
	addSensoryDescriptor('Ripe');
	addSensoryDescriptor('Rotten');
	addSensoryDescriptor('Sour');
	addSensoryDescriptor('Spoiled');
	addSensoryDescriptor('Radiant');
	addSensoryDescriptor('Blurred');
	addSensoryDescriptor('Gloomy');
	addSensoryDescriptor('Squeal');
	addSensoryDescriptor('Howl');
	addSensoryDescriptor('Clang');
	addSensoryDescriptor('Hiss');
	addSensoryDescriptor('Lumpy');
	addSensoryDescriptor('Sentimental');
	addSensoryDescriptor('Powdery');
	addSensoryDescriptor('Spongy');
	addSensoryDescriptor('Sweaty');
	addSensoryDescriptor('Bland');
	addSensoryDescriptor('Nauseating');
	addSensoryDescriptor('Creamy');
	addSensoryDescriptor('Damp');
	addSensoryDescriptor('Dreary');
	addSensoryDescriptor('Pinched');

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



