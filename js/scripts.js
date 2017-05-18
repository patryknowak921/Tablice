var maleNames = ['Patryk' , 'Michał' , 'Tomasz' , 'Łukasz'];
var femaleNames = ['Viola' , 'Kasia' , 'Ania' , 'Magda'];
var allNames = maleNames.concat(femaleNames);
var newName = 'Marian';

console.log(allNames);

if(allNames.indexOf(newName) === -1)
	allNames.push(newName); {

} else {
  console.log(allNames);
}