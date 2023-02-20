import React from "react";

import {BackButton} from "shared/ui";
import {ProductAbstract} from "shared/api/types";

import {useChangeProductMutation} from "../../hooks/";

export const ChangeProductButton = (product: ProductAbstract) => {
  const { mutateAsync } = useChangeProductMutation()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await mutateAsync({
      ...product
    })
  }

  return (
    <BackButton onClick={(e) => { handleSubmit(e) } }>Change</BackButton>
  )
}
