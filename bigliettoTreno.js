console.log('Biglietto Treno')

let userNameValue, userAgeValue, userTravelValue, finalPrice

const submitUserButton = document.getElementById('submitUserInfoBtn')

submitUserButton.addEventListener('click', (event) => {
    event.preventDefault()

    userNameValue = document.getElementById('userName').value
    userTravelValue = document.getElementById('travelLengthKm').value
    userAgeValue = document.getElementById('userAge').value

    const ticketCostValue = getTicketCost(userTravelValue, userAgeValue)

    // console.log(userNameForm.value, userTravelForm.value, userAgeForm.value)

    const ticketName = document.getElementById('ticketName')
    const ticketAge = document.getElementById('ticketAge')
    const ticketCost = document.getElementById('ticketCost')
    const ticketDate = document.getElementById('ticketValidDate')

    const today = new Date()

    ticketName.innerText = userNameValue
    ticketAge.innerText = userAgeValue
    ticketCost.innerText = ticketCostValue + '€'
    ticketDate.innerText = `${today.getDate()}/${
        today.getMonth() + 1
    }/${today.getFullYear()}`

    const ticketSection = document.getElementById('ticketSection')

    ticketSection.classList.toggle('d-none')
})

function getTicketCost(userTravel, userAge) {
    const basePrice = 0.21
    const under18discount = 20
    const over65discount = 40

    let toDiscount = 0

    let finalPrice = basePrice * userTravel

    if (userAge < 18) {
        toDiscount = (finalPrice * under18discount) / 100
    } else if (userAge > 65) {
        toDiscount = (finalPrice * over65discount) / 100
    }

    finalPrice = finalPrice - toDiscount

    return finalPrice.toFixed(2)
}

// let discountedPrice = 0

// finalPrice = basePrice * userTravel

// if (userAge < 18) {
//     discountedPrice = (finalPrice * under18discount) / 100
// } else if (userAge > 65) {
//     discountedPrice = (finalPrice * over65discount) / 100
// }

// finalPrice = finalPrice - discountedPrice

// console.log('Il prezzo è di ' + finalPrice.toFixed(2) + ' €')
