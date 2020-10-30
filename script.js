function getHistory(){
	return document.getElementById('history-value').innerText;
}
//alert(getHistory());
function printHistory(num){
	document.getElementById('history-value').innerText=num;
}
//printHistory(9*9+8);
function getOutput(){
	return document.getElementById('output-value').innerText;

}

function printOutput(num){
	if(num==''){
		document.getElementById('output-value').innerText=num;
	}
	else{
		document.getElementById('output-value').innerText=getFormattedNumber(num);
	}
     //document.getElementById('output-value').innerText=getFormattedNumber(num);
}
function getFormattedNumber(num){
	if(num=='-'){
		return '';
	}
	var n=Number(num);
	var value=n.toLocaleString('en');
	return value;
}
//printOutput('998757599')

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
//alert(reverseNumberFormat(getOutput()));

var operator =document.getElementsByClassName('operator');

for (var i=0; i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		//alert('the operator clicked:'+this.id);
		if (this.id=='clear'){
			printHistory("");
			printOutput("");
		}
		else if (this.id=='backspace'){
			var output=reverseNumberFormat(getOutput()).toString();
			output=output.substr(0,output.length-1);
			printOutput(output);
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==''&& history!=''){
				if(isNaN(history[history.length-1])){
					history=history.substr(0,history.length-1);
				}
			}
			if(output!=''){
				output=reverseNumberFormat(output);
				history=history+output;
				if(this.id=='='){
					var result=eval(history);
					//console.log("history"+history);
					//console.log("result"+result);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					//console.log("history"+history);
					printHistory(history);
					printOutput("");
				}
			}
		}
	});
}

var number =document.getElementsByClassName('number');
for (var i=0; i<number.length;i++){
	number[i].addEventListener('click',function(){
		//alert('the number clicked:'+this.id);
		var output=reverseNumberFormat(getOutput());
	
		if (output!=NaN){
			output=output+this.id;
			printOutput(output);

		}
		
		
	});
}



/*
console.log(operator[0]);
operator[0].addEventListener('click',function(){
	alert('the operator clicked'+this.id);
});

operator.onmouseover=function(){
	console.log('mouse over');

*/