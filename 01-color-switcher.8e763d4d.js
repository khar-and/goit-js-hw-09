const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let d=null;e.setAttribute("disabled",!0),t.addEventListener("click",(function(o){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(r){clearInterval(d),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.8e763d4d.js.map
