
var k=1;
function hide(){
	
	var j=document.getElementById("t2");
	if(k==1){
	j.src="Images/minus.png";
		k=0;
	}
	else{
		j.src="Images/Plus.png";
		k=1;
	}
	
}
var l=1;
function hide1(){
	
	var j=document.getElementById("t3");
	if(l==1){
	j.src="Images/minus.png";
		l=0;
	}
	else{
		j.src="Images/Plus.png";
		l=1;
	}
	
}
var m=1;
function hide2(){
	
	var j=document.getElementById("t4");
	if(m==1){
	j.src="Images/minus.png";
		m=0;
	}
	else{
		j.src="Images/Plus.png";
		m=1;
	}
	
}
function down(){
	var j=document.getElementById("t1");
	if(j.style.display==="block"){
		j.style.display="none";
	}
	else{
		j.style.display="block";
	}
}

function arrows1(){
	var j=document.getElementById("drop1");
	if(j.style.display==="block"){
		j.style.display="none";
	}
	else{
		j.style.display="block";
	}
}
function arrows2(){
	var j=document.getElementById("drop2");
	if(j.style.display==="block"){
		j.style.display="none";
	}
	else{
		j.style.display="block";
	}
}