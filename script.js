var lowerCaseSet = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberSet = '0123456789';
var symbolSet = '`~!@#$%^&*()_+-={}|[]\:";<>?,./';

var length = document.getElementById('length').value;
var lc = document.getElementById('lowerCase');
var uc = document.getElementById('upperCase');
var num = document.getElementById('number');
var sym = document.getElementById('symbol');
var generateButton = document.getElementById('generatePassword');
var generatedPassword = document.getElementById('password');

generateButton.addEventListener('click',function(){ 
	length = document.getElementById('length').value;   
	generatedPassword.innerHTML = generatePassword(length);
});

function generatePassword(length){
	var characters = '';  //char set from which pwd can be generated.
	var password = '';
	(lc.checked) ? characters += lowerCaseSet : '';  //adds all a-z
	(uc.checked) ? characters += upperCaseSet : '';
	(num.checked) ? characters += numberSet : '';
	(sym.checked) ? characters += symbolSet : '';

	for(var i = 0; i < length; i++){
			password += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return password;
}