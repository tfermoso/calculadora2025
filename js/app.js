let btnPulsado,operacion,operador1=0,operador2=0,resultado;

$(".btn").click(function () {
    btnPulsado = $(this).html();
    switch (btnPulsado) {
        case "CE":
            $("#pantalla").val($("#pantalla").val().slice(0, -1));  
            break;
        case "C":
            operador1 = 0;
            operador2 = 0;
            $("#pantalla").val("");
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5": 
        case "6":
        case "7": 
        case "8":
        case "9":
            $("#pantalla").val($("#pantalla").val() + btnPulsado);
            break;
        case "+":
        case "-":   
        case "*":
        case "/":
            operador1 = parseInt($("#pantalla").val());
            operacion = btnPulsado;
            $("#pantalla").val("");
            break;
        case "=":
            operador2 = parseInt($("#pantalla").val());
            switch (operacion) {
                case "+":
                    resultado = operador1 + operador2;
                    break;
                case "-":
                    resultado = operador1 - operador2;
                    break;
                case "*":
                    resultado = operador1 * operador2;
                    break;
                case "/":
                    resultado = operador1 / operador2;
                    break;
                default:
                    break;
            }
            $("#pantalla").val(resultado);
            break
        default:
            break;
    }
});
