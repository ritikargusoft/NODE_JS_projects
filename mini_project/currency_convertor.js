import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apiKey ='533cfd9a52fd7abf6b628145'
const url = `https://v6.exchangerate-api.com/v6/533cfd9a52fd7abf6b628145/latest/USD`

const convertCurrency = (amount,rate)=>{
    return(amount * rate).toFixed(2)
}

https.get(url, (response)=>{
    let data = "";
response.on('data',(chunk)=>{
    data += chunk
})
response.on('end', ()=>{
    const rates = JSON.parse(data).conversion_rates
    

    rl.question('Enter the amount in USD:',(amount) =>{
        rl.question('Enter the target currency(e.g., INR, EUR):', 
            (currency)=>{
                const rate = rates[currency.toUpperCase()];
                if(rate){
                    console.log(chalk.blue.bgRed.bold(`${amount} USD is approximately ${convertCurrency(amount,rate)} ${currency}`))
                }
                else{
                    console.log(`Invalid currency code`)
                }
                rl.close()
        })
    })
})
})