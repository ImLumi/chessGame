/* eslint-disable max-len */
import Cell from './Cell.js';

export default class Board {
  tableColors = { light: '#eeeed2', dark: '#769656' };

  table = [];

  constructor(ctx, tableSize) {
    this.selectedCell = null;
    /** @type {CanvasRenderingContext2D} */
    this.ctx = ctx;
    this.isSelect = false;
    this.tableSize = tableSize;
    this.cellSize = tableSize / 8;
    /*
    this.table = {
      a: {
        1: new Cell(this.tableColors.dark, null, { x: 0, y: 0 }, this.cellSize),
        2: new Cell(this.tableColors.light, null, { x: 0, y: this.cellSize }, this.cellSize),
        3: new Cell(this.tableColors.dark, null, { x: 0, y: this.cellSize * 2 }, this.cellSize),
        4: new Cell(this.tableColors.light, null, { x: 0, y: this.cellSize * 3 }, this.cellSize),
        5: new Cell(this.tableColors.dark, null, { x: 0, y: this.cellSize * 4 }, this.cellSize),
        6: new Cell(this.tableColors.light, null, { x: 0, y: this.cellSize * 5 }, this.cellSize),
        7: new Cell(this.tableColors.dark, null, { x: 0, y: this.cellSize * 6 }, this.cellSize),
        8: new Cell(this.tableColors.light, null, { x: 0, y: this.cellSize * 7 }, this.cellSize),
      },
      b: {
        1: new Cell(this.tableColors.light, null, { x: this.cellSize, y: 0 }, this.cellSize),
        2: new Cell(this.tableColors.dark, null, { x: this.cellSize, y: this.cellSize }, this.cellSize),
        3: new Cell(this.tableColors.light, null, { x: this.cellSize, y: this.cellSize * 2 }, this.cellSize),
        4: new Cell(this.tableColors.dark, null, { x: this.cellSize, y: this.cellSize * 3 }, this.cellSize),
        5: new Cell(this.tableColors.light, null, { x: this.cellSize, y: this.cellSize * 4 }, this.cellSize),
        6: new Cell(this.tableColors.dark, null, { x: this.cellSize, y: this.cellSize * 5 }, this.cellSize),
        7: new Cell(this.tableColors.light, null, { x: this.cellSize, y: this.cellSize * 6 }, this.cellSize),
        8: new Cell(this.tableColors.dark, null, { x: this.cellSize, y: this.cellSize * 7 }, this.cellSize),
      },
      c: {
        1: new Cell(this.tableColors.dark, null, { x: this.cellSize * 2, y: 0 }, this.cellSize),
        2: new Cell(this.tableColors.light, null, { x: this.cellSize * 2, y: this.cellSize }, this.cellSize),
        3: new Cell(this.tableColors.dark, null, { x: this.cellSize * 2, y: this.cellSize * 2 }, this.cellSize),
        4: new Cell(this.tableColors.light, null, { x: this.cellSize * 2, y: this.cellSize * 3 }, this.cellSize),
        5: new Cell(this.tableColors.dark, null, { x: this.cellSize * 2, y: this.cellSize * 4 }, this.cellSize),
        6: new Cell(this.tableColors.light, null, { x: this.cellSize * 2, y: this.cellSize * 5 }, this.cellSize),
        7: new Cell(this.tableColors.dark, null, { x: this.cellSize * 2, y: this.cellSize * 6 }, this.cellSize),
        8: new Cell(this.tableColors.light, null, { x: this.cellSize * 2, y: this.cellSize * 7 }, this.cellSize),
      },
      d: {
        1: new Cell(this.tableColors.light, null, { x: this.cellSize * 3, y: 0 }, this.cellSize),
        2: new Cell(this.tableColors.dark, null, { x: this.cellSize * 3, y: this.cellSize }, this.cellSize),
        3: new Cell(this.tableColors.light, null, { x: this.cellSize * 3, y: this.cellSize * 2 }, this.cellSize),
        4: new Cell(this.tableColors.dark, null, { x: this.cellSize * 3, y: this.cellSize * 3 }, this.cellSize),
        5: new Cell(this.tableColors.light, null, { x: this.cellSize * 3, y: this.cellSize * 4 }, this.cellSize),
        6: new Cell(this.tableColors.dark, null, { x: this.cellSize * 3, y: this.cellSize * 5 }, this.cellSize),
        7: new Cell(this.tableColors.light, null, { x: this.cellSize * 3, y: this.cellSize * 6 }, this.cellSize),
        8: new Cell(this.tableColors.dark, null, { x: this.cellSize * 3, y: this.cellSize * 7 }, this.cellSize),
      },
      e: {
        1: new Cell(this.tableColors.dark, null, { x: this.cellSize * 4, y: 0 }, this.cellSize),
        2: new Cell(this.tableColors.light, null, { x: this.cellSize * 4, y: this.cellSize }, this.cellSize),
        3: new Cell(this.tableColors.dark, null, { x: this.cellSize * 4, y: this.cellSize * 2 }, this.cellSize),
        4: new Cell(this.tableColors.light, null, { x: this.cellSize * 4, y: this.cellSize * 3 }, this.cellSize),
        5: new Cell(this.tableColors.dark, null, { x: this.cellSize * 4, y: this.cellSize * 4 }, this.cellSize),
        6: new Cell(this.tableColors.light, null, { x: this.cellSize * 4, y: this.cellSize * 5 }, this.cellSize),
        7: new Cell(this.tableColors.dark, null, { x: this.cellSize * 4, y: this.cellSize * 6 }, this.cellSize),
        8: new Cell(this.tableColors.light, null, { x: this.cellSize * 4, y: this.cellSize * 7 }, this.cellSize),
      },
      f: {
        1: new Cell(this.tableColors.light, null, { x: this.cellSize * 5, y: 0 }, this.cellSize),
        2: new Cell(this.tableColors.dark, null, { x: this.cellSize * 5, y: this.cellSize }, this.cellSize),
        3: new Cell(this.tableColors.light, null, { x: this.cellSize * 5, y: this.cellSize * 2 }, this.cellSize),
        4: new Cell(this.tableColors.dark, null, { x: this.cellSize * 5, y: this.cellSize * 3 }, this.cellSize),
        5: new Cell(this.tableColors.light, null, { x: this.cellSize * 5, y: this.cellSize * 4 }, this.cellSize),
        6: new Cell(this.tableColors.dark, null, { x: this.cellSize * 5, y: this.cellSize * 5 }, this.cellSize),
        7: new Cell(this.tableColors.light, null, { x: this.cellSize * 5, y: this.cellSize * 6 }, this.cellSize),
        8: new Cell(this.tableColors.dark, null, { x: this.cellSize * 5, y: this.cellSize * 7 }, this.cellSize),
      },
      g: {
        1: new Cell(this.tableColors.dark, null, { x: this.cellSize * 6, y: 0 }, this.cellSize),
        2: new Cell(this.tableColors.light, null, { x: this.cellSize * 6, y: this.cellSize }, this.cellSize),
        3: new Cell(this.tableColors.dark, null, { x: this.cellSize * 6, y: this.cellSize * 2 }, this.cellSize),
        4: new Cell(this.tableColors.light, null, { x: this.cellSize * 6, y: this.cellSize * 3 }, this.cellSize),
        5: new Cell(this.tableColors.dark, null, { x: this.cellSize * 6, y: this.cellSize * 4 }, this.cellSize),
        6: new Cell(this.tableColors.light, null, { x: this.cellSize * 6, y: this.cellSize * 5 }, this.cellSize),
        7: new Cell(this.tableColors.dark, null, { x: this.cellSize * 6, y: this.cellSize * 6 }, this.cellSize),
        8: new Cell(this.tableColors.light, null, { x: this.cellSize * 6, y: this.cellSize * 7 }, this.cellSize),
      },
      h: {
        1: new Cell(this.tableColors.light, null, { x: this.cellSize * 7, y: 0 }, this.cellSize),
        2: new Cell(this.tableColors.dark, null, { x: this.cellSize * 7, y: this.cellSize }, this.cellSize),
        3: new Cell(this.tableColors.light, null, { x: this.cellSize * 7, y: this.cellSize * 2 }, this.cellSize),
        4: new Cell(this.tableColors.dark, null, { x: this.cellSize * 7, y: this.cellSize * 3 }, this.cellSize),
        5: new Cell(this.tableColors.light, null, { x: this.cellSize * 7, y: this.cellSize * 4 }, this.cellSize),
        6: new Cell(this.tableColors.dark, null, { x: this.cellSize * 7, y: this.cellSize * 5 }, this.cellSize),
        7: new Cell(this.tableColors.light, null, { x: this.cellSize * 7, y: this.cellSize * 6 }, this.cellSize),
        8: new Cell(this.tableColors.dark, null, { x: this.cellSize * 7, y: this.cellSize * 7 }, this.cellSize),
      },
    };
    */
  }
  //  2: new Cell(this.tableColors.dark, null, { x: this.cellSize, y: this.cellSize }, this.cellSize),

