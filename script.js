var counter = 0;
var answer =["viajar", "Viajar","VIAJAR"];

function Counter() {
    counter++;

    Game();
    
}

function EndCounter() {
    counter = 0;
}

function Game() {

var valor = document.getElementById("txt").value;

  if (valor === answer[0] || answer[1] || answer[2]) {
        
        $("#myModal4").modal()
        EndCounter();
        return;
    }

    switch (counter) {
        case 1:
            $("#myModal1").modal()
            break;
            
        case 2:
            $("#myModal2").modal()
            break;
        case 3:
            $("#myModal3").modal()
            break;

        case 4:
            $("#myModal5").modal()
            break;

    }
}