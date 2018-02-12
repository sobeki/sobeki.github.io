$.getJSON('https://api.myjson.com/bins/xfs3h', function (data) {
    let profile = data['candidatos'][0]

    birthday = get_actualAge(profile['data_nasc'])
    

    $('#name').text(profile['nome'])
    $('#idade').text(`Idade: ${birthday['idade']} anos,
    ${birthday['meses']} meses e
    ${birthday['dias']} dias`)
    $('#tel').text(`Telefone: ${profile['telefone']}`)
    $('#email').text(`Email: ${profile['email']}`)
})