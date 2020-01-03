const questions = [
    {question : "what is 1-2?",
     options  : [0,-2,-1,3],
     answer : -1},
    {question : "what comes after 18?",
      options : [19,20,17,80] ,
      answer : 19},
    {question : "India is in which continent",
      options : ["Africa","Asia","Europe"],
      answer : "Asia"}
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded",()=>{
    load_question();
});

function load_question(){
    document.querySelector("#question").innerHTML = questions[question_number].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for(const option of questions[question_number].options){
        options.innerHTML = options.innerHTML + `<button class="option">${option}</button>`;
    }

    document.querySelectorAll(".option").forEach(option =>{
        option.onclick = () =>{
            let correct_ans = questions[question_number].answer;
            let entered_answer = option.textContent;
            if(correct_ans === Number(entered_answer)){
             question_number++;
             correct++;
             document.querySelector("span").innerHTML = `${correct} of ${question_number}`;
             load_question();
            }
            else{
                document.querySelector("#question").innerHTML = "GAME OVER!"
                options.innerHTML = "";
                question_number++
                document.querySelector("span").innerHTML = `${correct} of ${question_number}`
            }
        }
    })
}