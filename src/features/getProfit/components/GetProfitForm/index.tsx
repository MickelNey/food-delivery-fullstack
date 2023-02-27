import React from 'react'
import {useGetProfit} from "../../hooks/useGetProfit";
import {DateForm} from "shared/components";

export const GetProfitForm = () => {

  const { profit, isLoading, getProfitAsync  } = useGetProfit()
  if (isLoading) {
    return <div>loading...</div>
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
