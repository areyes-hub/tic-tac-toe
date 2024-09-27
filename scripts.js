let playerOne = {};
let playerTwo = {};

const first = document.querySelector(".player-1");
const second = document.querySelector(".player-2");

const p1_form = document.querySelector(".pf-1");
const p2_form = document.querySelector(".pf-2");

const p1_name = document.querySelector(".p1-name");
const p2_name = document.querySelector(".p2-name");

const name1 = document.querySelector("#name-1");
const symbol1 = document.querySelector("#sign-1");
const name2 = document.querySelector("#name-2");
const symbol2 = document.querySelector("#sign-2");

const Board = (function () {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    return { board };
})();
// I know there MUST be a more efficient way of
// handling this, but Im still working on it ;)
const check = (function () {
    if (Board.board[0][0] == 'X' &&
        Board.board[0][1] == 'X' &&
        Board.board[0][2] == 'X' ||
        Board.board[0][0] == 'O' &&
        Board.board[0][1] == 'O' &&
        Board.board[0][2] == 'O' ||
        Board.board[1][0] == 'X' &&
        Board.board[1][1] == 'X' &&
        Board.board[1][2] == 'X' ||
        Board.board[1][0] == 'O' &&
        Board.board[1][1] == 'O' &&
        Board.board[1][2] == 'O' ||
        Board.board[2][0] == 'X' &&
        Board.board[2][1] == 'X' &&
        Board.board[2][2] == 'X' ||
        Board.board[2][0] == 'O' &&
        Board.board[2][1] == 'O' &&
        Board.board[2][2] == 'O' ||
        Board.board[0][0] == 'X' &&
        Board.board[1][0] == 'X' &&
        Board.board[2][0] == 'X' ||
        Board.board[0][0] == 'O' &&
        Board.board[1][0] == 'O' &&
        Board.board[2][0] == 'O' ||
        Board.board[0][1] == 'X' &&
        Board.board[1][1] == 'X' &&
        Board.board[2][1] == 'X' ||
        Board.board[0][1] == 'O' &&
        Board.board[1][1] == 'O' &&
        Board.board[2][1] == 'O' ||
        Board.board[0][2] == 'X' &&
        Board.board[1][2] == 'X' &&
        Board.board[2][2] == 'X' ||
        Board.board[0][2] == 'O' &&
        Board.board[1][2] == 'O' &&
        Board.board[2][2] == 'O' ||
        Board.board[0][0] == 'O' &&
        Board.board[1][1] == 'O' &&
        Board.board[2][2] == 'O' ||
        Board.board[0][0] == 'X' &&
        Board.board[1][1] == 'X' &&
        Board.board[2][2] == 'X' ||
        Board.board[2][0] == 'O' &&
        Board.board[1][1] == 'O' &&
        Board.board[0][2] == 'O' ||
        Board.board[2][0] == 'X' &&
        Board.board[1][1] == 'X' &&
        Board.board[0][2] == 'X'
    ) {
        alert("Game Over!");
    }
})();

const game = (function () {
    const cell = function (pos, sign) {
        pos.textContent = sign;
    }
    return { cell };
})();

const f1_button = document.querySelector(".f1-btn");
f1_button.addEventListener("click", () => {
    p1_form.style.display = "none";
    p1_name.textContent = name1.value;
    let avatarOne = document.createElement("h1");
    avatarOne.textContent = symbol1.value;
    avatarOne.style.paddingTop = "16px";
    avatarOne.style.color = "yellow";
    first.appendChild(avatarOne);
})
const f2_button = document.querySelector(".f2-btn");
f2_button.addEventListener("click", () => {
    p2_form.style.display = "none";
    p2_name.textContent = name2.value;
    let avatarTwo = document.createElement("h1");
    avatarTwo.textContent = symbol2.value;
    avatarTwo.style.paddingTop = "16px";
    avatarTwo.style.color = "yellow";
    second.appendChild(avatarTwo);
})

const grid = (function () {
    const tl = document.querySelector(".tl");
    tl.addEventListener("click", () => {
        game.cell(tl, playerOne.sign);
    })
    const tc = document.querySelector(".tc");
    tc.addEventListener("click", () => {
        game.cell(tc, playerOne.sign);
    })
    const tr = document.querySelector(".tr");
    tr.addEventListener("click", () => {
        game.cell(tr, playerOne.sign);
    })
    const cl = document.querySelector(".cl");
    cl.addEventListener("click", () => {
        game.cell(cl, playerOne.sign);
    })
    const cc = document.querySelector(".cc");
    cc.addEventListener("click", () => {
        game.cell(cc, playerOne.sign);
    })
    const cr = document.querySelector(".cr");
    cr.addEventListener("click", () => {
        game.cell(cr, playerOne.sign);
    })
    const bl = document.querySelector(".bl");
    bl.addEventListener("click", () => {
        game.cell(bl, playerOne.sign);
    })
    const bc = document.querySelector(".bc");
    bc.addEventListener("click", () => {
        game.cell(bc, playerOne.sign);
    })
    const br = document.querySelector(".br");
    br.addEventListener("click", () => {
        game.cell(br, playerOne.sign);
    })

    return {
        tl, tc, tr,
        cl, cc, cr,
        bl, bc, br
    }
})();

console.log(playerOne);

function createPlayer(name, sign) {
    this.name = name,
        this.sign = sign
    return { name, sign };
}

const player1 = (function () {
    p1_form.addEventListener("submit", (event) => {
        event.preventDefault();
        let p1 = createPlayer(name1, symbol1);
        playerOne.name = p1.name.value;
        playerOne.sign = p1.sign.value;
        p1_form.reset();
        return { p1 };
    })
})();

const player2 = (function () {
    p2_form.addEventListener("submit", (event) => {
        event.preventDefault();
        let p2 = createPlayer(name2, symbol2);
        playerTwo.name = p2.name.value;
        playerTwo.sign = p2.sign.value;
        p2_form.reset();
        return { p2 };
    })
})();



// const board = [
//     ['X', 'O', 'O'],
//     ['O', 'X', 'X'],
//     ['O', 'X', 'O'],
// ]

// let count = 0;

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (board[i][j] == board[i][j + 1] && board[i][j] == board[i + 1][j]) {
//             console.log("Game over!");
//             count++;
//         }
//     }
// }

// console.log(count);
