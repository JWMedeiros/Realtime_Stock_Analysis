let stockContainer = document.querySelector("#display-stocks");
let historyContainer = document.querySelector("history-container");
let displayCharts = document.querySelector("display-charts");
let input = document.querySelector("#input")
let stockCounter=0;
let xValues = [];
let currentPriceValues = [];
let dayOpenValues=[];
let dayHighValues=[];

//Sadegh Function

function makeStock(searchContent){
    fetch('https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=HfXDawpiXH7vBTzXXigj7jK4WMvzGEMcEV0F6Ssm')
    .then(function(response){
        return response.json();
        console.log(response)
    })
    .then(function(data){
        console.log(data);
        let container = document.createElement("section")
        container.classList.add("stock","card");

        let nameEl= data.data['0']['name'];
        //console.log(nameEl);
        let stname = document.createElement("h3");
        stname.textContent = nameEl;
        //console.log(stname);
        container.appendChild(stname);

        let ticker = data.data['0']['ticker'];
        let tickerName = document.createElement("h5");
        tickerName.textContent=ticker;
        container.appendChild(tickerName);

        let currentPrice = data.data['0']['price'];
        let cPrice =document.createElement("h5");
        cPrice.textContent = currentPrice;
        container.appendChild(cPrice);

        let currency =data.data['0']['currency'];
        let crncy = document.createElement("h5");
        crncy.textContent = currency;
        container.appendChild(crncy);

        let dayClose = data.data['0']['previous_close_price'];
        let dClose = document.createElement("h5");
        dClose.textContent = dayClose;
        container.appendChild(dClose);


        let dayOpen =data.data['0']['day_open'];
        let dOpen = document.createElement("h5");
        dOpen.textContent = dayOpen;
        container.appendChild(dOpen);

        let dayHigh = data.data['0']['day_high'];
        let dHigh = document.createElement("h5");
        dHigh.textContent = dayHigh;
        container.appendChild(dHigh);

        let dayLow = data.data['0']['day_low'];
        let dLow = document.createElement("h5");
        dLow.textContent = dayLow;
        container.appendChild(dLow);

        let volume = data.data['0']['volume'];
        let Vlume = document.createElement("h5");
        Vlume.textContent = volume;
        container.appendChild(Vlume);

        stockContainer.appendChild(container)
    });
    stockCounter++;
    xValues.push(searchContent);
    currentPriceValues.push(currentPrice);
    dayOpenValues.push(dayOpen);
    dayHighValues.push(dayHigh);

    //Call Graph functions with x values and respective y values

}



function replaceStock(searchContent){
    fetch('https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=HfXDawpiXH7vBTzXXigj7jK4WMvzGEMcEV0F6Ssm')
    .then(function(response){
        return response.json();
        console.log(response)
    })
    .then(function(data){
        let stocks = stockContainer.querySelectorAll("section");
        if (stockCounter%3===0){
            let nameEl= data.data['0']['name'];
            stocks[0].children[0].textContent=nameEl;

            let ticker = data.data['0']['ticker'];
            stocks[0].children[1].textContent=ticker;

            let currentPrice = data.data['0']['price'];
            stocks[0].children[2].textContent=currentPrice;

            let currency =data.data['0']['currency'];
            stocks[0].children[3].textContent=currency;

            let dayClose = data.data['0']['previous_close_price'];
            stocks[0].children[4].textContent=dayClose;

            let dayOpen =data.data['0']['day_open'];
            stocks[0].children[5].textContent=dayOpen;

            let dayHigh = data.data['0']['day_high'];
            stocks[0].children[6].textContent=dayHigh;

            let dayLow = data.data['0']['day_low'];
            stocks[0].children[7].textContent=dayLow;

            let volume = data.data['0']['volume'];
            stocks[0].children[8].textContent=volume;

            xValues[0]=searchContent;
            currentPriceValues[0]=currentPrice;
            dayOpenValues[0]=dayOpen;
            dayHighValues[0]=dayHigh;
            //Call Graph functions again
        }
        else if (stockCounter%3===1){
            let nameEl= data.data['0']['name'];
            stocks[1].children[0].textContent=nameEl;

            let ticker = data.data['0']['ticker'];
            stocks[1].children[1].textContent=ticker;

            let currentPrice = data.data['0']['price'];
            stocks[1].children[2].textContent=currentPrice;

            let currency =data.data['0']['currency'];
            stocks[1].children[3].textContent=currency;

            let dayClose = data.data['0']['previous_close_price'];
            stocks[1].children[4].textContent=dayClose;

            let dayOpen =data.data['0']['day_open'];
            stocks[1].children[5].textContent=dayOpen;

            let dayHigh = data.data['0']['day_high'];
            stocks[1].children[6].textContent=dayHigh;

            let dayLow = data.data['0']['day_low'];
            stocks[1].children[7].textContent=dayLow;

            let volume = data.data['0']['volume'];
            stocks[1].children[8].textContent=volume;

            xValues[1]=searchContent;
            currentPriceValues[1]=currentPrice;
            dayOpenValues[1]=dayOpen;
            dayHighValues[1]=dayHigh;
            // Call Graph functions
        }
        else{
            let nameEl= data.data['0']['name'];
            stocks[2].children[0].textContent=nameEl;

            let ticker = data.data['0']['ticker'];
            stocks[2].children[1].textContent=ticker;

            let currentPrice = data.data['0']['price'];
            stocks[2].children[2].textContent=currentPrice;

            let currency =data.data['0']['currency'];
            stocks[2].children[3].textContent=currency;

            let dayClose = data.data['0']['previous_close_price'];
            stocks[2].children[4].textContent=dayClose;

            let dayOpen =data.data['0']['day_open'];
            stocks[2].children[5].textContent=dayOpen;

            let dayHigh = data.data['0']['day_high'];
            stocks[2].children[6].textContent=dayHigh;

            let dayLow = data.data['0']['day_low'];
            stocks[2].children[7].textContent=dayLow;

            let volume = data.data['0']['volume'];
            stocks[2].children[8].textContent=volume;

            xValues[2]=searchContent;
            currentPriceValues[2]=currentPrice;
            dayOpenValues[2]=dayOpen;
            dayHighValues[2]=dayHigh;

            //Call Graph functions
        }
    });
    stockCounter++;
}

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
