import {Button} from "shared/ui";
import React, {useState} from "react";
import {CreateProductModal} from "../CreateProductModal";
import {ICategory} from "entities/Product";


type CreateProductButtonProps = {
  categories?: ICategory[]
}

export const CreateProductButton = ({ categories }: CreateProductButtonProps) => {
  const [createActive, setCreateActive] = useState(false)
  
  return (
    <>
      <Button onClick={() => {
        setCreateActive(true)
      }}>
        Add product
      </Button>
      
      <CreateProductModal
        createActive={createActive}
        setCreateActive={setCreateActive}
        categories={categories}
      />
    </>
  )
}
