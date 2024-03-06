setInterval(() => {
    let hr = document.querySelector("#hr")
    let min = document.querySelector("#min")
    let sec = document.querySelector("#sec")
    let gethr = new Date().getHours();
    let getmin = new Date().getMinutes();
    let getsec = new Date().getSeconds();
    hr.innerHTML = gethr;
    min.innerHTML = getmin;
    sec.innerHTML = getsec;
},1000)

