
const galleryDiv = document.getElementById('gallery');

let modalCloseBtn = document.querySelectorAll('#modal-close-btn')

//gets data from api
function fetchData(url) {
    return fetch(url)
        .then(res => res.json())
        .then(res => this.data = res.results[0])
}

const script = document.getElementById('script')
const body = document.getElementById('body')
const newModelDiv = document.createElement('div')

//inserts newModelDiv before script
body.insertBefore(newModelDiv, script)
newModelDiv.setAttribute('class', 'modal-container')



const searchContainer = document.querySelector('.search-container')


//search bar
searchContainer.innerHTML =
    `
    <form id='form' action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form> 
    `
const form = document.getElementById('form')
const inputSearch = document.getElementById('search-input')
const inputSubmit = document.getElementById('search-submit')


// searchContainer.appendChild(form)
// form.appendChild(inputSearch)
// form.appendChild(inputSubmit)
// form.setAttribute('class', 'card-img')


//generates page info
function generateInfo(info) {

    //creates card container 
    const newCard = document.createElement('div')
    galleryDiv.appendChild(newCard)
    newCard.setAttribute('class', `card`)
    newCard.setAttribute('value', `${info.name.first}`)

    //creates img container
    const cardImgContainer = document.createElement('div')
    newCard.appendChild(cardImgContainer)
    cardImgContainer.setAttribute('class', 'card-img-container')


    //creates img
    const newCardImg = document.createElement('img')
    cardImgContainer.appendChild(newCardImg)
    newCardImg.setAttribute('class', 'card-img')
    newCardImg.setAttribute('src', info.picture.thumbnail)
    newCardImg.setAttribute('alt', 'profile picture')

    //creates info container
    const cardInfoContainer = document.createElement('div')
    cardInfoContainer.setAttribute('class', 'card-info-container')
    newCard.appendChild(cardInfoContainer)

    //creates card name
    const newCardName = document.createElement('h3')
    newCardName.setAttribute('class', 'card-name cap')
    newCardName.textContent = `${info.name.first} ${info.name.last}`
    newCardName.setAttribute('id', `${info.name.first}`);
    newCardName.setAttribute('value', `${info.name.last}`);
    cardInfoContainer.appendChild(newCardName)


    //creates card email 
    const newEmail = document.createElement('p')
    newEmail.setAttribute('class', 'card-text')
    newEmail.textContent = `${info.email}`
    cardInfoContainer.appendChild(newEmail)

    //creates card location 
    const newLocation = document.createElement('p');
    newLocation.setAttribute('class', 'card-text cap')
    newLocation.textContent = `${info.location.city}, ${info.location.state}`
    cardInfoContainer.appendChild(newLocation)
    generateInfoModal(info);
    console.log(info.picture.large)
}


//generates person/model info
function generateInfoModal(info) {

    //creates container and exit button
    const model = document.createElement('div')
    newModelDiv.appendChild(model)
    model.setAttribute('class', 'modal')
    const button = document.createElement('button')
    model.appendChild(button)
    button.setAttribute('type', 'button')
    button.setAttribute('id', 'modal-close-btn')
    button.setAttribute('class', 'modal-close-btn')
    const strong = document.createElement('strong')
    button.appendChild(strong);



    //creates model container
    const newModelContainer = document.createElement('div')
    model.appendChild(newModelContainer)
    newModelContainer.setAttribute('class', 'modal-info-container')

    // creates img in model card
    const modelImg = document.createElement('img')
    newModelContainer.appendChild(modelImg)
    modelImg.setAttribute('class', 'modal-img')
    modelImg.setAttribute('src', info.picture.medium)
    modelImg.setAttribute('alt', 'profile picture')

    // creates name in model
    const name = document.createElement('h3')
    name.setAttribute('class', 'modal-name cap')
    name.setAttribute('class', `${info.name.first} ${info.name.last}`)
    name.textContent = `${info.name.first} ${info.name.last}`
    name.setAttribute('id', `name`);
    model.setAttribute('id', `${info.name.last} ${info.name.first}`);
    newModelContainer.appendChild(name)


    //creates email in model
    const email = document.createElement('p')
    email.textContent = info.email
    newModelContainer.appendChild(email)
    email.setAttribute('class', 'modal-text')

    //creates city in model
    const city = document.createElement('p')
    city.textContent = info.location.city
    newModelContainer.appendChild(city)
    city.setAttribute('class', 'modal-text cap')

    //creates phone in model
    const phone = document.createElement('p')
    phone.textContent = info.phone
    phone.setAttribute('class', 'modal-text')
    newModelContainer.appendChild(phone)

    //creates address in model
    const address = document.createElement('p')
    address.textContent = `${info.location.street.number} ${info.location.street.name}, ${info.location.state}, ${info.location.postcode}`
    address.setAttribute('class', 'modal-text')
    newModelContainer.appendChild(address)

    //creates birthday in model
    const birthDay = document.createElement('p')
    birthDay.textContent = info.dob.date
    birthDay.setAttribute('class', 'modal-text')
    newModelContainer.appendChild(birthDay)

    //next and past
    const nextPastDiv = document.createElement('div')
    const next = document.createElement('button')
    const past = document.createElement('button')
    next.textContent = "NEXT"
    past.textContent = "PREV"
    nextPastDiv.setAttribute('class', 'modal-btn-container')
    past.setAttribute('class', 'modal-prev btn')
    past.setAttribute('id', 'modal-prev')
    past.setAttribute('type', 'button')
    next.setAttribute('class', 'modal-next btn')
    next.setAttribute('id', 'modal-next')
    next.setAttribute('type', 'button')
    model.appendChild(nextPastDiv)
    nextPastDiv.appendChild(past)
    nextPastDiv.appendChild(next)


    newModelDiv.style.display = 'none'
    model.style.display = 'none'
}

