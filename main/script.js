(function Loser() {
  this.losers = [];

  this.init = function () {
    this.addLoser();
  }

  this.addLoser = function () {
    let addBtn = document.querySelector("#add_loser")

    function addTheLoser(theLoser) {
      let value = theLoser.value;
      theLoser.value = "";

      if (value === '') {
        console.log("empty")
      } else if (losers.indexOf(value) !== -1) {
        console.log("taken")
      } else {
        losers.push(value);
        this.losersList();
        console.log(losers);
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

    for (loser of losers) {
      template += `<span class="loser_name" data-id="">${loser}</span>`
    }

    loserWrapper.innerHTML = "";
    loserWrapper.insertAdjacentHTML("afterbegin", template);
  }

  this.init();
})()