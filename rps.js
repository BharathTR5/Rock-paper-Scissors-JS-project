   let score = JSON.parse(localStorage.getItem('score')) || {win:0,
    lose: 0,
    tie: 0};

    updateScoreElement();

      function playGame(playerMove){
        const ComputerMove = ComputerPick();
        let result = '';
      
      if(playerMove === '✌️'){
        if(ComputerMove === '✊'){
          result ='You lose🤦‍♂️'
        }
        else if(ComputerMove === '🖐️'){
          result = 'You won😍'
        }
        else if(ComputerMove === '✌️'){
          result ='Tie🫂'
        }
      }
      else if(playerMove === '🖐️'){    
        if(ComputerMove === '✊'){
          result ='You won😍'
        }
        else if(ComputerMove === '🖐️'){
          result = 'Tie🫂'
        }
        else if(ComputerMove === '✌️'){
          result ='You lose🤦‍♂️'
        }
      }
      else if(playerMove === '✊'){
        if(ComputerMove === '✊'){
          result ='Tie🫂'
        }
        else if(ComputerMove === '🖐️'){
          result = 'You lose🤦‍♂️'
        }
        else if(ComputerMove === '✌️'){
          result ='You won😍'
        }
      }

      if(result === 'You won😍'){
        score.win +=1;
      }
      else if(result === 'You lose🤦‍♂️'){
        score.lose +=1;
      }
      else if(result === 'Tie🫂'){
        score.tie +=1;
      }

     localStorage.setItem('score' , JSON.stringify(score));

     updateScoreElement();

     document.querySelector(".js-result").innerHTML=`${result}`;
     
     document.querySelector(".js-moves").innerHTML=`You selected ${playerMove} & Computer selected ${ComputerMove}`;
      
    }

      

      function ComputerPick(){
        const randomNumber = Math.random();
        let ComputerMove='';

        if(randomNumber>=0 && randomNumber<1/3){
          ComputerMove='✊';
        }else if(randomNumber>=1/3 && randomNumber<2/3){
          ComputerMove='🖐️';
        }
        else if(randomNumber>=2/3 && randomNumber<1){
          ComputerMove='✌️';
        }
        return ComputerMove;
      }


      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML=`Wins : ${score.win}  Losses : ${score.lose}  Tie : ${score.tie}`;
      }