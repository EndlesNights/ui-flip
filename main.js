Hooks.once("init",  function() {

    game.settings.register("ui-flip", "flip-ui", {
		name: "FLip UI",
		hint: "Flips the UI elements to be on the left hand side of the screen.",
		scope: "client",
		config: true,
		default: false,
		type: Boolean,
        onChange: value => {
            if(value){
                flipUILeft();
            } else {
                flipUIRight();
            }
        }
    });

    if(game.settings.get("ui-flip", "flip-ui")){
        flipUILeft();
    }

});

function flipUILeft(){
        // Get the parent div element that contains the sections
        const interfaceDiv = document.querySelector('#interface');

        // Get the element with id="ui-right"
        const uiRightSection = document.querySelector('#ui-right');

        // Move the ui-right section to the beginning of the parent div
        interfaceDiv.insertBefore(uiRightSection, interfaceDiv.firstChild);
}

function flipUIRight(){
    // Get the parent div element that contains the sections
    const interfaceDiv = document.querySelector('#interface');

    // append the ui right element to its parent, which should send it to the back again
    interfaceDiv.appendChild(document.querySelector('#ui-right'));
}