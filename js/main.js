//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

let listOfNumbers=[];

for (let i=0; i<100; i++ ){
   
    
    if (((i+1)% 3==0)&&((i+1) % 5==0)){
        listOfNumbers[i]= "FizzBuzz";

    }else if((i+1)% 5==0){
        listOfNumbers[i]= "Buzz";
        

    }else if ((i+1) % 3==0){
        listOfNumbers[i]= "Fizz";

    }else{
        listOfNumbers[i]= i+1;
    }
}
document.getElementById("number_list").innerHTML=listOfNumbers;