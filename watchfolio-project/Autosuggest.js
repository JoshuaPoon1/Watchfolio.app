const searchBar = document.querySelector(".searchbar")
const suggestion = document.querySelector(".suggestion"); //this is an ul

const watchNames = [
    "Rolex Submariner",
    "Rolex Daytona",
    "Rolex GMT-Master II",
    "Rolex Datejust",
    "Omega Speedmaster Professional",
    "Omega Seamaster Diver 300M",
    "Omega Constellation",
    "Omega De Ville Prestige",
    "TAG Heuer Carrera",
    "Breitling Navitimer",
    "IWC Portugieser",
    "Jaeger-LeCoultre Reverso",
    "Patek Philippe Nautilus",
    "Audemars Piguet Royal Oak",
    "Cartier Tank",
    "Panerai Luminor"
  ];

searchBar.addEventListener("keyup",()=>{
    clear();
    watchNames.forEach((watch)=>{
        if (watch.toLowerCase().startsWith(searchBar.value.toLowerCase()) && searchBar.value != ""){
            let html = `<li><b>${watch.substring(0,searchBar.value.length)}</b>${watch.substring(searchBar.value.length,watch.length)}</li>`
            /*make html with <a> tags with links according to api*/
            suggestion.insertAdjacentHTML("beforeend",html)
        }
    })
})

function clear(){
    suggestion.innerHTML = "";
}
