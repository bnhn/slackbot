'use strict'


const greetingCommand = require('./greeting');
const config = require('../config');


module.exports = (scheduler, bot) => {
  const goodMorningGreetingCommand = greetingCommand(config.GENERAL_ID, config.ICON_URL, bot);
  const goodNightGreetingCommand = greetingCommand(config.GENERAL_ID, config.ICON_URL, bot, `Good night ${config.APP_NAME}`);
  const getAstronomyPictureOfTheDayCommand = require('./get_astronomy_picture_of_the_day')(config.RANDOM_ID, config.ICON_URL, bot);

  scheduler.scheduleJob('30 9 * * *', goodMorningGreetingCommand);
  scheduler.scheduleJob('30 23 * * *', goodNightGreetingCommand);
  scheduler.scheduleJob('0 13 * * *', getAstronomyPictureOfTheDayCommand);
}
