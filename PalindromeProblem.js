let str = "nupun";
let N = str.length;
let rev = "";
  
  for(i = N-1; i >=0; i--) {
      rev = rev + str[i];
  }
  if(rev === str) {
      console.log("Yes")
  } else {
      console.log('No')
  }