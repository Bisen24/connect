
const datlist = new XMLHttpRequest();
datlist.onload = function () {
    const res = JSON.parse(this.response);
    List(res);
    console.log(res);

}

datlist.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz');
datlist.send();



const result = [];
console.log(result)


function List(data) {

    let NoOfQuestion = document.getElementById("OutOff")

    let scores = document.getElementById("ScoreTotal");

    let resultbtn = document.getElementById("btn-result");
    resultbtn.addEventListener('click', (i) => {
        let score = 0;
        for (let sum = 0; sum <= result.length; sum++) {
            score = score + result[sum]
        }
        console.log(score)
        scores.innerHTML = 0;
        scores.innerHTML = result.length;
    })


    data.map((i, element) => {

        NoOfQuestion.innerHTML = i.id;

        let option0;
        option0 = i.options[3]

        let option1;
        option1 = i.options[1]

        let option2;
        option2 = i.options[3]

        let option3;
        option3 = i.options[3]

        let option4;
        option4 = i.options[2]


        if (i.id == 1) {
            document.getElementById('quiz-container').innerHTML += `

       <p>Q1. ${i.question}</p>
        <input type="radio" name="question" id="select1" value="${i.options[0]}">
        <label for="select1">${i.options[0]}</label><br>
        <input type="radio" name="question" id="select2" value="${i.options[1]}">
        <label for="select2">${i.options[1]}</label><br>
        <input type="radio" name="question" id="select3" value="${i.options[2]}">
        <label for="select3">${i.options[2]}</label><br>
        <input type="radio" name="question" id="select4" value="${i.options[3]}">
        <label for="select4">${i.options[3]}</label><br>
        

        
        `;


            let btn = document.getElementById("btn")
            // demo.Onclick="check()";
            btn.addEventListener('click', (i) => {
                let x = 0
                var selected = document.querySelector(
                    'input[name="question"]:checked');
                if (selected.value === option0) {
                    x++;
                    result.push(x)
                }


            })


        }
        //second
        if (i.id == 2) {
            document.getElementById('quiz-container-one').innerHTML += `

       <p>Q2. ${i.question}</p>
        <input type="radio" name="question1" id="select5" value="${i.options[0]}">
        <label for="select5">${i.options[0]}</label><br>
        <input type="radio" name="question1" id="select6" value="${i.options[1]}">
        <label for="select6">${i.options[1]}</label><br>
        <input type="radio" name="question1" id="select7" value="${i.options[2]}">
        <label for="select7">${i.options[2]}</label><br>
        <input type="radio" name="question1" id="select8" value="${i.options[3]}">
        <label for="select8">${i.options[3]}</label><br>
        

        
        `;


            let btn = document.getElementById("btn")
            // demo.Onclick="check()";
            btn.addEventListener('click', (i) => {
                let x = 0;
                var selected = document.querySelector(
                    'input[name="question1"]:checked');
                if (selected.value === option1) {
                    x++;
                    result.push(x);
                }


            })


        }
        //third
        if (i.id == 3) {
            document.getElementById('quiz-container-two').innerHTML += `

       <p>Q3. ${i.question}</p>
        <input type="radio" name="question2" id="select9" value="${i.options[0]}">
        <label for="select9">${i.options[0]}</label><br>
        <input type="radio" name="question2" id="select10" value="${i.options[1]}">
        <label for="select10">${i.options[1]}</label><br>
        <input type="radio" name="question2" id="select11" value="${i.options[2]}">
        <label for="select11">${i.options[2]}</label><br>
        <input type="radio" name="question2" id="select12" value="${i.options[3]}">
        <label for="select12">${i.options[3]}</label><br>
        

        
        `;


            let btn = document.getElementById("btn")
            // demo.Onclick="check()";
            btn.addEventListener('click', (i) => {
                let x = 0;
                var selected = document.querySelector(
                    'input[name="question2"]:checked');
                if (selected.value === option2) {
                    x++;
                    result.push(x);
                }


            })


        }
        //fourth

        if (i.id == 4) {
            document.getElementById('quiz-container-three').innerHTML += `

       <p>Q4. ${i.question}</p>
        <input type="radio" name="question3" id="select01" value="${i.options[0]}">
        <label for="select01">${i.options[0]}</label><br>
        <input type="radio" name="question3" id="select02" value="${i.options[1]}">
        <label for="selec021">${i.options[1]}</label><br>
        <input type="radio" name="question3" id="select03" value="${i.options[2]}">
        <label for="select03">${i.options[2]}</label><br>
        <input type="radio" name="question3" id="select04" value="${i.options[3]}">
        <label for="select04">${i.options[3]}</label><br>
        

        
        `;


            let btn = document.getElementById("btn")
            // demo.Onclick="check()";
            btn.addEventListener('click', (i) => {
                let x = 0;
                var selected = document.querySelector(
                    'input[name="question3"]:checked');
                if (selected.value === option3) {
                    x++;
                    result.push(x);
                }


            })


        }

        if (i.id == 5) {
            document.getElementById('quiz-container-fourth').innerHTML += `

       <p>Q5. ${i.question}</p>
        <input type="radio" name="question4" id="select17" value="${i.options[0]}">
        <label for="select17">${i.options[0]}</label><br>
        <input type="radio" name="question4" id="select16" value="${i.options[1]}">
        <label for="select16">${i.options[1]}</label><br>
        <input type="radio" name="question4" id="select15" value="${i.options[2]}">
        <label for="select15">${i.options[2]}</label><br>
        <input type="radio" name="question4" id="select14" value="${i.options[3]}">
        <label for="select15">${i.options[3]}</label><br>
        

        
        `;


            let btn = document.getElementById("btn")
            // demo.Onclick="check()";
            btn.addEventListener('click', (i) => {
                let x = 0;
                var selected = document.querySelector(
                    'input[name="question4"]:checked');
                if (selected.value === option4) {
                    x++;
                    result.push(x);
                }

                alert("Thank you for submitting the quiz, Please check your result uisng result button!!")
            })


        }


    });


}






