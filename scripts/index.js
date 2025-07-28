    /**
     * ATENÇÃO:
     * Este foi o primeiro projeto que desenvolvi.
     * Por isso, **não** utiliza Design Patterns nem segue uma arquitetura definida.
     * A nomenclatura das variáveis também está inconsistente, o que pode comprometer a legibilidade.
     *
     * Este repositório representa uma fase inicial do meu aprendizado — com todos os erros e acertos naturais.
     * 
     * Projeto mantido por valor histórico e educativo.
     */
    
    //Declarações de variaveis
    let questions, acido, base, reaçao, sal, massaMolarCalculos, balanceamento, check,
    Quimica = document.querySelectorAll("#Quimica"),
    menuGame = document.getElementById("menu"),
    Game = document.getElementById("GamePlay"),
    Centralwindow = document.getElementById("window"),
    win = document.getElementById("winner"),
    over = document.getElementById("over"),
    newOption = document.createElement("option"),
    AllSixty = document.getElementById("AllSixty"),
    text_gameover = document.getElementById("text_gameover"),
    main_menu = document.getElementById("back_main_menu"),
    mode = document.getElementById("mode"),
    options = document.getElementById("options"),
    achievement = document.getElementById("achievement"),
    forFinale = document.getElementById("forFinale"),
    maxRNG, minRNG = 0, countQuestion = 0, 
    coutMistakes = 0, RNG, RNGQ, questionsFollowed = 0,
    valueInput = document.getElementById("input"),
    ForEachValue = document.querySelectorAll('#input option'),
    popup = document.getElementById("popup"),
    popupachivment = document.getElementById("popupachivment"),
    msgpop = document.getElementById("ErC"),
    msgExplain = document.getElementById("msgExplain"),
    valueInputMode = document.getElementById("valueInputMode"),
    valueMaxMistake = document.getElementById("valueMaxMistake"),
    points = 0, SavePoints,
    audio_correct = document.getElementById("audio_correct"),
    audio_mistake = document.getElementById("audio_mistake"),
    mute_song = document.getElementById("mute_song"),
    active = document.getElementById("active"),
    btn_hard = document.getElementById("btn_hard"),
    legendary = document.getElementById("legendary"),
    allQuestions = document.getElementById("allQuestions"),
    molarInfo = document.getElementById("molar_info"),
    active2 = document.getElementById("active2"),
    active3 = document.getElementById("active3"),
    active4 = document.getElementById("active4"),
    active5 = document.getElementById("active5"),
    active6 = document.getElementById("active6"),
    active7 = document.getElementById("active7"),
    active8 = document.getElementById("active8"),
    active9 = document.getElementById("active9"),
    active10 = document.getElementById("active10"),
    finale = 80;




    window.addEventListener("load", function() {
        AbleOptions()
        if(localStorage.getItem("Conquista 10")){
            LegendaryAll()
        }
        overGame(localStorage.getItem("Conquista 1"),localStorage.getItem("Conquista 2"),localStorage.getItem("Conquista 3"),localStorage.getItem("Conquista 4"),localStorage.getItem("Conquista 5"),localStorage.getItem("Conquista 6"),localStorage.getItem("Conquista 7"),localStorage.getItem("Conquista 8"),localStorage.getItem("Conquista 9"))
    })
    // recupera os pontos feitos
    window.addEventListener("load", function() {
        let valuePoints = localStorage.getItem(SavePoints);
        if (valuePoints !== null) {
            points = parseInt(valuePoints)
          }
    })
 
    // Function able options

    function AbleOptions() {

        if (valueInputMode.value === "3" || valueInputMode.value == "null") {
        
            ForEachValue.forEach(opcao => {
            if (opcao.value === '15' || opcao.value === '20') {
              opcao.classList.remove('desable');
            }

          });

        } else {
                ForEachValue.forEach(opcao => {
                if (opcao.value === '15' || opcao.value === '20') {
                  opcao.classList.add('desable');
                }
            })
        }

    }



    valueInputMode.addEventListener("change", function() {

        if (valueInputMode.value === "4") {
          molarInfo.innerHTML = "Atenção: Use uma calculadora e tabela periódica.";
        } else {
          molarInfo.innerHTML = "";
        }

        AbleOptions()
      
        if (valueInputMode.value != null && valueInput.value == finale){
            valueInput.value = 10
            btn_hard.classList.remove("btn_hard")
        }

      });

    // Verifica os inputs se existe algum erro

    valueMaxMistake.addEventListener("change", function(){
        if(valueMaxMistake.value >= 10 && valueInput.value == 5){
            valueInput.value = 10
        }
    })

    valueInput.addEventListener("change", function(){
        if(valueInput.value == 5 && valueMaxMistake.value == 10){
            valueMaxMistake.value = "nothing"
        }
        if(valueInput.value > 10 && valueInputMode.value != null){
            valueInputMode.value = null
        }
        if(valueInput.value == finale){
            btn_hard.classList.add("btn_hard")
        }else {
            btn_hard.classList.remove("btn_hard")
        }
    })
   

    //Função de número aleatório
    function RandomNumber(max, min){
        return Math.floor(Math.random() * (max-min) + min)
    }
    
    //Funções de troca de tela
    function trocaDeTela(element_remove,element_add,element_class_remove,element_class_add){
        element_remove.classList.remove(element_class_remove);
        element_remove.classList.add("desable");
        element_add.classList.remove("desable")
        element_add.classList.add(element_class_add)
    }

       
    function RunGame(){
        menuGame.classList.remove();
        menuGame.classList.add("desable");
        Game.classList.remove("desable")
        Game.classList.add("Game_Start")
        win.classList.remove("Game_Start")
        win.classList.add("desable")
        over.classList.remove("Game_Start")
        over.classList.add("desable")
    }

    function WinGame(){
        trocaDeTela(Game,win,"Game_Start","Menu_Game")
    }
    function ActiveGameOver() {
        trocaDeTela(Game,over,"Game_Start","Menu_Game")
    }
    function Msg_over(){
        if(countQuestion-coutMistakes == 0){
            text_gameover.innerHTML = `Mais sorte na próxima vez. Continue tentando!`
        }else if (countQuestion-coutMistakes == 1){
            text_gameover.innerHTML = `Você acertou ${countQuestion-coutMistakes} questão. Tente novamente!`
        }else{
            text_gameover.innerHTML = `Você acertou ${countQuestion-coutMistakes} questões. Vamos lá!`
        }
    }



    function BackMenu() {
        trocaDeTela(win,menuGame,"Menu_Game","Menu_Game")
        mode.classList.add("desable")
        mode.classList.remove("Menu_Game")
        achievement.classList.add("desable")
        achievement.classList.remove("Menu_Game")
        over.classList.remove("Game_Start")
        over.classList.add("desable")
        options.classList.remove("Game_Start")
        options.classList.add("desable")
    }
    
    // Copia as questoes originais para a copia
    function RecriandoQuestoes() {
        acido = Originalquestions[0].slice();
        base = Originalquestions[1].slice();
        reaçao = Originalquestions[2].slice();
        sal = Originalquestions[3].slice();
        massaMolarCalculos = Originalquestions[4].slice();
        balanceamento = Originalquestions[5].slice();
        questions  = [acido,base,reaçao,sal,massaMolarCalculos,balanceamento]
    }

    // Jogar (CENTRO)

    // configura o modo de jogo 
    function TrueIsRNG(){ 
        if (valueInputMode.value == 0){
            RNG = 0
        }else if (valueInputMode.value == 1){
            RNG = 1
        }else if (valueInputMode.value == 2){
            RNG = 2
        }else if (valueInputMode.value == 3){
            RNG = 3
        }else if (valueInputMode.value == 4){
            RNG = 4
        } else if (valueInputMode.value == 5){
            RNG = 5
        } else {
            RNG = RandomNumber(maxRNG, minRNG);;
        }
    }



    function MaxErros() {
        if(valueMaxMistake.value == coutMistakes){
            ActiveGameOver()
            Msg_over()
            coutMistakes = countQuestion = questionsFollowed = 0;
        }else {
            return;
        }
    }

    function PlayNow(){
        if(menuGame.classList.contains("Menu_Game")){
            questions = null;
            RecriandoQuestoes()
            maxRNG = questions.length;
            TrueIsRNG();
            RNGQ = RandomNumber(questions[RNG].length, minRNG);
            RunGame();
            GameNow();
        }
    }

    // Jogo executando
    function GameNow(){
        MaxErros()
        conqusitasEstaDesbloqueada()
        if(countQuestion == valueInput.value){
            questions = null;
            if(countQuestion-coutMistakes <= 2){
                ActiveGameOver()
                Msg_over()
                coutMistakes = countQuestion = questionsFollowed = 0;
            }else{
            
            WinGame()
            win.innerHTML = `
            <div class="title_section">
                <div class="Aling_text_to_center">
                    <h2 class="title text_confing_default">Parabens!</h2>
                    <h3 class="subtitle text_confing_default space_bottom_for_mobile">Você acertou ${countQuestion - coutMistakes} questões</h3>
                </div>
            </div>
            <div class="Menu_section_btn">
            <button class="btn_menu text_confing_default" onclick="PlayNow()">
                Jogar Novamente
            </button>
            <button class="btn_menu text_confing_default" onclick="BackMenu()" id="back_main_menu">
                Menu Principal
            </button>
            <button class="btn_menu text_confing_default" onclick="exitWeb()">
                Sair
            </button>
            </div>
            `
         
            coutMistakes = countQuestion = questionsFollowed = 0;
        }
        }else if(Game.classList.contains("Game_Start")){
                    Centralwindow.innerHTML = `<p class="question text_confing_default">${++countQuestion}) ${questions[RNG][RNGQ].question}</p>
                    <button class="btn_anwser text_confing_default" id="checkIt" onclick="checksAnswer(this, ${questions[RNG][RNGQ].correct_to_next.a})"><strong>a)</strong> ${questions[RNG][RNGQ].answer.a}</button>
                    <button class="btn_anwser text_confing_default" id="checkIt" onclick="checksAnswer(this, ${questions[RNG][RNGQ].correct_to_next.b})"><strong>b)</strong> ${questions[RNG][RNGQ].answer.b}</button>
                    <button class="btn_anwser text_confing_default" id="checkIt"onclick="checksAnswer(this, ${questions[RNG][RNGQ].correct_to_next.c})"><strong>c)</strong> ${questions[RNG][RNGQ].answer.c}</button>
                    <button class="btn_anwser text_confing_default" id="checkIt" onclick="checksAnswer(this, ${questions[RNG][RNGQ].correct_to_next.d})"><strong>d)</strong> ${questions[RNG][RNGQ].answer.d}</button>
                    <span class="text_confing_default points_confing_mobile">Pontos: ${points}</span>
                    `
            }
    }

    //Desabilita alternativa a alternativa apara evitar bugs

