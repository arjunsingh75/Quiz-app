// ===============  create questions arrays    =========================
let probability=[
    {
        question:"1. What is the probability of an impossible event?",
        option:["1","0","Unsufficient data","Not define"],
        correct:"opt-2"
    },
    {
        question:"2. Two unbiased coins are tossed. What is the probability of getting at most one head?",
        option:["3/4","1/6","1/3","1/2"],
        correct:"opt-1"
    },
    {
        question:"3. Two unbiased coins are tossed. What is the probability of getting at most one head?",
        option:["22/50","23/50","27/50","more than one"],
        correct:"opt-3"
    },
    {
        question:"4. What will be the value of P(not E) if P(E) = 0.07?",
        option:["90","007","93","72"],
        correct:"opt-3"
    },
    {
        question:"5. What will be the probability of getting odd numbers if a dice is thrown?",
        option:["1/2","2","4/2","5/2"],
        correct:"opt-1"
    },
    {
        question:"6.What is the probability of getting a sum as 3 if a dice is thrown?",
        option:["2/18","1/18","4","1/36"],
        correct:"opt-2"
    },
    {
        question:"7. What is the probability of getting an even number when a dice is thrown?",
        option:["1/6","1/2","1/3","1/4"],
        correct:"opt-2"
    },
    {
        question:"8. The probability of getting two tails when two coins are tossed is -",
        option:["1/6","1/2","1/3","1/4"],
        correct:"opt-4"
    },
    {
        question:"9.What is the probability of getting 1 and 5 if a dice is thrown once",
        option:["1/6","1/3","2/3","8/9"],
        correct:"opt-2"
    },
    {
        question:"10. What will be the probability of losing a game if the winning probability is 0.3?",
        option:["0.5","0.6","0.7","0.8"],
        correct:"opt-3"
    }
    
];
let problemonAges=[
    {
        question:"1. Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
        option:["2 times","5/2 times","11/4 times","3 times"],
        correct:"opt-1"
    },
    {
        question:"2. The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        option:["14 years","19 years","33 years","38 years"],
        correct:"opt-1"
    },
    {
        question:"3. A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        option:["7","8","9","10"],
        correct:"opt-4"
    },
    {
        question:"4. Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
        option:["24","27","40","50"],
        correct:"opt-1"
    },
    {
        question:"5.A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is",
        option:["14 years","18 years","20 years","22 years"],
        correct:"opt-4"
    },
    {
        question:"6. Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
        option:["16 years","18 years","20 years","22 years"],
        correct:"opt-1"
    },
    {
        question:"7. The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be ",
        option:["12 years","14 years","18 years","20 years"],
        correct:"opt-4"
    },
    {
        question:"8. At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",
        option:["12 years","15 years","19 years","21 years"],
        correct:"opt-2"
    },
    {
        question:"9. Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
        option:["16 years","18 years","28 years","24.5 years"],
        correct:"opt-4"
    },
    {
        question:"10. The present ages of three persons in proportions 4 : 7 : 9. Eight years ago, the sum of their ages was 56. Find their present ages (in years)",
        option:["8, 20, 28","16, 28, 36","20, 35, 45","None of these"],
        correct:"opt-2"
    }
];
let profitandloss=[
    {
        question:"1. Find the profit percent earned after selling an article at a doubled rate for half quantity",
        option:["200%","300%","400%","450%"],
        correct:"opt-2"
    },
    {
        question:"2.The shopkeeper sells an article for 600 rupees. If the profit is 20% of the cost price, find the profit. ",
        option:["100 rupees","250 rupees","500 rupees","120 rupees"],
        correct:"opt-1"
    },
    {
        question:"3. A shopkeeper purchases an article for 500 rupees. If the profit is 37.5% of the selling price, find the profit",
        option:["800 rupees","200 rupees","300 rupees","500 rupees"],
        correct:"opt-3"
    },
    {
        question:"4.  An article is sold at 20% less than its cost price. If the selling cost is 50 rupees and the selling cost is 5% of the selling price, find the loss. (Selling cost here is the expense occurred to sell the article, it is levied on the seller)",
        option:["150 rupees","200 rupees","250 rupees","300 rupees"],
        correct:"opt-4"
    },
    {
        question:"5. If the seller sells half of his goods at 20% loss and the rest of his goods at 50% profit, find the profit percentage on the entire transaction.",
        option:["12% profit","15% profit","20% profit","25% profit"],
        correct:"opt-2"
    },
    {
        question:"6. The price of an article is increased by 20% for the shopkeeper, he further increases the selling price by 50%. The initial profit percent was 25%. If his initial profit was 50 rupees, find the profit now.",
        option:["115 rupees","125 rupees","135 rupees","150 rupees"],
        correct:"opt-3"
    },
    {
        question:"7. The first 3 articles were sold at a profit of 50%, the next 5 articles were sold at a loss of 25% and the final 2 articles were sold at a profit of 100%. Find the profit percentage on the whole transaction.",
        option:["800 rupees","900 rupees","1000 rupees","1200 rupees"],
        correct:"opt-3"
    },
    {
        question:"8. The profit on selling 1 article is equal to the cost price of 2 such articles. Find the profit percentage.",
        option:["100%","150%","200%","225%"],
        correct:"opt-3"
    },
    {
        question:"9. If the loss occurred on selling an article is 20% of the selling price, find the loss percentage.",
        option:["16.6%","16.8%","17%","18%"],
        correct:"opt-1"
    },
    {
        question:"10. The expense of selling an article, worth rupees 6000, is 50 rupees. If the selling expenses is 10% more than the loss, find the loss percentage.",
        option:["7.5%","8.3%","9.09%","10%"],
        correct:"opt-2"
    }
];
let pipesandcistern=[
    {
        question:"1. 3 pipes A, B and C can fill a tank in 30 minutes, 40 minutes, and 120 minutes, respectively. If all the pipes are opened together, how much time is required to fill the tank?",
        option:["12 minutes","15 minutes","18 minutes","20 minutes"],
        correct:"opt-2"
    },
    {
        question:"2. 3 pipes can fill a bucket in 20minutes, 30 minutes and 60 minutes, respectively. If all the pipes are opened for 5 minutes what percentage of the tank will be filled.",
        option:["50%","60%","75%","100%"],
        correct:"opt-1"
    },
    {
        question:"3.  pipes A, B and C can fill a tank in 50 minutes, 120 minutes, and 60 minutes, respectively. If all the pipes are opened together, how much time is required to fill 27% of the tank?",
        option:["2 minuts","4 minuts","6 minuts","10 minuts"],
        correct:"opt-3"
    },
    {
        question:"4. 3 pipes can fill a tank in 20 minutes, 90 minutes and 180 minutes, respectively. If all the pipes are opened at once what percentage of the tank will be filled in 10 minutes?",
        option:["50%","55%","60%","66.66%"],
        correct:"opt-4"
    },
    {
        question:"5. There are three pipes connected to a tank. The first two can fill the tank in 20 minutes and 30 minutes, respectively. The third pipe can empty the entire tank in 5 minutes. If all the pipes are opened simultaneously, what time will it take to empty the tank?",
        option:["8.55 minuts","8.56 minuts","8.57 minuts","8.58 minuts"],
        correct:"opt-3"
    },
    {
        question:"6. Three pipes are opened for 8 minutes each one after the other. The first two pipes can fill a tank in 20 minutes and 40 minutes, respectively. If the third pipe can empty the tank in 120 minutes, find the amount of water filled in the tank after 24 minutes. The tank is 480 litres.",
        option:["7.23 minuts","8.23 minuts","8.57 minuts","8.88 minuts"],
        correct:"opt-2"
    },
    {
        question:"7.A pipe can empty a tank in 2 minutes. Another pipe can empty the tank in 12 minutes, and a third pipe can fill the tank in 22 minutes. What is the time required to empty the tank if all the pipes are opened simultaneously?",
        option:["1.85 minuts","1.95 minuts","2.05 minuts","2.15 minuts"],
        correct:"opt-1"
    },
    {
        question:"8. A pipe can fill a tank in 3 minutes if other two pipes can empty the tank in 2 minutes and 5 minutes respectively, find the time to empty the tank if all the pipes are opened simultaneously.",
        option:["2.27 minuts","2.72 minuts","7.27 minuts","7.72 minuts"],
        correct:"opt-2"
    },
    {
        question:" 9. Three pipes are opened for 8 minutes each one after the other. The first two pipes can fill a tank in 20 minutes and 40 minutes, respectively. If the third pipe can empty the tank in 120 minutes, find the amount of water filled in the tank after 24 minutes. The tank is 480 litres",
        option:["160 ltr","188 ltr","224 ltr","256 ltr"],
        correct:"opt-4"
    },
    {
        question:"10. If 3 taps are opened simultaneously, the tank fills in 15 minutes. The first two taps are combined 50% more efficient than the third one. Find the time taken by the third pipe to fill the tank.",
        option:["23.5 minuts","32.5 minuts","37.5 minuts","42.5 minuts"],
        correct:"opt-3"
    }
];
// =============================  question type finctions =====================================
document.querySelectorAll(".selectques").forEach((click)=>{
    click.addEventListener('click',(e)=>{
    let selectques=e.target.id;
    if(selectques==='pipes'){
        localStorage.setItem('questionarray',JSON.stringify(pipesandcistern));
        let heading="pipes And Cistern";
        localStorage.setItem('heading',heading);
         window.location.href="./quize_page.html";
    }
    else if(selectques==='Probability'){
        localStorage.setItem('questionarray',JSON.stringify(probability));
           let heading="Probability";
           localStorage.setItem('heading',heading);
           window.location.href="./quize_page.html";
    }
    else if(selectques==='ages'){
        localStorage.setItem('questionarray',JSON.stringify(problemonAges));
            let heading="problem on Ages";
           localStorage.setItem('heading',heading);
            window.location.href="./quize_page.html";
    }
    else if(selectques==='profit')
    {
        localStorage.setItem('questionarray',JSON.stringify(profitandloss));
                let heading="profit and loss";
                localStorage.setItem('heading',heading);
                window.location.href="./quize_page.html";
    }
 });
});   
//   ======================== select question type =====================================
let questring=localStorage.getItem('questionarray');
let questionsarray=JSON.parse(questring);
let heading=localStorage.getItem('heading');
let uname=localStorage.getItem('username');
// ================ step:1 fetch html element using Dom and declare variable ====================
let currentobj=0;
let score=0;
let stortime=0;
let userchoice=[];
function username(){
    let name = document.querySelector(".user").value;
    localStorage.setItem('username',name);
}
let questions=document.querySelector(".question");
let options=document.querySelectorAll(".option");
// ============================= step:2 load quiz ===============================
const loadquiz=()=>{
    const {question,option}=questionsarray[currentobj];
    questions.innerHTML=question;
    options.forEach((key,index)=>{
        if(index<4)
        {
            key.innerHTML=option[index];
        }
    });
    selectanswer();
 };
 document.querySelector(".heading").innerHTML=heading;
 loadquiz();
