import React from 'react'
import {useMutation} from "@tanstack/react-query";
import {IOrderWithDate, OrderService} from "entities/Order";
import {DateForm} from "shared/components";

export const GetTopProductsForm = () => {
  const { data, mutateAsync } = useMutation(
    (data: IOrderWithDate) => OrderService.getTopProducts(data)
  )

  return (
    <div>
      <DateForm mutateFunction={mutateAsync} >
        <div>
          {data && data.data && <div>{data.data.map(product =>
            <div key={product.id}>{product.id}  {product.title} {product.result}</div>)}
          </div>}
        </div>
      </DateForm>
    </div>
  )
}