function DesableCheck(){
    check = document.querySelectorAll("#checkIt");
    check.forEach(desable => {
        desable.removeAttribute("onclick");
        desable.style.scale = "1"
    })
}

// Chequando alternativas
function checksAnswer(button, x){
    DesableCheck()
    setTimeout(function (){
        if(questions != 0){
            questions[RNG][RNGQ].correct(button,x)
            }
    }, 500)
    
}
function ActivateTrue(button,x){
    if(x){
        if(mute_song.value == 0){
            audio_correct.play()
        }
        questionsFollowed++;
        points += 10;
        localStorage.setItem(SavePoints, points)
        button.classList.add("correct");
        button.classList.remove("incorrect");
        ActivePopup()
        ActivateMsgTrue()        
    }  
    else {
        if(mute_song.value == 0){
            audio_mistake.play()
        }
        if(points >= 10){
            points -= 10;
            localStorage.setItem(SavePoints, points)
        }
        questionsFollowed = 0;
        button.classList.add("incorrect");
        button.classList.remove("correct");

   
          for (let key in questions[RNG][RNGQ].correct_to_next) {
            if (questions[RNG][RNGQ].correct_to_next[key] === true) {
              const correctAnswerNumber = letterToNumber[key];
              check[correctAnswerNumber].classList.add("ThisIsCorrect")
              break;
            }
          }
          

        ActivePopup()
        ActivateMsgFalse()
    }
}

