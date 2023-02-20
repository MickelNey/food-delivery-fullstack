import React from "react";
import {useAuth} from "entities/Auth/hooks/useAuth";
import {LoadingSpinner} from "shared/ui";
import {MainRoutes} from "./MainRoutes";
import {AuthRoutes} from "./AuthRoutes";

export const Routing = () => {
  const { isAuth, isLoading } = useAuth()

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <>
      {isAuth ? <AuthRoutes /> : <MainRoutes />}
    </>
  )
}
