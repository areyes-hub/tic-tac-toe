alert("For the best experience, play on a desktop or laptop or use the 'Tab' key to navigate the input fields. Thank you for playing!!");

let player = [{}, {}];
let activePlayer = player[0];

let pScores = [0, 0];

function incrementP1() {
    return pScores[0] += 1;
}

function incrementP2() {
    return pScores[1] += 1;
}

function swap() {
    if (activePlayer === player[0]) {
        activePlayer = player[1];
    }
    else if (activePlayer === player[1]) {
        activePlayer = player[0];
    }
};

function refresh() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            Board.board[i][j] = '';
        }
    }
    game.cell(tl, '');
    game.cell(tc, '');
    game.cell(tr, '');
    game.cell(cl, '');
    game.cell(cc, '');
    game.cell(cr, '');
    game.cell(bl, '');
    game.cell(bc, '');
    game.cell(br, '');
}

let tl, tc, tr, cl, cc, cr, bl, bc, br;

const p1_form = document.querySelector(".pf-1");
const p2_form = document.querySelector(".pf-2");

const name1 = document.querySelector("#name-1");
const symbol1 = document.querySelector("#sign-1");
const name2 = document.querySelector("#name-2");
const symbol2 = document.querySelector("#sign-2");

let score1 = document.querySelector(".score-1");
score1.textContent = `Score: ${pScores[0]}`;
let score2 = document.querySelector(".score-2");
score2.textContent = `Score: ${pScores[1]}`;

const firstTitle = document.querySelector(".title-1");
const title = document.querySelector(".title");
const table = document.querySelector(".board");
const btns = document.querySelector(".buttons");
const cell = document.querySelector(".cell");
const refr = document.querySelector(".refresh");
refr.addEventListener("click", refresh);

const Board = (function () {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    return { board };
})();

const game = (function () {
    const cell = function (pos, sign) {
        pos.textContent = sign;
    }
    return { cell };
})();
// I know there MUST be a more efficient way of
// handling this, but Im still working on it ;)
function check() {
    if (Board.board[0][0] == activePlayer.sign &&
        Board.board[0][1] == activePlayer.sign &&
        Board.board[0][2] == activePlayer.sign ||
        Board.board[0][0] == activePlayer.sign &&
        Board.board[0][1] == activePlayer.sign &&
        Board.board[0][2] == activePlayer.sign ||
        Board.board[1][0] == activePlayer.sign &&
        Board.board[1][1] == activePlayer.sign &&
        Board.board[1][2] == activePlayer.sign ||
        Board.board[1][0] == activePlayer.sign &&
        Board.board[1][1] == activePlayer.sign &&
        Board.board[1][2] == activePlayer.sign ||
        Board.board[2][0] == activePlayer.sign &&
        Board.board[2][1] == activePlayer.sign &&
        Board.board[2][2] == activePlayer.sign ||
        Board.board[2][0] == activePlayer.sign &&
        Board.board[2][1] == activePlayer.sign &&
        Board.board[2][2] == activePlayer.sign ||
        Board.board[0][0] == activePlayer.sign &&
        Board.board[1][0] == activePlayer.sign &&
        Board.board[2][0] == activePlayer.sign ||
        Board.board[0][0] == activePlayer.sign &&
        Board.board[1][0] == activePlayer.sign &&
        Board.board[2][0] == activePlayer.sign ||
        Board.board[0][1] == activePlayer.sign &&
        Board.board[1][1] == activePlayer.sign &&
        Board.board[2][1] == activePlayer.sign ||
        Board.board[0][1] == activePlayer.sign &&
        Board.board[1][1] == activePlayer.sign &&
        Board.board[2][1] == activePlayer.sign ||
        Board.board[0][2] == activePlayer.sign &&
        Board.board[1][2] == activePlayer.sign &&
        Board.board[2][2] == activePlayer.sign ||
        Board.board[0][2] == activePlayer.sign &&
        Board.board[1][2] == activePlayer.sign &&
        Board.board[2][2] == activePlayer.sign ||
        Board.board[0][0] == activePlayer.sign &&
        Board.board[1][1] == activePlayer.sign &&
        Board.board[2][2] == activePlayer.sign ||
        Board.board[0][0] == activePlayer.sign &&
        Board.board[1][1] == activePlayer.sign &&
        Board.board[2][2] == activePlayer.sign ||
        Board.board[2][0] == activePlayer.sign &&
        Board.board[1][1] == activePlayer.sign &&
        Board.board[0][2] == activePlayer.sign ||
        Board.board[2][0] == activePlayer.sign &&
        Board.board[1][1] == activePlayer.sign &&
        Board.board[0][2] == activePlayer.sign
    ) {
        alert(`Game Over!\n
        ${activePlayer.sign} won!`);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                Board.board[i][j] = '';
            }
        }
        if (activePlayer === player[0]) {
            incrementP1();
            score1.textContent = `Score: ${pScores[0]}`;
        }
        else if (activePlayer === player[1]) {
            incrementP2();
            score2.textContent = `Score: ${pScores[1]}`;
        }
    }
};

