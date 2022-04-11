// ** Person Object **

const Person = {
    firstName:"Md Kamrul",
    lastName:"Hasan",
    Age: 28,

    fullName: function(){
         result = this.firstName + " " + this.lastName;
         return result;
    },

    email: function(){
        result = this.lastName + "@gamil.com "; 
        return result;
    },

};

document.getElementById('person-details').innerHTML = Person.fullName() + " " +Person.email();
console.log(Person.firstName + " " + Person.lastName);

