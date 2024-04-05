// EXERCISE:15
let guest_list: string[] = ["Ahsan", "Umar", "Talib"];

let cannot_attend: string = "Talib";
// console.log(`MR.${cannot_attend} can not make the dinner with us.\n`);

// Modifying list:
let new_guest: string = "Abdullah";
guest_list[2] = new_guest;

// Sending Second set of invitation:
for (let i = 0; i < guest_list.length; i++) {
  //   console.log(`Mr${guest_list[i]}, you are cordially inivited to the dinner.`);
}

// EXERCISE:16
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

// // Informing People:
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `MR ${guest_list[i]}, we have found a bigger dinner table.Now three more guest are joining us.\n`
//   );
// }

// Adding a new guest at the beggining of the array:
guest_list.unshift("Saboor");

// Adding a new guest at the middle of the array:
guest_list.splice(3, 0, "Waiz");

// Adding a new guest at the end of the array:
guest_list.push("Moazzam");

// Sending a new set of invitation:
// // for (let i = 0; i < guest_list.length; i++) {
// //   console.log(`MR ${guest_list[i]}, you are cordailly inivited to the dinner.`);
// }


// EXERCISE 17:

console.log("Sorry we cannot arrange a big table, only two people will be invited.");

// Removing guest until two guest remain. Sending sorry message to the removing guest.

while(guest_list.length>2){
  let remove_guest =guest_list.pop();
  console.log(`\nSorry MR.${remove_guest} you are not invited for the dinner\n`);
}
// Sending invitation to the existing two guests. 
for (let i = 0; i < guest_list.length; i++) {
   console.log(`\n\nMR ${guest_list[i]}, you are still inivited to the dinner.\n\n`);
 }
// Removing the remaining two guests. making it an emty list.
 guest_list.splice(0,2);
 console.log(guest_list);