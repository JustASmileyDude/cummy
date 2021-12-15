const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');
const { MessageAttachment } = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'close',
	category: 'Ticket',
	description: 'Closes the ticket.',
	aliases: [],
	usage: 'close',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		if(message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			if(message.member.permissions.has('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
				message.channel.messages.fetch().then(async (messages) => {
                    message.channel.delete();
				});
			}
		}
		else {
			return message.reply('You cannot use this command here. Please use this command when you\'re closing a ticket.');
		}
	},
};