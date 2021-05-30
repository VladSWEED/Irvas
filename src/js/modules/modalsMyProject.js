const modal = () => {
  const modalActions = (triggerSelector, modalClass, closeClass) => {
    const trigger = document.querySelectorAll(triggerSelector)
    const modal = document.querySelector(modalClass)
    const close = document.querySelector(closeClass)
    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault()
        }
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'


      })
    })

    close.addEventListener('click', () => {
      modal.style.display = 'none'
      document.body.style.overflow = ''
    })

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none'
        document.body.style.overflow = ''
      }
    })
  }
  const modalByTime = (selector) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block'
      document.body.style.overflow = 'hidden'
    }, 60000);
  }
  modalActions('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
  modalActions('.phone_link', '.popup', '.popup .popup_close')
  // modalByTime('.popup')
}

export default modal;