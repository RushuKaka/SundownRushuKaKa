
function page4animation() {
  var elemC = document.querySelector("#elem-con")
  var fixed = document.querySelector("#fixed-image")
  elemC.addEventListener('mouseenter', function () {
    fixed.style.display = "block"
  })
  elemC.addEventListener('mouseleave', function () {
    fixed.style.display = "none"
  })

  var elems = document.querySelectorAll(".elem")
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image")
      fixed.style.backgroundImage = `url(${image})`
    })
  })
}

function loaderanimation(){
var loader = document.querySelector("#loder")
setTimeout(function(){
  loader.style.top = "-100%"
},4200)
}  



loaderanimation()
page4animation()
