!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");e.setAttribute("disabled",!0),t.addEventListener("click",(function(r){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),colorid=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(o){clearInterval(colorid),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.d91bcd0e.js.map
