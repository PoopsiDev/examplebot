const Discord = require(`discord.js`);
const client = new Discord.Client();

//grabs the bot config file from the utils folder
const config = require(`./Utils/botConfig.json`);
//lets you know the bot is online and working, if everything is working handy dandy
client.on(`ready`, () =>{
    console.log(`${client.user.username} is now online!`)
});
//Sets the bots status
client.on("ready", async ()=> {
    try{
        
        function pickStatus() {
            //the status changes every 5 seconds
            let status = [`random example text`, `${config.prefix}help for help!`,`Example text`]
            let Status = Math.floor(Math.random() * status.length);
            client.user.setActivity(status[Status], {
                type: "WATCHING"
            });
        };
        setInterval(pickStatus, 5000);
    } catch (err) {
        console.log(err);
    }
});
//basic command to say hello back, check the bot config for the preifx
client.on(`message`, message => {
    if (message.content === `${config.prefix}hello`) {
        message.channel.send(`Hello ${message.author.username}`);
    }
});

//This lets you log in as the bot
client.login(config.token);