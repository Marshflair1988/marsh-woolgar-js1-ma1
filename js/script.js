const cat = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
]; 

// Question 1

function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.complain = () => console.log("Meow!");
}

let myCat = new Cat("Summer", 16)
let anotherCat = new Cat("Winter", 12)

myCat.complain()


// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

console.dir(heading.className);

// Question 3

heading.style.fontSize = "2em";

// question 4

heading.className = "subheading";

console.log(heading.className);

// Querstion 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

console.log(resultsContainer.innerHTML)

resultsContainer.innerHTML = "<p>New paragragh</p>"; 
resultsContainer.style.background = "yellow";

// Question 7

//Im sorry i didnt understand this question, i will bring it up with the tutors for understanding of this.

// Question 8

//Im sorry i didnt understand this question, i will bring it up with the tutors for understanding of this.

