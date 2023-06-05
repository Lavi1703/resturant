// Today we are going to learn about  Constructor in  javascript
// const student1 = {
//     firstName : "Lavi",
//     lastName : "Barange",
//     age : 25,
//     class : 9

// }
// ab agar hume same properti chaiye par dusri value usme to hum usme constructor ka use karenge

// const student2 = {
//     firstName : "Lavi",
//     lastName : "Barange",
//     age : 25,

//     class : 9

// }

//////////////////////
// know its come's the picture of constructor

function Student(fname,lname,age,stuclass) {
    this.firstName = fname,
    this.lastName = lname,
    this.age = age,
    this.class = stuclass

}

var student1 = new Student ("kajal","Barange",45,9)
// Ab kya koi new object banana hoto usko bas uhi
var student2 = new Student ("Anita","Pawar",89,90)


// Aap log agar dekh  rahe honge to usme apko dikhega ki console mai hume na student1 mai nahi Student k ander object bana hua hai
// ab agar hume student1 mai koi porperty add karni hai to 
 
student1.rollnumber = 1
console.log(student1); // console mai property dikhegi roll no 1

console.log(student2); // isme nahi dikhegi 

/// ab hum ek fuction add karnge student1 mai

student1.name = function (){
    return this.firstName + this.lastName
}
console.log(student1.name());

// AB hum ye chah rhe hai ki jo kam humara contructor kar raha hai wahi kaam sawe constructor fuction k bahar ho 

Student.prototype.nation ="India"
// ye dono objet mai add ho gaya hoga 

console.log(student1.nation)
console.log(student2.nation);



