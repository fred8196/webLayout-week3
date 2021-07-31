"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HexSchool Hello!');
});
var store = document.querySelectorAll('.storeDetails');
store.forEach(function (item) {
  item.addEventListener("click", function (e) {
    window.location = "./store.html";
  });
});
//# sourceMappingURL=all.js.map
