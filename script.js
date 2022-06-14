const notes = {
    "Sa" : new Audio("assets/audio/T1_and_T3.mp3"),
    "Ni" : new Audio("assets/audio/T2.mp3"),
    "Re" : new Audio("assets/audio/T4.mp3"),
    "ga" : new Audio("assets/audio/T5.mp3"),
    "ma" : new Audio("assets/audio/T6_and_T7.mp3"),
    "Pa" : new Audio("assets/audio/T8.mp3"),
    "dha" : new Audio("assets/audio/T9.mp3"),
    "t10" : new Audio("assets/audio/T10.mp3"),
    "t11" : new Audio("assets/audio/T11.mp3"),
    "Ra" : new Audio("assets/audio/T12.mp3"),
    "t13" : new Audio("assets/audio/T13.mp3"),
    "m1" : new Audio("assets/audio/M1.mp3"),
    "m2" : new Audio("assets/audio/M2.mp3"),
    "m5" : new Audio("assets/audio/M5.mp3"),
    "m6" : new Audio("assets/audio/M6.mp3"),
    "m7" : new Audio("assets/audio/M7.mp3")
}


//▷  
function play(element){
    let note = element.name;
    notes[note].loop = true;
    notes[note].play();
    console.log(`Playing ${element.name}`)
    element.onclick = function() { pause(this) };
    element.classList.remove("btn-primary");
    element.classList.add("btn-danger"); 
    element.value = "||"
    
    
}

function pause(element){
    let note = element.name;
    notes[note].pause();
    element.onclick = function() { play(this) };
    element.classList.remove("btn-danger");
    element.classList.add("btn-primary");
    element.value = "▷"
}