//Função popup
function ActivePopup(){
    popup.classList.remove("desable");
    popup.classList.add("animatePopup")
}
function ActivePopupAchiment() {
    popupachivment.classList.remove("desable");
    popupachivment.classList.add("animatePopup")
}

function DesablePopup() {
    popup.classList.add("desable");
    nextQuestion()
}

function DesableOnlyPopup() {
    popupachivment.classList.add("desable");
}

function ActivateMsgTrue() {
    msgpop.innerHTML = "Você acertou"
    msgExplain.innerHTML =  questions[RNG][RNGQ].explain
}
function ActivateMsgFalse() {
    msgpop.innerHTML = "Você errou"
    msgExplain.innerHTML =  questions[RNG][RNGQ].explain
    ++coutMistakes
}

function nextQuestion() {
    console.log("REMOVEU uma questão")
    questions[RNG].splice(RNGQ,1)
    if(questions[RNG] == 0){
        questions.splice(RNG,1)
        RNG = RandomNumber(--maxRNG, minRNG);
        console.log("REMOVEU ARRAY" + questions[RNG])
    }else{
        TrueIsRNG()
    }
    if(!questions[RNG] == 0){
        RNGQ = RandomNumber(questions[RNG].length, minRNG)
    }
    GameNow();
}



function GameMode() {
    trocaDeTela(menuGame,mode,"desable","Menu_Game")
}


function Conquistas() {
    trocaDeTela(menuGame,achievement,"desable","Menu_Game")
}

function Options() {
    trocaDeTela(menuGame,options,"desable","Menu_Game")
}

// Sair do pagina

function exitWeb() {
    window.close()
}


