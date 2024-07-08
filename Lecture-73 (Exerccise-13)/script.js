function createCard(title, chName, views, monthsOld, duration, thumbnail){
    if (views>=1000 && views<1000000){
        var viewStr = views/1000 + "K"
    }
    else if(views>1000000){
        var viewStr = views/1000000 + "M"
    }
    
    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" height="120px">
                <div class="time">${duration}</div>
            </div>

            <div class="text">
                <h2>${title}</h2>
                <p>${chName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>
        `
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");