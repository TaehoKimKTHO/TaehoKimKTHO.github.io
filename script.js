const yearElement = document.querySelector('#year');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const sectionIds = navLinks
  .map((link) => link.getAttribute('href'))
  .filter((href) => href && href.startsWith('#'));
const sections = sectionIds
  .map((id) => document.querySelector(id))
  .filter(Boolean);

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

function setActiveLink(hash) {
  const targetHash = hash && hash.startsWith('#') ? hash : '#home';

  navLinks.forEach((link) => {
    const active = link.getAttribute('href') === targetHash;
    if (active) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function setNavOpen(open) {
  if (!siteNav || !navToggle) {
    return;
  }

  siteNav.dataset.open = open ? 'true' : 'false';
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.dataset.open === 'true';
    setNavOpen(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 820px)').matches) {
        setNavOpen(false);
      }
    });
  });
}

window.addEventListener('hashchange', () => {
  setActiveLink(window.location.hash);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && siteNav?.dataset.open === 'true') {
    setNavOpen(false);
  }
});

function getCurrentSection() {
  const midpoint = window.innerHeight * 0.35;

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= midpoint && rect.bottom >= midpoint) {
      return `#${section.id}`;
    }
  }

  return window.location.hash || '#home';
}

let scrollTicking = false;
window.addEventListener(
  'scroll',
  () => {
    if (scrollTicking) {
      return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(() => {
      setActiveLink(getCurrentSection());
      scrollTicking = false;
    });
  },
  { passive: true }
);

setActiveLink(window.location.hash || '#home');
setNavOpen(false);

class SnakeGame {
  constructor(options) {
    this.board = options.board;
    this.boardOverlay = options.boardOverlay;
    this.scoreValue = options.scoreValue;
    this.highScoreValue = options.highScoreValue;
    this.statusValue = options.statusValue;
    this.startButton = options.startButton;
    this.pauseButton = options.pauseButton;
    this.restartButton = options.restartButton;
    this.touchStartButton = options.touchStartButton;
    this.touchButtons = options.touchButtons;
    this.storageKey = 'taeho-snake-high-score';

    this.gridSize = 20;
    this.boardSize = 20;
    this.timerId = null;
    this.running = false;
    this.paused = false;
    this.gameOver = false;
    this.score = 0;
    this.highScore = this.readHighScore();
    this.direction = { x: 1, y: 0 };
    this.nextDirection = { x: 1, y: 0 };
    this.snake = [];
    this.food = { x: 0, y: 0 };
    this.pointerStart = null;
    this.boundKeydown = this.onKeydown.bind(this);
    this.boundPointerDown = this.onPointerDown.bind(this);
    this.boundPointerUp = this.onPointerUp.bind(this);
    this.cells = [];
  }

  init() {
    if (!this.board) {
      return;
    }

    this.buildBoard();
    this.bindControls();
    this.resetState();
    this.render();
    this.updateHud();
    this.setStatus('Ready');
    this.board.addEventListener('pointerdown', this.boundPointerDown);
    this.board.addEventListener('pointerup', this.boundPointerUp);
    this.board.addEventListener('pointercancel', this.boundPointerUp);
    this.board.addEventListener('pointerleave', this.boundPointerUp);
  }

  buildBoard() {
    const totalCells = this.gridSize * this.gridSize;
    if (this.cells.length === totalCells) {
      return;
    }

    this.board.style.setProperty('--grid-size', String(this.gridSize));
    this.board.innerHTML = '';
    this.cells = [];

    const fragment = document.createDocumentFragment();
    for (let index = 0; index < totalCells; index += 1) {
      const cell = document.createElement('div');
      cell.className = 'snake-cell';
      cell.setAttribute('aria-hidden', 'true');
      this.cells.push(cell);
      fragment.appendChild(cell);
    }

    this.board.appendChild(fragment);
  }

  bindControls() {
    document.addEventListener('keydown', this.boundKeydown);
    this.touchButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const dir = button.dataset.dir;
        if (dir) {
          this.handleDirection(dir);
          return;
        }

        if (button === this.touchStartButton) {
          this.toggleStartPause();
        }
      });
    });

    this.startButton?.addEventListener('click', () => this.startGame());
    this.pauseButton?.addEventListener('click', () => this.togglePause());
    this.restartButton?.addEventListener('click', () => this.restartGame());
    this.touchStartButton?.addEventListener('click', () => this.toggleStartPause());
  }

  readHighScore() {
    const raw = window.localStorage.getItem(this.storageKey);
    const parsed = Number(raw);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
  }

  saveHighScore() {
    window.localStorage.setItem(this.storageKey, String(this.highScore));
  }

  resetState() {
    this.stopLoop();
    const startX = Math.floor(this.gridSize / 2) - 1;
    const startY = Math.floor(this.gridSize / 2);

    this.score = 0;
    this.running = false;
    this.paused = false;
    this.gameOver = false;
    this.direction = { x: 1, y: 0 };
    this.nextDirection = { x: 1, y: 0 };
    this.snake = [
      { x: startX, y: startY },
      { x: startX - 1, y: startY },
      { x: startX - 2, y: startY },
    ];
    this.food = this.spawnFood();
  }

  startGame() {
    if (this.gameOver) {
      this.resetState();
    }

    if (this.running && !this.paused) {
      return;
    }

    this.running = true;
    this.paused = false;
    this.setStatus('Playing');
    this.updateButtons();
    this.scheduleNextTick();
  }

  toggleStartPause() {
    if (this.gameOver) {
      this.restartGame();
      return;
    }

    if (!this.running) {
      this.startGame();
      return;
    }

    this.togglePause();
  }

  togglePause() {
    if (this.gameOver) {
      return;
    }

    if (!this.running) {
      this.startGame();
      return;
    }

    this.paused = !this.paused;
    if (this.paused) {
      this.stopLoop();
      this.setStatus('Paused');
    } else {
    this.setStatus('Playing');
      this.scheduleNextTick();
    }
    this.updateButtons();
  }

  restartGame() {
    this.resetState();
    this.setStatus('Ready');
    this.updateHud();
    this.render();
    this.startGame();
  }

  stopLoop() {
    if (this.timerId != null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  scheduleNextTick() {
    this.stopLoop();
    if (!this.running || this.paused || this.gameOver) {
      return;
    }

    this.timerId = window.setTimeout(() => {
      this.step();
    }, this.getDelay());
  }

  getDelay() {
    return Math.max(78, 145 - Math.floor(this.score / 4) * 5);
  }

  step() {
    if (!this.running || this.paused || this.gameOver) {
      return;
    }

    this.direction = this.nextDirection;
    const head = this.snake[0];
    const newHead = {
      x: head.x + this.direction.x,
      y: head.y + this.direction.y,
    };

    if (this.isWallCollision(newHead) || this.isSelfCollision(newHead)) {
      this.endGame();
      return;
    }

    this.snake.unshift(newHead);

    if (newHead.x === this.food.x && newHead.y === this.food.y) {
      this.score += 1;
      if (this.score > this.highScore) {
        this.highScore = this.score;
        this.saveHighScore();
      }
      this.food = this.spawnFood();
      this.updateHud();
    } else {
      this.snake.pop();
    }

    this.render();
    this.scheduleNextTick();
  }

  endGame() {
    this.gameOver = true;
    this.running = false;
    this.paused = false;
    this.stopLoop();
    this.updateButtons();
    this.setStatus('Game over - press Restart');
    this.updateHud();
    this.render();
  }

  isWallCollision(point) {
    return point.x < 0 || point.y < 0 || point.x >= this.gridSize || point.y >= this.gridSize;
  }

  isSelfCollision(point) {
    return this.snake.some((segment) => segment.x === point.x && segment.y === point.y);
  }

  spawnFood() {
    let food = { x: 0, y: 0 };
    let safe = false;

    while (!safe) {
      food = {
        x: Math.floor(Math.random() * this.gridSize),
        y: Math.floor(Math.random() * this.gridSize),
      };

      safe = !this.snake.some((segment) => segment.x === food.x && segment.y === food.y);
    }

    return food;
  }

  handleDirection(direction) {
    const vectors = {
      up: { x: 0, y: -1 },
      down: { x: 0, y: 1 },
      left: { x: -1, y: 0 },
      right: { x: 1, y: 0 },
    };

    const next = vectors[direction];
    if (!next) {
      return;
    }

    const current = this.nextDirection;
    const isReverse = current.x + next.x === 0 && current.y + next.y === 0;
    if (isReverse && this.snake.length > 1) {
      return;
    }

    this.nextDirection = next;

    if (!this.running && !this.gameOver) {
      this.startGame();
    }
  }

  onKeydown(event) {
    const target = event.target;
    const tagName = target && target.tagName ? target.tagName.toLowerCase() : '';
    if (tagName === 'input' || tagName === 'textarea' || target?.isContentEditable) {
      return;
    }

    const keyMap = {
      ArrowUp: 'up',
      ArrowDown: 'down',
      ArrowLeft: 'left',
      ArrowRight: 'right',
      w: 'up',
      a: 'left',
      s: 'down',
      d: 'right',
      W: 'up',
      A: 'left',
      S: 'down',
      D: 'right',
    };

    if (event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      this.toggleStartPause();
      return;
    }

    if (event.key === 'Enter' && this.gameOver) {
      event.preventDefault();
      this.restartGame();
      return;
    }

    const direction = keyMap[event.key];
    if (direction) {
      event.preventDefault();
      this.handleDirection(direction);
    }
  }

  onPointerDown(event) {
    this.pointerStart = {
      x: event.clientX,
      y: event.clientY,
      id: event.pointerId,
    };
  }

  onPointerUp(event) {
    if (!this.pointerStart) {
      return;
    }

    const deltaX = event.clientX - this.pointerStart.x;
    const deltaY = event.clientY - this.pointerStart.y;
    const threshold = 24;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
      this.handleDirection(deltaX > 0 ? 'right' : 'left');
    } else if (Math.abs(deltaY) > threshold) {
      this.handleDirection(deltaY > 0 ? 'down' : 'up');
    }

    this.pointerStart = null;
  }

  updateHud() {
    if (this.scoreValue) {
      this.scoreValue.textContent = String(this.score);
    }
    if (this.highScoreValue) {
      this.highScoreValue.textContent = String(this.highScore);
    }
  }

  updateButtons() {
    if (this.startButton) {
      this.startButton.textContent = 'Play';
    }

    if (this.pauseButton) {
      this.pauseButton.textContent = this.paused ? 'Resume' : 'Pause';
    }

    if (this.touchStartButton) {
      this.touchStartButton.textContent = this.paused ? 'Resume' : this.gameOver ? 'Reset' : 'Play / Pause';
    }
  }

  setStatus(message) {
    if (this.statusValue) {
      this.statusValue.textContent = message;
    }
    this.updateButtons();
  }

  render() {
    if (!this.cells.length) {
      return;
    }

    for (const cell of this.cells) {
      cell.className = 'snake-cell';
    }

    const foodIndex = this.food.y * this.gridSize + this.food.x;
    if (this.cells[foodIndex]) {
      this.cells[foodIndex].classList.add('food');
    }

    this.snake.forEach((segment, index) => {
      const cellIndex = segment.y * this.gridSize + segment.x;
      const cell = this.cells[cellIndex];
      if (!cell) {
        return;
      }

      const isHead = index === 0;
      cell.classList.add(isHead ? 'snake-head' : 'snake-body');
    });

    if (this.boardOverlay) {
      if (this.gameOver) {
      this.boardOverlay.textContent = 'Game Over\nReset to play';
      } else if (this.paused) {
        this.boardOverlay.textContent = 'Paused';
      } else {
        this.boardOverlay.textContent = '';
      }
    }

    if (this.gameOver) {
      this.board.dataset.state = 'gameover';
    } else if (this.paused) {
      this.board.dataset.state = 'paused';
    } else if (this.running) {
      this.board.dataset.state = 'running';
    } else {
      this.board.dataset.state = 'idle';
    }
  }
}

