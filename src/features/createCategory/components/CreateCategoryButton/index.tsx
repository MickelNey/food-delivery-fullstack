import {Button, Input} from "shared/ui";
import React, {useState} from "react";
import {Modal} from "shared/components";
import {Category, ICategory, CategoryResponse, CategoryService} from "entities/Category";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import styles from "../../../createProduct/components/CreateProductModal/CreateProduct.module.scss";


type CreateProductButtonProps = {
  categories?: CategoryResponse[]
}



export const CreateCategoryButton = ({ categories }: CreateProductButtonProps) => {
  const queryClient = useQueryClient()
  const { mutateAsync } = useMutation(
    (data: FormData) => CategoryService.create(data),
    {
      onSuccess: (res) => {
        console.log(res.data)
        queryClient.resetQueries(["categories"])
      },
      onError: (error: any) => {
        alert(error.response.data.message)
      },
    }
  )
  const [category, setCategory] = useState<ICategory>({ title: '', image: null})
  const [createActive, setCreateActive] = useState(false)

  const handleOnSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('title', category.title)
    if (category.image) {
      formData.append('image', category.image)
      await mutateAsync(formData)
    }
  }

  return (
    <>
      <Button onClick={() => {
        setCreateActive(true)
      }}>
        Add category
      </Button>

      <Modal
        active={createActive}
        setActive={setCreateActive}
      >
        <div>hello</div>

        <Input
          className={styles.input}
          star={false}
          title='title'
          name='title'
          value={category.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory({...category, title: e.target.value})}
        />

        <input
          type="file"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignored
            setCategory({...category, image: event.currentTarget.files[0]})
          }}
          accept='image/*,.jpg'
        />


        {categories?.map(category => <Category key={category.title} title={category.title} imageUrl={category.imageUrl} />)}

        <Button
          type='submit'
          onClick={(e) => handleOnSubmit(e)}
          disabled={category.title === '' || category.image === null}
        >
          add category
        </Button>
      </Modal>
    </>
  )
}
