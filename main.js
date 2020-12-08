window.addEventListener('DOMContentLoaded', function () {
  var itemLi = document.querySelectorAll('li')
  var itemSpan = document.querySelectorAll('span')
  var itemUl = document.querySelectorAll('ul')
  var span = document.querySelectorAll('.close')
  var addBtn = document.getElementById('addBtn')
  var inputvalue = document.getElementById('input')

  function addLi(obj) {
    var newLi = document.createElement("li");
    newLi.innerHTML = (obj + '<span class="close">x</span>')
    document.querySelector('ul').appendChild(newLi)
  }

  document.querySelector('li').addEventListener('click', function () {
    for (var i = 0; i < itemLi.length; i++) {
      itemLi[i].onclick = function () {
        this.classList.toggle('checked')
      }
    }
  })

  document.querySelector('.close').addEventListener('click',
    function () {
      for (var i = 0; i < itemLi.length; i++) {
        // if (itemLi[i]) {}
        span[i].onclick = function () {
          this.parentNode.remove()
        }
      }

    })



  addBtn.addEventListener('click', function () {
    var str = inputvalue.value
    addLi(str)
    inputvalue.value = ""
  })




})