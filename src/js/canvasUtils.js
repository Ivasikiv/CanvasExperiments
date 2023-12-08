import * as PIXI from 'pixi.js'
import humanImagePath from '@/PNG_images/human.png'

var human = null
var greenSquare = null
var holeStartX = null
var holeEndX = null

export const resizeCanvas = (app) => {
  const resize = () => {
    const div = document.querySelector('.pixi-container')
    if (div) {
      const { width, height } = div.getBoundingClientRect()
      app.renderer.resize(width, height)
    }
  }
  resize()
  window.addEventListener('resize', resize)
}

export const addImageToCanvas = (app) => {
  const humanTexture = PIXI.Texture.from(humanImagePath)
  human = new PIXI.Sprite(humanTexture)
  human.anchor.set(0.5)
  human.x = 20
  human.y = 20
  human.width = 40
  human.height = 40
  app.stage.addChild(human)
}

export const createLineWithHole = (app) => {
  const line = new PIXI.Graphics()
  line.lineStyle(2, 0xff0000) // Червоний колір, товщина лінії 2 пікселя

  const centerX = app.screen.width / 2
  const centerY = app.screen.height / 2

  const lineStartX = 0
  const lineEndX = app.screen.width - 50
  const lineY = centerY

  // Перша частина лінії (500 пікселів)
  line.moveTo(lineStartX, lineY)
  line.lineTo(lineStartX + 500, lineY)

  // Отвір (100 пікселів без лінії)
  holeStartX = lineStartX + 500
  holeEndX = holeStartX + 100
  const holeY = lineY

  line.lineStyle(0) // Знищуємо товщину лінії для малювання отвору
  line.beginHole()
  line.endHole()

  // Друга частина лінії (200 пікселів)
  const secondLineStartX = holeEndX
  line.lineStyle(2, 0xff0000) // Відновлюємо червоний колір
  line.moveTo(secondLineStartX, lineY)
  line.lineTo(secondLineStartX + 200, lineY)

  app.stage.addChild(line)
}

export const addGreenSquare = (app) => {
  greenSquare = new PIXI.Graphics()
  greenSquare.beginFill(0x00ff00) // Зелений колір заливки
  greenSquare.drawRect(10, app.screen.height - 50, 40, 40) // Розміри та позиція квадрата
  greenSquare.endFill()

  app.stage.addChild(greenSquare)
}

// Функція для перевірки чи точка (x, y) знаходиться в межах отвору
function isInsideHole(x, y) {
  return x >= holeStartX && x <= holeEndX
}

// Функція для перевірки чи точка (x, y) перебуває на червоній лінії
function isOnRedLine(x, y) {
  // Реалізація логіки перевірки перетину точки (x, y) з червоною лінією
  // Повертає true якщо точка знаходиться на червоній лінії, інакше - false
}

// Функція для руху людини до зеленого квадрата
function moveHumanToGreenSquare() {
  // Отримати поточну позицію людини (human.x, human.y)
  const currentPositionX = human.x
  const currentPositionY = human.y

  // Перевірити чи поточна позиція знаходиться на червоній лінії або у отворі
  if (
    !isOnRedLine(currentPositionX, currentPositionY) &&
    !isInsideHole(currentPositionX, currentPositionY)
  ) {
    // Рухати людину до зеленого квадрата
    // Реалізувати алгоритм руху вздовж визначеного шляху (наприклад, за допомогою алгоритму A* або просто вздовж вільного шляху)
    // Оновити позицію людини (human.x, human.y) відповідно до руху
  }
}
