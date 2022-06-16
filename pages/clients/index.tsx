import { 
  // FormEvent, 
  // ChangeEvent, 
  ChangeEventHandler, 
  FormEventHandler,
  SetStateAction,
  // DetailedHTMLProps,
  // FormHTMLAttributes
} from 'react';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Client from '../../components/client';
import ClientInterface from '../../interfaces/client';
// import jsonData from '../data.json';

import { getClients } from '../../services/clientService';
import style from '../../styles/clients1.module.css';

const ClientsPage: NextPage = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [clientSelect, setClientSelect] = useState<HTMLSelectElement | null>(null); //HTMLElement | null

  useEffect(() => {
    setClientSelect(document.getElementById('client-select') as HTMLSelectElement);
    // console.log(clientSelect);
    getClients()
      .then(setData)
      .catch((err) => {
        console.log('**** ERROR (client fetch) ****');
        console.log(err);
      });
  }, [clientSelect]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('submit');
    console.log(e.currentTarget);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const filteredData = data.filter((client: ClientInterface) => {
      if(clientSelect) {
      const clientLowerCase = client[clientSelect.value].toString().toLowerCase();
      const targetLowerCase = e.target.value.toLowerCase();
      return clientLowerCase.includes(targetLowerCase) ? client : null;
      }
    });
    setSearchData(prevState => filteredData);
  };

  return (
    <>
      <section className={style.section}>
        <form onSubmit={handleSubmit}>
          {/* <input type="text" name="client-search" id="client-search" onChange={handleChange} /> */}
          <input type="search" name="client-search" id="client-search" onChange={handleChange}/>
          {/* <input type="submit" value="Search" /> */}
          <select name="client-select" id="client-select">
            <option value="name">name</option>
            <option value="socialName">socialName</option>
            <option value="town">town</option>
            <option value="direction">direction</option>
            <option value="wayToPay">wayToPay</option>
            <option value="opensAt">opensAt</option>
            <option value="id">id</option>
          </select>
        </form>
        {!searchData.length ? data.map((client: ClientInterface) => (
          <Client
            key={client.id}
            id={client.id}
            reference={client.reference}
            socialName={client.socialName}
            name={client.name}
            direction={client.direction}
            town={client.town}
            description={client.description}
            commonDelivery={client.commonDelivery}
            wayToPay={client.wayToPay}
            opensAt={client.opensAt}/>
        )) : searchData.map((client: ClientInterface) => (
          <Client
            key={client.id}
            id={client.id}
            reference={client.reference}
            socialName={client.socialName}
            name={client.name}
            direction={client.direction}
            town={client.town}
            description={client.description}
            commonDelivery={client.commonDelivery}
            wayToPay={client.wayToPay}
            opensAt={client.opensAt}/>
        ))}
      </section>
    </>
  );
}

export default ClientsPage;

{
  /* <div key={client.id}>
  <p>{client.id}</p>
  <p>{client.ref}</p>
  <p>{client.name}</p>
  <p>{client.direction}</p>
  <p>{client.town}</p>
</div> */

/* const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('submit');
    console.log(e.currentTarget);
  }; */

  /* const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target.value);
  }; */

  /* const handleSubmit: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('submit');
    console.log(e.currentTarget.value);
  }; */
}
