//Q 13     (your own Array)


//let transport: string [] = ["Civic", "car"]
//transport.forEach(transport=> {
   // console.log(`I would Like to Own a  ${transport}.`)
//})


//Q 14 ( Guest list)

let guests: string[]=["Saima","Rozi","Nahid"]
guests.forEach(guests => {
    console.log(`Dear $ {guests}, would you like to join me for dinner?`)
})


//Q 15 Changing guest list

let unableToAttend = "Saima"
console.log(`${unableToAttend} can't make it to dinner.`)

let newGuest ="Rozi"
guests [guests.indexOf(unableToAttend)] = newGuest

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me fir dinner`)
})




