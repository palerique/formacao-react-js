const API_BASE_ADDRESS = 'http://localhost:8000/api/';
const ApiService = {
  ListaAutores: () => {
    return fetch(`${API_BASE_ADDRESS}autor`).then(res => res.json());
  },
  CriaAutor: autor => {
    return fetch(`${API_BASE_ADDRESS}autor`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: autor,
    }).then(res => res.json());
  },
  ListaNomes: () => {
    return fetch(`${API_BASE_ADDRESS}autor/nome`).then(res => res.json());
  },
  ListaLivros: () => {
    return fetch(`${API_BASE_ADDRESS}autor/livro`).then(res => res.json());
  },
  RemoveAutor: id => {
    return fetch(`${API_BASE_ADDRESS}/autor/${id}`, {
      method: 'DELETE',
      Headers: {'content-type': 'application/json'},
    }).then(res => res.json());
  },
};
export default ApiService;
