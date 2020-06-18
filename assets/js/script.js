let Amount = document.querySelector("#Amount");
let Interval = document.querySelector("#Interval");
let month = document.querySelector("#month");
let savings = document.querySelector("#savings");
let calcButton = document.querySelector("#calcButton");
let daysDuration = document.querySelector("#daysDuration");
let weekDuration = document.querySelector("#weekDuration");
let display1 = document.querySelector(".hidden_1")
let earned = document.querySelector(".earned")


let dailyPercentage = 0.000274
let calcAmount = "";
let calcInterval = "";
let calcMonth = "";
let days_Duration = "";
let week_Duration = "";
let selected_month = "";
let year_Duration = "";
let totalEarned = "";
let dailyInterest= "";
let weeklyInterest= "";
let monthlyInterest ="";

//add event listeners to the input and select tags

Amount.addEventListener("change", function(){
    calcAmount = Number(this.value);
      
})

Interval.addEventListener("change", function(){
    calcInterval = this.value;
    if(calcInterval === "Daily"){
        document.querySelector("#hiddenDays").style.display= "block"
    }
    else if(calcInterval === "Weekly"){
        document.querySelector("#hiddenWeeks").style.display = "block"
    }
    else if(calcInterval === "Monthly"){
        document.querySelector("#hiddenMonths").style.display = "block"
    }
    else{
        document.querySelector("#hiddenYears").style.display = "block"
    }
        
})

month.addEventListener("change", function(){
    calcMonth = this.value;
  
    
})

daysDuration.addEventListener("change", function(){
    days_Duration = Number(this.value)
  
    
})

weekDuration.addEventListener("change", function(){
    week_Duration = Number(this.value)
   
    
})

    

//program flow
calcButton.addEventListener("click", function(){
    console.log("clicked");
    //calculate for daily savings

       if(calcInterval === "Daily"){
       dailyInterest= days_Duration * interest();
       totalEarned = calcAmount + dailyInterest;

      document.querySelector(".result").textContent =  dailyInterest.toFixed(2);
      document.querySelector(".earned").textContent = totalEarned.toFixed(2);
      console.log(dailyInterest)
      console.log(totalEarned)
    }

    // calculate for weekly 

    else if(calcInterval === "Weekly"){
        weeklyInterest = 7 * week_Duration * interest();
        totalEarned = calcAmount + weeklyInterest;
        document.querySelector(".result").textContent = weeklyInterest.toFixed(2);
        document.querySelector(".earned").textContent = totalEarned.toFixed(2);

    }    
    //calculate for monthly

    else if(calcInterval === "Monthly"){
            for(var i=0; i<months.length; i++){
                if(months[i].id === calcMonth){
                    monthlyInterest = Number(months[i].max_days) * interest();
                    totalEarned = calcAmount + monthlyInterest;
                    
                    document.querySelector(".result").textContent = monthlyInterest.toFixed(2);
                    document.querySelector(".earned").textContent = totalEarned.toFixed(2);
                }
            
            }
           
            
        }
        else{
            year_Duration = 365 * interest();
            totalEarned = calcAmount + year_Duration;
            document.querySelector(".result").textContent = year_Duration.toFixed(2);
            document.querySelector(".earned").textContent = totalEarned.toFixed(2);
        }
      
   })



//function to calculate interest
function interest(){
       var interest = parseFloat(dailyPercentage * calcAmount);
    return interest

}

var months= [{
        id: "January",
        max_days: 31
    },
    {
        id: "Febuary",
        max_days: 29
    },
    {
        id: "March",
        max_days: 31
    },
    {
        id: "April",
        max_days: 30
    },
    {
        id: "May",
        max_days: 31
    },
    {
        id: "June",
        max_days: 30
    },
    {
        id: "July",
        max_days: 31
    },
    {
        id: "August",
        max_days: 31
    },
    {
        id: "September",
        max_days: 30
    },
    {
        id: "October",
        max_days: 31
    },
    {
        id: "November",
        max_days: 30
    },
    {
        id: "December",
        max_days: 31
    }

]

