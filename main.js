const scrollDownButton = document.getElementById("scroll-down-button");
const targetElement = document.getElementById("target-element");

scrollDownButton.addEventListener("click", () => {
  targetElement.scrollIntoView({
    behavior: "smooth",
  });
});
