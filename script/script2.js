function mascara_cartao(obj) {
    var valor = obj.value.replace(/\D/g, ''); 
    var formato = "";

    for (var i = 0; i < valor.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            formato += " "; 
        }
        formato += valor[i];
    }

    obj.value = formato;
}

function mascara_cvv(obj) {
    obj.value = obj.value.replace(/\D/g, '').substring(0, 3); 
}

function mascara_vencimento(obj) {
    var valor = obj.value.replace(/\D/g, ''); 

    if (valor.length > 2) {
        obj.value = valor.substring(0, 2) + '/' + valor.substring(2, 4); 
    } else {
        obj.value = valor;
    }
}

function pessoa(obj) {
    if (obj == "pf") {
        document.getElementById('cpf').style.display = "block";
        document.getElementById('cnpj').style.display = "none";
        document.orcamento.cpf.focus();
    } else {
        document.getElementById('cpf').style.display = "none";
        document.getElementById('cnpj').style.display = "block";
        document.orcamento.cnpj.focus();
    }
}

function senha() {
    var s1 = document.orcamento.senha1.value;
    var s2 = document.orcamento.senha2.value;

    if (s1 !== s2) {
        document.getElementById('msg').style.display = "block";
    } else {
        document.getElementById('msg').style.display = "none";
    }
}

function mascara_cpf(obj) {
    if (obj.value.length === 3 || obj.value.length === 7) {
        obj.value += ".";
    } else if (obj.value.length === 11) {
        obj.value += "-";
    }
}

function mascara_cnpj(obj) {
    if (obj.value.length === 2 || obj.value.length === 6) {
        obj.value += ".";
    } else if (obj.value.length === 10) {
        obj.value += "/";
    } else if (obj.value.length === 15) {
        obj.value += "-";
    }
}

function mascara_tel(obj) {
    if (obj.value.length === 0) {
        obj.value += "(";
    } else if (obj.value.length === 3) {
        obj.value += ")";
    } else if (obj.value.length === 9) {
        obj.value += "-";
    }
}

function salto(campo, digito) {
    if (campo === "cpf" && digito.length > 13) {
        document.orcamento.telefone.focus();
    } else if (campo === "cnpj" && digito.length > 17) {
        document.orcamento.telefone.focus();
    } else if (campo === "telefone" && digito.length > 13) {
        document.orcamento.pagamento.focus();
    }
}

function abrir() {
    var pagamento = document.orcamento.pagamento.value;
    if (pagamento === "Cartão") {
        document.getElementById('cartao').style.display = "block";
        document.orcamento.num.focus();
    } else {
        document.getElementById('cartao').style.display = "none";
    }
}

function somente_numero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;

    if ((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) || (tecla == 8) || (tecla == 37) || (tecla == 39) || (tecla == 46)) {
        return true;
    } else {
        return false;
    }
}

function setas(e) {
    var tecla = (window.event) ? event.keyCode : e.which;

    if (tecla === 38 || tecla === 40 || tecla === 9) {
        return true;
    } else {
        return false;
    }
}

function calculos(form) {
    form.login.value = form.login.value.toUpperCase();

    var pagamento = form.pagamento.value;
    var quant1 = form.quant1.value;
    var quant2 = form.quant2.value;
    var quant3 = form.quant3.value;
    var quant4 = form.quant4.value;

    var tot1 = quant1 * 300;
    var tot2 = quant2 * 700;
    var tot3 = quant3 * 650;
    var tot4 = quant4 * 299;

    var perc = (pagamento === "Dinheiro") ? 0.10 : 0;

    var total = tot1 + tot2 + tot3 + tot4;
    var desconto = total * perc;
    var apagar = total - desconto;

    form.tot1.value = "R$ " + tot1.toFixed(2);
    form.tot2.value = "R$ " + tot2.toFixed(2);
    form.tot3.value = "R$ " + tot3.toFixed(2);
    form.tot4.value = "R$ " + tot4.toFixed(2);

    document.getElementById('total').value = total.toFixed(2);
    document.getElementById('desconto').value = desconto.toFixed(2);
    document.getElementById('apagar').value = apagar.toFixed(2);
}
