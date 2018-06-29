class Connect4 {
    constructor(selector) {
        this.ROWS = 6;
        this.COLS = 7;
        this.selector = selector;
        this.createGrid();
    }

    createGrid() {
        const $board = $(this.selector);
        for (let i = 0; i < this.ROWS; i++) {
            const $row = $('<div>').addClass('row');
            for (let j = 0; j < this.COLS; j++) {
                const $col = $('<div>').addClass('col empty');
                $row.append($col);
            }
            $board.append($row);
        }
    }
}