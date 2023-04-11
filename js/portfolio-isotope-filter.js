const filterButtons = document.querySelectorAll(".filters__button");
const projectItems = document.querySelectorAll(".project");

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", onClickFilter);
});

function onClickFilter(e) {
  const buttonName = e.currentTarget.textContent.toLowerCase();
  //   console.log(buttonName);
  displayImages(buttonName);
}

function displayImages(buttonName) {
  projectItems.forEach((project) => {
    if (buttonName !== project.dataset.category)
      project.classList.add("hidden");
  });
}


