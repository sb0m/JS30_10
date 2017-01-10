shift = false;
firstElement = undefined;
lastElement = undefined;

window.onload = function () {
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("click", checkBoxClicked);
        input.addEventListener("change", crossOutOption);
    });
    document.addEventListener("keydown", setShift);
    document.addEventListener("keyup", () => { shift = false });
}

function checkBoxClicked(e) {
    if (shift) {
        firstElement === undefined ? firstElement = this : lastElement = this;
        if (lastElement) {
            checkInputsBetweenFirstAndLast();
        }
    }
}

function checkInputsBetweenFirstAndLast() {
    let isBetween = false;
    document.querySelectorAll("input").forEach(input => {
        if ((input === firstElement) || (input === lastElement)) {
            isBetween = !isBetween;
        }
        if (isBetween) {
            input.checked = true;
        }
    });
    firstElement = undefined;
    lastElement = undefined;
}

function crossOutOption() {
    let span = this.nextElementSibling;
    if (this.checked) {
        span.classList.add("crossedOut");
    }
    else {
        span.classList.remove("crossedOut");
    }
}

function setShift(e) {
    e.keyCode === 16 ? shift = true : shift = false;
}