export default class ChessPiece {
  /** @param {string} pieceType */
  constructor(pieceType, ctx, pos, size, color) {
    /** @type {CanvasRenderingContext2D} */
    this.ctx = ctx;
    this.pos = pos;
    this.size = size;
    this.color = color;
    this.pieceType = pieceType;
  }

  pawn() {
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

  knight() {
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

  rook() {
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

  bishop() {
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

  queen() {
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

  king() {
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

  print() {
    this[this.pieceType]();
  }
}
