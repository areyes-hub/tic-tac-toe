alert("For the best experience, use the 'Tab' key to navigate the input fields. Thank you for playing!!");
let player = [{}, {}];
let activePlayer = player[0];

let tl, tc, tr, cl, cc, cr, bl, bc, br;

function swap() {
    if (activePlayer === player[0]) {
        activePlayer = player[1];
    }
    else if (activePlayer === player[1]) {
        activePlayer = player[0];
    }
};

const p1_form = document.querySelector(".pf-1");
const p2_form = document.querySelector(".pf-2");

const name1 = document.querySelector("#name-1");
const symbol1 = document.querySelector("#sign-1");
const name2 = document.querySelector("#name-2");
const symbol2 = document.querySelector("#sign-2");

const title = document.querySelector(".title");
const table = document.querySelector(".board");
const btns = document.querySelector(".buttons");
const cell = document.querySelector(".cell");

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
function check(pos) {
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
    avatarOne.style.color = "yellow";
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
    avatarTwo.style.color = "yellow";
    second.appendChild(avatarTwo);
    table.style.height = "450px";
    table.style.opacity = "1";
    btns.style.height = "20svh";
    title.style.opacity = "1";
})

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

function createPlayer(name, sign) {
    this.name = name,
        this.sign = sign
    return { name, sign };
}

const player1 = (function () {
    p1_form.addEventListener("submit", (event) => {
        event.preventDefault();
        let p1 = createPlayer(name1, symbol1);
        player[0].name = p1.name.value;
        player[0].sign = p1.sign.value;
        p1_form.reset();
        return { p1 };
    })
})();

const player2 = (function () {
    p2_form.addEventListener("submit", (event) => {
        event.preventDefault();
        let p2 = createPlayer(name2, symbol2);
        player[1].name = p2.name.value;
        player[1].sign = p2.sign.value;
        p2_form.reset();
        return { p2 };
    })
})();



