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

const seamaster = new watch(5422,2022,-2.45,-4.54,-12.43,"seamaster","omega");
const speedmaster = new watch(8888,2022,-2.45,-4.54,-12.43,"speedmaster","omega");
const daytona = new watch(34000, 2022, 1.2, 3.5, 12.43, "daytona", "rolex");

let watches = [];

//we need to read api to store each object accordingly.
/*
const testApi = await fetch("www.watchfolio.app/api/v1/watches")
//should return an array of watches

*/

//for loop and push each watch.
watches.push(seamaster, speedmaster, daytona);



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
    
    /*helper function*/
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
    /*--------*/

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
  _clear() {
    autosuggestionList.innerHTML = "";
  }

  _loadPage(){
    console.log("load")
  }

}
const myApp = new app();



