import React, {useState} from "react";
import {Button, LoadingSpinner} from "shared/ui";
import {useMutation} from "@tanstack/react-query";
import {IOrderWithDate, OrderService} from "entities/Order";

export const OwnerSettings = () => {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("")

  const { data, isLoading, mutateAsync } = useMutation(
    (data: IOrderWithDate) => OrderService.getTopProducts(data)
  )


  const onStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("startDate: ", e.target.value);
    setStartDate(e.target.value);
  };

  const onEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("endDate: ", e.target.value);
    setEndDate(e.target.value);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    console.log(e.target)
    e.preventDefault()
    await mutateAsync({
      startDate: startDate,
      endDate: endDate
    })
  }

  if (isLoading) {
    return <LoadingSpinner />
  }
  else console.log(data?.data)

  return (
    <div>
      <form>
        <input type='date' name='startDate' value={startDate} onChange={e => onStartDateChange(e)}/>

        <input type='date' name='endDate' value={endDate} onChange={e => onEndDateChange(e)}/>

        {data && data.data && <div>{data.data.map(product =>
          <div key={product.id}>{product.id}  {product.title} {product.result}</div>)}
        </div>}

        <Button type='submit' onClick={(e) => handleSubmit(e)}></Button>
      </form>
    </div>)
}
