const openModalArea = document.querySelectorAll('[data-modal]')
const overlay = document.getElementById('overlay')

openModalArea.forEach(area => {
    area.addEventListener('mouseover', () => {
        const modal = document.querySelector(area.dataset.modal)
        openModal(modal)
    })
})

openModalArea.forEach(area => {
    area.addEventListener('mouseout', () => {
        const modal = document.querySelector(area.dataset.modal)
        closeModal(modal)
    })
})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}