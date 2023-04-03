const filterBy = document.querySelector(".select-filter");
const ranking = document.querySelector(".ranking");

class watch {
  constructor(price, prodDate, svn, thrd, yr, name) {
    this.price = price;
    this.prodDate = prodDate;
    this.svn = svn;
    this.thrd = thrd;
    this.yr = yr;
    this.name = name;
  }
}

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
}

const seamaster = new omega(5422, 2022, -2.45, -4.54, -12.43, "seamaster");

let watches = [];
watches.push(seamaster);

class app {
  constructor() {
    filterBy.addEventListener("change", this._searchMatching.bind(this));
    this._injectHtml("price");
  }

  _searchMatching(e) {
    e.preventDefault();
    //console.log("switched");
    this._injectHtml(filterBy.value);
  }
  _injectHtml(filter) {
    ranking.innerHTML = ""; //clear everything.
    function helpMeSort(arr) {
      arr
        .sort((a, b) => b.price - a.price)
        .forEach((watch, index) => {
          let html = `
      <div class="col info">
        <p>${index + 1}</p>
        <p>${watch.type + " " + watch.name}</p>
        <p>${watch.prodDate}</p>
        <p>$${watch.price}</p>
    
        <p>${watch.svn}%</p>
        <p>${watch.thrd}%</p>
        <p>${watch.yr}%</p>
      </div>`;
          ranking.insertAdjacentHTML("beforeend", html);
        });
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
}

const myApp = new app();
