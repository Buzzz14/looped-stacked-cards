const slider = document.querySelector(".slider");
const items = gsap.utils.toArray(".item");

function moveCard() {
  const lastItem = slider.querySelector(".item:last-child");

  if (slider && lastItem) {
    lastItem.style.display = "none";
    const newItem = document.createElement("img");
    newItem.className = lastItem.className;
    newItem.src = lastItem.src;
    slider.insertBefore(newItem, slider.firstChild);
  }
}

slider.addEventListener("click", (e) => {
  let state = Flip.getState(".item");
  //   console.log(state);

  moveCard();

  Flip.from(state, {
    ease: "sine.inOut",
    absolute: true,

    onEnter: (elements) => {
      return gsap.from(elements, {
        yPercent: 20,
        opacity: 0,
        ease: "expo.out",
      });
    },

    onLeave: (element) => {
      return gsap.to(element, {
        yPercent: 20,    
        xPercent: -20,    
        opacity: 0,
        ease: "expo.out",
        onComplete() {
          slider.removeChild(element[0]);
        },
      });

      //   return gsap.to(element, {
      //     rotation: 45,
      //     transformOrigin: "bottom right",
      //     opacity: 0,
      //     ease: "expo.out",
      //     onComplete() {
      //       slider.removeChild(element[0]);
      //     },
      //   });
    },
  });
});
