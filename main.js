import Board from './Board.js';
import ChessPiece from './ChessPiece.js';

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('.board');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
// ctx.fillRect(50, 50, 100, 100);
// function pawn() {
//   ctx.beginPath();
//   ctx.arc(size / 2, size / 4, size / 10, 0, 2 * Math.PI);
//   ctx.moveTo(size / 2, (size * 2) / 4);
//   ctx.arc(size / 2, (size * 2) / 4, size / 5, 0, 2 * Math.PI);
//   ctx.moveTo(size / 2, (size * 3.5) / 4);
//   ctx.arc(size / 2, (size * 3.5) / 4, size / 3, Math.PI, 2 * Math.PI);
//   ctx.fillStyle = 'green';
//   ctx.fill();
// }

// function knight() {
//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 2.5, 0, Math.PI * 2);
//   ctx.strokeStyle = 'black';
//   ctx.lineWidth = size / 25;
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 2.5, 0, Math.PI * 2);
//   ctx.fillStyle = 'green';
//   ctx.fill();
//   ctx.fillStyle = 'black';
//   const rectSize = { width: size / 1.7, height: size / 3.5 };
//   ctx.fillRect((size / 2) - (rectSize.width / 2),
//     (size / 2) - (rectSize.height / 2), rectSize.width, rectSize.height);
//   const earRectSize = { width: size / 12, height: size / 2.5 };
//   ctx.fillRect((size / 3) - (earRectSize.width / 2),
//     (size / 2) - (earRectSize.height / 2), earRectSize.width, earRectSize.height);
// }

// function rook() {
//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 2.5, 0, Math.PI * 2);
//   ctx.strokeStyle = 'black';
//   ctx.lineWidth = size / 25;
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 2.5, 0, Math.PI * 2);
//   ctx.fillStyle = 'green';
//   ctx.fill();
//   ctx.fillStyle = 'black';
//   const rectSize = { width: size / 2.7, height: size / 1.7 };
//   ctx.fillRect((size / 2) - (rectSize.width / 2),
//     (size / 2) - (rectSize.height / 2), rectSize.width, rectSize.height);
//   const crossRectSize = { width: size / 1.7, height: size / 2.7 };
//   ctx.fillRect((size / 2) - (crossRectSize.width / 2),
//     (size / 2) - (crossRectSize.height / 2), crossRectSize.width, crossRectSize.height);
// }

// function bishop() {
//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 2.5, 0, Math.PI * 2);
//   ctx.strokeStyle = 'black';
//   ctx.lineWidth = size / 25;
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.fillStyle = 'green';
//   ctx.arc(size / 2, size / 2, size / 2.5, 0, Math.PI * 2);
//   ctx.fill();
//   ctx.beginPath();
//   ctx.fillStyle = 'black';
//   ctx.arc(size / 2, size / 2, size / 8, 0, Math.PI * 2);
//   ctx.fill();
//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 3.7, 0, Math.PI * 2);
//   ctx.lineWidth = size / 50;
//   ctx.strokeStyle = 'black';
//   ctx.stroke();
// }

// function queen(size) {
//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 2.5, 0, Math.PI * 2);
//   ctx.strokeStyle = 'black';
//   ctx.lineWidth = size / 25;
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 2.5, 0, Math.PI * 2);
//   ctx.fillStyle = 'green';
//   ctx.fill();
//   ctx.fillStyle = 'black';
//   ctx.translate(size / 2, size / 2);

//   ctx.beginPath();
//   ctx.arc(0, 0, size / 3.6, 0, Math.PI * 2);
//   ctx.fillStyle = 'black';
//   ctx.fill();

//   ctx.fillStyle = 'black';
//   ctx.rotate((45 * Math.PI) / 180);
//   const rectSize = { width: size / 2.05, height: size / 2.05 };
//   ctx.fillRect(-(rectSize.width / 2), -(rectSize.height / 2), rectSize.width, rectSize.height);
//   const crossRectSize = { width: size / 2.05, height: size / 2.05 };
//   ctx.rotate((-45 * Math.PI) / 180);
//   ctx.fillRect(-(crossRectSize.width / 2),
//     -(crossRectSize.height / 2), crossRectSize.width, crossRectSize.height);

//   ctx.beginPath();
//   ctx.arc(0, 0, size / 4.1, 0, Math.PI * 2);
//   ctx.fillStyle = 'green';
//   ctx.fill();

