var isBlinking = false;
var refreshIntervalId;
function modify_qty(val) {
	if (!isBlinking) {
    var qty = document.getElementById('qty').innerHTML;
    var new_qty = parseInt(qty,10) + val;
    

	document.getElementById('qtyhis2').innerHTML = document.getElementById('qtyhis1').innerHTML;
	document.getElementById('ctrhis2').innerHTML = document.getElementById('ctrhis1').innerHTML;
	document.getElementById('qtyhis1').innerHTML = document.getElementById('qty').innerHTML;
	document.getElementById('ctrhis1').innerHTML = document.getElementById('ctr').innerHTML;

   
 document.getElementById('qty').innerHTML = FormatNumberLength(new_qty, 4);
 document.getElementById('ctr').innerHTML = FormatNumberLength(getRandom1to10(),2);
 blinkFiveSec();
	} else {
		
	}
}

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function blink_current_call() {
	
	
	  var f = document.getElementById('blink');
   refreshIntervalId = setInterval(function() {

        f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
    }, 600);
}

function blinkFiveSec() {
	//blink_current_call();
	 isBlinking = true;
	 blink_current_call();
	 
	var test = setTimeout(stopblink ,6000);
}

function stopblink() {
  clearInterval(refreshIntervalId);
    var f = document.getElementById('blink');
	f.style.visibility = "visible";
  isBlinking = false;
}

function getRandom1to10() {
	var val = Math.floor(Math.random() * 10) + 1;
	return val;
}