
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

//generates page info
function generateInfo(info) {

    //creates card container 
    const newCard = document.createElement('div')
    galleryDiv.appendChild(newCard)
    newCard.setAttribute('class', 'card')

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
    newCardName.setAttribute('id', `${newCardName.textContent}`);
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

    newModelDiv.style.display = 'none'
    model.style.display = 'none'
}

//generates info from profile api
async function profile(url) {
    await fetchData(url)
        .then(data => generateInfo(data))
}





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
    }else {
        console.log('no card')
    }
})

//gets all 12 profiles
for (let i = 0; i < 12; i++) {
    profile('https://randomuser.me/api/')

}


//gets rid of the expanded profile 
newModelDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        newModelDiv.style.display = 'none'
        const model = document.querySelectorAll(`.modal`)
        for (let i = 0; i < model.length; i++)
            model[i].style.display = 'none'
    }
})