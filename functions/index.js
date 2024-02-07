// console.log("toda ")

//  function addnumber(fistNumber, secondNumber){
//       return console.log(fistNumber * secondNumber)
//  }
//  addnumber(2, 4);

// function greetuser(name, age, color){
//     console.log(`hello, ${name}  is ${age} years old ${color}`)
// }
// greetuser('faizo', 21, 'red');

// greetuser('jack' ,19,'yellow' );

// greetuser('marvin',23,'green')

//     let ugxResult = null;
// function convertUsDollarsToUgx(dollars, rate){
//        let ugxResult = dollars * rate;
//        return console.log(ugxResult);
// }
// convertUsDollarsToUgx(100,3800);

// function convertUsUgxToDollars(ugxValue, rate){
//     let ugxValueResult = ugxValue * rate;
//     return console.log(ugxValueResult);
// }
// convertUsUgxToDollars(100,3600);

function validateCrediations(email, password){
    const validemail ="massagodfreyo@gmail.com";
    const validpassword =2200720917;
    if(email===validemail && password===validpassword){
        console.log(`login SucceSful`);
    }else {
        console.log(`incorrect password`);
    }
}
    validateCrediations("massagodfreyo@gmail.com",2200720917)