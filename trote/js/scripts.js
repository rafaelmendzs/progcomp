function calcular(){
    let mascote = Number(document.getElementById("mascote").value) || 0
    let homenagem = Number(document.getElementById("homenagem").value) || 0
    let leite = Number(document.getElementById("leite").value) || 0
    let kit = Number(document.getElementById("kit").value) || 0
    let suplemento = Number(document.getElementById("suplemento").value) || 0
    let sangue = Number(document.getElementById("sangue").value) || 0
    let equipe = document.getElementById("equipe").value

    let arroz5kg = Number(document.getElementById("arroz5kg").value) || 0
    let arroz1kg = Number(document.getElementById("arroz1kg").value) || 0
    let feijao2kg = Number(document.getElementById("feijao2kg").value) || 0
    let feijao1kg = Number(document.getElementById("feijao1kg").value) || 0
    let macarrao = Number(document.getElementById("macarrao").value) || 0
    let oleo = Number(document.getElementById("oleo").value) || 0
    let kit_extra = Number(document.getElementById("kit_extra").value) || 0
    let suplemento_extra = Number(document.getElementById("suplemento_extra").value) || 0
    let acao_social = document.getElementById("acao_social").checked
    let registro1 = document.getElementById("registro1").checked
    let registro2 = document.getElementById("registro2").checked
    let caracterizacao = document.getElementById("caracterizacao").checked
    let extras = Number(document.getElementById("extras").value) || 0

    let soma = mascote + homenagem + (2 * leite)

    let metas = {
        "Laranja": {kit: 97, suplemento: 49, sangue: 49},
        "Preta": {kit: 103, suplemento: 52, sangue: 52},
        "Roxa": {kit: 102, suplemento: 51, sangue: 51},
        "Verde": {kit: 88, suplemento: 44, sangue: 44},
        "Vermelha": {kit: 93, suplemento: 47, sangue: 47}
    }

    let meta = metas[equipe]

    if (kit >= meta.kit && suplemento >= meta.suplemento) {
        soma += 5000 + ((kit - meta.kit) * 30) + ((suplemento - meta.suplemento) * 15)
    } else if (kit >= Math.round(meta.kit * 0.8) && suplemento >= Math.round(meta.suplemento * 0.8)) {
        soma += 4000 + ((kit - Math.round(meta.kit * 0.8)) * 30) + ((suplemento - Math.round(meta.suplemento * 0.8)) * 15)
    } else if (kit >= Math.round(meta.kit * 0.5) && suplemento >= Math.round(meta.suplemento * 0.5)) {
        soma += 2500 + ((kit - Math.round(meta.kit * 0.5)) * 30) + ((suplemento - Math.round(meta.suplemento * 0.5)) * 15)
    } else if (kit >= Math.round(meta.kit * 0.2) && suplemento >= Math.round(meta.suplemento * 0.2)) {
        soma += 1000 + ((kit - Math.round(meta.kit * 0.2)) * 30) + ((suplemento - Math.round(meta.suplemento * 0.2)) * 15)
    }

    if (sangue >= meta.sangue) {
        soma += 2500 + ((sangue - meta.sangue) * 20)
    } else {
        soma += sangue * 20
    }

    soma += kit_extra * 30
    soma += suplemento_extra * 15
    soma += arroz5kg * 5
    soma += arroz1kg * 1
    soma += feijao2kg * 2
    soma += feijao1kg * 1
    soma += macarrao * 0.5
    soma += oleo * 1

    if (acao_social) soma += 1500
    if (registro1) soma += 1000
    if (registro2) soma += 500
    if (caracterizacao) soma += 1000

    soma += extras

    document.getElementById("soma").innerHTML = `A soma é ${soma} pontos`
}
