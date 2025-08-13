import readline from "readline/promises";

const api_key="5f9a16fe44a47dc4735551da9dadc4b1";
    
const url =`https://api.openweathermap.org/data/2.5/weather`

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const city = rl.question(`Enter your city name: `);

await getWeather(city);
rl.close() 