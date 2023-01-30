const { circleOfFifth, allNotes } = require('../constant.js');

class Key {
    constructor(root, type) {
        this.root = root.toLowerCase();
        this.type = type.toLowerCase();
    }

    find() {
        const root = this.root;
        const type = this.type;

        if (root == 'f#' && type == 'major') {
            return ['f#', 'g#', 'a#', 'b', 'c#', 'd#', 'e#'];
        }
        if (root == 'd#' && type == 'minor') {
            return ['d#', 'e#', 'f#', 'g#', 'a#', 'b', 'c#'];
        }

        const patterns = {
            major: [0, 2, 4, 5, 7, 9, 11],
            minor: [0, 2, 3, 5, 7, 8, 10],
        };

        const pattern = patterns[type];

        if (!pattern) {
            console.log('Unknown key type');
            return;
        }

        const rootIndex = allNotes.findIndex((note) => note.includes(root));

        if (rootIndex == -1) {
            console.log('Unknown root note');
            return;
        }

        const keyNotes = pattern.map((semitones) => {
            const index = (rootIndex + semitones) % allNotes.length;
            return allNotes[index];
        });

        const setOne = keyNotes.map((el) => el[0]);
        const setTwo = keyNotes.map((el) => el[1] ?? el[0]);
        let result = setOne;

        for (let i = 0; i < setOne.length; i++) {
            if (i != 0 && setOne[i][0] == setOne[i - 1][0]) {
                result = setTwo;
            }
        }

        return result;
    }
}

module.exports = { Key };
