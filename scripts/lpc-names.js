function rollDice(sides){
    var d1 = Math.floor(Math.random() * sides) + 1;
	return d1;
}

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};

function getName() {
	
	var nameSeeds=new Array();
	addItemToArray(nameSeeds, 'Olear');
	addItemToArray(nameSeeds, 'Tup');
	addItemToArray(nameSeeds, 'Tuck');
	addItemToArray(nameSeeds, 'Took');
	addItemToArray(nameSeeds, 'Maxon');
	addItemToArray(nameSeeds, 'Kaz');
	addItemToArray(nameSeeds, 'Neryx');
	addItemToArray(nameSeeds, 'Rizid');
	addItemToArray(nameSeeds, 'Xhun');
	addItemToArray(nameSeeds, 'Coventry');
	addItemToArray(nameSeeds, 'Pax');
	addItemToArray(nameSeeds, 'Euba');
	addItemToArray(nameSeeds, 'Jolly');
	addItemToArray(nameSeeds, 'Visix');
	addItemToArray(nameSeeds, 'Rokk');
	addItemToArray(nameSeeds, 'Vitti');
	addItemToArray(nameSeeds, 'Moft');
	addItemToArray(nameSeeds, 'Vaggan');
	addItemToArray(nameSeeds, 'Wrod');
	addItemToArray(nameSeeds, 'Slate');
	addItemToArray(nameSeeds, 'Zebb');
	addItemToArray(nameSeeds, 'Xay');
	addItemToArray(nameSeeds, 'Leer');
	addItemToArray(nameSeeds, 'Leira');
	addItemToArray(nameSeeds, 'Oza');
	addItemToArray(nameSeeds, 'Ozel');
	addItemToArray(nameSeeds, 'Worno');
	addItemToArray(nameSeeds, 'Baxa');
	addItemToArray(nameSeeds, 'Slan');
	addItemToArray(nameSeeds, 'Filfin');
	addItemToArray(nameSeeds, 'Wex');
	addItemToArray(nameSeeds, 'Feyd');
	addItemToArray(nameSeeds, 'Rosz');
	addItemToArray(nameSeeds, 'Kabi');
	addItemToArray(nameSeeds, 'Nor');
	addItemToArray(nameSeeds, 'Xill');
	addItemToArray(nameSeeds, 'Iolf');
	addItemToArray(nameSeeds, 'Morx');
	addItemToArray(nameSeeds, 'Laxa');
	addItemToArray(nameSeeds, 'Thak');
	addItemToArray(nameSeeds, 'Tozi');
	addItemToArray(nameSeeds, 'Eun');
	addItemToArray(nameSeeds, 'Slim');
	addItemToArray(nameSeeds, 'Iolo');
	addItemToArray(nameSeeds, 'Cox');
	addItemToArray(nameSeeds, 'Kaduj');
	addItemToArray(nameSeeds, 'Dorin');
	addItemToArray(nameSeeds, 'Thoran');
	addItemToArray(nameSeeds, 'May');
	addItemToArray(nameSeeds, 'Bou');
	addItemToArray(nameSeeds, 'Iote');
	addItemToArray(nameSeeds, 'Dartan');
	addItemToArray(nameSeeds, 'Zebb');
	addItemToArray(nameSeeds, 'Yebs');
	addItemToArray(nameSeeds, 'Zagy');
	addItemToArray(nameSeeds, 'Nock');
	addItemToArray(nameSeeds, 'Kribs');
	addItemToArray(nameSeeds, 'Kem');
	addItemToArray(nameSeeds, 'Flora');
	addItemToArray(nameSeeds, 'Flir');
	addItemToArray(nameSeeds, 'Ixmal');
	addItemToArray(nameSeeds, 'Robb');
	addItemToArray(nameSeeds, 'Zur');
	addItemToArray(nameSeeds, 'Jun');
	addItemToArray(nameSeeds, 'Dux');
	addItemToArray(nameSeeds, 'Wassen');
	addItemToArray(nameSeeds, 'Tae');
	addItemToArray(nameSeeds, 'Koo');
	addItemToArray(nameSeeds, 'Lox');
	addItemToArray(nameSeeds, 'Odou');
	addItemToArray(nameSeeds, 'Cax');
	addItemToArray(nameSeeds, 'Wyrn');
	addItemToArray(nameSeeds, 'Zeppa');
	addItemToArray(nameSeeds, 'Lum');
	addItemToArray(nameSeeds, 'Pyr');
	addItemToArray(nameSeeds, 'Spyr');
	addItemToArray(nameSeeds, 'Migo');
	addItemToArray(nameSeeds, 'Kerzi');
	addItemToArray(nameSeeds, 'Mafuni');
	addItemToArray(nameSeeds, 'Zox');
	addItemToArray(nameSeeds, 'Rexx');
	addItemToArray(nameSeeds, 'Pezin');
	addItemToArray(nameSeeds, 'Roe');
	addItemToArray(nameSeeds, 'Jozin');
	addItemToArray(nameSeeds, 'Yali');
	addItemToArray(nameSeeds, 'Vezan');
	addItemToArray(nameSeeds, 'Juul');
	addItemToArray(nameSeeds, 'Xabin');
	addItemToArray(nameSeeds, 'Tinh');
	addItemToArray(nameSeeds, 'Otu');
	addItemToArray(nameSeeds, 'Khefu');
	addItemToArray(nameSeeds, 'Syx');
	addItemToArray(nameSeeds, 'Wyte');
	addItemToArray(nameSeeds, 'Sezzig');
	addItemToArray(nameSeeds, 'Ror');
	addItemToArray(nameSeeds, 'Nebec');
	addItemToArray(nameSeeds, 'Zola');
	addItemToArray(nameSeeds, 'Feza');
	addItemToArray(nameSeeds, 'Zedec');
	addItemToArray(nameSeeds, 'Rede');
	
	var transforms=new Array();
	addItemToArray(transforms, 'Sequential');
	addItemToArray(transforms, 'Reverse');
	addItemToArray(transforms, 'Backwards');
	addItemToArray(transforms, 'Mixed');
	addItemToArray(transforms, 'Twice');
	addItemToArray(transforms, 'Thrice');
	
	var nameRoll=rollDice(10);
//	document.write('<p>Number of Names Die roll = ' + nameRoll + '</p>');
	var numNames = 1;
	if (nameRoll > 0 && nameRoll < 7) {
		numNames = 1;
	} else if (nameRoll >= 7 && nameRoll <= 8) {
		numNames = 2;
	} else if (nameRoll >= 9 && nameRoll <= 10) {
		numNames = 3;
	}
//	document.write('<p>So picking ' + numNames + ' names.</p>');
	
	var names = new Array();
	for (var i =0; i < numNames; i++ ) {
		names[i] = getItemFromArray(nameSeeds);
//		document.write('<p>Name #' + i + '=' + names[i] + '</p>');
	}

	var transformType = getItemFromArray(transforms);
	var applyTransforms = new Array();
	if (transformType == 'Twice') {
		applyTransforms[0] = transforms[rollDice(4)];
		applyTransforms[1] = transforms[rollDice(4)];
	} else if (transformType == 'Thrice') {
		applyTransforms[0] = transforms[rollDice(4) - 1];
		applyTransforms[1] = transforms[rollDice(4) - 1];
		applyTransforms[2] = transforms[rollDice(4) - 1];
	} else {
		applyTransforms[0] = transformType;
	}
//	for (var count = 0; count < applyTransforms.length; count++) {
//		transformType = applyTransforms[count];
//		document.write('<p>Transform type = ' + transformType + '</p>');
//	}
	
	for (var count = 0; count < applyTransforms.length; count++) {
		transformType = applyTransforms[count];
		if (transformType == 'Backwards') {
			for (var int = names.length - 1; int > -1; int--) {
				var str = names[int];
				var reverse = str.split('').reverse().join('');
				reverse = reverse.toLowerCase();
				reverse = reverse[0].toUpperCase() + reverse.slice(1);
				names[int] = reverse;
//				document.write('<p>Backwards ' + str + ' to ' + reverse + '</p>');
			}
		} else if (transformType == 'Mixed') {
			for (var int = names.length - 1; int > -1; int--) {
				var str = names[int];
				var mix = str.shuffle();
				mix = mix.toLowerCase();
				mix = mix[0].toUpperCase() + mix.slice(1);
				names[int] = mix;
//				document.write('<p>Mixed ' + str + ' to ' + mix + '</p>');
			}
		} else if (transformType == 'Reverse') {
//			document.write('<p>Reversed name order.</p>');
			names.reverse();
		}
	}

	var output = '';
	
	for (var int = 0; int < names.length; int++) {
		output = output + names[int] + ' ';
	}
	return output;
}

function getNames() {
	getNames(1);
}

function getNames(number) {
	document.write('<ul>');
	
	for (var int = 0; int < number; int++) {
		document.write('<li><h2>');
		var name = getName();
		document.write(name);
		document.write('</li></h2>');
	}
	document.write('</ul>');
}


