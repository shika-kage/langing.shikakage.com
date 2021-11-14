const fs = require('fs');
const path = require('path');
const schedule = require('node-schedule');

class InitialDataGenerator {
    static getRandom(min: number, max: number, precision: number = 2) {
        return Math.round((Math.random() * (max - min) + min) * (10 ** precision)) / (10 ** precision);
    }

    static farmLockedInThePoolProperty() {
        const job = schedule.scheduleJob('0 0 */2 * * *', async () => {
            const currentInitialData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'config', 'intial-data.json')));

            fs.writeFileSync(path.resolve(__dirname, '..', '..', 'config', 'intial-data.json'), JSON.stringify({
                ...currentInitialData,
                eth: {
                    ...currentInitialData.eth,
                    lockedInThePool: currentInitialData.eth.lockedInThePool + InitialDataGenerator.getRandom(0.3, 3),
                }
            }));

            job.reschedule(`0 0 */${Math.round(InitialDataGenerator.getRandom(2, 4))} * * *`);
        });
    }

    static farmLockedInThePoolKP3RProperty() {
        const job = schedule.scheduleJob('0 0 */2 * * *', async () => {
            const currentInitialData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'config', 'intial-data.json')));

            fs.writeFileSync(path.resolve(__dirname, '..', '..', 'config', 'intial-data.json'), JSON.stringify({
                ...currentInitialData,
                kp3r: {
                    ...currentInitialData.kp3r,
                    lockedInThePool: currentInitialData.kp3r.lockedInThePool + InitialDataGenerator.getRandom(5, 30),
                }
            }));

            job.reschedule(`0 0 */${Math.round(InitialDataGenerator.getRandom(2, 4))} * * *`);
        });
    }

    static run() {
        InitialDataGenerator.farmLockedInThePoolProperty();
        InitialDataGenerator.farmLockedInThePoolKP3RProperty();
    }

}

export {
    InitialDataGenerator
};