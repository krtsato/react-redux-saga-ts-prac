import React, {FC, useCallback} from "react"
import {useDispatch, useSelector} from "react-redux"
import {appOperations, appSelectors} from "@redx/app"
import {FlashDisplayComp} from "@comp/app/flashDisplay"

export const FlashDisplayCont: FC = () => {
  const errorMsg = useSelector(appSelectors.catchErrorSel)
  const dispatch = useDispatch()

  const closeErrorHdl = useCallback((): void => {
    dispatch(appOperations.catchErrorOpe(""))
  }, [dispatch])

  return errorMsg ? <FlashDisplayComp errorMsg={errorMsg} closeErrorHdl={closeErrorHdl} /> : null
}
