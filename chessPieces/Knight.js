/* eslint-disable class-methods-use-this */
import ChessPiece from './ChessPiece.js';

export default class Knight extends ChessPiece {
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
    const rectSize = { width: this.size / 1.7, height: this.size / 3.5 };
    this.ctx.fillRect((this.size / 2) - (rectSize.width / 2),
      (this.size / 2) - (rectSize.height / 2), rectSize.width, rectSize.height);
    const earRectSize = { width: this.size / 12, height: this.size / 2.5 };
    this.ctx.fillRect((this.size / 3) - (earRectSize.width / 2),
      (this.size / 2) - (earRectSize.height / 2), earRectSize.width, earRectSize.height);
    this.ctx.restore();
  }

  stepRule(inputRowIndex, inputColumnIndex) {
    const res = [
      [{ rowIndex: inputRowIndex + 1, columnIndex: inputColumnIndex + 2 }],
      [{ rowIndex: inputRowIndex + 2, columnIndex: inputColumnIndex + 1 }],
      [{ rowIndex: inputRowIndex - 1, columnIndex: inputColumnIndex - 2 }],
      [{ rowIndex: inputRowIndex - 2, columnIndex: inputColumnIndex - 1 }],
      [{ rowIndex: inputRowIndex + 1, columnIndex: inputColumnIndex - 2 }],
      [{ rowIndex: inputRowIndex + 2, columnIndex: inputColumnIndex - 1 }],
      [{ rowIndex: inputRowIndex - 1, columnIndex: inputColumnIndex + 2 }],
      [{ rowIndex: inputRowIndex - 2, columnIndex: inputColumnIndex + 1 }],
    ];
    return res.filter(({ 0: dir }) => {
      if (dir.rowIndex >= 0 && dir.rowIndex < 8) {
        if (dir.columnIndex >= 0 && dir.columnIndex < 8) return true;
      }
      return false;
    });
  }
}
