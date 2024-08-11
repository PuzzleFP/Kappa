import { Client, Events, GatewayIntentBits } from "discord.js"

import { 
	UserJoined,
	UserLeft, 
	ChannelCreated,
	ChannelDeleted,
	MessageDeleted,
	InviteCreated
} from "GuildActions"

const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.DirectMessages,
	GatewayIntentBits.GuildInvites,
	GatewayIntentBits.GuildMembers
] })

function ClientInitialized() {
	client.on(Events.InteractionCreate, HandleInteractions)
	client.on(Events.GuildMemberAdd, UserJoined)
	client.on(Events.GuildMemberRemove, UserLeft)
	client.on(Events.ChannelCreate, ChannelCreated)
	client.on(Events.ChannelDelete, ChannelDeleted)
	client.on(Events.MessageDelete, MessageDeleted)
	client.on(Events.InviteCreate, InviteCreated)
}

client.on(Events.ClientReady, ClientInitialized)
