import React, {useState} from "react";

import {Modal} from "shared/components";
import {Button, Input} from "shared/ui";

import {IProduct, ICategory} from "entities/Product";

import styles from './CreateProduct.module.scss'
import {useCreateProduct} from "../../hooks";
import {returnDefaultCreateProductValue} from "../../helpers";
import config from "shared/config";

interface CreateProductModalProps {
  createActive: boolean,
  setCreateActive: React.Dispatch<React.SetStateAction<boolean>>,
  categories?: ICategory[]
}

export const CreateProductModal = ({ createActive, setCreateActive, categories = [] }: CreateProductModalProps) => {
  const [product, setProduct] = useState<IProduct>(returnDefaultCreateProductValue())
  const [categoryState, setCategoryState] = useState<string>(categories[0]?.title || '')
  const { mutateAsync } = useCreateProduct()

  const handleOnSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const formData = new FormData()


    formData.append('title', product.title)
    formData.append('costForCompany', product.costForCompany)
    formData.append('cost', product.cost)
    formData.append('quantity', product.quantity)
    formData.append('category', categoryState)

    if (product.image !== null) {
      formData.append('image', product.image)
      await mutateAsync(formData)
    }

    setCreateActive(false)
  }

  const clearData = () => {
    setProduct(returnDefaultCreateProductValue())
  }

  console.log(categoryState)

  return (
    <>
      <Modal setActive={setCreateActive} active={createActive} clearFunc={clearData}>
        <form>
          <Input
            className={styles.input}
            star={false}
            name='title'
            title='title'
            value={product.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct({...product, title: e.target.value} )}
          />

          <Input
            className={styles.input}
            star={false}
            title='cost for company'
            name='cost for company'
            value={product.costForCompany}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct({...product, costForCompany: e.target.value})}
          />

          <Input
            className={styles.input}
            star={false}
            title='cost'
            name='cost'
            value={product.cost}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct({...product, cost: e.target.value})}
          />

          <Input
            className={styles.input}
            star={false}
            title='quantity'
            name='quantity'
            value={product.quantity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct({...product, quantity: e.target.value})}
          />

          {/*<select*/}
          {/*  name='select'*/}
          {/*  defaultValue={category}*/}
          {/*  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}*/}
          {/*>*/}
          {/*  {categories && categories.map(category =>*/}
          {/*    <option className={styles.option} key={category.title}>{category.title}</option>*/}
          {/*  )}*/}
          {/*</select>*/}

          <div className={styles.select}>
            {categories && categories.map(category =>
              <div className={`${styles.option} ${categoryState === category.title ? styles.option_ : ''}`}
                key={category.title}
                onClick={() => setCategoryState(category.title)}>

                <div>{category.title}</div>

                <img alt="cat" className={styles.category_image} src={`${config.baseUrl}${category.imageUrl}`} />
              </div>
            )}
          </div>

          <input
            type="file"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignored
              setProduct({...product, image: event.currentTarget.files[0]})
            }}
            accept='image/*,.jpg'
          />

          <Button
            type='submit'
            onClick={(e) => handleOnSubmit(e)}
            disabled={product.title === '' || (product.image === null)}
          >
            Add product
          </Button>
        </form>
      </Modal>
    </>
  )
}
