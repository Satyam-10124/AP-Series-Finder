let a=parseInt(prompt("Enter first term:"));
let b=parseInt(prompt("Enter second term:"));
let c=parseInt(prompt("Enter the third term:" , "Thanks for the patience!"))

let first=a
let diff2=c-b
let diff1=b-a

if(diff1=diff2){alert("Thanks! Your entered series is an Arithemetic Progression.")}
    else{alert("Enter a valid AP Series.")}

function specificterm(){
    
        let n= prompt("Which order term you want to find:");
        alert(`The ${n} term of your AP is ${first+(n-1)*diff2}`) 
    }


    

    
    function sumofseries(){
        let m=parseInt(prompt("Upto how many terms you want to know the sum?"))
     let n2=m/2
     let a2=2*a

        alert(`The sum of the series upto ${m} terms is ${n2*(a2+(m-1)*diff1)}`)
    }
   
function positionofterm(){
    let inputterm=parseInt(prompt("Enter the term whose position you want to find:" , ))
    answer=(((inputterm-a)/diff1)+1)
    if((inputterm-a)%diff1 === 0 ){
alert(`Position of ${inputterm} in the Entered AP is ${answer}`)
    }
    else(
       alert("Sorry! Your entered term does not belong to this Arithemetic Progresssion Series.") 
    )
}


    
