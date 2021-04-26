// Global variables: 
var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300;      // snake speed
var FOOD_SPEED = 5000;      // food creation speed
var PROBLEM_SPEED = 5000;   // obstacles speed
var snake = [];             // snake
var direction = 'y+';       // snake movement direction
var gameIsRunning = false;  // game status
var snake_timer;            // snake timer
var food_timer;             // food timer
var problem_timer;          // obstacles timer
var score = 0;              // score
var btnStart =  document.getElementsByClassName('snake-start')[0];  //start button
var btnRenew = document.getElementsByClassName('snake-renew')[0];   //restart button
var points = document.getElementsByClassName('score-point')[0];     //score

function init() {
    prepareGameField(); // Generating the game board
    points.innerHTML = score;
    var wrap = document.getElementsByClassName('wrap')[0];
    // Adjusting the size of the container to the game board
    if (16 * (FIELD_SIZE_X + 1) < 380) {
        wrap.style.width = '380px';
    }
    else {
        wrap.style.width = (16 * (FIELD_SIZE_X + 1)).toString() + 'px';
    }

    // Start and New Game button events
    btnStart.addEventListener('click', startGame);
    btnRenew.addEventListener('click', refreshGame);

// Tracking keyboard keys
    addEventListener('keydown', changeDirection);
}

/**
 * Game board generation function
 */
function prepareGameField() {
    // Creating a table
    var game_table = document.createElement('table');
    game_table.setAttribute('class', 'game-table');

    // Generating game table cells
    for (var i = 0; i < FIELD_SIZE_Y; i++) {
        // Generating a row
        var row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;

        for (var j = 0; j < FIELD_SIZE_X; j++) {
            // Generating a cell
            var cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;

            row.appendChild(cell); // Adding a cell
        }
        game_table.appendChild(row); // Adding a row
    }

    document.getElementById('snake-field').appendChild(game_table); // Adding a table
}

/**
 * Game start function
 */
function startGame() {
    if (!gameIsRunning) {
        gameIsRunning = true;
        btnStart.className = "snake-start-nonactive";
        createFood();
        respawn();
        snake_timer = setInterval(move, SNAKE_SPEED);
        food_timer = setInterval(createFood, FOOD_SPEED);
        problem_timer = setInterval(createProblem, PROBLEM_SPEED);
    }
}

/**
 * Placing snake on the game board
 */
function respawn() {
    // Snake is a <td> array
    // Snake starting length = 2

    // Respawning snake in the center of the game board
    var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
    var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);

    // Snake head
    var snake_head = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
    snake_head.setAttribute('class', snake_head.getAttribute('class') + ' snake-unit');
    // Snake body
    var snake_tail = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
    snake_tail.setAttribute('class', snake_tail.getAttribute('class') + ' snake-unit');

    snake.push(snake_head);
    snake.push(snake_tail);
    points.innerHTML = score;
}

/**
 * Snake movements
 */
function move() {
    // Classes assembling
    var snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');

    // Head shift
    var new_unit;
    var snake_coords = snake_head_classes[1].split('-');
    var coord_y = parseInt(snake_coords[1]);
    var coord_x = parseInt(snake_coords[2]);

    // Determing a new point
    if (direction == 'x-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
    }
    else if (direction == 'x+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];
    }
    else if (direction == 'y+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
    }
    else if (direction == 'y-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
    }

    if (new_unit === undefined) {
        new_unit = headTeleport(coord_y, coord_x);
    }

    if (!haveFood(new_unit)) {
        // Looking for a tail
        var removed = snake.splice(0, 1)[0];
        var classes = removed.getAttribute('class').split(' ');

        // Removing a tail
        removed.setAttribute('class', classes[0] + ' ' + classes[1]);
    }
    else {
        if (SNAKE_SPEED > 50) {
            SNAKE_SPEED -= 20;
            clearInterval(snake_timer);
            snake_timer = setInterval(move, SNAKE_SPEED);
        }
    }


    // Checks:
    // 1) new_unit isn't part of the snake
    // 2) didn't crash into an obstacle
    if (!isSnakeUnit(new_unit) && pathClear(new_unit)) {
        // adding a new unit to the snake
        new_unit.setAttribute('class', new_unit.getAttribute('class') + ' snake-unit');
        snake.push(new_unit);

        // checking if the tail needs to be removed
    }
    else {
        finishTheGame();
    }
}

