const Discord = require("discord.js")

require("dotenv").config()

const TOKEN = "OTI5NzE0NDI2OTM0ODY1OTYw.YdrWCA.joUx9hwA-GQOYevZEOLWO1YbGcA"

const generateImage = require("./generateImage")


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`STARTED!`)
    console.log(`Logged in as ${client.user.tag}`)
    console.log(`Made By BIN$#9872`)
    client.user.setActivity("Normaler Bot lul")
})


client.on("messageCreate", (message) => {
    if (message.content == "!test"){
        message.reply("Test bestanden!")
    }
})

const welcomeChannelId = "926802595358605392"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})












client.login(process.env.TOKEN)