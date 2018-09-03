(function Loser() {
  this.losers = [];

  this.init = function () {
    this.addLoser();
  }

  this.addLoser = function () {
    let addBtn = document.querySelector("#add_loser")

    function addTheLoser(theLoser) {
      let input = theLoser.value.toLowerCase();
      let value = input.charAt(0).toUpperCase() + input.substr(1);
      theLoser.value = "";

      if (value === '') {
        console.log("empty")
      } else if (losers.indexOf(value) !== -1) {
        console.log("taken")
      } else {
        losers.push(value);
        this.losersList();
      }
    }

    addBtn.addEventListener("click", function (e) {
      let inputLoser = document.querySelector("#loser_value");
      addTheLoser(inputLoser);
    })
  }

  this.losersList = function () {
    let loserWrapper = document.querySelector(".loser_list_wrapper")
    let template = "";

    for (let loser in losers) {
      template += `<span class="loser_name" data-id="${loser}">${losers[loser]}</span>`
    }

    loserWrapper.innerHTML = "";
    loserWrapper.insertAdjacentHTML("afterbegin", template);
    this.deleteLoser();
  }

  this.deleteLoser = function () {
    let loserNames = document.querySelectorAll(".loser_name");

    function deleteSelectedLoser(selected) {
      let selectedUser = selected.getAttribute("data-id");
      console.log(selectedUser)
      losers.splice(selectedUser, 1);
      this.losersList();
    }

    for (let loserName of loserNames) {
      loserName.addEventListener("click", function () {
        deleteSelectedLoser(this)
      })
    }
  }

  this.init();
})()