﻿var button,
    buttonContainer;

function getButton(contents) {
    if (typeof contents == "undefined") {
        contents = "text";
    }
                
    button = $("<button type='button'>" + contents + "</button>").appendTo(document.body);

    return button;
}

function getButtonContainer(contents) {
    if (typeof contents == "undefined") {
        contents = "text";
    }

    buttonContainer = $("<div class='buttonContainer'>" +
        "<button type='button'>" + contents + "</button>" +
        "<button type='button'>" + contents + "</button>" +
    "</div>").appendTo(document.body);

    return buttonContainer;
}
