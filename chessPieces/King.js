/* eslint-disable class-methods-use-this */
import ChessPiece from './ChessPiece.js';

export default class King extends ChessPiece {
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
    this.ctx.arc(this.size / 2, this.size / 2, this.size / 3.7, 0, Math.PI * 2);
    this.ctx.lineWidth = this.size / 50;
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = 'black';
    const rectSize = { width: this.size / 12, height: this.size / 2.2 };
    this.ctx.fillRect((this.size / 2) - (rectSize.width / 2),
      (this.size / 2) - (rectSize.height / 2), rectSize.width, rectSize.height);
    const crossRectSize = { width: this.size / 3, height: this.size / 12 };
    this.ctx.fillRect((this.size / 2) - (crossRectSize.width / 2),
      (this.size / 2.4) - (crossRectSize.height / 2), crossRectSize.width, crossRectSize.height);
    this.ctx.restore();
  }

  stepRule(inputRowIndex, inputColumnIndex) {
    const res = [];
    for (let i = -1; i < 2; i += 2) {
      res.push([{ rowIndex: inputRowIndex + i, columnIndex: inputColumnIndex + i }]);
      res.push([{ rowIndex: inputRowIndex - i, columnIndex: inputColumnIndex + i }]);
      res.push([{ rowIndex: inputRowIndex, columnIndex: inputColumnIndex - i }]);
      res.push([{ rowIndex: inputRowIndex + i, columnIndex: inputColumnIndex }]);
    }
    return res.filter(({ 0: dir }) => {
      if (dir.rowIndex >= 0 && dir.rowIndex < 8) {
        if (dir.columnIndex >= 0 && dir.columnIndex < 8) return true;
      }
      return false;
    });
  }
}
