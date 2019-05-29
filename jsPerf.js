let target = document.getElementById("something");

let longStr = "";
for (let i = 0; i < 10000; i++){
  longStr += "<div id=\"record_" + i + "\" class=\"ch11 record\" st=0 dur=0 style=\"top: -1px; left:0px; width:1px; background-color:#1187ff; z-index:1\"></div>"
}

target.insertAdjacentHTML("beforeend", longStr);
