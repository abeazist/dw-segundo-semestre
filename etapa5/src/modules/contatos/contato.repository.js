import { randomUUID } from 'node:crypto';
import dbPool from '../../infra/database.js';


// Esta classe herda toda a responsabilidade de acesso a dados do antigo ContatoModel. O código é praticamente o mesmo, apenas realocado em um novo arquivo e classe.


export class ContatoRepository {
  constructor() {
    this.database = dbPool
  }

  async findAll() {
    const result = await this.database.query('SELECT * FROM contatos ORDER BY nome ASC');
    return result.rows;
  }

  async findById(id) {
    const result = await this.db.query('SELECT * FROM contatos WHERE id = $1', [id]);
    return result.rows[0] || null;
  }
  

  // findByEmail(email){
  //   return this.#contatos.find(c => c.email === email);
  // }

  async create(contatoData) {
    const { nome, email, telefone } = contatoData;
    const id = randomUUID();
    
    const sql = 'INSERT INTO contatos (id, nome, email, telefone) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [id, nome, email, telefone];
    
    const result = await this.db.query(sql, values);
    return result.rows[0];
  }

  async update(id, contatoData) {
    const { nome, email, telefone } = contatoData;

    const sql = 'UPDATE contatos SET nome = $1, email = $2, telefone = $3 WHERE id = $4 RETURNING *';
    const values = [nome, email, telefone, id];

    const result = await this.db.query(sql, values);
    return result.rows[0] || null;
  }

  async remove(id) {
    // O .query retorna um objeto de resultado. rowCount informa quantas linhas foram afetadas.
    const result = await this.db.query('DELETE FROM contatos WHERE id = $1', [id]);
    return result.rowCount > 0;
  }
}