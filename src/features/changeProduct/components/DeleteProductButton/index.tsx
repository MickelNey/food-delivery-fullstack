import {useDeleteProductMutation} from "../../hooks";
import {BackButton} from "shared/ui";
import React from "react";
import {RedButton} from "../../../../shared/ui/Button/RedButton";

type DeleteProductType = { id: string }

export const DeleteProductButton = ({ id }: DeleteProductType) => {
  const { mutateAsync }= useDeleteProductMutation()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(id)
    await mutateAsync(id)
  }

  return (
    <RedButton onClick={(e) => { handleSubmit(e) } }>Remove</RedButton>
  )
}
