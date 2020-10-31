// const people = [
//    {
//      name: 'Carly',
//      yearOfBirth: 1942,
//      yearOfDeath: 1970,
//    },
//    {
//      name: 'Ray',
//      yearOfBirth: 1962,
//      yearOfDeath: 2011
//    },
//    {
//      name: 'Jane',
//      yearOfBirth: 1912,

//    },
//  ]

 const findTheOldest = function(array) {
   const findOldest = array.map((person) => {
      if (!person.yearOfDeath) {
         person.yearOfDeath = new Date().getFullYear() 
      }
      person.age = person.yearOfDeath - person.yearOfBirth;
   });
   array.sort(function(a, b) {
      return b.age-a.age;
      
   });
   console.table(array)
   return array[0];
};

// console.table(findTheOldest(people))
module.exports = findTheOldest