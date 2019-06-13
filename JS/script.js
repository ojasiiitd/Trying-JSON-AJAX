function validateAJAX()
{
    if (this.readyState == 4 && this.status == 200)
    {
        var data = JSON.parse(this.responseText);
        main1(data)
    }
};
var myReq = new XMLHttpRequest();
myReq.onreadystatechange = validateAJAX;
myReq.open("GET", "https://jsonplaceholder.typicode.com/todos/1" , true);
myReq.send();

function main1(data)
{
    var press = document.getElementById("btn"),
        box = document.getElementById("baxa");
    
    press.addEventListener("click" , addRandom);

    function addRandom()
    {
        box.innerHTML += data.title + "<br>";
    }
}