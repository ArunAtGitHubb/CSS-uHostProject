var backdrop = document.querySelector(".backdrop")
var modal = document.querySelector(".modal")

var toggleBtn = document.querySelector(".toggle-button")
var mobileNav = document.querySelector(".mobile-nav")

const openBackdrop = () => {
    backdrop.style.display = "block"
}

const closeBackdrop = () => {
    backdrop.style.display = "none";
    closeMobileNav()
    closeModal()
}

const openModal = () => {
    backdrop.style.display = "block"
    modal.style.display = "block"
}

const closeModal = () => {
    backdrop.style.display = "none";
    modal.style.display = "none";
}

const openMobileNav = () => {
    mobileNav.style.display = "block";
    openBackdrop()
}

const closeMobileNav = () => {
    mobileNav.style.display = "none"
}
