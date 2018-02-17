function get_actualAge(birthday) {
    let now = new Date();

    //data atual
    let ano_now = now.getYear();
    let mes_now = now.getMonth();
    let dia_now = now.getDate();

    let birth_date = new Date(birthday['ano'],
        birthday['mes'] - 1,
        birthday['dia']
    );

    //data aniv
    let ano_aniv = birth_date.getYear();
    let mes_aniv = birth_date.getMonth();
    let dia_aniv = birth_date.getDate();

    let ano_idade = ano_now - ano_aniv;
    let mes_idade
    let dia_idade

    if (mes_now >= mes_aniv) {
        mes_idade = mes_now - mes_aniv;

    } else {
        ano_idade--;
        mes_idade = 12 + mes_now - mes_aniv;
    }

    if (dia_now >= dia_aniv) {
        dia_idade = dia_now - dia_aniv;

    } else {
        mes_idade--;
        dia_idade = 31 + dia_now - dia_aniv;

        if (mes_idade < 0) {
            mes_idade = 11;
            ano_idade--;
        }
    }

    return {
        years: ano_idade,
        months: mes_idade,
        days: dia_idade
    };
}