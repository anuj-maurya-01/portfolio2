import './style/main.css'
import Application from './javascript/Application.js'
import UIController from './javascript/Utils/UIController.js'

window.application = new Application({
    $canvas: document.querySelector('.js-canvas'),
    useComposer: true
})

window.uiController = new UIController()

