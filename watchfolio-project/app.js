const filterBy = document.querySelector(".select-filter");
const ranking = document.querySelector("tbody");
const searchBar = document.querySelector(".search-bar");
const autosuggestionList = document.querySelector(".autosuggestion-list");

class watch {
  constructor(price, prodDate, svn, thrd, yr, name, type) {
    this.price = price;
    this.prodDate = prodDate;
    this.svn = svn;
    this.thrd = thrd;
    this.yr = yr;
    this.type = type;
    this.name = this.type + " " + name;
  }
}
/*
class rolex extends watch {
  constructor(price, prodDate, svn, thrd, yr, name) {
    super(price, prodDate, svn, thrd, yr, name);
    this.type = "rolex";
  }
}
class omega extends watch {
  constructor(price, prodDate, svn, thrd, yr, name) {
    super(price, prodDate, svn, thrd, yr, name);
    this.type = "omega";
  }
}*/

const seamaster = new watch(5422,2022,-2.45,-4.54,-12.43,"seamaster","omega");
const speedmaster = new watch(8888,2022,-2.45,-4.54,-12.43,"speedmaster","omega");
const daytona = new watch(34000, 2022, 1.2, 3.5, 12.43, "daytona", "rolex");

let watches = [];

//we need to read api to store each object accordingly.

//for loop and push each watch.
watches.push(seamaster, speedmaster, daytona);

let filter;

class app {
  constructor() {
    filterBy.addEventListener("change", this._injectHtml);
    searchBar.addEventListener("keyup", this._autoSuggest.bind(this));
    this._injectHtml("price");
  }

  _injectHtml() {
    filter = filterBy.value;
    ranking.innerHTML = ""; //clear everything.
    function helpMeSort(arr) {
      let html = arr.sort((a, b) => b.price - a.price).map((watch, index) => {
          return `
      <tr>
        <td>${index + 1}</td>
        <td>${watch.name}</td>
        <td>${watch.prodDate}</td>
        <td>$${watch.price}</td>
    
        <td>${watch.svn}%</td>
        <td>${watch.thrd}%</td>
        <td>${watch.yr}%</td>
        <td>NULL</td>
      </tr>`;
        }).join("");
      ranking.insertAdjacentHTML("beforeend", html);
    }

    if (filter == "omega" || filter == "rolex") {
      let brandFiltered = watches.filter((watch) => watch.type === filter);
      helpMeSort(brandFiltered);
    }
    if (filter == "price") {
      helpMeSort(watches);
    }
    if (filter == "biggestGainers") {
      //sort by gainers.
    }
    if (filter == "biggestLosers") {
      //sort by losers
    }
  }

  _autoSuggest() {
    this._clear();
    watches.forEach((watch) => {
      if (watch.name.toLowerCase().startsWith(searchBar.value.toLowerCase()) && searchBar.value != "") {
        let htmlString = `<li class="list"><b>${watch.name.substring(0,searchBar.value.length)}</b>${watch.name.substring(searchBar.value.length, watch.length)}</li>`;
        autosuggestionList.insertAdjacentHTML("beforeend", htmlString);
      }
    });
  }
  _clear() {
    autosuggestionList.innerHTML = "";
  }
}

const myApp = new app();

//export {watches}
