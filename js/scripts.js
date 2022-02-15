
const galleryDiv = document.getElementById('gallery');

let modalCloseBtn = document.querySelectorAll('#modal-close-btn')

//gets data from api
function fetchData(url) {
    return fetch(url)
        .then(res => res.json())
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

galleryDiv.innerHTML =
`
    <div class="card" value="${info[0].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[0].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[0].name.first}" value="${info[0].name.last}">${info[0].name.first} ${info[0].name.last}</h3>
            <p class="card-text">${info[0].email}</p>
            <p class="card-text cap">${info[0].location.city}, ${info[0].location.state}</p>
        </div>
    </div>


    <div class="card" value="${info[1].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[1].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[1].name.first}" value="${info[1].name.last}">${info[1].name.first} ${info[1].name.last}</h3>
            <p class="card-text">${info[1].email}</p>
            <p class="card-text cap">${info[1].location.city}, ${info[1].location.state}</p>
        </div>
    </div>


    <div class="card" value="${info[2].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[2].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[2].name.first}" value="${info[2].name.last}">${info[2].name.first} ${info[2].name.last}</h3>
            <p class="card-text">${info[2].email}</p>
            <p class="card-text cap">${info[2].location.city}, ${info[2].location.state}</p>
        </div>
    </div>


    <div class="card" value="${info[3].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[3].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[3].name.first}" value="${info[3].name.last}">${info[3].name.first} ${info[3].name.last}</h3>
            <p class="card-text">${info[3].email}</p>
            <p class="card-text cap">${info[3].location.city}, ${info[3].location.state}</p>
        </div>
    </div>

    <div class="card" value="${info[4].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[4].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[4].name.first}" value="${info[4].name.last}">${info[4].name.first} ${info[4].name.last}</h3>
            <p class="card-text">${info[4].email}</p>
            <p class="card-text cap">${info[4].location.city}, ${info[4].location.state}</p>
        </div>
    </div>


    <div class="card" value="${info[5].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[5].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[5].name.first}" value="${info[5].name.last}">${info[5].name.first} ${info[5].name.last}</h3>
            <p class="card-text">${info[5].email}</p>
            <p class="card-text cap">${info[5].location.city}, ${info[5].location.state}</p>
        </div>
    </div>


    <div class="card" value="${info[6].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[6].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[6].name.first}" value="${info[6].name.last}">${info[6].name.first} ${info[6].name.last}</h3>
            <p class="card-text">${info[6].email}</p>
            <p class="card-text cap">${info[6].location.city}, ${info[6].location.state}</p>
        </div>
    </div>


    <div class="card" value="${info[7].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[7].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[7].name.first}" value="${info[7].name.last}">${info[7].name.first} ${info[7].name.last}</h3>
            <p class="card-text">${info[7].email}</p>
            <p class="card-text cap">${info[7].location.city}, ${info[7].location.state}</p>
        </div>
    </div>


    <div class="card" value="${info[8].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[8].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[8].name.first}" value="${info[8].name.last}">${info[8].name.first} ${info[8].name.last}</h3>
            <p class="card-text">${info[8].email}</p>
            <p class="card-text cap">${info[8].location.city}, ${info[8].location.state}</p>
        </div>
    </div>


    <div class="card" value="${info[9].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[9].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[9].name.first}" value="${info[9].name.last}">${info[9].name.first} ${info[9].name.last}</h3>
            <p class="card-text">${info[9].email}</p>
            <p class="card-text cap">${info[9].location.city}, ${info[9].location.state}</p>
        </div>
    </div>


    <div class="card" value="${info[10].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[10].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[10].name.first}" value="${info[10].name.last}">${info[10].name.first} ${info[10].name.last}</h3>
            <p class="card-text">${info[10].email}</p>
            <p class="card-text cap">${info[10].location.city}, ${info[10].location.state}</p>
        </div>
    </div>


    <div class="card" value="${info[11].name.first}">
        <div class="card-img-container">
            <img class="card-img" src="${info[11].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap" id="${info[11].name.first}" value="${info[11].name.last}">${info[11].name.first} ${info[11].name.last}</h3>
            <p class="card-text">${info[11].email}</p>
            <p class="card-text cap">${info[11].location.city}, ${info[11].location.state}</p>
        </div>
    </div>
`

    // //creates card container 
    // const newCard = document.createElement('div')
    // galleryDiv.appendChild(newCard)
    // newCard.setAttribute('class', `card`)
    // newCard.setAttribute('value', `${info.name.first}`)

    // //creates img container
    // const cardImgContainer = document.createElement('div')
    // newCard.appendChild(cardImgContainer)
    // cardImgContainer.setAttribute('class', 'card-img-container')


    // //creates img
    // const newCardImg = document.createElement('img')
    // cardImgContainer.appendChild(newCardImg)
    // newCardImg.setAttribute('class', 'card-img')
    // newCardImg.setAttribute('src', info.picture.thumbnail)
    // newCardImg.setAttribute('alt', 'profile picture')

    // //creates info container
    // const cardInfoContainer = document.createElement('div')
    // cardInfoContainer.setAttribute('class', 'card-info-container')
    // newCard.appendChild(cardInfoContainer)

    // //creates card name
    // const newCardName = document.createElement('h3')
    // newCardName.setAttribute('class', 'card-name cap')
    // newCardName.textContent = `${info.name.first} ${info.name.last}`
    // newCardName.setAttribute('id', `${info.name.first}`);
    // newCardName.setAttribute('value', `${info.name.last}`);
    // cardInfoContainer.appendChild(newCardName)


    // //creates card email 
    // const newEmail = document.createElement('p')
    // newEmail.setAttribute('class', 'card-text')
    // newEmail.textContent = `${info.email}`
    // cardInfoContainer.appendChild(newEmail)

    // //creates card location 
    // const newLocation = document.createElement('p');
    // newLocation.setAttribute('class', 'card-text cap')
    // newLocation.textContent = `${info.location.city}, ${info.location.state}`
    // cardInfoContainer.appendChild(newLocation)
    generateInfoModal(info);
}


