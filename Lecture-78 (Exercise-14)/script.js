

async function addItem(item) {
    await random_Delay();
    let div = document.createElement("div")
    div.style.margin = "24px 0px";
    div.innerHTML = item;
    document.querySelector(".container").append(div)
}

async function random_Delay() {
    return new Promise((resolve, reject) => {
        timeout = (Math.floor(Math.random() * 7 + 1)) * 1000;
        setTimeout(() => {
            resolve()
        }, timeout)
    })
}

async function main() {

    setInterval(() => {
        let last = document.querySelector(".container").lastElementChild
        if (last.textContent.endsWith("...")) {
            last.innerHTML = last.textContent.slice(0, last.innerHTML.length - 3);
        }
        else {
            last.innerHTML += ".";
        }

    }, 400);



    let message = ["Initializing Hacking",
        "Getting access to you data",
        "C:\Program Files\FxSound LLC",
        "C:\Program Files\Secured Files\ Passwords \jiofs \ asdfga",
        "Reading your Files",
        "Password Files Detected",
        "Sending all passwords and personal files to server",
        "Cleanig up"]


    for (const item of message) {
        await addItem(item)
    }
}


main()