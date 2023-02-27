import React from 'react'
import {useMutation} from "@tanstack/react-query";
import {IOrderWithDate, OrderService} from "entities/Order";
import {DateForm} from "shared/components";
import {LoadingSpinner} from "../../../../shared/ui";

export const GetTopProductsForm = () => {
  const { data, mutateAsync, isLoading } = useMutation(
    (data: IOrderWithDate) => OrderService.getTopProducts(data)
  )

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <DateForm
        mutateFunction={mutateAsync}
        title='Get top products'
      >
        <div>
          {data && data.data && <div>{data.data.map((product, index) =>
            <div key={product.id}>top {index + 1} id: {product.id}  {product.title} {product.result}$</div>)}
          </div>}
        </div>
      </DateForm>
    </div>
  )
}
