function EZ(num) {
	return num/2;
}

function HR(num) {
	return Math.min(10, 1.4*num);
}

function timeChange(num, amount) {
	if (num <= 5) {
		var ms = 1800 - 120*num;
	} else {
		var ms = 1950 - 150*num;
	}
	
	ms /= amount;

	if (ms <= 1200) {
		return 13 - ms/150;	
	} else {
		return 15 - ms/120;
	}
}

function MsToAR(ms) {
	if (ms <= 1200) {
		return 13 - ms/150;	
	} else {
		return 15 - ms/120;
	}
}

function ARConvert(num, rate) {
	var textArray = [
		"+HR: ",
		"+EZ: ",
		"+DT: ",
		"+HT: ",
		"+HRDT: ",
		"+HRHT: ",
		"+EZDT: ",
		"+EZHT: ",
		""
	];
	var valueArray = [
		HR(num),
		EZ(num),
		timeChange(num, 1.5),
		timeChange(num, 0.75),
		timeChange(HR(num), 1.5),
		timeChange(HR(num), 0.75),
		timeChange(EZ(num), 1.5),
		timeChange(EZ(num), 0.75),
	];
		
	for (i=0; i<valueArray.length; i++) {
		textArray[i] += +valueArray[i].toFixed(2);
	}

	textArray[8] += rate + "x: " + +timeChange(num, rate).toFixed(4);

	return textArray.join("<br>");
}

function buttonFunc() {
	document.getElementById("output").innerHTML = ARConvert(parseFloat(document.getElementById("input").value),parseFloat(document.getElementById("rate").value));	
}

function buttonFuncMsAR() {
	document.getElementById("outputMsAR").innerHTML = MsToAR(parseFloat(document.getElementById("inputMsAR").value));	
}

function buttonFuncMsBPM() {
	var input = parseFloat(document.getElementById("inputMsBPM").value);
	var output = "";
	var textArray = [
		"1/2 jumps: " + (60000 / (2*input)).toFixed(2),
		"1/3 streams: " + (60000 / (3*input)).toFixed(2),
		"1/4 streams: " + (60000 / (4*input)).toFixed(2)
	]
	output = textArray.join("<br>");
	document.getElementById("outputMsBPM").innerHTML = output;

}

function buttonFuncBPMMs() {
	var input = parseFloat(document.getElementById("inputBPMMs").value);
	var output = "";
	var textArray = [
		"1/2 jumps: " + (60000 / (2*input)).toFixed(2),
		"1/3 streams: " + (60000 / (3*input)).toFixed(2),
		"1/4 streams: " + (60000 / (4*input)).toFixed(2)
	]
	output = textArray.join("<br>");
	document.getElementById("outputBPMMs").innerHTML = output;

}