// function Calculate (unitePrice, quantity)   5
// {return(quantity*unitePrice)}


// const orderTotal = Calculate(35 , 4);
// console.log(orderTotal)

// console.log(Calculate(2,3));
// console.log(Calculate(50,4))

// function calculateOrderTotal(unitPrice, quantity) {
// // return(unitPrice * quantity);  התיקון הוא RETURN במקום CONSOLE.LOG
// }
// const result = calculateOrderTotal(20, 3);
// console.log(result);

// const GetLetterGrade= (grade) =>      שאלה 6  
// {
//     if (grade>=90 && grade<=100)
//         return "A";
//     if (grade>=80 && grade<=89)
//         return "B";
//     if (grade>=70 && grade<=79)
//         return "C";
//     if (grade >=60 && grade<=69)
//         return "D";
//     if (grade >=0 && grade<=55)
//         return "F";
//     if (grade>100 || grade<0)
//     return "invalid grade";
// };
// console.log(GetLetterGrade(101));
// console.log(GetLetterGrade(95));
// console.log(GetLetterGrade(83));
// console.log(GetLetterGrade(70));
// console.log(GetLetterGrade(48));

// שאלה 7

// function greet(name)        לפני המרה  
//  {
//   return `Hello, ${name}`;
// }

// function calculateFinalPrice(price, discountPercent)  לפני המרה
//  { 
//   const discount = price * discountPercent / 100; 
//   const finalPrice = price - discount; 
//   return finalPrice; 
// }

// const greet = nam => {return `Hello , ${nam}`;}  אחרי
 

// const calculateFinalPrice = (price, discountPrecent)=>    אחרי 
// { const discount =  price*discountPrecent/100;
//     const finalPrice = price- discount;
//     return finalPrice;
// }
// console.log(calculateFinalPrice(100 ,10));

// אפשר לכתוב את הראשונה כמקוצרת כמו שכתבתי



// שאלה 8
// function calculatePrice(price1 , price2)     
// {
//   const min=price1>price2? price2 : price1;
//   const max = price1>price2? price1 : price2;
//   const TotalPrice = max + (min*0.5);
//   return TotalPrice;
// };
// console.log(calculatePrice(100,50));
// console.log(calculatePrice(200,60));
// console.log(calculatePrice(80,49));


// function isExpensive(price)
// { const Expensive = price>=500? "true" : "false"; 
//     return(Expensive);
// }
// console.log(isExpensive(500));
// console.log(isExpensive(300));
// console.log(isExpensive(700));

// const square = number => {     לפני תיקון
//   number * number;
// };

// const square = number => {    אחרי
//  return ( number * number);
// };
// console.log(square(4));
// console.log(square(5));
// console.log(square(6));

//  שאלה 9
// function GetSummaryProduct (product) {  
// return (` ${product.name} , ${product.price} - "NIS"`);
// }
// const product = {
//   id: 1,
//   name: "Laptop",
//   price: 999,
//   inStock: true
// };
// console.log(GetSummaryProduct(product));

// function GetAbility(product){
//   return product.inStock===true? "Available" : "Unavailable"
// }
// console.log(GetAbility(product));
// עדיף שהפונקציה לא תהיה תלויה במשתנה חיצוני ספציפי כי אז אפשר להפעיל אותה על הרבה משתנים שונים במקום לכתוב על כל משתנה פונקציה חדשה



