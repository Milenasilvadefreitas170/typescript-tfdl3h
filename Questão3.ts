/*Resposta da Questão 3 da lista de exercícios*/

export class Produto {
  nome: string;
  categoria: string;
  marca: string;
  descricao: string;
  preco: number;
  quantidade: number;

constructor(nome: string, categoria: string, marca: string, descricao: string, preco: number, quantidade: number) {
     this.nome = nome;
     this.categoria = categoria;
     this.marca = marca;
     this.descricao = descricao;
     this.preco = preco;
     this.quantidade = quantidade;           

  }
}

