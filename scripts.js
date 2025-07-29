// const subscribers = [
//     {name: "John", isClosedFriend: true},
//     {name: "John1", isClosedFriend: true},
//     {name: "John2", isClosedFriend: false},
//     {name: "John3", isClosedFriend: true},
//     {name: "John4", isClosedFriend: false},
//     {name: "John5", isClosedFriend: true},
// ]



// const obj = {
//     name: "John",
//     age: 32,
//     sex: "male",
//     nationality: "Nationality",
//     hobby: "Hobby",
// }
//
// for(const key in obj) {
//     console.log(obj[key]);
// }

 /* FOR OF
    for(const item of subscribers) {
        console.log(item)
}
  */

/* FOR
for(let i = 0; i < subscribers.length; i++) {
    console.log(subscribers[i])
*/


/* FUN
function congratsIfMoreThan100(arr){
    if(arr.length > 100){
        alert('Congratulations more than 100');
    } else {
        alert('Not more than 100');
        alert(arr.length);
    }
}

congratsIfMoreThan100(subscribers)*/


const people = [
    {
        name: 'John',
        sex: 'male',
    },
    {
        name: 'Chandler',
        sex: 'male',
    },
    {
        name: 'Monica',
        sex: 'female',
    },
    {
        name: 'Joey',
        sex: 'male',
    },
    {
        name: 'Rachel',
        sex: 'female',
    },
]

function addNiceAdjective(arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.sex === 'male') {
            element.name += ' handsome';
        } else{
            element.name += ' beautiful';
        }
    }
    return arr;
}

console.log(addNiceAdjective(people));