  initTable() {
    for (let rowIndex = 0; rowIndex < 8; rowIndex += 1) {
      const row = [];
      for (let columnIndex = 0; columnIndex < 8; columnIndex += 1) {
        const color = ((rowIndex + columnIndex) % 2 === 0) ? this.tableColors.light : this.tableColors.dark;

        const pos = { x: this.cellSize * rowIndex, y: this.cellSize * columnIndex };
        row.push(new Cell(color, null, pos, this.cellSize));
      }
      this.table.push(row);
    }
  }

  rotateBoard() {
    Object.values(this.table).forEach((row) => {
      Object.values(row).forEach((cell) => {
        cell.swapAxis();
      });
    });
  }

  resizeing(size) {
    this.tableSize = size;
    this.cellSize = size / 8;
  }

  findCell(pos) {
    let columnKey = '';
    let rowKey = '';
    let returnCell = null;
    Object.entries(this.table).some(([key, row]) => {
      const findCell = Object.entries(row).find(({ 1: cell }) => cell.isActive(pos));
      if (findCell) {
        columnKey = key;
        ({ 0: rowKey, 1: returnCell } = findCell);
        return true;
      }
      return false;
    });
    return { columnKey, rowKey, returnCell };
  }

  selectCell(pos) {
    let findedCell = null;
    Object.values(this.table).some((row) => {
      const findCell = Object.entries(row).find(({ 1: cell }) => cell.isActive(pos));
      if (findCell) {
        ({ 1: findedCell } = findCell);
        return true;
      }
      return false;
    });

    if (findedCell && !this.isSelect) {
      if (findedCell.piece !== null) {
        this.selectedCell = findedCell;
        findedCell.changeColor();
        this.isSelect = !this.isSelect;
      }
    } else if (findedCell === this.selectedCell || (findedCell.piece && this.selectedCell.piece && findedCell.piece.color === this.selectedCell.piece.color)) {
      this.selectedCell.changeColor();
      this.selectedCell = null;
      this.isSelect = !this.isSelect;
    } else if (findedCell && this.isSelect) {
      findedCell.piece = this.selectedCell.piece;
      findedCell.piece.pos = findedCell.position;
      this.selectedCell.changeColor();
      this.selectedCell.piece = null;
      this.selectedCell = null;
      this.isSelect = !this.isSelect;
    }
  }

  print() {
    this.table.forEach((row) => {
      row.forEach((cell) => {
        this.ctx.fillStyle = cell.color;
        this.ctx.fillRect(cell.position.x, cell.position.y, cell.size, cell.size);
        this.ctx.strokeRect(cell.position.x, cell.position.y, cell.size, cell.size);
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        if (cell.piece) cell.piece.print();
      });
    });
  }
}
