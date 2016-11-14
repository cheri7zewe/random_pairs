function makeBoxes(){
  // parseInt makes sure that the number entered not gets treated like a string
  var numberOfBoxes=parseInt(document.getElementById('user_pairs').value, 10);
  var boxesHTML="";
  var boxesString="<input type='text' name='user_pairs[]'/>";
  console.log(numberOfBoxes);
   	for (var i=1; i<=numberOfBoxes; i++){
      boxesHTML+=boxesString + "<br>";
   	}
   	document.getElementById('boxes').innerHTML=boxesHTML;
}