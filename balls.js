// listen for a mouse click on the document body
document.addEventListener('mousedown', handleMouseEvent);

// handle click of mouse on screen
function handleMouseEvent(e) {
    const body = document.querySelector('body');
    const ball = new Ball(e.clientX, e.clientY);
    body.append(ball.render());
}

// Ball creation
class Ball {

    colors = ['red', 'yellow', 'orange'];
    size = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    constructor(x,y,color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    createColor() {
        console.log(Math.random());
        return 'orange';
    }

    // choose random number between twon integers
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // choose random item from list
    randomPickFromList(list) {
        const index = this.randomIntFromInterval(0, list.length - 1);
        return list[index];
    }

    // render ball to DOM
    render() {
        const div = document.createElement('div');
        const size = this.randomPickFromList(this.size);
        div.style.cssText = `
            background: ${this.randomPickFromList(this.colors)};
            width: ${size}px;
            height: ${size}px; 
            position: absolute;
            left: ${this.x - size/2}px;
            top: ${this.y - size/2}px;
        `;
        return div;
    }

}

// go from there...
// animation, floating, movement, variations, hold and throw