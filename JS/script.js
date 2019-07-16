var btn = document.getElementById("btn");
var list = document.querySelector("#postlist");
var gotData = false;

btn.addEventListener("click" , function() 
{
    if(gotData)
    {
        console.log("No more data to fetch");
        return ;
    }
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
        var curpost = posts[i]["data"];

        var nextPost = document.createElement("div");
        nextPost.className = "list-item";
        
        var link = document.createElement("a");
        link.className = "is-size-4";
        link["href"] = "https://www.reddit.com" + curpost["permalink"];
        link.innerHTML = "Post #" + (i+1) + " by : r/" + curpost["author"];
        nextPost.appendChild(link);
        
        var basicInfo = document.createElement("p");
        var str = "Created : " + unixTimeConverter(curpost["created"]) + "<br>";
        str += "Type : " + (curpost["link_flair_css_class"] || "Miscellaneous") + "<br>";
        str += "Upvotes : " + curpost["score"] + "<br>";
        str += "Description : " + (curpost["title"] || "None") + "<br>";
        basicInfo.innerHTML = str;
        nextPost.appendChild(basicInfo);
        
        list.appendChild(nextPost);
    }
    gotData = true;
}

function unixTimeConverter(unixTime)
{
    var date = new Date(unixTime * 1000);
    return(date);
}