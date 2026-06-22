const { formate, format } = require(`date-fns`);
const { v4: uuid } = require(`uuid`);
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const logEvents = async (message) => { 
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}\t ${uuid()}`;
    const logItem = `${dateTime}\t${message}\n`;
    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        } 
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventlog.txt'), logItem);
    console.log(logItem);
} catch (err) {
    console.error(err);
}
}

module.exports = logEvents;