import React from 'react'
import {useGetProfit} from "../../hooks/useGetProfit";
import {DateForm} from "shared/components";
import {LoadingSpinner} from "shared/ui";

export const GetProfitForm = () => {

  const { profit, isLoading, getProfitAsync} = useGetProfit()

  if (isLoading) {
    return <LoadingSpinner/>
  }

  return (
    <div>
      <DateForm
        title='Get profit'
        mutateFunction={getProfitAsync}
      >
        <div>
          {profit && profit.data && <div>
              Result : {profit.data.sum}
          </div>}
        </div>
      </DateForm>

    </div>
  )
}
