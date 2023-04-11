const grid = document.querySelector(".project-items");
let iso = new Isotope(grid, {
  // options...
  itemSelector: ".project",
  layoutMode: "cellsByColumn",
});
