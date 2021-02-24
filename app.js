// element select 
const container = document.querySelector('#container');
const button = document.querySelector('#button');
const output = document.querySelector('#output');
// Event listener 
button.addEventListener('click',()=>{
    let hexcode = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = '#';
    for(let i = 0;i < 6;i++){
        let code = Math.round(Math.random()*15);
        color += hexcode[code];
    }
    container.style.backgroundColor = color;
    output.style.color = color;
    output.innerHTML = color;
})