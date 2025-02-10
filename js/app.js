let btnPulsado, operacion, operador1 = 0, operador2 = 0, resultado;

$(".btn").click(function () {

    let btnPulsado = $(this).html();


    switch (btnPulsado) {
        case "C":
            operador1 = 0;
            operador2 = 0;
            $("#pantalla").val(0);
            break;
        case "CE":
            let currentValue = $("#pantalla").val();
            if (currentValue.length > 1) {
                $("#pantalla").val(currentValue.slice(0, -1));
            } else {
                $("#pantalla").val("0");
            }
            break;
        case "=":
            $("#pantalla").val(eval(operador1 + operacion + $("#pantalla").val()));
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            operador1 = $("#pantalla").val();
            operacion = btnPulsado;
            $("#pantalla").val(operacion);
            break;
        default:
            if ($("#pantalla").val() === "0" || $("#pantalla").val() === "+" || $("#pantalla").val() === "-" || $("#pantalla").val() === "*" || $("#pantalla").val() === "/") {
                $("#pantalla").val(btnPulsado);
            } else {
                $("#pantalla").val($("#pantalla").val() + btnPulsado);
            }
            break;
    }
});
