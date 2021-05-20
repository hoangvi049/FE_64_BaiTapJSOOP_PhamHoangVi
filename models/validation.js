function Validation() {
  this.kiemtraRong = function (value, selectorError, element) {
    if (value.trim() != "") {
      document.querySelector(selectorError).style.display = "none";
      document.querySelector(selectorError).value = "";
      return true;
    }
    document.querySelector(selectorError).style.display = "block";
    document.querySelector(selectorError).innerHTML =
      "Vui lòng nhập" + " " + element;

    return false;
  };
}
