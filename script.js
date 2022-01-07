const display = {};
    display.html = document.querySelector('.display');
    display.mode = 'pos';

const math = {};
    math.op = "";
    math.op.left = "";
    math.op.right = "";

function init () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', function () {listen(button)});
    });
}

function listen (button) { 
    switch (button.className) {
        case 'num':
            display.html.textContent += button.textContent;
            display.html.style.color = "white";
            break;
        case 'op':
            math.op.left = display.html.textContent;
            math.op = button.textContent;
            break;
    }
    switch (button.id) { 
        case 'C':
            clearDisplay ();
            break;
        case 'neg': 
            if (display.mode === 'pos') {
                display.mode = 'neg';
                display.html.textContent = "-" + display.html.textContent;
            }
            else{

            }
            break;
        case 'perc':
            math.op==="perc";
            eval()
            break;
        case 'eq':
            eval();
            break;
    }
    
}

function eval () {

    if (math.op.right==="") {
        math.op.right = math.op.left;
    }
    console.log(math.op.left + math.op + math.op.right);
}

function clearDisplay () {
    display.html.textContent = "";
    display.mode='pos';
    clearMath();
}

function clearMath () {
    math.op = "";
    math.op.left = "";
    math.op.right = "";
}

init ();