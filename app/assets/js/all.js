console.log('Hello!');

$(document).ready(() => {
  console.log('HexSchool Hello!');
});

const store = document.querySelectorAll('.storeDetails')
store.forEach(function (item) {
  item.addEventListener("click",function (e) {
    window.location="./store.html"
  })
})
