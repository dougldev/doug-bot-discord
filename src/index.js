import { ActivityType, Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () =>{
    client.user.setActivity("dougbot here!", {type: ActivityType.Streaming})
});

client.login(process.env.TOKEN)