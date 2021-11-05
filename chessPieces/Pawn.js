/* eslint-disable class-methods-use-this */
import ChessPiece from './ChessPiece.js';

export default class Pawn extends ChessPiece {
  constructor(direction, ctx, pos, size, color) {
    super(ctx, pos, size, color);
    this.direction = direction;
    this.startPos = pos;
  }

  print() {
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, this.pos.x, this.pos.y);
    this.ctx.beginPath();
    this.ctx.arc(this.size / 2, this.size / 4, this.size / 10, 0, 2 * Math.PI);
    this.ctx.moveTo(this.size / 2, (this.size * 2) / 4);
    this.ctx.arc(this.size / 2, (this.size * 2) / 4, this.size / 5, 0, 2 * Math.PI);
    this.ctx.moveTo(this.size / 2, (this.size * 3.5) / 4);
    this.ctx.arc(this.size / 2, (this.size * 3.5) / 4, this.size / 3, Math.PI, 2 * Math.PI);
    this.ctx.lineTo(this.size / 2, (this.size * 3.5) / 4);
    this.ctx.lineWidth = this.size / 22;
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(this.size / 2, this.size / 4, this.size / 10, 0, 2 * Math.PI);
    this.ctx.moveTo(this.size / 2, (this.size * 2) / 4);
    this.ctx.arc(this.size / 2, (this.size * 2) / 4, this.size / 5, 0, 2 * Math.PI);
    this.ctx.moveTo(this.size / 2, (this.size * 3.5) / 4);
    this.ctx.arc(this.size / 2, (this.size * 3.5) / 4, this.size / 3, Math.PI, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.restore();
  }

  stepRule(inputRowIndex, inputColumnIndex) {
    const res = [];
    const stepSize = 1;
    switch (this.direction) {
      case 'right': {
        if (this.startPos === this.pos) {
          this.firstStep = false;
          res.push([{ rowIndex: inputRowIndex, columnIndex: inputColumnIndex + stepSize },
            { rowIndex: inputRowIndex, columnIndex: inputColumnIndex + 2 },
          ]);
          break;
        }
        res.push([{ rowIndex: inputRowIndex, columnIndex: inputColumnIndex + stepSize }]);
        break;
      }
      case 'left': {
        if (this.startPos === this.pos) {
          this.firstStep = false;
          res.push([{ rowIndex: inputRowIndex, columnIndex: inputColumnIndex - stepSize },
            { rowIndex: inputRowIndex, columnIndex: inputColumnIndex - 2 },
          ]);
          break;
        }
        res.push([{ rowIndex: inputRowIndex, columnIndex: inputColumnIndex - stepSize }]);
        break;
      }
      case 'up': {
        if (this.startPos === this.pos) {
          this.firstStep = false;
          res.push([{ rowIndex: inputRowIndex - stepSize, columnIndex: inputColumnIndex },
            { rowIndex: inputRowIndex - 2, columnIndex: inputColumnIndex },
          ]);
          break;
        }
        res.push([{ rowIndex: inputRowIndex - stepSize, columnIndex: inputColumnIndex }]);
        break;
      }
      case 'down': {
        if (this.startPos === this.pos) {
          this.firstStep = false;
          res.push([{ rowIndex: inputRowIndex + stepSize, columnIndex: inputColumnIndex },
            { rowIndex: inputRowIndex + 2, columnIndex: inputColumnIndex },
          ]);
          break;
        }
        res.push([{ rowIndex: inputRowIndex + stepSize, columnIndex: inputColumnIndex }]);
        break;
      }
      default: return [[]];
    }
    return res.filter(({ 0: dir }) => {
      if (dir.rowIndex >= 0 && dir.rowIndex < 8) {
        if (dir.columnIndex >= 0 && dir.columnIndex < 8) return true;
      }
      return false;
    });
  }

  dashRule(inputRowIndex, inputColumnIndex) {
    const res = [];
    switch (this.direction) {
      case 'right': {
        res.push({ rowIndex: inputRowIndex + 1, columnIndex: inputColumnIndex + 1 });
        res.push({ rowIndex: inputRowIndex - 1, columnIndex: inputColumnIndex + 1 });
        break;
      }
      case 'left': {
        res.push({ rowIndex: inputRowIndex + 1, columnIndex: inputColumnIndex - 1 });
        res.push({ rowIndex: inputRowIndex - 1, columnIndex: inputColumnIndex - 1 });
        break;
      }
      case 'up': {
        res.push({ rowIndex: inputRowIndex - 1, columnIndex: inputColumnIndex + 1 });
        res.push({ rowIndex: inputRowIndex - 1, columnIndex: inputColumnIndex - 1 });
        break;
      }
      case 'down': {
        res.push({ rowIndex: inputRowIndex + 1, columnIndex: inputColumnIndex - 1 });
        res.push({ rowIndex: inputRowIndex + 1, columnIndex: inputColumnIndex + 1 });
        break;
      }
      default: return [];
    }
    return res.filter((dir) => {
      if (dir.rowIndex >= 0 && dir.rowIndex < 8) {
        if (dir.columnIndex >= 0 && dir.columnIndex < 8) return true;
      }
      return false;
    });
  }
}
