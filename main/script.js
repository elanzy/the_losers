(function Loser() {
  this.losers = [];

  this.init = function () {
    this.addLoser();
  }

  this.addLoser = function () {
    let addBtn = document.querySelector("#add_loser")
    let loserValue = document.querySelector("#loser_value");

    function addTheLoser() {
      let input = loserValue.value;
      loserValue.value = "";
      losers.push(input);
      this.loserList();
    }

    addBtn.addEventListener("click", function (e) {
      addTheLoser();
    })
  }

  this.loserList = function () {
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