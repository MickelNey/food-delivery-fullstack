import React from "react";
import {Button} from "shared/ui";
import {AuthResponse} from "entities/Auth/api/types";
import {useUpdateUserInfo} from "../hooks/useUpdateUserInfo";

interface UpdateUserInfoProps {
  user: AuthResponse
  className?: string
}

export const UpdateUserInfo = ( {user, className = ''}: UpdateUserInfoProps) => {
  const { updateUserAsync } = useUpdateUserInfo()

  const handleOnClick = async () => {
    const userData = await updateUserAsync(user)
    if (userData !== null) localStorage.setItem('token', userData.token)
  }

  return (
    <Button className={className} onClick={() => handleOnClick()}>
      Save changes
    </Button>
  )
}
