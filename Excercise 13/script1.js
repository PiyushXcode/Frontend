console.log('JS Initilises');


function card(title,cName,views,months,duration,thumbnail){

    let viewStr
    if(views<1000){
        viewStr = views;
    }
    else if(views>1000000){
        viewStr = views/1000000 + "M";
    }
    else {
        viewStr = views/1000 + "K";
    }
    let data= ` <div class="card">
    <div class="image"><img src=${thumbnail}alt="">
    <div class="capsule">${duration}</div></div>
    <div class="text">
        <h3>${title}</h3>
        <p>${cName}. ${viewStr} views . ${months}months ago </p>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + data;
}


card("Introduction to Backend | Sigma Web Development #2","codeWithharry",546000,10,"23:12","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ" )


