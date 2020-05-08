var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}



// const icons = {
//     clear: '🌧',
//     rain: '️🌧',
//     storm: '⛈',
//     snow: '🌨',
//     mist: '🌫',
//     clouds: '☁',
//   };

// fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {   
       
//     document.body.style.backgroundImage = `url("${response.url}")`;
//     document.body.style.backgroundRepeat= "no-repeat";
//     document.body.style.backgroundSize = "cover"
    
//   }) 


//   axios({
//     method: "get",
//     url: "http://api.openweathermap.org/data/2.5/weather?q=Jeddah&units=metric&APPID=28a2bd8eb9a1dd27589d6cdd509169e4"
// })
// .then(res => {
    
//   // console.log(res)
//   $(function() {
//     // document.body.innerHTML = '<h2 class="city"> ${res.data.main.temp}° <br> ${res.data.name}</h2>'
//    $('body').append(`<h2 class="city"> ${res.data.main.temp}° <br> ${res.data.name}</h2>`) 
//   })
   
//  //  $('body').append(`<h1 clsas="temper"> </h1>`) 
//   // let weather = res.data.weather.main;
  
  
//   let weather;
//  // console.log(res.data.weather)
//   res.data.weather.forEach(element => {
//       weather = element.main;
//   });

//   for(i in icons){
//   //  console.log(i)
//     if(i == weather.toLowerCase()){ 
//         $('body').append(`<h2 class="city"> ${(icons[i])} </h2>`) 
//     }

//   }
  
//   $('body').append(`<h1 class="time"> ${moment().format('LT')}</h1>`)
//   let date = new Date()
//   let now = date.getHours();
//   console.log(now)
//   if(now >= 12 || now <=17){
//     $('body').append(`<h3 class="ttext"> Good Afternoon </h3>`)

//   }else if(now >= 18 || now <=20){
//     $('body').append(`<h3 class="ttext"> Good Evening</h3>`)

//   }else if(now >= 21 || now <=23){
//     $('body').append(`<h3 class="ttext"> Good Night </h3>`)

//   }else{
//     $('body').append(`<h3 class="ttext"> Good Morning </h3>`)
//   }
 

// })
// .catch((error) => {
//     console.log(error);
// });



// axios({
//     method: "get",
//     url: "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
// })
// .then(re => {
//     console.log(re)
//   $('body').append(`<p class="quote"> "${re.data.quoteText}"</p>`)

// })
// .catch((error) => {
//     console.log(error);
// });