//generates info from profile api
async function profile(url) {
    galleryDiv.style.display = "none"
    //gets all 12 profiles
    for (let i = 0; i < 12; i++) {
        await fetchData(url)
            .then(data => generateInfo(data))
    }
    galleryDiv.style.display = ""
}
profile('https://randomuser.me/api/')


//click on the card EventListener
galleryDiv.addEventListener('click', (e) => {
    const card = e.target;
    //card 
    if (card.className === 'card') {
        const cardImgContainer = card.childNodes[0]
        const cardInfoContainer = card.childNodes[1]
        const name = cardInfoContainer.childNodes[0]
        const first = name.textContent.split(' ')[0]
        const last = name.textContent.split(' ')[1]
        const modal = document.getElementById(`${last} ${first}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //info container
    } else if (card.className === 'card-info-container') {
        const name = card.childNodes[0]
        const first = name.textContent.split(' ')[0]
        const last = name.textContent.split(' ')[1]
        const modal = document.getElementById(`${last} ${first}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //img container
    } else if (card.className === 'card-img-container') {
        const cardContainer = card.parentNode
        const cardInfoContainer = cardContainer.childNodes[1]
        const name = cardInfoContainer.childNodes[0]
        const first = name.textContent.split(' ')[0]
        const last = name.textContent.split(' ')[1]
        const modal = document.getElementById(`${last} ${first}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //img
    } else if (card.className === 'card-img') {
        const cardImgContainer = card.parentNode
        const cardContainer = cardImgContainer.parentNode
        const cardInfoContainer = cardContainer.childNodes[1]
        const name = cardInfoContainer.childNodes[0]
        const first = name.textContent.split(' ')[0]
        const last = name.textContent.split(' ')[1]
        const modal = document.getElementById(`${last} ${first}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //name
    } else if (card.className === 'card-name cap') {
        const cardInfoContainer = card.parentNode
        const name = cardInfoContainer.childNodes[0]
        const first = name.textContent.split(' ')[0]
        const last = name.textContent.split(' ')[1]
        const modal = document.getElementById(`${last} ${first}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //email
    } else if (card.className === 'card-text') {
        const cardInfoContainer = card.parentNode
        const name = cardInfoContainer.childNodes[0]
        const first = name.textContent.split(' ')[0]
        const last = name.textContent.split(' ')[1]
        const modal = document.getElementById(`${last} ${first}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //location
    } else if (card.className === 'card-text cap') {
        const cardInfoContainer = card.parentNode
        const name = cardInfoContainer.childNodes[0]
        const first = name.textContent.split(' ')[0]
        const last = name.textContent.split(' ')[1]
        const modal = document.getElementById(`${last} ${first}`)

        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')
    } else {
        console.log('no card')
    }
})

//searchContainer
searchContainer.addEventListener('submit', (e) => {
    e.preventDefault
    const cardList = document.querySelectorAll('.card')
    const newArray = []
    cardList.forEach(element => {
        newArray.push(element)
    })
    newArray.forEach(user => {
        const isVisible =
        user.lastElementChild.firstElementChild.getAttribute('value').toLowerCase().includes(inputSearch.value) ||
            user.lastElementChild.firstElementChild.id.toLowerCase().includes(inputSearch.value)
            const modal = document.getElementById(`${user.lastElementChild.firstElementChild.getAttribute('value')} ${user.lastElementChild.firstElementChild.id}`)
            if (!isVisible) {
                body.appendChild(modal)
                body.appendChild(user)
                user.style.display = 'none'
                
            } else if (inputSearch.value==="") {
                galleryDiv.appendChild(user)
                newModelDiv.appendChild(modal)
                user.style.display = ''
            } else {
                galleryDiv.appendChild(user)
                newModelDiv.appendChild(modal)
                user.style.display = ''
            }
    })
})




//gets rid of the expanded profile / also checks for next and prev button clicks
newModelDiv.addEventListener('click', (e) => {
    const button = e.target
    if (button.tagName === 'BUTTON') {
        if (button.textContent === "NEXT") {
            const modal = button.parentNode.parentNode
            modal.style.display = 'none'
            const nextModal = modal.nextElementSibling
            if (nextModal === null) {
                const holdAllModal = modal.parentNode
                const fixModal = holdAllModal.firstElementChild
                fixModal.style.display = ''
            } else {
                nextModal.style.display = ''
            }
        } else if (button.textContent === "PREV") {
            const modal = button.parentNode.parentNode
            modal.style.display = 'none'
            const prevModal = modal.previousElementSibling
            if (prevModal === null) {
                const holdAllModal = modal.parentNode
                const fixModal = holdAllModal.lastElementChild
                fixModal.style.display = ''
            } else {
                prevModal.style.display = ''
            }
        } else {
            newModelDiv.style.display = 'none'
            const model = document.querySelectorAll(`.modal`)
            for (let i = 0; i < model.length; i++)
                model[i].style.display = 'none'
        }
    }
})