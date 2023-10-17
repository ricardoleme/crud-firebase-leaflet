/** 
* Obtém o CEP na API ViaCEP
* @param {string} cep - O CEP que será consultado
* @param {function} callback - callback com o retorno
*/
function getCEP(cep, callback){
    let url=`https://viacep.com.br/ws/${cep}/json`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //verifica se o retorno possui a propriedade cep
        if('cep' in data){
            let result = data
            let logradouro = `${result.logradouro}, ${result.localidade}, ${result.uf}`
            callback(null, logradouro)
        } else {
            callback('O cep informado não existe', null)
        }
    })
    .catch(error => {
        callback(error, null)
    })
}

function getLatLong(endereco, callback){
    let url=`https://nominatim.openstreetmap.org/search?format=json&q=${endereco}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //verifica se o retorno possui a propriedade cep
        if(data.length > 0){
            let result = data[0]
            let lat = parseFloat(result.lat)
            let lon = parseFloat(result.lon)
            callback(null, lat, lon)
        } else {
            callback('Endereço não encontrado', null, null)
        }
    })
    .catch(error => {
        callback(error, null, null)
    })
}