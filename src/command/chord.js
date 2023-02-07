const { allNotes } = require('../constant.js');

const allChords = [
    { names: ['major', 'M'], pattern: [0, 4, 7] },
    { names: ['minor', 'm'], pattern: [0, 3, 7] },
]

class Chord {
    constructor(name) {
        this.name = name
    }

    find() {
        return []
    }

    static allChords() {
        return allChords.map(item => item.names);
    }
}

module.exports = { Chord };
