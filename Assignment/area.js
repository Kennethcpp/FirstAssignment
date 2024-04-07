

function calculateArea(){
	var length = prompt("Enter the length of the rectangle");
	var width = prompt("Enter the width of the rectangle");
	
	//to convert input string to numbers
	
	length = parseFloat(length);
	widgth = parseFloat(width);
	
	//to calculate the Area
	var area = length * widgth;
	return area;
}
//to calculate the area
 var area = calculateArea();
 
 //to display the area
 console.log("The area of the rectangle is: " + area);