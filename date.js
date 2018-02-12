var get_actualAge = function (birth) {
    
    let birthday = new Date(birth)
    let date_now = new Date()

    //data aniv
    let ano = birthday.getFullYear()
    let mes = birthday.getMonth() + 1
    let dia = birthday.getUTCDate()

    //data atual
    let ano_now = date_now.getFullYear()
    let mes_now = date_now.getMonth() + 1
    let dia_now = date_now.getUTCDate()

    let idade = ano_now - ano
    let dias = dia_now
    let meses
    
    if ((mes <= mes_now) && (dia <= dia_now)) {
        meses = mes_now - mes
    } else {
        let incremento = 12 - mes
        meses = incremento + mes_now
        idade--
    }
    
    return {
        idade: idade, 
        meses: meses, 
        dias, dias
    }
}

