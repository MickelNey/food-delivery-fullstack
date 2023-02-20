import React, {useMemo, useState} from "react";

export const useValidation = (value: string, regExp: RegExp): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, boolean] => {
  const [text, setText] = useState(value)
  const valid = useMemo(() => {
    return regExp.test(text)
  }, [text, regExp])
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return [text, onChange, valid]
}