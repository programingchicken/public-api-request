const galleryDiv = document.getElementById('gallery');

let modalCloseBtn = document.querySelectorAll('#modal-close-btn')

function fetchData(url) {
    return fetch(url)
           .then(res => res.json())
           .then(res => this.data = res.results[0])
}

// function checkStatus(response) {
//     if(response.ok) {
//   return Promise.resolve(response);
//     } else {
//         return Promise.reject(new Error(response.statusText));
//     }
// }
const script = document.getElementById('script')
const body = document.getElementById('body')
const newModelDiv= document.createElement('div')
body.insertBefore(newModelDiv, script)
newModelDiv.setAttribute('class', 'modal-container')

function generateInfo(info) {
    const newCard = document.createElement('div')
    galleryDiv.appendChild(newCard)
    newCard.setAttribute('class', 'card')
        const cardImgContainer = document.createElement('div')
        newCard.appendChild(cardImgContainer)
        cardImgContainer.setAttribute('class', 'card-img-container')
            const newCardImg = document.createElement('img')
            cardImgContainer.appendChild(newCardImg)
            newCardImg.setAttribute('class', 'card-img')
            newCardImg.setAttribute('src', info.picture.thumbnail)
            newCardImg.setAttribute('alt', 'profile picture')
        const cardInfoContainer = document.createElement('div')
        cardInfoContainer.setAttribute('class', 'card-info-container')
        newCard.appendChild(cardInfoContainer)
            const newCardName = document.createElement('h3')
        
            newCardName.setAttribute('class', 'card-name cap')
            newCardName.textContent = `${info.name.first} ${info.name.last}`
            newCardName.setAttribute('id', `${newCardName.textContent}`);
            
            cardInfoContainer.appendChild(newCardName)
            const newEmail = document.createElement('p')
            newEmail.setAttribute('class', 'card-text')
            newEmail.textContent = `${info.email}`
            cardInfoContainer.appendChild(newEmail)
            const newLocation = document.createElement('p');
            newLocation.setAttribute('class', 'card-text cap')
            newLocation.textContent = `${info.location.city}, ${info.location.state}`
            cardInfoContainer.appendChild(newLocation)
            generateInfoModal(info);
        console.log(info.picture.large)
}



function generateInfoModal(info){
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
           // <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            const newModelContainer = document.createElement('div')
            model.appendChild(newModelContainer)
            newModelContainer.setAttribute('class', 'modal-info-container')
                const modelImg = document.createElement('img')
                newModelContainer.appendChild(modelImg)
                modelImg.setAttribute('class', 'modal-img')
                modelImg.setAttribute('src', info.picture.medium)
                modelImg.setAttribute('alt', 'profile picture')
                const name = document.createElement('h3')
                name.setAttribute('class', 'modal-name cap')
                name.setAttribute('class', `${info.name.first} ${info.name.last}`)  
                name.textContent = `${info.name.first} ${info.name.last}`
                name.setAttribute('id', `name`);
                model.setAttribute('id', `${info.name.last} ${info.name.first}`);
                newModelContainer.appendChild(name)
                    const email = document.createElement('p')
                    email.textContent = info.email
                    newModelContainer.appendChild(email)
                    email.setAttribute('class', 'modal-text')
                    const city = document.createElement('p')
                    city.textContent = info.location.city
                    newModelContainer.appendChild(city)
                    city.setAttribute('class', 'modal-text cap')
                    const phone = document.createElement('p')
                    phone.textContent = info.phone
                    phone.setAttribute('class', 'modal-text')
                    newModelContainer.appendChild(phone)
                    const address = document.createElement('p')
                    address.textContent = `${info.location.street.number} ${info.location.street.name}, ${info.location.state}, ${info.location.postcode}`
                    address.setAttribute('class', 'modal-text')
                    newModelContainer.appendChild(address)
                    const birthDay = document.createElement('p')
                    birthDay.textContent = info.dob.date
                    birthDay.setAttribute('class', 'modal-text')
                    newModelContainer.appendChild(birthDay)
                    newModelDiv.style.display = 'none'
                    model.style.display = 'none' 
}

async function profile(url) {
    await fetchData(url)
       .then( data => generateInfo(data))
}


// Promise.all([
//     fetchData('https://dog.ceo/api/breeds/list'),
// ])
// .then(data => {
//     const breedList = data[0].message;
//     const randomImage = data[1].message;
    
//     generateOptions(breedList);
//     generateImage(randomImage);
// })






galleryDiv.addEventListener('mouseover', (e) => {
        const card = e.target;
        if (card.className === 'card-info-container') {
        const name = card.childNodes[0]
        const first = name.textContent.split(' ')[0]
        const last = name.textContent.split(' ')[1]
        const modal = document.getElementById(`${last} ${first}`)
               newModelDiv.style.display = ''
            modal.style.display = '';
              console.log('yay')

        }
    })



    for (let i = 0; i < 12; i++){
        profile('https://randomuser.me/api/')

        }

        newModelDiv.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
            newModelDiv.style.display = 'none'
            const model = document.querySelectorAll(`.modal`)
            for (let i = 0; i < model.length; i++)
            model[i].style.display = 'none'
            }
        })