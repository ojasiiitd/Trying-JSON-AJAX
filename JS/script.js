var btn = document.getElementById("btn");
var list = document.querySelector(".postlist");

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
    console.log(posts[0]);
    for(var i=0 ; i<posts.length ; i++)
    {
        var link = "https://www.reddit.com" + posts[i]["data"]["permalink"];
        var nextPost = document.createElement("li");
        nextPost.innerHTML = "<a class=\"has-text-link\" href=" + link + ">" + "Post #" + (i+1) + "</a>";
        list.appendChild(nextPost);
    }
}