//generates person/model info
function generateInfoModal(info) {

    newModelDiv.innerHTML =
`
        <div class="modal" id="${info[0].name.last} ${info[0].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[0].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[0].name.first} ${info[0].name.last}" id="name">${info[0].name.first} ${info[0].name.last}</h3>
                <p class="modal-text">${info[0].email}</p>
                <p class="modal-text cap">${info[0].location.city}</p>
                <p class="modal-text">${info[0].phone}</p>
                <p class="modal-text">${info[0].location.street.number} ${info[0].location.street.name}, ${info[0].location.state}, ${info[0].location.postcode}</p>
                <p class="modal-text">${info[0].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>

        <div class="modal" id="${info[1].name.last} ${info[1].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[1].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[1].name.first} ${info[1].name.last}" id="name">${info[1].name.first} ${info[1].name.last}</h3>
                <p class="modal-text">${info[1].email}</p>
                <p class="modal-text cap">${info[1].location.city}</p>
                <p class="modal-text">${info[1].phone}</p>
                <p class="modal-text">${info[1].location.street.number} ${info[1].location.street.name}, ${info[1].location.state}, ${info[1].location.postcode}</p>
                <p class="modal-text">${info[1].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>


        <div class="modal" id="${info[2].name.last} ${info[2].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[2].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[2].name.first} ${info[2].name.last}" id="name">${info[2].name.first} ${info[2].name.last}</h3>
                <p class="modal-text">${info[2].email}</p>
                <p class="modal-text cap">${info[2].location.city}</p>
                <p class="modal-text">${info[2].phone}</p>
                <p class="modal-text">${info[2].location.street.number} ${info[2].location.street.name}, ${info[2].location.state}, ${info[2].location.postcode}</p>
                <p class="modal-text">${info[2].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>

        <div class="modal" id="${info[3].name.last} ${info[3].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[3].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[3].name.first} ${info[3].name.last}" id="name">${info[3].name.first} ${info[3].name.last}</h3>
                <p class="modal-text">${info[3].email}</p>
                <p class="modal-text cap">${info[3].location.city}</p>
                <p class="modal-text">${info[3].phone}</p>
                <p class="modal-text">${info[3].location.street.number} ${info[3].location.street.name}, ${info[3].location.state}, ${info[3].location.postcode}</p>
                <p class="modal-text">${info[3].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>

        <div class="modal" id="${info[4].name.last} ${info[4].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[4].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[4].name.first} ${info[4].name.last}" id="name">${info[4].name.first} ${info[4].name.last}</h3>
                <p class="modal-text">${info[4].email}</p>
                <p class="modal-text cap">${info[4].location.city}</p>
                <p class="modal-text">${info[4].phone}</p>
                <p class="modal-text">${info[4].location.street.number} ${info[4].location.street.name}, ${info[4].location.state}, ${info[4].location.postcode}</p>
                <p class="modal-text">${info[4].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>

        <div class="modal" id="${info[5].name.last} ${info[5].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[5].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[5].name.first} ${info[5].name.last}" id="name">${info[5].name.first} ${info[5].name.last}</h3>
                <p class="modal-text">${info[5].email}</p>
                <p class="modal-text cap">${info[5].location.city}</p>
                <p class="modal-text">${info[5].phone}</p>
                <p class="modal-text">${info[5].location.street.number} ${info[5].location.street.name}, ${info[5].location.state}, ${info[5].location.postcode}</p>
                <p class="modal-text">${info[5].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>

        <div class="modal" id="${info[6].name.last} ${info[6].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[6].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[6].name.first} ${info[6].name.last}" id="name">${info[6].name.first} ${info[6].name.last}</h3>
                <p class="modal-text">${info[6].email}</p>
                <p class="modal-text cap">${info[6].location.city}</p>
                <p class="modal-text">${info[6].phone}</p>
                <p class="modal-text">${info[6].location.street.number} ${info[6].location.street.name}, ${info[6].location.state}, ${info[6].location.postcode}</p>
                <p class="modal-text">${info[6].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>

        <div class="modal" id="${info[7].name.last} ${info[7].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[7].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[7].name.first} ${info[7].name.last}" id="name">${info[7].name.first} ${info[7].name.last}</h3>
                <p class="modal-text">${info[7].email}</p>
                <p class="modal-text cap">${info[7].location.city}</p>
                <p class="modal-text">${info[7].phone}</p>
                <p class="modal-text">${info[7].location.street.number} ${info[7].location.street.name}, ${info[7].location.state}, ${info[7].location.postcode}</p>
                <p class="modal-text">${info[7].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>

        <div class="modal" id="${info[8].name.last} ${info[8].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[8].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[8].name.first} ${info[8].name.last}" id="name">${info[8].name.first} ${info[8].name.last}</h3>
                <p class="modal-text">${info[8].email}</p>
                <p class="modal-text cap">${info[8].location.city}</p>
                <p class="modal-text">${info[8].phone}</p>
                <p class="modal-text">${info[8].location.street.number} ${info[8].location.street.name}, ${info[8].location.state}, ${info[8].location.postcode}</p>
                <p class="modal-text">${info[8].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>

        <div class="modal" id="${info[9].name.last} ${info[9].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[9].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[9].name.first} ${info[9].name.last}" id="name">${info[9].name.first} ${info[9].name.last}</h3>
                <p class="modal-text">${info[9].email}</p>
                <p class="modal-text cap">${info[9].location.city}</p>
                <p class="modal-text">${info[9].phone}</p>
                <p class="modal-text">${info[9].location.street.number} ${info[9].location.street.name}, ${info[9].location.state}, ${info[9].location.postcode}</p>
                <p class="modal-text">${info[9].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>

        <div class="modal" id="${info[10].name.last} ${info[10].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[10].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[10].name.first} ${info[10].name.last}" id="name">${info[10].name.first} ${info[10].name.last}</h3>
                <p class="modal-text">${info[10].email}</p>
                <p class="modal-text cap">${info[10].location.city}</p>
                <p class="modal-text">${info[10].phone}</p>
                <p class="modal-text">${info[10].location.street.number} ${info[10].location.street.name}, ${info[10].location.state}, ${info[10].location.postcode}</p>
                <p class="modal-text">${info[10].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>


        <div class="modal" id="${info[11].name.last} ${info[11].name.first}">
            <button type="button" id="modal-close-btn" class="modal-close-btn">
            <strong></strong>
            </button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info[11].picture.thumbnail}" alt="profile picture">
                <h3 class="${info[11].name.first} ${info[11].name.last}" id="name">${info[11].name.first} ${info[11].name.last}</h3>
                <p class="modal-text">${info[11].email}</p>
                <p class="modal-text cap">${info[11].location.city}</p>
                <p class="modal-text">${info[11].phone}</p>
                <p class="modal-text">${info[11].location.street.number} ${info[11].location.street.name}, ${info[11].location.state}, ${info[11].location.postcode}</p>
                <p class="modal-text">${info[11].dob.date.slice(0,10).replace(/-/g,"/").split("/").reverse().join('/')}</p>
            </div>
            <div class="modal-btn-container">
                <button class="modal-prev btn" id="modal-prev" type="button">PREV</button>
                <button class="modal-next btn" id="modal-next" type="button">NEXT</button>
            </div>
        </div>
`
const model = document.querySelectorAll(".modal")
    newModelDiv.style.display = 'none'
    model.forEach(element => {
        element.style.display = "none"
    })
}

