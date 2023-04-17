# Watchfolio.app
Web app that scrapes the web for watch prices and compiles them to interactive graphs.
Rankable by: Brand, Gainers, Losers.


Currently building restful api.
Need to implement mongoDB aggregation. get the average of all the watches listed, upload it to a csv file everyday, and using d3 js, create an index.

Listen to change for select, then update temp array to 

let arr = await fetch(`api/v1/${select.value}'), 
