const gridArray = [];
const gridSize = 3;

function rnd() {
    let val
    if(Math.random() > 0.7){
        val = true;
    }else{
        val = false;
    }
    return val
}

for (let i = 0; i < gridSize; i++) {
        gridArray[i] = [];        
}

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        gridArray[j].push({
            x: 0 + (100*i),
            y: 0 + (100*j),
            cloud: rnd()
        })
        
    }
    
}
console.log(gridArray);




function drawPattern(n) {
    const img = new Image()
    img.onload = function () {
        let pat = ctx2.createPattern(img, 'repeat');
        ctx2.fillStyle = pat;
        ctx2.fillRect(0, 0, 150, 150);
        
    }
    img.src = 'cloud.png';

}
// drawPattern()



