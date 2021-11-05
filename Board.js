/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
import Cell from './Cell.js';
import Pawn from './chessPieces/Pawn.js';

export default class Board {
  tableColors = { light: '#eeeed2', dark: '#769656' };

  table = [];

  stepList = [];

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

  clearStep() {
    if (this.stepList) {
      this.stepList.forEach((direction) => {
        direction.forEach((index) => {
          this.table[index.rowIndex][index.columnIndex].changeColor();
        });
      });
      this.stepList = [];
    }
  }

  calcStep({ rowIndex, columnIndex }, piece) {
    const calcSteps = piece.stepRule(rowIndex, columnIndex);
    calcSteps.forEach((direction) => {
      const directionList = [];
      for (const MatrixIndex of direction) {
        const checkCell = this.table[MatrixIndex.rowIndex][MatrixIndex.columnIndex];
        if (checkCell.piece && checkCell.piece.color === piece.color) {
          break;
        } else if (checkCell.piece && checkCell.piece.color !== piece.color) {
          directionList.push(MatrixIndex);
          this.table[MatrixIndex.rowIndex][MatrixIndex.columnIndex].changeColor();
          break;
        }
        directionList.push(MatrixIndex);
        this.table[MatrixIndex.rowIndex][MatrixIndex.columnIndex].changeColor();
      }
      this.stepList.push(directionList);
    });
    if (piece instanceof Pawn) {
      if (this.stepList.length > 0) {
        const nextCell = this.table[this.stepList[0][0].rowIndex][this.stepList[0][0].columnIndex];
        if (nextCell.piece) {
          this.stepList = [];
          nextCell.changeColor();
        }
      }
      console.log(piece);
      const dashPos = piece.dashRule(rowIndex, columnIndex);
      console.log(dashPos);
      dashPos.forEach((posIndex) => {
        const cell = this.table[posIndex.rowIndex][posIndex.columnIndex];
        if (cell.piece && cell.piece.color !== piece.color) {
          this.stepList.push([posIndex]);
          cell.changeColor();
        }
      });
    }
  }

  selectCell(pos) {
    let findedCell = null;
    let [rowIndex, columnIndex] = [[], []];
    this.table.some((row, rIndex) => {
      findedCell = row.find((cell, colIndex) => {
        if (cell.isActive(pos)) {
          columnIndex = colIndex;
          return true;
        }
        return false;
      });

      if (findedCell) {
        rowIndex = rIndex;
        return true;
      }
      return false;
    });
    if (findedCell) {
      if (!this.isSelect) {
        if (findedCell.piece) {
          this.calcStep({ rowIndex, columnIndex }, findedCell.piece);
          this.selectedCell = findedCell;
          findedCell.changeColor();
          this.isSelect = !this.isSelect;
        }
      } else if (findedCell === this.selectedCell) {
        this.clearStep();
        this.selectedCell = null;
        findedCell.changeColor();
        this.isSelect = !this.isSelect;
      } else if (findedCell.active) {
        findedCell.piece = this.selectedCell.piece;
        findedCell.piece.pos = findedCell.position;
        this.selectedCell.changeColor();
        this.clearStep();
        this.selectedCell.piece = null;
        this.isSelect = !this.isSelect;
      }
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
