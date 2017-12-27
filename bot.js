const Discord = require("discord.js");
const processExists = require('process-exists');
var ps = require('ps-node');
var prefix = "!";
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'check') {
    msg.channel.send('Checking CSGO server....');
	processExists('srcds_run').then(exists => {
	if (exists === true){
    console.log("Server is running...");
	msg.channel.send('The CSGO server is running');
	return;
	}
	if (exists === false){
	console.log("Server is NOT running...");
	msg.channel.send('The CSGO server is DOWN. <@184943705797558272> will get right onto fixing it ASAP.');
	return;
	}
	else {
	console.log("EMERGENCY. EMERGENCY. THERE'S AN EMERGENCY GOING ON.");
	msg.channel.send('Something has gone horribly wrong, and <@184943705797558272> will need to go fix it since this message should never appear >:(');
	return;
	}
    //=> true
})
	msg.channel.send('Checking Halo CE server....');
	processExists('haloceded.exe').then(exists => {
	if (exists === true){
    console.log("Server is running...");
	msg.channel.send('The Halo CE server is running.');
	return;
	}
	if (exists === false){
	console.log("Server is NOT running...");
	msg.channel.send('The Halo CE server is DOWN. <@184943705797558272> will get right onto fixing it ASAP.');
	return;
	}
	else {
	console.log("EMERGENCY. EMERGENCY. THERE'S AN EMERGENCY GOING ON.");
	msg.channel.send('Something has gone horribly wrong, and <@184943705797558272> will need to go fix it since this message should never appear >:(');
	return;
	}
    //=> true
})
  }
if (msg.content === prefix + 'help')
{
	msg.channel.send('This is Uptimebot v0.0.1 written by <@184943705797558272> specifically for game servers running on nzgamer41.win. Check http://status.nzgamer41.win for more information about servers hosted by me.');
}	
});

client.login('token');