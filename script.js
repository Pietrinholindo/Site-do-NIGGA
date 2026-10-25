const lista = ["Você é um nigga diferenciado","Que nigga bonito", "Um nigga desse jeito não vive solto", "Rapaz que nigga bonito",
    "Um nigga desse meche com muita gente","Esse nigga tem o molho (drip) inexplicável",
    "A presença desse nigga melhora o ambiente em 100%",
    "Se a beleza desse nigga fosse crime, ele pegaria perpétua",
    "Um nigga com uma postura dessa não precisa de mais nada",
    "O carisma desse nigga deveria ser estudado pela NASA",
    "Nenhum cientista consegue explicar a elegância desse nigga",
    "Esse nigga nasceu pronto para vencer na vida",
    "O estilo desse nigga quebrou todos os limites do aceitável",
    "Quem tem a amizade desse nigga tem tudo na vida",
    "Apenas um nigga lendário passando pela sua tela"
];

const botaolindo = document.getElementById("botao");
const resultado = document.getElementById("resultado");

botaolindo.addEventListener( "click", function (){
    const indicealeatorio = Math.floor(Math.random() * lista.length);
    const nomesorteado = lista[indicealeatorio];

    resultado.textContent = nomesorteado;

})

function botao(){
    onclick(document.getElementById(botao))
}