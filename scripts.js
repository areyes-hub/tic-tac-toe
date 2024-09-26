function createPlayer(name, sign) {
    this.name = name;
    this.sign = sign;
    let score = 0;
    const win = function () {
        return ++score;
    }

    return { name, win, sign };
}

const player = {
    p1: createPlayer('Angel', 'X'),
    p2: createPlayer('Licy', 'O')
}

const Board = (function () {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    const check = function (arr) {
        if (arr[0][0] == 'X' &&
            arr[0][1] == 'X' &&
            arr[0][2] == 'X' ||
            arr[0][0] == 'O' &&
            arr[0][1] == 'O' &&
            arr[0][2] == 'O' ||
            arr[1][0] == 'X' &&
            arr[1][1] == 'X' &&
            arr[1][2] == 'X' ||
            arr[1][0] == 'O' &&
            arr[1][1] == 'O' &&
            arr[1][2] == 'O' ||
            arr[2][0] == 'X' &&
            arr[2][1] == 'X' &&
            arr[2][2] == 'X' ||
            arr[2][0] == 'O' &&
            arr[2][1] == 'O' &&
            arr[2][2] == 'O' ||
            arr[0][0] == 'X' &&
            arr[1][0] == 'X' &&
            arr[2][0] == 'X' ||
            arr[0][0] == 'O' &&
            arr[1][0] == 'O' &&
            arr[2][0] == 'O' ||
            arr[0][1] == 'X' &&
            arr[1][1] == 'X' &&
            arr[2][1] == 'X' ||
            arr[0][1] == 'O' &&
            arr[1][1] == 'O' &&
            arr[2][1] == 'O' ||
            arr[0][2] == 'X' &&
            arr[1][2] == 'X' &&
            arr[2][2] == 'X' ||
            arr[0][2] == 'O' &&
            arr[1][2] == 'O' &&
            arr[2][2] == 'O'
        ) {
            alert("Game Over!");
        }
    }
    return { board, check };
})();

const game = (function () {
    const cell = function (x, y, sign) {
        Board.board[x - 1][y - 1] = sign;
        Board.check(Board.board);
    }
    return { cell };
})();

game.cell(2, 2, player.p1.sign);
// game().cell(1, 1, player.p2.sign);
// game().cell(3, 1, player.p1.sign);
// game().cell(1, 3, player.p2.sign);
// game().cell(3, 2, player.p1.sign);
// game().cell(1, 2, player.p2.sign);

console.log(Board.board);




