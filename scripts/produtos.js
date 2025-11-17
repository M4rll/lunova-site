// Sistema de produtos melhorado
class ProdutoManager {
    constructor() {
        this.produtos = [
            {
                id: 1,
                nome: "Curso Marketing Digital",
                descricao: "Domine as estratégias de marketing digital",
                preco: 297.00,
                categoria: "curso",
                icone: "🎯",
                destaque: true
            },
            {
                id: 2,
                nome: "E-book Produtividade",
                descricao: "Técnicas para maximizar seu tempo",
                preco: 47.00,
                categoria: "ebook",
                icone: "📈",
                destaque: true
            },
            {
                id: 3,
                nome: "Template Planilhas",
                descricao: "Modelos profissionais prontos",
                preco: 37.00,
                categoria: "template",
                icone: "📊",
                destaque: true
            },
            {
                id: 4,
                nome: "Mentoria Individual",
                descricao: "Acompanhamento personalizado",
                preco: 497.00,
                categoria: "mentoria",
                icone: "👨‍💼",
                destaque: false
            }
        ];
    }

    renderProdutosDestaque() {
        const grid = document.getElementById('grid-produtos');
        const produtosDestaque = this.produtos.filter(p => p.destaque);
        
        grid.innerHTML = produtosDestaque.map(produto => `
            <div class="produto-card" data-id="${produto.id}">
                <div class="produto-icone">${produto.icone}</div>
                <h3 class="produto-titulo">${produto.nome}</h3>
                <p class="produto-descricao">${produto.descricao}</p>
                <div class="produto-preco">R$ ${produto.preco.toFixed(2)}</div>
                <button class="btn-comprar" onclick="adicionarAoCarrinho(${produto.id})">
                    Comprar Agora
                </button>
            </div>
        `).join('');
    }
}

// Instanciar o gerenciador de produtos
const produtoManager = new ProdutoManager();

// Função para scroll suave
function scrollToProducts() {
    document.getElementById('produtos').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Inicializar quando DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    produtoManager.renderProdutosDestaque();
});
