let stockContainer = document.querySelector("#display-stocks");
let historyContainer = document.querySelector("history-container");
let displayCharts = document.querySelector("display-charts");
let input = document.querySelector("#input")


fetch('https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=HfXDawpiXH7vBTzXXigj7jK4WMvzGEMcEV0F6Ssm')
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

function launchModal(tickerName){
    let url = "https://api.marketaux.com/v1/news/all?symbols="+tickerName+"&filter_entities=true&language=en&api_token=Y2d4RvCZU75JlG2keugvRhdhBHnOEwNPS37VqFVe";
    fetch(url)
        .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                let modalBody=document.querySelector(".modal-body");
                let modalTitle=document.querySelector(".modal-title");
                modalTitle.textContent="Breaking News for: "+data.data[0].entities[0].name;
                //Gets 3 highlights, and adds the titles as HREFs to the actual papers
                for (let i=0;i<data.data.length;i++){
                    let link =document.createElement("a");
                    link.setAttribute("href", data.data[i].url);
                    link.textContent=(data.data[i].description);
                }
            });
        } else {
            console.log('Error: ' + response.statusText);
        }
        })
        .catch(function (error) {
        console.log("unable to connect to API")
    });
}
