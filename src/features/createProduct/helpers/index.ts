import {IProduct} from "entities/Product";

export const returnDefaultCreateProductValue = (): IProduct => ({
  title: '432',
  costForCompany: '0',
  cost: '432',
  quantity: '432',
  category: '',
  image: null
})