// ================step:3 select choice button =================================
function selectanswer() {
    options.forEach((btn) => {
        btn.addEventListener('click', (e)=>{
            userchoice[currentobj] = e.target.id;
            choice();
        });
    }); 
};

  function choice(){
    if(userchoice[currentobj] ==='opt-1'||userchoice[currentobj] ==='opt-2'||userchoice[currentobj] ==='opt-3'||userchoice[currentobj] ==='opt-4'){
        let ch=document.getElementById(userchoice[currentobj]);
        document.querySelectorAll(".option").forEach( (e) =>e.classList.remove('choice'));
        ch.classList.add('choice');
        console.log(ch);
    }
    else{
        document.querySelectorAll(".option").forEach( (e) =>e.classList.remove('choice'));
    }
  }
// ================= step:4 submit or next button functionality =======================
function submit() {
         // == check correct choice answers ===
    if (userchoice[currentobj] === questionsarray[currentobj].correct) {
        score++;
        document.getElementById('score').innerHTML = `Score:${score}`;
    }
    sec = 11;
    currentobj++;
    choice();
    if (currentobj < questionsarray.length) {
        document.querySelector('.totalquestion').innerHTML = `${currentobj + 1}/10`;
        loadquiz();
    }

    else {
         // Hold all result variable values in local storage
        const dataobj={
            uname:uname,
            totaltime:stortime,
            totalques:questionsarray.length,
            attempt:userchoice.length,
            wrong:userchoice.length-score,
            score:score,
            percent:(score /(questionsarray.length) * 100)
        }; 
        const datastring=JSON.stringify(dataobj);
        localStorage.setItem('result',datastring);
        window.location.href="quize_result.html";
    }
};  //================== Timing function===================
    let sec=11;
    if(currentobj<questionsarray.length)
    {
    setInterval(function timing() {  
        stortime++; 
        sec--;       
        if(sec>0)
         { 
          document.querySelector('.time').innerHTML=`${sec}`; 
         }
         else
         {
            submit();
         }
    }, 1000);
    }
    else{
        clearInterval(timing);
     }
    