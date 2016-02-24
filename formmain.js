var array = [];
document.getElementById("add").onclick =function(){
	//var array = [];
	var text = document.getElementById("input").value;
	//var output = text.split(",");
	console.log(text +'text');
    //var splitIn;
	var ul = document.getElementsByClassName("list");
	var li = document.createElement('li');
	var sepArr = [];
	//var splitIn;
	//forEach().li.split(",");
	if (text.indexOf(',') === -1){
	li.innerHTML = "<li>" + text + "</li>";
	document.body.appendChild(li);
    }
    else if (text.indexOf(',') !== -1){
    var splitIn = text.split(",");
    //var splitLi =document.createElement('li');
   // splitIn.innerHTML = "<li>" + splitIn + "</li>";
    console.log(splitIn);
    for(var i = 0; i < splitIn.length; i++){
    	var splitLi = splitIn[i];
    	var Ul = document.getElementsByClassName("list");
    	var Li =document.createElement('li');
    	console.log("type of li", typeof li, +"Li" + typeof Li);
    	//var .innerHTML = "<li>" + splitLi + "</li>";
    	var textNode = document.createTextNode(splitLi);
    	Li.appendChild(textNode);
    	document.body.appendChild(Li);

    }
     
    //splitIn.innerHTML = "<li>" + splitLi + "</li>";
    //document.getElementById("uList").appendChild(splitIn);
    //document.body.appendChild(splitLi);

    }
	
	for (var i = 0; i< ul.length; i++){
		console.log('in Loop');
		array.push(li);
		//array.push(Li);
		//array.push.text;
		console.log(array + 'array');
	}
	console.log('in');
}

/*
	var array = [];
	for (var i = 0; i< li.length; i++){
		console.log('in Loop');
		array.push(text);
		console.log(array + 'array');
	}
	*/


document.getElementById("getRandom").onclick = function(){
    console.log("in random");
    var random = Math.floor(Math.random() * array.length);
    document.querySelector('#getRandom').addEventListener('click', randomLi);
    var randomLi = array[random];
    randomLi.classList.add('red');
    console.log("through random");
  }
  //var randomButton = document.getElementById("getRandom").value;
  //randomButton.classList.add('red');




/*
var array = text.split(",");
for (var i in array) {
	array[i];
}
document.getElementById("add").onclick =function(){
	var text = document.getElementById("input").value;
	//var ul = document.getElementById("list");
	var li = document.createElement('li');
	li.innerHTML = "<li>" + text + "</li>";
	document.body.appendChild(li);
}

	var li = "<li>" + text + "</li>";
	document.getElementById("list").appendChild(li);
}


var textInput = document.getElementById('input');
var addButton = document.getElementById('add');
var list = document.getElementById('list');

var addList = function(){
	var text = textInput.value;
	var li = document.createElement('li');
	debugger;
	list.appendChild(li);
    
}

		*/