import * as PIXI from 'pixi.js'
import humanImagePath from '@/PNG_images/human.png'

export const addImageToCanvas = (app) => {
  const humanTexture = PIXI.Texture.from(humanImagePath)
  const human = new PIXI.Sprite(humanTexture)

  human.anchor.set(0.5)
  human.x = app.screen.width / 2
  human.y = app.screen.height / 2

  app.stage.addChild(human)

  app.ticker.add((delta) => {
    human.rotation += 0.1 * delta
  })
}

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
