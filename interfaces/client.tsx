import CommonDeliveryInterface from "./commonDelivery";

export default interface Client {
  id: number,
  reference: number,
  socialName: string,
  name: string,
  direction: string,
  town: string,
  description: string,
  commonDelivery: Array<CommonDeliveryInterface>,
  wayToPay: string,
  opensAt: string,
  [key: string]: string | number | Array<CommonDeliveryInterface>
};