export function getClients() {
  return fetch('http://localhost:3000/api/clients', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if (res.ok) return res.json();
      return new Error('Failed to fetch clients.');
    })
    .catch((err) => {
      console.log('**** ERROR (client service) ****');
      console.log(err);
    });
}

export function getClientByID(id: Number) {
  return fetch(`http://localhost:3000/api/clients/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(res.ok) return res.json();
      return new Error('Failed to fetch client by id.')
    })
    .catch(err => {
      console.log('**** ERROR (client service) ****');
      console.log(err);
    });
}
