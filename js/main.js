function toggleCollapsible(elem, className) {
  return (event) => {
    elem.classList.toggle(className);
    return false;
  };
}

const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener(
    "click",
    toggleCollapsible(item, "collapsible--expanded")
  )
);
