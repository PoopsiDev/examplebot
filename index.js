const Discord = require(`discord.js`);
const client = new Discord.Client();

//grabs the bot config file from the utils folder, warning this is important to keep.
const config = require(`./Utils/botConfig.json`);
//lets you know the bot is online and working, if everything is working handy dandy
client.on(`ready`, () =>{
    console.log(`${client.user.username} is now online!`)
});
//Sets the bots status, change the example texts but keep "WATCHING", lets not over complicate things.
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
//in this command we grabbed the prefix from the bot config file using ${config.prefix}
//or you can just do this
    if (message.content === `!test`) {
        message.channel.send(`This is a test.`)
    }
//with this test command, the prefix is !, because we didn't grab the prefix from the bot config (${config.prefix}) the prefix is different.
});

//This lets you log in as the bot.
client.login(config.token);