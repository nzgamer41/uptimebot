# UptimeBot ***v0.0.1***
Discord bot that monitors whether tasks are running on host machine.
This version is very basic. It only uses process-exists, ps-node and discord.js to simply check whether the process is running.

# USAGE:
Clone the repository, then run `npm install`.
After that, use `node bot.js` to start the bot.
`!check` makes the bot check for programs running as specified in bot.js (at the moment it looks for srcds_run which is my CSGO server running on Linux, and a Halo CE Dedicated Server I run in Wine on linux also)

Be sure to change the user IDs in the error messages and server down messages otherwise it will just put my Discord username.

# TODO:
1. Move some stuff into a requisites/whatever json file so that its easier to change
2. Figure out how to make it tidier to launch/run on startup easier on linux
3. Make it so that if the server is down it will bring it back up
