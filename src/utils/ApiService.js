const API_BASE_ADDRESS = 'http://localhost:8000/api/';
const ApiService = {
  ListaAutores: () => {
    return fetch(`${API_BASE_ADDRESS}autor`);
  },
  CriaAutor: autor => {
    return fetch(`${API_BASE_ADDRESS}autor`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: autor,
    });
  },
  ListaNomes: () => {
    return fetch(`${API_BASE_ADDRESS}autor/nome`);
  },
  ListaLivros: () => {
    return fetch(`${API_BASE_ADDRESS}autor/livro`);
  },
  RemoveAutor: id => {
    return fetch(`${API_BASE_ADDRESS}autor/${id}`, {
      method: 'DELETE',
      Headers: {'content-type': 'application/json'},
    });
  },
  TrataErros: res => {
    if (!res.ok) {
      throw Error(res.responseText);
    }
    return res.json();
  },
};
export default ApiService;
