const PathChoice = {
    Same: 0,
    Wider: 1,
    Narrower: 2,
};

function getNextRow(prevRow, pathChoice = PathChoice.Same) {
    if (pathChoice === PathChoice.Wider) {
        const nextRow = prevRow.slice(0);
        nextRow[2] = 1;
        return nextRow;
    }
    return prevRow;
}

module.exports = {
    PathChoice,
    getNextRow,
};
