// ELEMENTI E DATI

const container = document.querySelector('.container');
const limit = 100;

// EVENTI

for(let i = 1; i <= limit; i++){
  const box = document.createElement('div');
  box.className = 'box';

  if(i % 3){
    box.classList.add('rosa-chiaro')
  }else if(i % 5){
    box.classList.add('rosa')
  }else(i % 10){
    box.classList.add('rossetto')
  }
};

box.innerHTML = i;
container.append(box);