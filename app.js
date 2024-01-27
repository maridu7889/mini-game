const board =document.querySelector('#board')

const SQUARES_NUMBER=300


for(let i=0; i<SQUARES_NUMBER; i++){
    const square=document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square)

}

function setColor(element){
    const color=getRandomColor()
    element.style.backgroundColor=color
    element.style.boxShadow=`0 0 2px ${color}, 0 0 7px ${color} `
}

function removeColor(element){
    element.style.backgroundColor='#1d1d1d'
    element.style.boxShadow=`0 0 2px #000`
}

function getRandomColor(){
    
        const randomNumber =() => Math.round(Math.random()*255);
        const colors=[];
        for (let i=0; i<3; i+=1){
            const num=randomNumber();
            colors.push(num);
        }
        return `rgb(${colors[0]},${colors[1]}, ${colors[2]})`;
    
}