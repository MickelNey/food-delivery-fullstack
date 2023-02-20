export type CategoryType = {
  title: string
  imageUrl: string
}

export type ProductAbstract = {
  id: string
  title: string
  imageUrl: string
  cost: number
  costForCompany: number
  quantity: number
  categories: CategoryType[]
  createdAt: string
  updatedAt: string
}
