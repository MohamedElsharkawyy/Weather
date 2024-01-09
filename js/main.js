"use strict";

let searchInput=document.querySelector('#search')
let btn=document.querySelector("#btn")


searchInput.addEventListener('input', function(){
  getData(searchInput.value)
})


async function getData(key) {
  let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6cde038a90374d8095a235136233112&q=${key}&days=3`)
  let res = await data.json()
  display(res)
}



function display(weather) {
  let box =`
   <div class="col-lg-4 col-md-12  " >
                    <div class="first-box">
                      <div class="header d-flex justify-content-between">
                        <h3 class="day">${new Date(
                          weather.forecast.forecastday[0].date
                        ).toLocaleDateString("en", { weekday: "long" })}</h3>
                        <h3 class="data">${
                          new Date(weather.location.localtime).toLocaleDateString("en", {
                            day: "2-digit",
                          }) +
                          new Date(weather.location.localtime).toLocaleDateString("en", {
                            month: "long",
                          })
                        }</h3>
                      </div>
                      <div class="body">
                        <h3>${weather.location.name}</h3>
                        <div class="dagree d-flex">
                          <h4>${weather.current.temp_c}<sup>o</sup>C</h4>
                          <div class="img">
                            <img src=${weather.current.condition.icon} alt="">
                          </div>
                        </div>
                        <p>${weather.current.condition.text}</p>
                        <span><img src="img/icon-umberella.png" alt="">${
                          weather.current.wind_degree
                        }%</span>
                <span><img src="img/icon-wind.png" alt="">${
                  weather.current.wind_kph
                }km/h</span>
                <span><img src="img/icon-compass.png" alt="">${
                  weather.current.wind_dir
                }</span>
                      </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12  ">
                  <div class="second-box text-center">
                    <div class="header">
                      <h3>${new Date(
                        weather.forecast.forecastday[1].date
                      ).toLocaleDateString("en", {
                        weekday: "long",
                      })}</h3>
                    </div>
                    <div class="body">
                      <img src=${weather.forecast.forecastday[1].day.condition.icon} alt="">
                      <h4>${weather.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h4>
                      <p>${weather.forecast.forecastday[1].day.condition.text}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12  ">
                  <div class="last-box text-center">
                    <div class="header">
                      <h3>${new Date(
                        weather.forecast.forecastday[2].date
                      ).toLocaleDateString("en", {
                        weekday: "long",
                      })}</h3>
                    </div>
                    <div class="body">
                      <img src=${weather.forecast.forecastday[2].day.condition.icon} alt="">
                      <h4>${weather.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h4>
                      <p>${weather.forecast.forecastday[2].day.condition.text}</p>
                    </div>
                  </div>
                </div>
  `
  document.querySelector('#displayWeather').innerHTML=box
}
getData("egypt")