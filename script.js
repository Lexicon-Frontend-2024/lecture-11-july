let myInterests = [
    "Horses",
    "Drawing",
    "Music",
    "Writing",
    "Coding",
    "Gaming"
];

let interestsListsRef = document.querySelector('.interests-list');
myInterests.forEach(interest => {
    let interestItemRef = document.createElement('li');
    // <li></li>
    interestItemRef.innerText = interest;
    // <li>Horses</li>
    interestsListsRef.appendChild(interestItemRef);
});

// hitta vår input för intressen
let inputRef = document.querySelector('#interestInput');

// hitta knappen
let buttonRef = document.querySelector('#btn');
buttonRef.addEventListener("click", (event) => {
    console.log('clicked the button');
    console.log(event.target.value);
    let newInterest = inputRef.value;
    // skapa nya list-itemet för vårt nya intresse
    let newInterestRef = document.createElement('li');
    newInterestRef.innerText = newInterest;
    interestsListsRef.appendChild(newInterestRef);
});

inputRef.addEventListener("change", (e) => {
    console.log(e.target.value);
});