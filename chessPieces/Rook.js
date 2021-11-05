/* eslint-disable class-methods-use-this */
import ChessPiece from './ChessPiece.js';

export default class Rook extends ChessPiece {
  print() {
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, this.pos.x, this.pos.y);
    this.ctx.beginPath();
    this.ctx.arc(this.size / 2, this.size / 2, this.size / 2.5, 0, Math.PI * 2);
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = this.size / 25;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(this.size / 2, this.size / 2, this.size / 2.5, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.fillStyle = 'black';
    const rectSize = { width: this.size / 2.7, height: this.size / 1.7 };
    this.ctx.fillRect((this.size / 2) - (rectSize.width / 2),
      (this.size / 2) - (rectSize.height / 2), rectSize.width, rectSize.height);
    const crossRectSize = { width: this.size / 1.7, height: this.size / 2.7 };
    this.ctx.fillRect((this.size / 2) - (crossRectSize.width / 2),
      (this.size / 2) - (crossRectSize.height / 2), crossRectSize.width, crossRectSize.height);
    this.ctx.restore();
  }

  stepRule(rowIndex, columnIndex) {
    console.log(rowIndex, columnIndex);
    const dir1 = [];
    const dir2 = [];
    const dir3 = [];
    const dir4 = [];
    for (let i = rowIndex + 1; i < 8; i += 1) {
      dir1.push({ rowIndex: i, columnIndex });
    }
    for (let i = rowIndex - 1; i >= 0; i -= 1) {
      dir2.push({ rowIndex: i, columnIndex });
    }
    for (let i = columnIndex + 1; i < 8; i += 1) {
      dir3.push({ rowIndex, columnIndex: i });
    }
    for (let i = columnIndex - 1; i >= 0; i -= 1) {
      dir4.push({ rowIndex, columnIndex: i });
    }
    return [dir1, dir2, dir3, dir4];
  }
}