const f1_button = document.querySelector(".f1-btn");
f1_button.addEventListener("click", () => {
    const first = document.querySelector(".player-1");
    const p1_name = document.querySelector(".p1-name");
    p1_form.style.display = "none";
    p1_name.textContent = name1.value;
    let avatarOne = document.createElement("h1");
    avatarOne.textContent = symbol1.value;
    avatarOne.style.paddingTop = "16px";
    avatarOne.style.color = "lightblue";
    score1.style.opacity = "1";
    score1.style.paddingTop = "16px";
    score1.style.color = "yellow";
    first.appendChild(avatarOne);
})
const f2_button = document.querySelector(".f2-btn");
f2_button.addEventListener("click", () => {
    const second = document.querySelector(".player-2");
    const p2_name = document.querySelector(".p2-name");
    p2_form.style.display = "none";
    p2_name.textContent = name2.value;
    let avatarTwo = document.createElement("h1");
    avatarTwo.textContent = symbol2.value;
    avatarTwo.style.paddingTop = "16px";
    avatarTwo.style.color = "lightblue";
    score2.style.opacity = "1";
    score2.style.paddingTop = "16px";
    score2.style.color = "yellow";
    second.appendChild(avatarTwo);
    table.style.height = "450px";
    table.style.opacity = "1";
    firstTitle.style.opacity = "0";
    title.style.opacity = "1";
    refr.style.opacity = "1";
});

const grid = (function () {
    tl = document.querySelector(".tl");
    tl.addEventListener("click", () => {
        Board.board[0][0] = activePlayer.sign;
        game.cell(tl, activePlayer.sign);
        check();
    })
    tl.addEventListener("click", swap);
    tc = document.querySelector(".tc");
    tc.addEventListener("click", () => {
        Board.board[0][1] = activePlayer.sign;
        game.cell(tc, activePlayer.sign);
        check();
    })
    tc.addEventListener("click", swap);
    tr = document.querySelector(".tr");
    tr.addEventListener("click", () => {
        Board.board[0][2] = activePlayer.sign;
        game.cell(tr, activePlayer.sign);
        check();
    })
    tr.addEventListener("click", swap);
    cl = document.querySelector(".cl");
    cl.addEventListener("click", () => {
        Board.board[1][0] = activePlayer.sign;
        game.cell(cl, activePlayer.sign);
        check();
    })
    cl.addEventListener("click", swap);
    cc = document.querySelector(".cc");
    cc.addEventListener("click", () => {
        Board.board[1][1] = activePlayer.sign;
        game.cell(cc, activePlayer.sign);
        check();
    })
    cc.addEventListener("click", swap);
    cr = document.querySelector(".cr");
    cr.addEventListener("click", () => {
        Board.board[1][2] = activePlayer.sign;
        game.cell(cr, activePlayer.sign);
        check();
    })
    cr.addEventListener("click", swap);
    bl = document.querySelector(".bl");
    bl.addEventListener("click", () => {
        Board.board[2][0] = activePlayer.sign;
        game.cell(bl, activePlayer.sign);
        check();
    })
    bl.addEventListener("click", swap);
    bc = document.querySelector(".bc");
    bc.addEventListener("click", () => {
        Board.board[2][1] = activePlayer.sign;
        game.cell(bc, activePlayer.sign);
        check();
    })
    bc.addEventListener("click", swap);
    br = document.querySelector(".br");
    br.addEventListener("click", () => {
        Board.board[2][2] = activePlayer.sign;
        game.cell(br, activePlayer.sign);
        check();
    })
    br.addEventListener("click", swap);

    return {
        tl, tc, tr,
        cl, cc, cr,
        bl, bc, br
    }
})();

function createPlayer(name, sign, score) {
    this.name = name,
        this.sign = sign,
        this.score = score
    return { name, sign, score };
}

const player1 = (function () {
    p1_form.addEventListener("submit", (event) => {
        event.preventDefault();
        let p1 = createPlayer(name1, symbol1, pScores.ps1);
        player[0].name = p1.name.value;
        player[0].sign = p1.sign.value;
        player[0].score = pScores.ps1;
        p1_form.reset();
        return { p1 };
    })
})();

const player2 = (function () {
    p2_form.addEventListener("submit", (event) => {
        event.preventDefault();
        let p2 = createPlayer(name2, symbol2, 0);
        player[1].name = p2.name.value;
        player[1].sign = p2.sign.value;
        p2_form.reset();
        return { p2 };
    })
})();



