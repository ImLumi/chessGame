/* eslint-disable max-len */
import Cell from './Cell.js';

export default class Board {
  constructor(ctx, tableSize) {
    this.selectedCell = null;
    this.ctx = ctx;
    this.isSelect = false;
    this.tableSize = tableSize;
    this.cellSize = this.tableSize / 8;
    this.tableColors = { light: 'white', dark: 'black' };
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
      this.selectedCell = findedCell;
      findedCell.changeColor();
      this.isSelect = !this.isSelect;
    } else if (findedCell && this.isSelect) {
      findedCell.piece = this.selectedCell.piece;
      findedCell.piece.pos = findedCell.position;
      this.selectedCell.changeColor();
      this.selectedCell.piece = null;
      this.isSelect = !this.isSelect;
      console.log(findedCell);
    }
    console.log(this.isSelect);
  }
}
