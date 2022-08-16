// TODO: add classes for board, square and piece and then generator/object factory methods 

// -- Board, piece, and view generation -- //
function generateBoard() {
    const board = document.getElementById("board");
    let files = document.createElement("tr");
    files.class = "files";
    let emptyFile = document.createElement("td");
    emptyFile.setAttribute("class", "empty-file");
    files.appendChild(emptyFile);
    for (let i = 65; i < 73; i++) {
        let file = document.createElement("td");
        file.setAttribute("class", "file-letter");
        file.innerHTML = String.fromCharCode(i);
        files.appendChild(file);
    }
    files.appendChild(emptyFile.cloneNode(true));
    board.appendChild(files);
    
    for (let i = 1; i < 9; i++) {
        let squareColor = "dark";
        if (i % 2 == 0) {
            squareColor = "light";
        }
        let rank = document.createElement("tr");
        rank.setAttribute("id", i.toString());
        rank.setAttribute("class", "rank");
        let rankNumber = document.createElement("td");
        rankNumber.setAttribute("class", "rank-number");
        rankNumber.innerHTML = i.toString();
        rank.appendChild(rankNumber);
        for (let j = 65; j < 73; j++) {
            let file = String.fromCharCode(j);
            let square = document.createElement("td");
            square.setAttribute("id", file.concat(i.toString()));
            square.setAttribute("class", squareColor.concat("-square"));
            square.setAttribute("ondrop", "dropPiece(event)");
            square.setAttribute("ondragover", "allowPieceDrop(event)");
            rank.appendChild(square);
            if (squareColor == "dark") {
                squareColor = "light";
            } else {
                squareColor = "dark";
            }
        }
        rank.appendChild(rankNumber.cloneNode(true));
        board.appendChild(rank);
    }
    board.appendChild(files.cloneNode(true));
}

// TODO: Add ids to img elements as well as **draggable** and **ondragstart** attributes
function generateBlackPieces() {
    const files = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    // Pawns
    for (let i = 1; i < 9; i++) {
        let id = files[i].concat("7");
        let pawn = document.createElement('img');
        pawn.setAttribute("id", id.concat("-pawn"));
        pawn.setAttribute("class", "piece-img");
        pawn.setAttribute("src", "./images/black_pawn.png");
        pawn.setAttribute("draggable", "true");
        pawn.setAttribute("ondragstart", "dragPiece(event)");
        let currentSquare = document.getElementById(id);
        currentSquare.appendChild(pawn);
    }

    // Major Pieces
    // Bishops C8 & F8
    let C8_bishop = document.createElement("img");
    let C8_bishop_square = document.getElementById("C8");
    C8_bishop.setAttribute("src", "./images/black_bishop.png");
    C8_bishop.setAttribute("class", "piece-img");
    C8_bishop.setAttribute("id", "C8-bishop");
    C8_bishop.setAttribute("draggable", "true");
    C8_bishop.setAttribute("ondragstart", "dragPiece(event)");
    C8_bishop_square.appendChild(C8_bishop);

    let F8_bishop = document.createElement("img");
    let F8_bishop_square = document.getElementById("F8");
    F8_bishop.setAttribute("src", "./images/black_bishop.png");
    F8_bishop.setAttribute("class", "piece-img");
    F8_bishop.setAttribute("id", "F8-bishop");
    F8_bishop.setAttribute("draggable", "true");
    F8_bishop.setAttribute("ondragstart", "dragPiece(event)");
    F8_bishop_square.appendChild(F8_bishop);

    // Rooks A8 & H8
    let A8_rook = document.createElement("img");
    let A8_rook_square = document.getElementById("A8");
    A8_rook.setAttribute("src", "./images/black_rook.png");
    A8_rook.setAttribute("class", "piece-img");
    A8_rook.setAttribute("id", "A8-rook");
    A8_rook.setAttribute("draggable", "true");
    A8_rook.setAttribute("ondragstart", "dragPiece(event)");
    A8_rook_square.appendChild(A8_rook);

    let H8_rook = document.createElement("img");
    let H8_rook_square = document.getElementById("H8");
    H8_rook.setAttribute("src", "./images/black_rook.png");
    H8_rook.setAttribute("class", "piece-img");
    H8_rook.setAttribute("id", "H8-rook");
    H8_rook.setAttribute("draggable", "true");
    H8_rook.setAttribute("ondragstart", "dragPiece(event)");
    H8_rook_square.appendChild(H8_rook);

    

    // Knights B8 & G8
    let B8_knight = document.createElement("img");
    let B8_knight_square = document.getElementById("B8");
    B8_knight.setAttribute("src", "./images/black_knight.png");
    B8_knight.setAttribute("class", "piece-img");
    B8_knight.setAttribute("id", "B8-knight");
    B8_knight.setAttribute("draggable", "true");
    B8_knight.setAttribute("ondragstart", "dragPiece(event)");
    B8_knight_square.appendChild(B8_knight);

    let G8_knight = document.createElement("img");
    let G8_knight_square = document.getElementById("G8");
    G8_knight.setAttribute("src", "./images/black_knight.png");
    G8_knight.setAttribute("class", "piece-img");
    G8_knight.setAttribute("id", "G8-knight");
    G8_knight.setAttribute("draggable", "true");
    G8_knight.setAttribute("ondragstart", "dragPiece(event)");
    G8_knight_square.appendChild(G8_knight);
    

    // King E8
    let E8_king = document.createElement("img");
    king.src = "./images/black_king.png";
    king.className = "piece-img";
    king.draggable = "true";
    king.ondragstart = "dragPiece(e)";
    let king_square = document.getElementById("E8");
    king_square.appendChild(king);

    // Queen D8
    let queen = document.createElement("img");
    queen.src = "./images/black_queen.png";
    queen.className = "piece-img";
    queen.draggable = "true";
    let queen_square = document.getElementById("D8");
    queen_square.appendChild(queen);
}