//   ctx.beginPath();
//   ctx.arc(0, 0, size / 15, 0, Math.PI * 2);
//   ctx.strokeStyle = 'black';
//   ctx.lineWidth = size / 40;
//   ctx.stroke();
// }

// function king() {
//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 2.5, 0, Math.PI * 2);
//   ctx.strokeStyle = 'black';
//   ctx.lineWidth = size / 25;
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.fillStyle = 'green';
//   ctx.arc(size / 2, size / 2, size / 2.5, 0, Math.PI * 2);
//   ctx.fill();

//   ctx.beginPath();
//   ctx.arc(size / 2, size / 2, size / 3.7, 0, Math.PI * 2);
//   ctx.lineWidth = size / 50;
//   ctx.strokeStyle = 'black';
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.fillStyle = 'black';
//   const rectSize = { width: size / 12, height: size / 2.2 };
//   ctx.fillRect((size / 2) - (rectSize.width / 2),
//     (size / 2) - (rectSize.height / 2), rectSize.width, rectSize.height);
//   const crossRectSize = { width: size / 3, height: size / 12 };
//   ctx.fillRect((size / 2) - (crossRectSize.width / 2),
//     (size / 2.4) - (crossRectSize.height / 2), crossRectSize.width, crossRectSize.height);
// }
const board = new Board(ctx, canvas.width);
function rightChessPieces(color) {
  for (let index = 1; index <= 8; index += 1) {
    board.table.b[index].piece = new ChessPiece('pawn', ctx, board.table.b[index].position, board.cellSize, color);
  }
  board.table.a[1].piece = new ChessPiece('rook', ctx, board.table.a[1].position, board.cellSize, color);
  board.table.a[8].piece = new ChessPiece('rook', ctx, board.table.a[8].position, board.cellSize, color);
  board.table.a[2].piece = new ChessPiece('knight', ctx, board.table.a[2].position, board.cellSize, color);
  board.table.a[7].piece = new ChessPiece('knight', ctx, board.table.a[7].position, board.cellSize, color);
  board.table.a[3].piece = new ChessPiece('bishop', ctx, board.table.a[3].position, board.cellSize, color);
  board.table.a[6].piece = new ChessPiece('bishop', ctx, board.table.a[6].position, board.cellSize, color);
  board.table.a[4].piece = new ChessPiece('king', ctx, board.table.a[4].position, board.cellSize, color);
  board.table.a[5].piece = new ChessPiece('queen', ctx, board.table.a[5].position, board.cellSize, color);
}
function leftChessPieces(color) {
  for (let index = 1; index <= 8; index += 1) {
    board.table.g[index].piece = new ChessPiece('pawn', ctx, board.table.g[index].position, board.cellSize, color);
  }
  board.table.h[1].piece = new ChessPiece('rook', ctx, board.table.h[1].position, board.cellSize, color);
  board.table.h[8].piece = new ChessPiece('rook', ctx, board.table.h[8].position, board.cellSize, color);
  board.table.h[2].piece = new ChessPiece('knight', ctx, board.table.h[2].position, board.cellSize, color);
  board.table.h[7].piece = new ChessPiece('knight', ctx, board.table.h[7].position, board.cellSize, color);
  board.table.h[3].piece = new ChessPiece('bishop', ctx, board.table.h[3].position, board.cellSize, color);
  board.table.h[6].piece = new ChessPiece('bishop', ctx, board.table.h[6].position, board.cellSize, color);
  board.table.h[4].piece = new ChessPiece('king', ctx, board.table.h[4].position, board.cellSize, color);
  board.table.h[5].piece = new ChessPiece('queen', ctx, board.table.h[5].position, board.cellSize, color);
}
leftChessPieces('#565352');
rightChessPieces('#f8f8f8');
canvas.addEventListener('mousedown', (e) => {
  const mousePos = {
    x: e.clientX - canvas.getBoundingClientRect().x,
    y: e.clientY - canvas.getBoundingClientRect().y,
  };
  board.selectCell(mousePos);
});
function print() {
  Object.keys(board.table).forEach((columnKey) => {
    Object.keys(board.table[columnKey]).forEach((key) => {
      const cell = board.table[columnKey][key];
      ctx.fillStyle = cell.color;
      ctx.fillRect(cell.position.x, cell.position.y, cell.size, cell.size);
      if (cell.piece) cell.piece.print();
    });
  });
}
setInterval(print, 100);
