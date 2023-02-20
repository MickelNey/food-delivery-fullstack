export interface ICategory {
  title: string
  imageUrl: string
}

export interface IProduct {
  title: string
  costForCompany: string
  cost: string
  quantity: string
  category: string
  image: File | null
}
