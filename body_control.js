function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                moveLeft();
                break;
            case 39: //right arrow key
                moveRight();
                break;
        }
    }
    function moveLeft() {
        body.style.left = parseInt(objImage.style.left) - 5 + "px";
    }
    function moveRight() {
        body.style.left = parseInt(objImage.style.left) + 5 + "px";
    }
    window.onload = init;