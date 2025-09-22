// import { ContatoRepository } from '../repositories/contato.repository.js';
// não precisa mais dele

import { request } from "express";


export class ContatoService {
  
  // // O Service está "amarrado" à implementação do ContatoRepository. #ETAPA2
  // constructor() {
  //   this.contatoRepository = new ContatoRepository();
  // }

   // Agora o Service RECEBE o repositório. Ele não o cria mais. #ETAPA3
  constructor(contatoRepository) {
    this.contatoRepository = contatoRepository;
  }

  getAllContatos() {
    return this.contatoRepository.findAll();
  }

  getContatoById(id) {
    return this.contatoRepository.findById(id);
  }

  getContatoByEmail(email){
    return this.contatoRepository.findByEmail(email)
  }

  //DESAFIO PRÁTICO 1
  createContato(nome,contatoData) {
    // No futuro, regras de negócio como "verificar email duplicado"
    // viveriam aqui, ANTES de chamar o repositório.
    if (nome < 3) {
      return null
    }
    return this.contatoRepository.create(contatoData);
  }

  updateContato(id, contatoData) {
    return this.contatoRepository.update(id, contatoData);
  }

  deleteContato(id) {
    return this.contatoRepository.remove(id);
  }
}