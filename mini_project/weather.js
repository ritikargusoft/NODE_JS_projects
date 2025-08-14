import readline from "readline/promises";

const api_key="5f9a16fe44a47dc4735551da9dadc4b1";
    
const base_url =`https://api.openweathermap.org/data/2.5/weather`

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getWeather = async(city)=>{
    const url = `${base_url}?q=${city}&appid=${api_key}&units=metric`
try{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('City not found. Please check the city name.');

    }
    const weatherData = await response.json()
    
    console.log(`\nWeather Information:`);
    console.log(`City: ${weatherData.name} `);
    console.log(`Temperature: ${weatherData.main.temp}°C `);
    console.log(`Description: ${weatherData.weather[0].description}`)
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`)
}
catch(error){
    console.log(error);
}

}
const city = await rl.question(`Enter your city name: `);
await getWeather(city);
rl.close() 