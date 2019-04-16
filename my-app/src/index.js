function sayHello() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
}

sayHello();

const person = {
  name: "Praveen",
  walk() {
    console.log(this);
  }
};

person.walk();

const pers = person.walk.bind(person);
pers();

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: true }
];

const jobss = jobs.filter(function(job) {
  return job.isActive;
});

const jobssA = jobs.filter(job => job.isActive);

console.log("Active jobs", jobss);
console.log("Active jobs", jobssA);

const colors = ["red", "gree", "yellow"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

const address = {
    name:'PK',
    city:'VS',
    country:'US'
};

const Homeaddress = {
    stree:'PK',
    coolony:'KU',
    in:'IN'
};

const {name,city,country} = address;


const add = {...address,...Homeaddress};

console.log(add);


