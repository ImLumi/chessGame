/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import ChessPiece from './ChessPiece.js';

export default class Queen extends ChessPiece {
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
    this.ctx.translate(this.size / 2, this.size / 2);

    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.size / 3.6, 0, Math.PI * 2);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();

    this.ctx.fillStyle = 'black';
    this.ctx.rotate((45 * Math.PI) / 180);
    const rectSize = { width: this.size / 2.05, height: this.size / 2.05 };
    this.ctx.fillRect(-(rectSize.width / 2), -(rectSize.height / 2),
      rectSize.width, rectSize.height);
    const crossRectSize = { width: this.size / 2.05, height: this.size / 2.05 };
    this.ctx.rotate((-45 * Math.PI) / 180);
    this.ctx.fillRect(-(crossRectSize.width / 2),
      -(crossRectSize.height / 2), crossRectSize.width, crossRectSize.height);

    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.size / 4.1, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.size / 15, 0, Math.PI * 2);
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = this.size / 40;
    this.ctx.stroke();
    this.ctx.restore();
  }

  stepRule(inputRowIndex, inputColumnIndex) {
    const dir1 = [];
    const dir2 = [];
    const dir3 = [];
    const dir4 = [];
    const dir5 = [];
    const dir6 = [];
    const dir7 = [];
    const dir8 = [];
    for (let i = inputRowIndex + 1; i < 8; i += 1) {
      dir1.push({ rowIndex: i, columnIndex: inputColumnIndex });
    }
    for (let i = inputRowIndex - 1; i >= 0; i -= 1) {
      dir2.push({ rowIndex: i, columnIndex: inputColumnIndex });
    }
    for (let i = inputColumnIndex + 1; i < 8; i += 1) {
      dir3.push({ rowIndex: inputRowIndex, columnIndex: i });
    }
    for (let i = inputColumnIndex - 1; i >= 0; i -= 1) {
      dir4.push({ rowIndex: inputRowIndex, columnIndex: i });
    }

    let columnIndex = inputColumnIndex;
    for (let i = inputRowIndex + 1; i < 8; i += 1) { // r++, c++
      if ((columnIndex + 1) >= 8) break;
      dir5.push({ rowIndex: i, columnIndex: ++columnIndex });
    }
    columnIndex = inputColumnIndex;
    for (let i = inputRowIndex - 1; i >= 0; i -= 1) { // r--, c++
      if ((columnIndex + 1) >= 8) break;
      dir6.push({ rowIndex: i, columnIndex: ++columnIndex });
    }
    let rowIndex = inputRowIndex;
    for (let i = inputColumnIndex - 1; i >= 0; i -= 1) { // r++, c--
      if ((rowIndex + 1) >= 8) break;
      dir7.push({ rowIndex: ++rowIndex, columnIndex: i });
    }
    rowIndex = inputRowIndex;
    for (let i = inputColumnIndex - 1; i >= 0; i -= 1) { // r--, c--
      if ((rowIndex - 1) < 0) break;
      dir8.push({ rowIndex: --rowIndex, columnIndex: i });
    }
    console.log([dir1, dir2, dir3, dir4, dir5, dir6, dir7, dir8].filter((dir) => (dir.length > 0)));
    return [dir1, dir2, dir3, dir4, dir5, dir6, dir7, dir8].filter((dir) => (dir.length > 0));
  }
}
