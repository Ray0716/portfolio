const today = new Date();
const day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'   ';
		
		
		      
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ' GMT+0400';
const dateTime = date+' '+time;
   
document.getElementById("displayDateTime").innerHTML = dateTime + ' <br>' + daylist[day];
 
    

setInterval(function () {
    time()
}, 1000);