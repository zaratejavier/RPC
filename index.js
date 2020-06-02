let state = {
  choices: ['rock', 'paper', 'scissors'],
  user: [],
  computer: [],
  win: 0,
  loss: 0,
  tie: 0,
};

function percentage(){
return `wins: ${state.win}, losses: ${state.loss}, ties: ${state.tie}`;
}

function cpu(){
  const randomGenerator = ['rock', 'paper', 'scissors']
  const cpurandom = randomGenerator[Math.floor(Math.random() * randomGenerator.length)];
  state.computer.push(cpurandom)
  }    

function playerSelect(element){
let selection = element.dataset;
state.user.push(state.choices[selection.index]);
cpu();
render();
}

function newGame(){
  state.user = [];
  state.computer =[];
  render();
}

function result(){
  switch (state.user[0]){
      case 'rock':
          if (state.computer[0] == 'rock'){
              state.tie++;
              document.getElementById('app').innerHTML = `<h1 class='tie'>TIE</h1>
              <h2 onclick={newGame()}>click here to play again</h2>`
          } else if (state.computer[0] == 'paper'){
              state.loss++;
              document.getElementById('app').innerHTML = `<h1 class='lose'>LOSE</>
              <h2 onclick={newGame()}>click here to play again</h2>`
          } else{ state.win++; 
              console.log(state.win);
              document.getElementById('app').innerHTML = `<h1 class='win'>WIN</h1>
          <h2 onclick={newGame()}>click here to play again</h2>`;
          }
          break;
      
      case 'paper':
          if (state.computer[0] == 'paper'){
              state.tie++;
              document.getElementById('app').innerHTML = `<h1 class='tie'>TIE</h1>
              <h2 onclick={newGame()}>click here to play again</h2>`
          } else if (state.computer[0] == 'scissors'){
              state.loss++;
              document.getElementById('app').innerHTML = `<h1 class='lose'>LOSE</h1>
              <h2 onclick={newGame()}>click here to play again</h2>`
          } else{ state.win++;
              console.log(state.win);
              document.getElementById('app').innerHTML = `<h1 class='win'>WIN</h1>
          <h2 onclick={newGame()}>click here to play again</h2>`;
          }
          break;

      case 'scissors':
          if (state.computer[0] == 'scissors'){
              state.tie++;
              document.getElementById('app').innerHTML = `<h1 class="tie">TIE</h1>
              <h2 onclick={newGame()}>click here to play again</h2>`
          } else if (state.computer[0] == 'rock'){
              state.loss++;
              document.getElementById('app').innerHTML = `<h1 class='lose'>LOSE</h1>
              <h2 onclick={newGame()}>click here to play again</h2>`
          } else{ state.win++ ; 
              console.log(state.win);
              document.getElementById('app').innerHTML = `<h1 class='win'>WIN</h1>
          <h2 onclick={newGame()}>click here to play again</h2>`;
          }
          break;
  }
 
}

function render(){
  if (state.user.length == 0 ){
state.choices.forEach((choice, index )=> {
  document.getElementById('app').insertAdjacentHTML('beforeend',`
  <div class='option' data-index=${index} onclick={playerSelect(this)}>${choice}</div>`)
  })
  document.getElementById('app').insertAdjacentHTML('beforeend',`<h1>${percentage()}</h1>`)
} else{
      document.getElementById('app').innerHTML = `
      <div class='option'>${state.user}</div> 
      <h1 style="text-align:center">VS</h1>
      <div class='option'>${state.computer}</div>
      <h1 onclick={result()}> Click here to see the result</h1>
      `;
  }
};

render();

