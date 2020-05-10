const icons = {
    clear: '🌧',
    rain: '️🌧',
    storm: '⛈',
    snow: '🌨',
    mist: '🌫',
    clouds: '☁',
  };

    // var text = document.body.createElement("P");                       
    // var t = document.body.createTextNode("Test."); 
    // document.body.getElementById("date").append(text.appendChild(t));

    // document.body.getElementById("weather").append(` °  ll`) 
  

fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {   
       
    document.body.style.backgroundImage = `url("${response.url}")`;
    document.body.style.backgroundRepeat= "no-repeat";
    document.body.style.backgroundSize = "cover"
    
  }).catch((error) => {
    console.log(error);
});



  fetch(`http://api.openweathermap.org/data/2.5/weather?q=Jeddah&units=metric&APPID=28a2bd8eb9a1dd27589d6cdd509169e4`)
  .then((response) => {       

    document.body.getElementById("weather").append(` ${response.data.main.temp}° <br> ${response.data.name}`) 

  let weather;
 // console.log(res.data.weather)
  res.data.weather.forEach(element => {
      weather = element.main;
  });

  for(i in icons){
  //  console.log(i)
    if(i == weather.toLowerCase()){
       
      document.body.append(`<h2 class="h2home"> ${(icons[i])} </h2>`) 

    }
  }
  
  document.body.append(`<h1 class="time"> ${moment().format('LT')}</h1>`)
  let date = new Date()
  let now = date.getHours();
  console.log(now)
  if(now >= 12 || now <=17){
    document.body.append(`<h3 class="ttext"> Good Afternoon </h3>`)

  }else if(now >= 18 || now <=20){
    document.body.append(`<h3 class="ttext"> Good Evening</h3>`)

  }else if(now >= 21 || now <=23){
    document.body.append(`<h3 class="ttext"> Good Night </h3>`)

  }else{
    document.body.append(`<h3 class="ttext"> Good Morning </h3>`)
  }
 
  
}).catch((error) => {
    console.log(error);
});



fetch(`https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`)
.then(response => {
  console.log(re)
  document.body.append(`<p class="quote"> "${response.data.quoteText}"</p>`)

})
.catch((error) => {
  console.log(error);
});

// axios({
//     method: "get",
//     url: "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
// })
// .then(re => {
//     console.log(re)
//   $(document).append(`<p class="quote"> "${re.data.quoteText}"</p>`)

// })
// .catch((error) => {
//     console.log(error);
// });
