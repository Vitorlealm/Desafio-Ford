//{ENTRADA/SAIDA}
// NORTE - false /  true
// NORDESTE   true / false
// CENTRO OESTE false / true
// SUDESTE true / false
// SUL false / true
// Todos devem ter pelo menos uma entrada e uma saida.
const regioesAdministrativas = [
    {entrada: false, saida: true},
    {entrada: true, saida: false},
    {entrada: false, saida: true},
    {entrada: true, saida: false},
    {entrada: false, saida: true}, 
];
let entradasFaltantes = 0;
let saidasFaltantes = 0;

for(let regiao of regioesAdministrativas){
    if(!regiao.entrada){
        entradasFaltantes++;
    }
    if(!regiao.saida){
        saidasFaltantes++;
    }
}

if(entradasFaltantes > saidasFaltantes){
    console.log(entradasFaltantes)
}
else{
    console.log(saidasFaltantes);
}