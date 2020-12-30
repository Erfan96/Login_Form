
function myPrint(){
var http = new XMLHttpRequest()
var url = "https://5fead4d98ede8b0017ff1ff9.mockapi.io/ave"

http.onreadystatechange= function() {
   if (http.readyState==4 && http.status===200){
       console.log(http.responseText)
   }
}

http.open('GET', url)
http.send();
}