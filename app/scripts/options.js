// > option-manager.js

'use strict'


let optionManager = new OptionManager({
  like_what: 'subscribed'
})

function onFieldChange() {
  optionManager.set({
    [this.name]: this.value
  })
}

// Restore options
optionManager.get().then((options) => {
  document
      .querySelector(`input[name="like_what"][value="${options.like_what}"]`)
      .click()
})

// Trigger a function when the user changes an option
document
  .querySelectorAll('input')
  .forEach((field) => {
    field.addEventListener( 'click', onFieldChange.bind(field) )
  })
