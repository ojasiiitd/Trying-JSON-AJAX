var rand = document.getElementById("baxa");
var btn = document.getElementById("btn");
var pressed = 0;

btn.addEventListener("click" , function() 
{
    var url = "https://www.reddit.com/r/india/" + ".json";
    var get = new XMLHttpRequest();
    get.open("GET" , url);
    get.onload = function() 
    {
        if(get.status >= 200 && get.status < 400)
        {
            var dataRec = JSON.parse(get.responseText);
            dispRandom(dataRec);
        }
        else
        {
            console.log("Site error");
        }
    };
    get.onerror = function() {
        console.log("Server error");
    }
    get.send();
});

function dispRandom(data)
{
    var posts = data["data"]["children"];
}

function setup()
{
    createElement('h1'  ,"HELLO!");
}