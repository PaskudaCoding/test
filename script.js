var requestURL = 'https://paskudacoding.github.io/test/text.json'
var request = new XMLHttpRequest(requestURL)
request.open('GET', requestURL)
request.responseType = "json"
request.send()
request.onload = function(){
    var responseText = request.response
    var response = JSON.parse(responseText)
    console.log(response)
    console.log('-----------------------------')
}

let array = [1, 2, 3, 4, 5]

request.open('GET', requestURL)
request.responseType = "text"
request.send()

