const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");e.setAttribute("disabled",!0),t.addEventListener("click",(function(o){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),colorid=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(r){clearInterval(colorid),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.28fed96f.js.map