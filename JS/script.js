var btn = document.getElementById("btn");
var list = document.querySelector("#postlist");

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
        var nextPost = document.createElement("a");
        nextPost.className = "list-item is-size-4";
        nextPost["href"] = "https://www.reddit.com" + posts[i]["data"]["permalink"];
        nextPost.innerHTML = "Post #" + (i+1);
        list.appendChild(nextPost);
    }
}