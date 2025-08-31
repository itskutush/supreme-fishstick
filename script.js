document.addEventListener("scroll", () => {
    const layers = document.querySelectorAll(".layer");
    let scrollTop = window.scrollY;
  
    layers.forEach(layer => {
      let speed = layer.getAttribute("data-speed");
      layer.style.transform = `translateY(${scrollTop * speed}px)`;
    });
  });
  