$.getJSON('https://api.myjson.com/bins/1gqf49', function (data) {
    let profile = data['candidatos'][0]
    let birthday = get_actualAge(profile['data_nasc'])
    

    $('#name').text(profile['nome'])
    $('#idade').text(`Idade: ${birthday['years']} anos,
    ${birthday['months']} meses e
    ${birthday['days']} dias`)
    $('#tel').text(`Telefone: ${profile['telefone']}`)
    $('#email').text(`Email: ${profile['email']}`)
})