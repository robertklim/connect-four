class Connect4 {
    constructor(selector) {
        this.ROWS = 6;
        this.COLS = 7;
        this.selector = selector;
        this.createGrid();
        this.setupEventListeners();
    }

    createGrid() {
        const $board = $(this.selector);
        for (let i = 0; i < this.ROWS; i++) {
            const $row = $('<div>').addClass('row');
            for (let j = 0; j < this.COLS; j++) {
                const $col = $('<div>')
                    .addClass('col empty')
                    .attr('data-col', j)
                    .attr('data-row', i);
                $row.append($col);
            }
            $board.append($row);
        }
    }

    setupEventListeners() {
        const $board = $(this.selector);

        function findLastEmptyCell(col) {
            const cells = $(`.col[data-col='${col}']`);
            for (let i = cells.length - 1; i >= 0; i--) {
                const $cell = $(cells[i]);
                if ($cell.hasClass('empty')) {
                    return $cell;
                }
            }
            return null;
        }

        $board.on('mouseenter', '.col.empty', function() {
            const col = $(this).data('col');
            const $lastEmptyCell = findLastEmptyCell(col);
            $lastEmptyCell.addClass('next-red');
        });

        $board.on('mouseleave', '.col', function() {
            $('.col').removeClass('next-red');
        });

        $board.on('click', '.col.empty', function() {
            const $col = $(this).data('col');
            const $lastEmptyCell = findLastEmptyCell($col);
            $lastEmptyCell.removeClass('empty');
            $lastEmptyCell.addClass('red');
        });
    }
}