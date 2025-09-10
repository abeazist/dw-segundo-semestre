import { randomUUID } from 'node:crypto';


// Esta classe herda toda a responsabilidade de acesso a dados do antigo ContatoModel. O código é praticamente o mesmo, apenas realocado em um novo arquivo e classe.


export class ContatoRepository {
  #contatos = [];

  findAll() {
    return this.#contatos;
  }

  findById(id) {
    return this.#contatos.find(c => c.id === id);
  }

  findByEmail(email){
    return this.#contatos.find(c => c.email === email);
  }

  create(contatoData) {
    const novoContato = { id: randomUUID(), ...contatoData };
    this.#contatos.push(novoContato);
    return novoContato;
  }

  update(id, contatoData) {
 
    const index = this.#contatos.findIndex(c => c.id === id);
    if (index === -1) return null;
    
    this.#contatos[index] = { ...this.#contatos[index], ...contatoData };
    return this.#contatos[index];
  }

  remove(id) {
    const index = this.#contatos.findIndex(c => c.id === id);
    if (index === -1) return false;
    
    this.#contatos.splice(index, 1);
    return true;
  }
}