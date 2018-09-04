(function Loser() {
  this.losers = [];

  this.init = function () {
    this.addLoser();
    this.showTheLoser();
    this.runAgain();
    this.startAgain();
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
      losers.splice(selectedUser, 1);
      this.losersList();
    }

    for (let loserName of loserNames) {
      loserName.addEventListener("click", function () {
        deleteSelectedLoser(this)
      })
    }
  }

  this.showLoserResult = function () {
    let resultWrapper = document.querySelector(".result");
    let randomLoser = losers[Math.floor(Math.random() * losers.length)]
    resultWrapper.innerHTML = `<span>${randomLoser}</span>`;
  }

  this.showTheLoser = function () {
    let showTheLoserBtn = document.querySelector("#show_results");
    let loserContainer = document.querySelector(".loser_container");
    let resultsContainer = document.querySelector(".results_container");

    showTheLoserBtn.addEventListener("click", function () {
      if (losers.length > 1) {
        loserContainer.classList.add("hidden");
        resultsContainer.classList.remove("hidden");
        showLoserResult();
      } else {
        console.log("Losers list has less than or equal to one entry")
      }
    })
  }

  this.runAgain = function () {
    let runAgainBtn = document.querySelector(".run_again")

    runAgainBtn.addEventListener("click", function () {
      showLoserResult();
    })
  }

  this.startAgain = function () {
    let startAgainBtn = document.querySelector(".start_again");
    let loserContainer = document.querySelector(".loser_container");
    let resultsContainer = document.querySelector(".results_container");
    let loserWrapper = document.querySelector(".loser_list_wrapper");

    startAgainBtn.addEventListener("click", function () {
      loserContainer.classList.remove("hidden");
      resultsContainer.classList.add("hidden");
      loserWrapper.innerHTML = "";
      losers = [];
    })
  }

  this.init();
})()