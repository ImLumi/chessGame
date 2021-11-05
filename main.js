/* eslint-disable max-len */
import Board from './Board.js';
import {
  Queen, King, Knight, Pawn, Bishop, Rook,
} from './chessPieces/chessPiecesAcc.js';

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('.board');
const ctx = canvas.getContext('2d');
let size = (window.innerHeight > window.innerWidth) ? window.innerWidth : window.innerHeight;
if (size > 650) size = 650;
canvas.width = size;
canvas.height = size;

const board = new Board(ctx, canvas.width);
board.initTable();
function rightChessPieces(color) {
  for (let index = 0; index < 8; index += 1) {
    board.table[1][index].piece = new Pawn('down', ctx, board.table[1][index].position, board.cellSize, color);
  }
  board.table[0][0].piece = new Rook(ctx, board.table[0][0].position, board.cellSize, color);
  board.table[0][7].piece = new Rook(ctx, board.table[0][7].position, board.cellSize, color);
  board.table[0][1].piece = new Knight(ctx, board.table[0][1].position, board.cellSize, color);
  board.table[0][6].piece = new Knight(ctx, board.table[0][6].position, board.cellSize, color);
  board.table[0][2].piece = new Bishop(ctx, board.table[0][2].position, board.cellSize, color);
  board.table[0][5].piece = new Bishop(ctx, board.table[0][5].position, board.cellSize, color);
  board.table[0][3].piece = new King(ctx, board.table[0][3].position, board.cellSize, color);
  board.table[0][4].piece = new Queen(ctx, board.table[0][4].position, board.cellSize, color);
}
function leftChessPieces(color) {
  for (let index = 0; index < 8; index += 1) {
    board.table[6][index].piece = new Pawn('up', ctx, board.table[6][index].position, board.cellSize, color);
  }
  board.table[7][0].piece = new Rook(ctx, board.table[7][0].position, board.cellSize, color);
  board.table[7][7].piece = new Rook(ctx, board.table[7][7].position, board.cellSize, color);
  board.table[7][1].piece = new Knight(ctx, board.table[7][1].position, board.cellSize, color);
  board.table[7][6].piece = new Knight(ctx, board.table[7][6].position, board.cellSize, color);
  board.table[7][2].piece = new Bishop(ctx, board.table[7][2].position, board.cellSize, color);
  board.table[7][5].piece = new Bishop(ctx, board.table[7][5].position, board.cellSize, color);
  board.table[7][3].piece = new King(ctx, board.table[7][3].position, board.cellSize, color);
  board.table[7][4].piece = new Queen(ctx, board.table[7][4].position, board.cellSize, color);
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
board.rotateBoard();

setInterval(() => { board.print(); }, 100);
