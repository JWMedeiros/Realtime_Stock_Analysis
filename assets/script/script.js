let stockContainer = document.querySelector("#display-stocks");
let historyContainer = document.querySelector("history-container");
let displayCharts = document.querySelector("display-charts");
let input = document.querySelector("#input")


fetch('https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=fLe0IWMWpZAATCc7dH3iWvjOMAt8dayRydHnT94V')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let nameEl= data.data['0']['name'];
    //console.log(nameEl);
    let stname = document.createElement("h3");
    stname.textContent = nameEl;
    //console.log(stname);
    stockContainer.appendChild(stname);

    let ticker = data.data['0']['ticker'];
    let tickerName = document.createElement("h5");
    tickerName.textContent=ticker;
    stockContainer.appendChild(tickerName);

    let currentPrice = data.data['0']['price'];
    let cPrice =document.createElement("h5");
    cPrice.textContent = currentPrice;
    stockContainer.appendChild(cPrice);

    let currency =data.data['0']['currency'];
    let crncy = document.createElement("h5");
    crncy.textContent = currency;
    stockContainer.appendChild(crncy);

    let dayClose = data.data['0']['previous_close_price'];
    let dClose = document.createElement("h5");
    dClose.textContent = dayClose;
    stockContainer.appendChild(dClose);


    let dayOpen =data.data['0']['day_open'];
    let dOpen = document.createElement("h5");
    dOpen.textContent = dayOpen;
    stockContainer.appendChild(dOpen);

    let dayHigh = data.data['0']['day_high'];
    let dHigh = document.createElement("h5");
    dHigh.textContent = dayHigh;
    stockContainer.appendChild(dHigh);

    let dayLow = data.data['0']['day_low'];
    let dLow = document.createElement("h5");
    dLow.textContent = dayLow;
    stockContainer.appendChild(dLow);

    let volume = data.data['0']['volume'];
    let Vlume = document.createElement("h5");
    Vlume.textContent = volume;
    stockContainer.appendChild(Vlume);

});