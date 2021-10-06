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


window.onload=function(){
		document.getElementById("input")
		.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			buttonFunc();
		}
	});
}
