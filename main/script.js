(function Loser() {
  this.init = function () {
    this.addLoser();
  }

  this.addLoser = function() {
    let addBtn = document.querySelector("#add_loser")


    addBtn.addEventListener("click", function (e) {
      console.log("click");
     })
  }

  this.init();
})()