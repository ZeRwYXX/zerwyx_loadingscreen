fx_version 'cerulean'
description "Loadingscreen Dev By ZeRwYX"
games { 'gta5' }
lua54 "yes"

author 'ZeRwYX'
description 'Discord : https://discord.gg/fast-rp'
version '1.1.0'

loadscreen 'web/index.html'

loadscreen_manual_shutdown 'yes'

client_script 'client.lua'
server_script 'server.lua'

loadscreen_cursor 'yes'

files {
    'web/index.html',
    'web/css/style.css',
    'web/script/main.js',
    'web/sound/*'
}
