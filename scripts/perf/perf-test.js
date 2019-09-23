const { warn, log } = require('../env/log');
const execa = require('execa');

const run = async () => {
    try {
        await execa('command', ['-v', 'fast']);
        const { stdout } = await execa('fast', [
            '--start-cmd',
            'make build;make start;sleep 2',
            '--stop-cmd',
            'make stop',
            '--target-url',
            'http://localhost:9000/ArticlePerfTest',
        ]);

        log(stdout);
    } catch (e) {
        warn(e.stack);
        process.exit(1);
    }
};

run();