//generates info from profile api
async function profile(url) {
    let arr 
    let i = 0
    galleryDiv.style.display = "none"
    //gets all 12 profiles
    await fetchData(url)
        .then(data => arr = data.results)
    generateInfo(arr)


    // arr.forEach(data => {
    //     console.log(arr[i])
    //     generateInfo(arr[i])
    //     i++
    // })
        galleryDiv.style.display = ""
}
profile('https://randomuser.me/api/?results=12')


//click on the card EventListener
galleryDiv.addEventListener('click', (e) => {



//[----------------------------]
//fix geting name from modal
//[----------------------------]




    const card = e.target;
    //card 
    if (card.className === 'card') {
        const cardInfoContainer = card.lastElementChild
        const name = cardInfoContainer.firstElementChild
        console.log(name.textContent)
        const splitName = name.textContent.split(' ')
        console.log(`${splitName[1]} ${splitName[0]}`)

        const modal = document.getElementById(`${splitName[1]} ${splitName[0]}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //info container
    } else if (card.className === 'card-info-container') {
        const name = card.firstElementChild
        const splitName = name.textContent.split(' ')
        console.log(`${splitName[1]} ${splitName[0]}`)
        console.log(name.textContent)
        const modal = document.getElementById(`${splitName[1]} ${splitName[0]}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //img container
    } else if (card.className === 'card-img-container') {
        const cardContainer = card.parentNode
        const cardInfoContainer = cardContainer.lastElementChild
        const name = cardInfoContainer.firstElementChild
        console.log(name.textContent)
        const splitName = name.textContent.split(' ')
        console.log(`${splitName[1]} ${splitName[0]}`)
        const modal = document.getElementById(`${splitName[1]} ${splitName[0]}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //img
    } else if (card.className === 'card-img') {
        const cardImgContainer = card.parentNode
        const cardContainer = cardImgContainer.parentNode
        const cardInfoContainer = cardContainer.lastElementChild
        const name = cardInfoContainer.firstElementChild
        console.log(name.textContent)
        const splitName = name.textContent.split(' ')
        console.log(`${splitName[1]} ${splitName[0]}`)

        const modal = document.getElementById(`${splitName[1]} ${splitName[0]}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //name
    } else if (card.className === 'card-name cap') {
        const cardInfoContainer = card.parentNode
        const name = cardInfoContainer.firstElementChild
        const splitName = name.textContent.split(' ')
        console.log(name.textContent)
        console.log(`${splitName[1]} ${splitName[0]}`)

        const modal = document.getElementById(`${splitName[1]} ${splitName[0]}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')

        //email
    } else if (card.className === 'card-text') {
        const cardInfoContainer = card.parentNode
        const name = cardInfoContainer.firstElementChild
        console.log(name.textContent)
        const splitName = name.textContent.split(' ')
        console.log(`${splitName[1]} ${splitName[0]}`)

        const modal = document.getElementById(`${splitName[1]} ${splitName[0]}`)
        newModelDiv.style.display = ''
        modal.style.display = '';
        console.log('yay')
        //location
    } else if (card.className === 'card-text cap') {
        const cardInfoContainer = card.parentNode
        const name = cardInfoContainer.firstElementChild
        console.log(name.textContent)
        const splitName = name.textContent.split(' ')
        const modal = document.getElementById(`${splitName[1]} ${splitName[0]}`)
        console.log(`${splitName[1]} ${splitName[0]}`)
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

        } else if (inputSearch.value === "") {
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