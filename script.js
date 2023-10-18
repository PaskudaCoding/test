var requestURL = 'https://paskudacoding.github.io/test/text.json'
var request = new XMLHttpRequest(requestURL)
request.open('GET', requestURL)
request.responseType = "json"
request.send()
request.onload = function(){
    var array = request.response
    console.log(array)
}



// let array = [1, 2, 3, 4, 5]

