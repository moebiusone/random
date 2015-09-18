
function getFancyMeal() {
	clearDescriptiveElementArray();
	addDescriptiveElement('Table');
	addDescriptiveElement('Chair');
	addDescriptiveElement('Napkin');
	addDescriptiveElement('Utensil');
	addDescriptiveElement('Bowl');
	addDescriptiveElement('Plate');
	addDescriptiveElement('Main Course');
	addDescriptiveElement('Appetizer');
	addDescriptiveElement('Dessert');
	addDescriptiveElement('Tablecloth');
	addDescriptiveElement('Condiment');
	addDescriptiveElement('Alcoholic Beverage');
	addDescriptiveElement('Stove/Grill');
	addDescriptiveElement('Pot/Pan');
	addDescriptiveElement('Chef');
	addDescriptiveElement('Kitchen');
	addDescriptiveElement('Server');
	addDescriptiveElement('Decoration');
	addDescriptiveElement('Course');
	addDescriptiveElement('Non-alcoholic Drink');
	
	clearSensoryDescriptorArray();
	addSensoryDescriptor('Succulent');
	addSensoryDescriptor('Fresh');
	addSensoryDescriptor('Spoiled');
	addSensoryDescriptor('Sliced');
	addSensoryDescriptor('Diced');
	addSensoryDescriptor('Raw');
	addSensoryDescriptor('Burnt');
	addSensoryDescriptor('Braised');
	addSensoryDescriptor('Overdone');
	addSensoryDescriptor('Stringy');
	addSensoryDescriptor('Roasted');
	addSensoryDescriptor('Scaly');
	addSensoryDescriptor('Bony');
	addSensoryDescriptor('Skewered');
	addSensoryDescriptor('Whipped');
	addSensoryDescriptor('Beaten');
	addSensoryDescriptor('Bloody');
	addSensoryDescriptor('Aromatic');
	addSensoryDescriptor('Acidic');
	addSensoryDescriptor('Bland');
	addSensoryDescriptor('Chewy');
	addSensoryDescriptor('Chilled');
	addSensoryDescriptor('Blackened');
	addSensoryDescriptor('Diluted');
	addSensoryDescriptor('Zesty');
	addSensoryDescriptor('Wilted');
	addSensoryDescriptor('Thick');
	addSensoryDescriptor('Thin');
	addSensoryDescriptor('Toasted');
	addSensoryDescriptor('Stale');
	addSensoryDescriptor('Sweet');
	addSensoryDescriptor('Smooth');
	addSensoryDescriptor('Nutty');
	addSensoryDescriptor('Mellow');
	addSensoryDescriptor('Luscious');
	addSensoryDescriptor('Greasy');
	addSensoryDescriptor('Fried');
	addSensoryDescriptor('Fricasseed');
	addSensoryDescriptor('Fragrant');
	addSensoryDescriptor('Fermented');
	addSensoryDescriptor('Distasteful');
	addSensoryDescriptor('Cured');
	addSensoryDescriptor('Crumbly');
	addSensoryDescriptor('Crunchy');
	addSensoryDescriptor('Buttery');
	addSensoryDescriptor('Briny');
	addSensoryDescriptor('Brewed');
	addSensoryDescriptor('Bitter');
	addSensoryDescriptor('Candied');
	addSensoryDescriptor('Grilled');
	
	var foodDescriptors=new Array();
	addItemToArray(foodDescriptors, 'Beef');
	addItemToArray(foodDescriptors, 'Poultry');
	addItemToArray(foodDescriptors, 'Fish');
	addItemToArray(foodDescriptors, 'Pork');
	addItemToArray(foodDescriptors, 'Lamb');
	addItemToArray(foodDescriptors, 'Mystery Meat');
	addItemToArray(foodDescriptors, 'Vegetable');
	addItemToArray(foodDescriptors, 'Fruit');
	addItemToArray(foodDescriptors, 'Grain');
	addItemToArray(foodDescriptors, 'Bread');

	var meals = ['Main Course', 'Appetizer', 'Dessert', 'Course', 'Alcoholic Beverage', 'Non-alcoholic drink'];

	var senses = getSenses();
	if (senses instanceof Array) {
		document.write('<ul>');
		for (var int = 0; int < senses.length; int++) {
			var sense = senses[int];
			var descripElement = getDescriptiveElement();
			var senseDescrip = getSenseDescriptor();
			var foodDescrip = null;
			if (meals.indexOf(descripElement) > -1) {
				foodDescrip = getItemFromArray(foodDescriptors);
				descripElement = descripElement + ' (' + foodDescrip + ')';
			}
			document.write('<li>' + sense + ': ' + 	descripElement + '- ' + senseDescrip + '</li>');
		}
		document.write('</ul>');
	} else {
		var descripElement = getDescriptiveElement();
		var senseDescrip = getSenseDescriptor();
		var foodDescrip = null;
		if (meals.indexOf(descripElement) > -1) {
			foodDescrip = getItemFromArray(foodDescriptors);
			descripElement = descripElement + ' (' + foodDescrip + ')';
		}
		document.write('<ul>');
		document.write('<li>' + senses + ': ' + descripElement + '- ' + senseDescrip +	'</li>');
		document.write('</ul>');
	}
}



