const filterBy = document.querySelector(".select-filter");
const ranking = document.querySelector("tbody");
const searchBar = document.querySelector(".search-bar");
const searchForm = document.querySelector(".search-form")
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
const seamaster = new watch(5422,2022,-2.45,-4.54,-12.43,"seamaster","omega");
const speedmaster = new watch(8888,2022,-2.45,-4.54,-12.43,"speedmaster","omega");
const daytona = new watch(34000, 2022, 1.2, 3.5, 12.43, "daytona", "rolex");
*/
let watches = [
new watch(5422,2022,-2.45,-4.54,-12.43,"seamaster","omega"),
new watch(8888,2022,-2.45,-4.54,-12.43,"speedmaster","omega"),
new watch(34000, 2022, 1.2, 3.5, 12.43, "daytona", "rolex"),
new watch(12500, 2023, -1.5, -2.1, -5.8, "Royal Oak", "Audemars Piguet"),
new watch(8500, 2023, -3.0, -4.8, -9.1, "Tank", "Cartier"),
new watch(7200, 2023, -1.0, -2.0, -4.0, "Nautilus", "Patek Philippe"),
new watch(9750, 2022, -2.8, -3.5, -8.2, "Big Bang", "Hublot"),
new watch(18000, 2023, -1.2, -2.9, -7.4, "Master Control", "Jaeger-LeCoultre"),
new watch(6200, 2022, -2.2, -3.4, -9.0, "Submariner", "Rolex"),
new watch(3600, 2023, -1.8, -3.1, -6.7, "Portofino", "IWC"),
new watch(14250, 2022, 0.8, 2.5, 5.3, "Aquaracer", "TAG Heuer"),
new watch(11000, 2023, -1.5, -2.8, -6.1, "Radiomir", "Panerai"),
new watch(28000, 2022, 1.0, 2.7, 5.6, "Royal Oak Offshore", "Audemars Piguet"),
];


//we need to read api to store each object accordingly.
/*
const testApi = await fetch("www.watchfolio.app/api/v1/watches")
//should return an array of watches

*/

/*for loop and push each watch.
watches.push(seamaster, speedmaster, daytona);
*/



class app {
  
  constructor() {
    filterBy.addEventListener("change", this._injectHtml);
    searchBar.addEventListener("keyup", this._autoSuggest.bind(this));
    searchForm.addEventListener("submit",this._loadPage())
    this._injectHtml();
  }

  _injectHtml() {
    let filter = filterBy.value;
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
        <td class="padding_zero"><div class="d3_miniGraph">insert graph here.</div></td>
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

    this._listenToClick();
  }

  _listenToClick(){
    let listElements = document.querySelectorAll(".list");

    listElements.forEach(list => {
      list.addEventListener("click", function(){
        searchBar.value = "";
        searchBar.value = this.textContent;
        autosuggestionList.innerHTML = "";
      })
    })
    
  }
  //helper
  _clear() {
    autosuggestionList.innerHTML = "";
  }

  _loadPage(){
    console.log("load")
  }

}

const myApp = new app();





