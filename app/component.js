export default (deaultText = "just starting") => {
  const element = document.createElement("div");
  element.innerHTML = deaultText;
  return element;
};
