function encod() {
  let num = parseInt(document.getElementById("numb1").value);
  console.log(num);
  // add 8192 to the raw value
  num = 8192 + num;
  console.log(num);

  // functions accepts range of (-8192..+8191)
  if (0 <= num && num <= 16383){
  
  //pack value into two bytes, the msb and the lsb
  let msb = num & 0x007F;
  let lsb = num & 0X3F80;
  let hexadec = (msb << 1) + lsb;

  //encoding the value 
  let hexToStr = parseInt(num,10).toString(16);
   
   // return 4 character string 
   while (hexToStr.length < 4){
      hexToStr = "0" + hexToStr;
    }
   document.getElementById("result").value = hexToStr;
   console.log(hexToStr);
  
  }else{
   document.getElementById("result").value = "out of range";
  }
  
}



//Part 2 decoding function accepts two bytes on input
function decode(){
  let hi = document.getElementById("hi").value;
  let low = document.getElementById("low").value;
	
	// recombine them return the corresponding integer 
  let comb = hi.concat(low);
  let deco = parseInt(comb, 16);
  
  
  //range
  if (-8192 < deco && deco < 8191){
       document.getElementById("deresult").value = deco;

  }else{
       document.getElementById("deresult").value = "out or range";
  }
}

//verification
  let encodtest = [ 6111,	340, -2628, -255,	7550 ];

  for (let i=0; i < encodtest.length; i++){
  
    console.log(encod(encodtest[i]));
    
  }
  let decodetest = ["0A0A","0029","3F0F",	"4400",	"5E7F"];
  for (let i=0; i < decodetest.length; i++){
  
    console.log(decode(decodetest[i]));
    
  }
  
