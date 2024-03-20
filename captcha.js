const reloadButton= document.getElementById("reload-button");
const captcha=document.getElementById("captcha-image")
reloadButton.addEventListener(onclick,function(){
  captcha.setAttribute("src", "https://goapsbe.iisc.ac.in/api/public/captcha?t=1710925874671");
})
