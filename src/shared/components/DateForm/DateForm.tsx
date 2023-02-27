import React, {useState} from "react";
import styles from "./DateForm.module.scss";
import {Button} from "../../ui";

interface mutateArgs {
  startDate: string
  endDate: string
}

interface DateFormProps {
  title?: string
  mutateFunction: (args: mutateArgs) => any
  children?: React.ReactNode
}

export const DateForm = ({ children, title = 'Date form', mutateFunction}: DateFormProps) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("")

  const onStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const onEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await mutateFunction({
      startDate: startDate,
      endDate: endDate
    })
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>

        <form className={styles.form}>
          <div className={styles.dateInput}>
            <span>start:</span>
            <input className={styles.input} type='date' name='startDate' value={startDate} onChange={e => onStartDateChange(e)}/>
          </div>

          <div className={styles.dateInput}>
            <div>
              <span>end:</span>
            </div>
            <div>
              <input className={styles.input} type='date' name='endDate' value={endDate} onChange={e => onEndDateChange(e)}/>
            </div>
          </div>

          <Button
            type='submit'
            onClick={(e) => handleSubmit(e)}
            disabled={startDate === '' || endDate === ''}

          >calculate</Button>
        </form>

        {children}
      </div>
    </div>
  )
}
