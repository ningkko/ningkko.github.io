 //shut down
   document.getElementById("poweroff").onclick=function(){
        document.getElementById('isOn').style.display="none";
        document.getElementById("off").style.visibility ="visible";
        document.getElementById('background').style.color="#feffa3";
    }
    
    
    var owl = document.getElementById('owl');
    owl.style.transform = "translate(-220px, 150px) scale(0.5)";
    var eye1 = document.getElementById('eye1_4');
    window.onmousemove = function(e){
        if (e.clientX > window.innerWidth/2 + 90) {
            eye1.style.left = "380px";
        }
        if (e.clientX < window.innerWidth/2 - 100) {
            eye1.style.left = "340px";
        }
        if ((e.clientX <= window.innerWidth/2 + 90) && (e.clientX >= window.innerWidth/2 - 100)) {
            eye1.style.left = "360px";
        }
        if (e.clientY > 170) {
            eye1.style.top = "40px";
        }
        if (e.clientY < 480) {
            eye1.style.top = "0px";
        }
        if ((e.clientY <= 480) && (e.clientY >= 170)) {
            eye1.style.top = "20px";
        }
    }

    const blobs = document.querySelectorAll(".blob");
    let last = 0;
    let changeSpeed = 1500;
    let rAF;

    function render(now) {
    if (!last || now - last >= changeSpeed) {
        last = now;
        blobs.forEach(blob => {
        blob.style.borderTopLeftRadius = `${random()}px ${random()}px`;
        blob.style.borderTopRightRadius = `${random()}px ${random()}px`;
        blob.style.borderBottomLeftRadius = `${random()}px ${random()}px`;
        blob.style.borderBottomRightRadius = `${random()}px ${random()}px`;
        });
    }
    rAF = requestAnimationFrame(render);
    }

    const random = () => {
    return Math.floor((Math.random() * 1000000));
    };

    render(last);

    const root = document.documentElement;

    const widthSlider = document.querySelector("#width-range");
    widthSlider.addEventListener("input", e => {
    root.style.setProperty('--width', e.target.value + "px");
    })
    const xSlider = document.querySelector("#x-range");
    xSlider.addEventListener("input", e => {
    root.style.setProperty('--x-speed', e.target.value + "s");
    })
    const ySlider = document.querySelector("#y-range");
    ySlider.addEventListener("input", e => {
    root.style.setProperty('--y-speed', e.target.value + "s");
    })
    const transitionSlider = document.querySelector("#transition-speed");
    transitionSlider.addEventListener("input", e => {
    root.style.setProperty('--transition-speed', e.target.value + "s");
    })
    const changeSlider = document.querySelector("#change-speed");
    transitionSlider.addEventListener("input", e => {
    cancelAnimationFrame(rAF);
    last = 0;
    render(last);
    changeSpeed = e.target.value;
    })