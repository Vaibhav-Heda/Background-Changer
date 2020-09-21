const ranges = document.getElementsByClassName("range");
const outs = document.getElementsByTagName("output");
const hex = document.getElementById("hexCode");
const rgba = document.getElementById("rgba");
for(var i = 0 ; i < ranges.length ; i++)
{
    const range = ranges[i];
    const bubble = outs[i];
    range.addEventListener("input", () => {
        bubble.innerHTML = range.value;
        changeBg();
      });
      bubble.innerHTML = range.value;
      
}
function rgb2hex(rgb){
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function changeBg()
{
    var red = ranges[0].value;
    var green = ranges[1].value;
    var blue = ranges[2].value;
    var alhpa = ranges[3].value;
    var otpt = "rgba("+red+","+green+","+blue+","+alhpa+")";
    document.body.style.background = otpt;
    hex.innerHTML =rgb2hex(otpt);
    rgba.innerHTML = otpt;
}