const conquistas = {
    "Conquista 1": false,
    "Conquista 2": false,
    "Conquista 3": false,
    "Conquista 4": false,
    "Conquista 5": false,
    "Conquista 6": false,
    "Conquista 7": false,
    "Conquista 8": false,
    "Conquista 9": false,
    "Conquista 10": false,
    "Conquista 11": false,
  };




  let nomeDaConquista = "";

  function conqusitasEstaDesbloqueada(){
    if (questionsFollowed == 5){
        nomeDaConquista = "Conquista 1";
        armazenarConquistas(nomeDaConquista);
    }
    if (questionsFollowed == 10){
        nomeDaConquista = "Conquista 2";
        armazenarConquistas(nomeDaConquista);
    }
    if (valueInputMode.value == 0 && questionsFollowed == 5){
        nomeDaConquista = "Conquista 3";
        armazenarConquistas(nomeDaConquista);
    }
    if (valueInputMode.value == 1 && questionsFollowed == 5){
        nomeDaConquista = "Conquista 4";
        armazenarConquistas(nomeDaConquista);
    }
    if (valueInputMode.value == 4 && questionsFollowed == 5){
        nomeDaConquista = "Conquista 5"
        armazenarConquistas(nomeDaConquista);
    }
    if (points >= 500){
        nomeDaConquista = "Conquista 6"
        armazenarConquistas(nomeDaConquista);
    }
    if (valueInputMode.value == 2 && questionsFollowed == 5){
        nomeDaConquista = "Conquista 7"
        armazenarConquistas(nomeDaConquista);
    }
    if (valueInputMode.value == 3 && questionsFollowed == 5){
        nomeDaConquista = "Conquista 8"
        armazenarConquistas(nomeDaConquista);
    }
    if (valueInputMode.value == 5 && questionsFollowed == 5){
        nomeDaConquista = "Conquista 9"
        armazenarConquistas(nomeDaConquista);
    }
    if(questionsFollowed == finale){
        nomeDaConquista = "Conquista 10"
        armazenarConquistas(nomeDaConquista)
        forFinale.textContent = "Incrível, 80 questões seguidas!!"
        LegendaryAll()
    }
    if(questionsFollowed == 20){
        nomeDaConquista = "Conquista 11"
        armazenarConquistas(nomeDaConquista);
    }
  }

  function LegendaryAll() {
    AllSixty.innerHTML = "Você é o(a) grande químico(a)"
    Quimica.forEach(x => {
        x.classList.add("legendary")
    })
    btn_hard.classList.add("golden")
    valueInput.classList.add("golden")
    valueInputMode.classList.add("golden")
    valueMaxMistake.classList.add("golden")
    AllSixty.classList.add("Better")
  }

  function armazenarConquistas(nomeDaConquista) {
    Desbloquear()
    conquistas[nomeDaConquista] = true; 
    localStorage.setItem(nomeDaConquista, true);
    AtivarConquista()
  }

  function Desbloquear() {
    if(localStorage.getItem(nomeDaConquista) == null){
      ActivePopupAchiment()
    }
  }

  function removerConquista(nomeDaConquista) {
    //DEV
    localStorage.removeItem(nomeDaConquista);
    //DEV
    delete conquistas[nomeDaConquista];
  }

function AtivarConquista(){
    ConfiguraJanelaConquista(active,"Conquista 1")
    ConfiguraJanelaConquista(active2,"Conquista 2")
    ConfiguraJanelaConquista(active3,"Conquista 3")
    ConfiguraJanelaConquista(active4,"Conquista 4")
    ConfiguraJanelaConquista(active5,"Conquista 5")
    ConfiguraJanelaConquista(active6,"Conquista 6")
    ConfiguraJanelaConquista(active7,"Conquista 7")
    ConfiguraJanelaConquista(active8,"Conquista 8")
    ConfiguraJanelaConquista(active9,"Conquista 9")
    ConfiguraJanelaConquista(active10,"Conquista 11")
    overGame(localStorage.getItem("Conquista 1"),localStorage.getItem("Conquista 2"),localStorage.getItem("Conquista 3"),localStorage.getItem("Conquista 4"),localStorage.getItem("Conquista 5"),localStorage.getItem("Conquista 6"),localStorage.getItem("Conquista 7"),localStorage.getItem("Conquista 8"),localStorage.getItem("Conquista 9"))
}



function ConfiguraJanelaConquista(variavelValor,nomeConquista){
    if(localStorage.getItem(nomeConquista)){
        variavelValor.innerHTML = "Desbloqueada"
        variavelValor.style.color = "green"
    }else{
        variavelValor.innerHTML = "Bloqueada"
        variavelValor.style.color = "red"
    }
}

function overGame(ac1,ac2,ac3,ac4,ac5,ac6,ac7,ac8,ac9){
        if(ac1 && ac2 && ac3 && ac4 && ac5 && ac6 && ac7 && ac8 && ac9){
            legendary.innerHTML = "UAU! Você desbloqueou todas as conquistas! PARÁBENS!"
            newOption.value = "80";
            newOption.text = "Todas as questões";

            valueInput.add(newOption);
        }
}