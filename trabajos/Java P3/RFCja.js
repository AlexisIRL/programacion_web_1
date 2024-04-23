function generarRFC() {
    var nombre = document.getElementById('nombre').value.trim().toUpperCase();
    var ap = document.getElementById('ap').value.trim().toUpperCase();
    var am = document.getElementById('am').value.trim().toUpperCase();
    var anio = document.getElementById('anio').value.trim();
    var mes = document.getElementById('mes').value.trim();
    var dia = document.getElementById('dia').value.trim();

    if (mes.length === 1) {
        mes = "0" + mes;
    }
    if (dia.length === 1) {
        dia = "0" + dia;
    }

    var primerLetraNombre = obtenerPrimeraLetra(nombre);
    var primerosDosAp = ap.substring(0, 2);
    var primerCaracterAm = am.charAt(0);
    var ultimosDosAnios = anio.substring(2);

    var rfc = primerosDosAp + primerCaracterAm + primerLetraNombre + ultimosDosAnios + mes + dia;

    document.getElementById("resultado").value = rfc;
}
function obtenerPrimeraLetra(texto) {
   
    return texto.charAt(0).toUpperCase();
}