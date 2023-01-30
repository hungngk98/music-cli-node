const Readline = require('readline');
const {Key} = require('./src/command/key.js')
const {promisify} = require('util');

async function main() {
    const reader = Readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const question = promisify(reader.question).bind(reader);
    const answer = await question('What do you need? ');

    const line = answer.replace(/\s+/g, ' ').trim();

    const args = line.split(' ');

    switch (args[0]) {
        case 'key': {
            const root = args[1];
            const type = args[2] ?? 'major';
            const key = new Key(root, type);
            const notes = key
                .find()
                .map((item) => item[0].toUpperCase() + (item[1] ?? ''));

            console.log(`> Notes in key ${root} ${type} are: ${notes.join(', ')}`);
            break;
        }

        case 'exit': {
            process.exit();
        }

        default: {
            console.log('Unknown command');
            break;
        }
    }

    reader.close();
    console.log('---');
}

(async () => {
    while (true) {
        await main();
    }
})()
