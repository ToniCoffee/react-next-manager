import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next"
import ClientInterface from "interfaces/client";
import CommonDeliveryInterface from "interfaces/commonDelivery";
import { getClientByID } from "../../services/clientService";

import style from 'styles/clientInfo.module.css';

const ClientPage: NextPage = () => {
  const [client, setClient] = useState<ClientInterface | undefined>(undefined);
  const { query: { id } } = useRouter();

  useEffect(() => {
    getClientByID(parseInt(id as string))
      .then(setClient)
      .catch(err => console.log(err));
  }, [id]);

  /* return client ? (<section className={style.section}>
      <label htmlFor="client-id">id: </label>
      <p id="client-id">{client?.id}</p>
      <label htmlFor="client-reference">reference: </label>
      <p id="client-reference">{client?.reference}</p>
      <label htmlFor="client-name">name: </label>
      <p id="client-name">{client?.name}</p>
      <label htmlFor="client-direction">direction: </label>
      <p id="client-direction">{client?.direction}</p>
      <label htmlFor="client-town">town: </label>
      <p id="client-town">{client?.town}</p>
    </section>) : null; */

    return client ? (
      <>
        <section className={style.section}>
          <div className={style.sectionDiv}>
            <label htmlFor="client-id">id: </label>
            <p id="client-id">{client?.id}</p>
          </div>
          <div className={style.sectionDiv}>
            <label htmlFor="client-reference">reference: </label>
            <p id="client-reference">{client?.reference}</p>
          </div>
          <div className={style.sectionDiv}>
            <label htmlFor="client-socialName">socialName: </label>
            <p id="client-socialName">{client?.socialName}</p>
          </div>
          <div className={style.sectionDiv}>
            <label htmlFor="client-name">name: </label>
            <p id="client-name">{client?.name}</p>
          </div>
          <div className={style.sectionDiv}>
            <label htmlFor="client-direction">direction: </label>
            <p id="client-direction">{client?.direction}</p>
          </div>
          <div className={style.sectionDiv}>
            <label htmlFor="client-town">town: </label>
            <p id="client-town">{client?.town}</p>
          </div>
          <div className={style.sectionDiv}>
            <label htmlFor="client-wayToPay">wayToPay: </label>
            <p id="client-wayToPay">{client?.wayToPay}</p>
          </div>
          <div className={style.sectionDiv}>
            <label htmlFor="client-opensAt">opensAt: </label>
            <p id="client-opensAt">{client?.opensAt}</p>
          </div>
        </section>
        {/* <section className={style.section}>
          <div className={style.sectionDiv}>
            <label htmlFor="client-description">description: </label>
            <p id="client-description">{client?.description}</p>
          </div>
        </section>
        <section className={style.section}>
          <div>
            <label>Common Delivery: </label>
            <ul> {
              client?.commonDelivery.map((obj: CommonDeliveryInterface, index) => <li key={index}>{obj.product} --- {obj.amount}</li>
              )
            }
            </ul>
          </div>
        </section> */}
        <section className={style.section}>
          <label htmlFor="client-description" className={style.labelCollapsable}>Description</label>
          <input type="checkbox" id="client-description" className={style.clientCheckbox} />
          <p>{client?.description}</p>
        </section>
        <section className={style.section}>
          <label htmlFor="client-common-delivery" className={style.labelCollapsable}>Common Delivery</label>
          <input type="checkbox" id="client-common-delivery" className={style.clientCheckbox} />
          <ul> {
            client?.commonDelivery.map((obj: CommonDeliveryInterface, index) => <li key={index}>{obj.product} --- {obj.amount}</li>)
          }
          </ul>
        </section>
      </>
    ) : null;
}

export default ClientPage;