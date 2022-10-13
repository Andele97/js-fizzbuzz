// ELEMENTI E DATI

const container = document.querySelector('.container');
const limit = 200;

// EVENTI

for(let i = 1; i <= limit; i++){
  const box = document.createElement('div');
  box.className = 'box';

  if(i % 15 == 0){
    box.classList.add('rossetto');
    box.innerHTML = 'FizzBuzz';
    container.append(box);
    console.log('buzz');
  }else if(i % 5 == 0){
    box.classList.add('rosa');
    container.append(box);
    box.innerHTML = 'Buzz';
  }else if(i % 3 == 0){
    box.classList.add('rosa-chiaro');
    container.append(box);
    box.innerHTML = 'Fizz';
    console.log('fizz');
  }else{
    box.innerHTML = i;
    container.append(box);
  }
};