const game = new SnakeGame({
  board: document.querySelector('#snake-board'),
  boardOverlay: document.querySelector('#board-overlay'),
  scoreValue: document.querySelector('#score-value'),
  highScoreValue: document.querySelector('#high-score-value'),
  statusValue: document.querySelector('#game-status'),
  startButton: document.querySelector('#start-button'),
  pauseButton: document.querySelector('#pause-button'),
  restartButton: document.querySelector('#restart-button'),
  touchStartButton: document.querySelector('#touch-start'),
  touchButtons: Array.from(document.querySelectorAll('.touch-btn[data-dir]')),
});

game.init();

document.addEventListener('snake:test', (event) => {
  const detail = event?.detail;
  if (!detail || detail.channel !== 'snake-test') {
    return;
  }

  const action = detail.action;
  const payload = detail.payload || {};
  let result = null;

  switch (action) {
    case 'state':
      result = {
        running: game.running,
        paused: game.paused,
        gameOver: game.gameOver,
        score: game.score,
        highScore: game.highScore,
        snakeLength: game.snake.length,
        direction: game.direction,
        nextDirection: game.nextDirection,
        status: document.querySelector('#game-status')?.textContent || '',
        scoreText: document.querySelector('#score-value')?.textContent || '',
        highScoreText: document.querySelector('#high-score-value')?.textContent || '',
      };
      break;
    case 'reset':
      game.resetState();
      game.updateHud();
      game.setStatus('Ready');
      game.render();
      result = 'ok';
      break;
    case 'set-state':
      Object.assign(game, payload);
      game.updateHud();
      game.updateButtons();
      game.render();
      result = 'ok';
      break;
    case 'start':
      game.startGame();
      result = 'ok';
      break;
    case 'pause':
      game.togglePause();
      result = 'ok';
      break;
    case 'restart':
      game.restartGame();
      result = 'ok';
      break;
    case 'step':
      game.step();
      result = 'ok';
      break;
    case 'direction':
      game.handleDirection(payload.direction);
      result = 'ok';
      break;
    case 'pointer-swipe':
      game.onPointerDown({ clientX: payload.fromX, clientY: payload.fromY, pointerId: 1 });
      game.onPointerUp({ clientX: payload.toX, clientY: payload.toY, pointerId: 1 });
      result = 'ok';
      break;
    case 'spawn-food':
      result = game.spawnFood();
      break;
    default:
      result = { error: 'unknown action' };
  }

  document.documentElement.dataset.snakeTestResult = JSON.stringify(result);
});

document.documentElement.dataset.js = 'ready';
