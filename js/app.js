$(".btn").click(function () {
    let btnPulsado = $(this).html();
    let operador1 = 0, operador2 = 0, operacion;
    let resultado;
    switch (btnPulsado) {
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
