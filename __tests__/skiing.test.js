const { getNextRow } = require('../src/skiing');

describe('Skiing Game', () => {
    it('creates new rows that are the same length as previous rows', () => {
        const prevRow = [0, 1, 0];

        const nextRow = getNextRow(prevRow);

        expect(nextRow.length).toBe(prevRow.length);
    });
});
