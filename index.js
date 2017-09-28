const { readFileSync } = require('fs')
const { Composer } = require('micro-bot')
const app = new Composer()

app.command('/start', (ctx) => ctx.reply('Welcome!'))
app.hears('hi', ({ reply }) => reply('Hey there!'))
app.hears('ame', ({ reply }) => reply('Ame sayang Rahmat'))
app.on('sticker', ({ reply }) => reply('👍'))

// Export bot handler
module.exports = app