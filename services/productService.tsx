export default function getProducts() {
  return fetch('http://localhost:3000/api/products')
    .then(res => {
      if(res.ok) return res.json();
      return new Error('Failed to fetch products.')
    })
    .catch(err => {
      console.log('**** ERROR (products service) ****');
      console.log(err);
    });
}