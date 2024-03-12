//Q 13     (your own Array)
//let transport: string [] = ["Civic", "car"]
//transport.forEach(transport=> {
// console.log(`I would Like to Own a  ${transport}.`)
//})
//Q 14 ( Guest list)
var guests = ["Saima", "Rozi", "Nahid"];
guests.forEach(function (guests) {
    console.log("Dear $ {Friends}, would you like to join me for dinner?");
});


//Q 15 changing guest list

let unableToAttend = "Saima"
console.log(`${unableToAttend} can't make it to dinner.`)

let newGuest ="Sonia"
guests [guests.indexOf(unableToAttend)] = newGuest

guests.forEach(guest => {
      console.log(`Dear ${guest}, would you like to join me fir dinner`)
})

