function interval(){

	function aa(){
	document.getElementById('red').style.background="red";
	}
	setTimeout(aa,0);

	function bb(){
	document.getElementById('red').style.background="white";
	document.getElementById('yellow').style.background="yellow";

	}
	setTimeout(bb,5000);

	function cc(){
	document.getElementById('yellow').style.background="white";
	document.getElementById('green').style.background="green";

	}
	setTimeout(cc,7000);

	function dd(){
	document.getElementById('green').style.background="white";
	}
	setTimeout(dd,12000);
}

setInterval(interval,12000);