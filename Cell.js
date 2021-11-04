export default class Cell {
  activeColor = 'red';

  constructor(defaultColor, piece, position, size) {
    this.defaultColor = defaultColor;
    this.color = this.defaultColor;
    this.piece = piece;
    this.position = position;
    this.size = size;
    this.active = false;
  }

  isActive(pos) {
    if (pos.x > this.position.x && pos.x < (this.position.x + this.size)) {
      if (pos.y > this.position.y && pos.y < (this.position.y + this.size)) return true;
    }
    return false;
  }

  changeColor() {
    this.active = !this.active;
    this.color = this.active ? this.activeColor : this.defaultColor;
  }

  swapAxis() {
    this.valami = true;
    [this.position.x, this.position.y] = [this.position.y, this.position.x];
  }
}