function generateWhitePieces() {
    const files = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    // Pawns
    for (let i = 1; i < 9; i++) {
        let id = files[i].concat("2");
        let pawn = document.createElement('img');
        pawn.className = "piece-img";
        pawn.src = "./images/white_pawn.png";
        pawn.draggable = "true";
        let currentSquare = document.getElementById(id);
        currentSquare.appendChild(pawn);
    }

    // Major Pieces
    // Bishops C1 & F1
    let bishop = document.createElement("img");
    bishop.src = "./images/white_bishop.png";
    bishop.className = "piece-img";
    bishop.draggable = "true";
    let c_bishop_square = document.getElementById("C1");
    let f_bishop_square = document.getElementById("F1");
    c_bishop_square.appendChild(bishop);
    f_bishop_square.appendChild(bishop.cloneNode(true));

    // Rooks A1 & H1
    let rook = document.createElement("img");
    rook.src = "./images/white_rook.png";
    rook.className = "piece-img";
    rook.draggable = "true";
    let a_rook_square = document.getElementById("A1");
    let h_rook_square = document.getElementById("H1");
    a_rook_square.appendChild(rook);
    h_rook_square.appendChild(rook.cloneNode(true));

    // Knights B1 & G1
    let knight = document.createElement("img");
    knight.src = "./images/white_knight.png";
    knight.className = "piece-img";
    knight.draggable = "true";
    let b_knight_square = document.getElementById("B1");
    let g_knight_square = document.getElementById("G1");
    b_knight_square.appendChild(knight);
    g_knight_square.appendChild(knight.cloneNode(true));

    // King E1
    let king = document.createElement("img");
    king.src = "./images/white_king.png";
    king.className = "piece-img";
    king.draggable = "true";
    let king_square = document.getElementById("E1");
    king_square.appendChild(king);

    // Queen D1
    let queen = document.createElement("img");
    queen.src = "./images/white_queen.png";
    queen.className = "piece-img";
    queen.draggable = "true";
    let queen_square = document.getElementById("D1");
    queen_square.appendChild(queen);
}

// TODO: Generate both a light and dark view of the board (rank and file swapped)
function generateLightView() {

}
function generateDarkView() {}


// -- Piece move functions -- //
function dragPiece(e) {
    e.dataTransfer.setData("text", e.target.id);
}
function dropPiece(e) {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    // Drop onto a square
    if (e.target.className == "light-square" || e.target.className == "dark-square") {
        if (e.target.hasChildNodes()) {
            e.target.removeChild(e.target.childNodes[0]);
        }
        e.target.appendChild(document.getElementById(id));
        return;
    }
    // Drop onto another piece
    let parent = e.target.parentNode;
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.childNodes[0]);
    if (e.target.parentNode.hasChildNodes()) {
        e.target.parentNode.removeChild(e.target.parentNode.childNodes[0]);
    }
    parent.appendChild(document.getElementById(id));
}
function allowPieceDrop(e) {
    e.preventDefault();
}

// TODO: Tie in the drag/drop functionality with the **makeMove()** function -> do not want squares to update before validating the move with the server
function makeMove(currentSquare, targetSquare) {
    if (validateMove(currentSquare, targetSquare)) {
        let currentPiece = document.getElementById(currentSquare).querySelector("img");
        let targetPiece = document.getElementById(targetSquare.querySelector("img"));
        if (targetPiece) {
            document.getElementById(targetSquare).removeChild(targetPiece);
        }
        document.getElementById(targetSquare).appendChild(currentPiece);
    }
    else {console.log("Invalid move.")}
}
function validateMove(currentSquare, targetSquare) {
    return true;
}
function isGameOver() {}
function startClock() {}
function stopClock() {}