console.log('JS Initilises');

const addData = async (data) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = data;
    document.body.append(div);
}

const randomDelay = () => {

    return new Promise((resolve, reject) => {
        timeout = Math.random() * 6 + 1;
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    })
}

async function main(){
    let t = setInterval(() => {
        let last = document.body.lastElementChild;
        if (last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0 , last.innerHTML.length-3)
        }
        else{
            last.innerHTML = last.innerHTML+".";
        }

    }, 700);

    let text = ["Hacking Initiated",
    "Scanning Files",
    "Files Detected",
    "Uploading All Files to Server",
    "Cleaning Up "];
    
    for (const data of text) {
       await addData(data);
    }

    await randomDelay()
        clearInterval (t); 
}

main();