/**
 * The function to transfer the snake to the other side
 * @param coord_y
 * @param coord_x
 * @returns {*}
 */
function headTeleport(coord_y, coord_x) {
    var unit;
    if (direction == 'x-') {
        unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (FIELD_SIZE_X-1))[0];
    }
    else if (direction == 'x+') {
        unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (0))[0];
    }
    else if (direction == 'y+') {
        unit = document.getElementsByClassName('cell-' + (FIELD_SIZE_Y-1) + '-' + (coord_x))[0];
    }
    else if (direction == 'y-') {
        unit = document.getElementsByClassName('cell-' + (0) + '-' + (coord_x))[0];
    }
    return unit;
}

/**
 * Function to check if we have crashed into an obstacle
 * @param unit
 */
function pathClear(unit) {
    var check = false;

    var unit_classes = unit.getAttribute('class').split(' ');
    if (!unit_classes.includes('problem-unit')) {
        check = true;
    }
    return check;
}

/**
 * Snake check
 * @param unit
 * @returns {boolean}
 */
function isSnakeUnit(unit) {
    var check = false;

    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}
/**
 * Food check
 * @param unit
 * @returns {boolean}
 */
function haveFood(unit) {
    var check = false;

    var unit_classes = unit.getAttribute('class').split(' ');

    // Is food
    if (unit_classes.includes('food-unit')) {
        check = true;
        createFood();
        score++;
        points.innerHTML = score;
    }
    return check;
}

/**
 * Generating food
 */
function createFood() {
    var foodCreated = false;

    while (!foodCreated) {
        // Random
        var food_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var food_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        var food_cell = document.getElementsByClassName('cell-' + food_y + '-' + food_x)[0];
        var food_cell_classes = food_cell.getAttribute('class').split(' ');

        // Is snake check
        if (!food_cell_classes.includes('snake-unit') && !food_cell_classes.includes('problem-unit')) {
            var classes = '';
            for (var i = 0; i < food_cell_classes.length; i++) {
                classes += food_cell_classes[i] + ' ';
            }

            food_cell.setAttribute('class', classes + 'food-unit');
            foodCreated = true;
        }
    }
}

/**
 * Function to create obstacles
 */
function createProblem() {
    var problemCreated = false;

    while (!problemCreated) {
        // Random
        var problem_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var problem_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        var problem_cell = document.getElementsByClassName('cell-' + problem_y + '-' + problem_x)[0];
        var problem_cell_classes = problem_cell.getAttribute('class').split(' ');

        // Is snake check
        if (!problem_cell_classes.includes('snake-unit') && !problem_cell_classes.includes('food-unit')) {
            var classes = '';
            for (var i = 0; i < problem_cell_classes.length; i++) {
                classes += problem_cell_classes[i] + ' ';
            }
            problem_cell.setAttribute('class', classes + 'problem-unit');
            problemCreated = true;
        }
    }
}

/**
 * Changing the movement direction
 * @param e - event
 */
function changeDirection(e) {
    switch (e.keyCode) {
        case 37: // Left arrow key
            if (direction != 'x+') {
                direction = 'x-'
            }
            break;
        case 38: // Up arrow key
            if (direction != 'y-') {
                direction = 'y+'
            }
            break;
        case 39: // Right arrow key
            if (direction != 'x-') {
                direction = 'x+'
            }
            break;
        case 40: // Down arrow key
            if (direction != 'y+') {
                direction = 'y-'
            }
            break;
    }
}

/**
 * Finish game function
 */
function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snake_timer);
    clearInterval(food_timer);
    clearInterval(problem_timer);
    alert('Вы проиграли! Ваш результат: ' + score.toString());
}

/**
 * New game
 */
function refreshGame() {
    location.reload();
}

// Initializing
window.onload = init;