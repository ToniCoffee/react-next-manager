export default interface Product {
  id: number,
  reference: string,
  name: string,
  alias: string,
  [key: string]: string | number
};