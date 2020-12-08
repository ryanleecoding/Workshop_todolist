window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('ul').addEventListener('click', function () {
    var itemli = document.querySelectorAll('li');
    for (var i = 0; i < itemli.length; i++) {
      itemli[i].onclick = function () {
        this.classList.toggle('checked')
        console.log(this.className)
      }
    }
  })
})




