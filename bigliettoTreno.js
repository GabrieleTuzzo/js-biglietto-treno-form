console.log('Biglietto Treno')

let userNameForm, userAgeForm, userTravelForm, finalPrice

const submitUserButton = document.getElementById('submitUserInfoBtn')

submitUserButton.addEventListener('click', (event) => {
    event.preventDefault()

    userNameForm = document.getElementById('userName')
    userTravelForm = document.getElementById('travelLengthKm')
    userAgeForm = document.getElementById('userAge')

    const ticketCost = getTicketCost(userTravelForm.value, userAgeForm.value)

    console.log(userNameForm.value, userTravelForm.value, userAgeForm.value)

    const finalTicket = document.getElementById('result')

    finalTicket.innerText = `
    Passenger Name: ${userNameForm.value}
    Passenger Age: ${userAgeForm.value}
    Ticket cost: ${ticketCost} €
    `
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
