!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector(".form"),u=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');function c(e,n){var t={position:e,delay:n};return console.log("Start"),console.log(e),console.log(n),new Promise((function(e,o){setTimeout((function(){Math.random()>.3?e(t):o(t)}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();var n=Number(u.value),t=Number(a.value),o=Number(l.value);if(n<0||t<0||o<=0)return void r.Notify.failure("❌ \nThe values ​​entered in the text fields must be greater than 0");for(var i=1;i<=o;i+=1)c(i,n).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=t}))}();
//# sourceMappingURL=03-promises.9061add1.js.map