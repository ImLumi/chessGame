/* eslint-disable class-methods-use-this */
import ChessPiece from './ChessPiece.js';

export default class Bishop extends ChessPiece {
  print() {
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, this.pos.x, this.pos.y);
    this.ctx.beginPath();
    this.ctx.arc(this.size / 2, this.size / 2, this.size / 2.5, 0, Math.PI * 2);
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = this.size / 25;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.size / 2, this.size / 2, this.size / 2.5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.fillStyle = 'black';
    this.ctx.arc(this.size / 2, this.size / 2, this.size / 8, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(this.size / 2, this.size / 2, this.size / 3.7, 0, Math.PI * 2);
    this.ctx.lineWidth = this.size / 50;
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();
    this.ctx.restore();
  }

  stepRule(inputRowIndex, inputColumnIndex) {
    const dir1 = [];
    const dir2 = [];
    const dir3 = [];
    const dir4 = [];
    let columnIndex = inputColumnIndex;
    for (let i = inputRowIndex + 1; i < 8; i += 1) { // r++, c++
      if ((columnIndex + 1) >= 8) break;
      dir1.push({ rowIndex: i, columnIndex: ++columnIndex });
    }
    columnIndex = inputColumnIndex;
    for (let i = inputRowIndex - 1; i >= 0; i -= 1) { // r--, c++
      if ((columnIndex + 1) >= 8) break;
      dir2.push({ rowIndex: i, columnIndex: ++columnIndex });
    }
    let rowIndex = inputRowIndex;
    for (let i = inputColumnIndex - 1; i >= 0; i -= 1) { // r++, c--
      if ((rowIndex + 1) >= 8) break;
      dir3.push({ rowIndex: ++rowIndex, columnIndex: i });
    }
    rowIndex = inputRowIndex;
    for (let i = inputColumnIndex - 1; i >= 0; i -= 1) { // r--, c--
      if ((rowIndex - 1) < 0) break;
      dir4.push({ rowIndex: --rowIndex, columnIndex: i });
    }
    console.log([dir1, dir2, dir3, dir4]);
    return [dir1, dir2, dir3, dir4].filter((dir) => (dir.length > 0));
  }
}
