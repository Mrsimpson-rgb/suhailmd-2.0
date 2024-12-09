const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="allvpnupdates@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "tre" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "256786798517,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_07_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICA5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICA1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRQ05LdEljditjQWxLMXR5NUZPaFByV0VjKy9sNmRGSVdMcWl2T3FxelNrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCbDlpZlNDUlFnYW5VUnktVFQ1N2lRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0MWI3OTZhLTY4OTItNGJjNS1iMzU4LTFmYTFiNmM2MmE1ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDI1MCxcbiAgICAgIDYsXG4gICAgICA5MyxcbiAgICAgIDg2LFxuICAgICAgNDIsXG4gICAgICA2MSxcbiAgICAgIDQ3LFxuICAgICAgMTM2LFxuICAgICAgMTM3LFxuICAgICAgNzksXG4gICAgICAxMTAsXG4gICAgICA1NCxcbiAgICAgIDUyLFxuICAgICAgOTMsXG4gICAgICAxNjYsXG4gICAgICA0MCxcbiAgICAgIDE3NCxcbiAgICAgIDMzLFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTA4LFxuICAgICAgMjEwLFxuICAgICAgNjksXG4gICAgICAyMDgsXG4gICAgICAxNzAsXG4gICAgICAzNyxcbiAgICAgIDIwOCxcbiAgICAgIDE5NixcbiAgICAgIDEyNixcbiAgICAgIDEyNSxcbiAgICAgIDIxMCxcbiAgICAgIDE5MyxcbiAgICAgIDEwOCxcbiAgICAgIDc5LFxuICAgICAgMTI3LFxuICAgICAgMTIzLFxuICAgICAgNSxcbiAgICAgIDQ5LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFg3TjNEOFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc4Njc5ODUxNzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZQTlMgVEVDSFwiLFxuICAgIFwibGlkXCI6IFwiMTg5MTgwOTk0OTMyNzcxOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043eTl2Z0ZFTlhIM0xvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRGpDMTRGWk5zOGFpazVUdUJQeW9YdGVUQ1R1VUZNQ3RnR1ZLS0xydWl3TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwUVNrRHd1b1llNnNhM2hYc0tZQVV2V3hyNHN1Q0hGakRGdGNTQVczRklvcXRKK3FDWVBLUUNtb3ZNMnV2bmhkYkhQeWxwcnJNTm4zTzdocXJPVHBDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwM25iT29EZXlaQWlBbXZnZGNhZzUvYkpjcUlQVCtDdis5RlZIdFJsVnhaVHA1Zyt4dXNzY1Z6aEZiMXV4b0VjelYvMWhQVUtZM3ovbjRMRlFBQm5DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3ODY3OTg1MTc6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM3NjQwNThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG||  "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
