const imagemVisualizacao = document.getElementById('imagem-visualizacao'); 
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

/* Objeto (pacote de informações diferentes associadas a varios campos diferentes . documento de identificação) */
const verdeCipreste = {
    nome : 'Verde-Cipreste',
    pasta: 'imagens-verde-cipreste',
}

const azulInverno = {
   nome : 'Azul-Inverno',
   pasta: 'imagens-azul-inverno',
};

const meiaNoite = {
    nome : 'Meia-Noite',
    pasta: 'imagens-meia-noite',
}

const estelar = {
    nome : 'Estelar',
    pasta: 'imagens-estelar',
}

const rosaClaro = {
    nome : 'Rosa-Claro',
    pasta: 'imagens-rosa-claro',
}

const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro] ;
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;


function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);// procedimento q me permite pegar o caracter da posição 0
    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg';
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}

function trocarTamanho() {
     const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked');
     tamanhoSelecionado = idOpcaoSelecionada.id.charAt(0);/*Em vez disso, você precisa obter o valor do atributo id. Além disso, os valores dos IDs são "0-tamanho" e "1-tamanho", então você precisa pegar o último caractere do ID para determinar o tamanho selecionado. */
     tituloProduto.innerText = " Pulseira loop esportiva "  + opcoesCores[corSelecionada].nome + " azul-inverno para caixa de " + opcoesTamanho[tamanhoSelecionado];
     if(opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena');
     }
}     

function trocarCor() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = " Pulseira loop esportiva "  + opcoesCores[corSelecionada].nome + " azul-inverno para caixa de " + opcoesTamanho[tamanhoSelecionado];
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg'; 
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg'; 
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg'; 
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
    
}