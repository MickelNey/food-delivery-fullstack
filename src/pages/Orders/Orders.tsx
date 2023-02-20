import React from 'react';
import {useAuthContext} from "entities/Auth";
import {useOrdersById} from "../../entities/Order/hooks/useOrdersById";
import {Orders} from "../../entities/Order";
import {Page} from "../Page";
import {LoadingSpinner} from "../../shared/ui";

export const OrdersPage: React.FC = () => {
  const { user } = useAuthContext()

  const { data, isLoading, isError } = useOrdersById(user?.id.toString())

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <div>error</div>
  }

  return (
    <Page>
      <div>
        {data && <Orders orders={data} />}
      </div>
    </Page>
  )
}
