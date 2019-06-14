var rand = document.getElementById("baxa");
var btn = document.getElementById("btn");
var pressed = 0;

btn.addEventListener("click" , function() 
{
    pressed++;
    if(pressed === 4)
    {
        btn.classList.replace("is-link" , "is-danger");
        pressed = 1;
    }
    var url = "https://learnwebcode.github.io/json-example/animals-" + pressed + ".json";
    var get = new XMLHttpRequest();
    get.open("GET" , url);
    get.onload = function() 
    {
        if(get.status >= 200 && get.status < 400)
        {
            var dataRec = JSON.parse(get.responseText);
            dispRandom(dataRec);
        }
        // else
        // {
        //     console.log("Site error");
        // }
    };
    // get.onerror = function() {
    //     console.log("Server error");
    // }
    get.send();
});

function dispRandom(data)
{
    var str = "";
    for(var i=0 ; i<data.length ; i++)
    {
        str += "The name of my " + data[i]["species"] + " is <b>" + data[i]["name"] + "</b> and he likes :- <br>";
        for(var j=0 ; j<data[i]["foods"]["likes"].length ; j++)
            str += data[i]["foods"]["likes"][j] + ", ";
        str += "<br> but he dislikes :- <br>";
        for(var j=0 ; j<data[i]["foods"]["dislikes"].length ; j++)
            str += data[i]["foods"]["dislikes"][j] + ", ";
        str += "<br><br>";
    }
    rand.innerHTML += str;
}