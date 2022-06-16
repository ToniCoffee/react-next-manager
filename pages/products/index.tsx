import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import getProducts from 'services/productService';
import ProductInterface from 'interfaces/product';

import style from 'styles/products.module.css';

const Product = ({id, reference, name, alias}: ProductInterface) => {
  /* return <div>
    <p>{id}</p>
    <p>{reference}</p>
    <p>{name}</p>
    <p>{alias}</p>
  </div> */

  return <table className={style.table}>
    <thead>
      <th>COD</th>
      <th>Product</th>
      <th>Alias</th>
    </thead>
    <tbody>
      <td>{reference}</td>
      <td>{name}</td>
      <td>{alias}</td>
    </tbody>
  </table>
};

const ProductsPage: NextPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => {
        console.log('**** ERROR (product fetch) ****');
        console.log(err);
      });
  }, []);

  return (
    <section>
      {/* {
        products.map((product: ProductInterface) => {
          return <Product 
            key={product.id}
            id={product.id}
            reference={product.reference}
            name={product.name}
            alias={product.alias} />
        })
      } */}
      <table summary="Los grupos de música punk más famosos del Reino Unido" className={style.table}>
        <caption>Productos distribuidos</caption>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Cod</th>
            <th scope="col">Name</th>
            <th scope="col">Alias</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row">Buzzcocks</th>
            <td>1976</td>
            <td>9</td>
            <td>Ever fallen in love (with someone you shouldn't've)</td>
          </tr>
          <tr>
            <th scope="row">The Clash</th>
            <td>1976</td>
            <td>6</td>
            <td>London Calling</td>
          </tr>
          <tr>
            <th scope="row">The Stranglers</th>
            <td>1974</td>
            <td>17</td>
            <td>No More Heroes</td>
          </tr> */}
          {
            products.map((product: ProductInterface) => {
              return <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.reference}</td>
                <td>{product.name}</td>
                <td>{product.alias}</td>
              </tr>
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan="2">Número total de productos</th>
            <td colSpan="2">{products.length}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  )
};

export default ProductsPage;