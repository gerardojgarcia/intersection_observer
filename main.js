let options = {
  root: document.querySelector("main"),
  rootMargin: "0px",
  threshold: 1.0
}


let observer = new IntersectionObserver(callback, options)

let target = document.querySelector('#nav')


observer.observe(target)
