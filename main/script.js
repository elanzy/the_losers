(function Loser() {
  this.losers = [];

  this.init = function () {
    this.addLoser();
  }

  this.addLoser = function() {
    let addBtn = document.querySelector("#add_loser")
    let loserValue = document.querySelector("#loser_value");

    function addTheLoser() {
      let input = loserValue.value;
      loserValue.value = "";

      losers.push(input);
     }

    addBtn.addEventListener("click", function (e) {
      addTheLoser();
     })
  }

  this.init();
})()