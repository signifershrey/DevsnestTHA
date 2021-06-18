const Name = {
    fname: "Shrey",
    lname: "Maurya",
    printFullName: function (city) {
        console.log(`My name is ${this.fname}  ${this.lname} and I live in ${city}`);
    }
};

const AnotherPerson = {
    fname: "Ankit",
    age: 18,
    lname: "Singh"
};

Name.printFullName("Lucknow");
//Function Borrowing 
Name.printFullName.call(AnotherPerson , "Kanpur");
// Name.printFullName.call(AnotherPerson("Kanpur"))  //ERROR  as Another Function is not function

//apply - The only difference b/w call and apply is the way we pass the arguments
Name.printFullName.apply(AnotherPerson, ["Kanpur"]);

//BIND - It does'nt directly call the method,but gives you the copy and  returns a method which we can call later
let printMyNameandCity = Name.printFullName.bind( Name, "Delhi")
console.log(printMyNameandCity);
printMyNameandCity();