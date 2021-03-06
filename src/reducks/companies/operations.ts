import {useCallback, useState} from "react"
import {useDispatch} from "react-redux"
import axios from "axios"
import {githubConfig} from "@serv/axios/config"
import {appOperations} from "@redx/app/operations"
import {companiesActions} from "./actions"
import {MembersActions} from "./types"

type UseGetMembersOpe = [boolean, () => Promise<void>]

// This operation which is a custom hook execute dispatch in itself
// because of a Promise object, not a plain action object.
// companyName may equals to undefined because of URL getting by useParams()
const useGetMembersOpe = (companyName: string | undefined = ""): UseGetMembersOpe => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const dispatchGetMembersRes = useCallback(async (): Promise<void> => {
    setIsLoading(true)
    const instance = axios.create(githubConfig())
    const axiosSource = axios.CancelToken.source()
    let errorMsg: string

    try {
      if (companyName === "") throw new Error("LackOfURL")
      const res = await instance.get(`/orgs/${companyName}/members`)
      const githubUsers = res.data
      dispatch(companiesActions.getMembersAct(companyName, githubUsers))
    } catch (err) {
      if (err.message === "LackOfURL") {
        // URL failed to have companyName
        errorMsg = "URL has no companyName"
      } else if (err.response) {
        // Except status 2xx
        const {status, statusText} = err.response
        errorMsg = `HTTP Status: ${status}\n${statusText}.`
      } else if (err.request) {
        // The request was made but no response
        errorMsg = `No response was received.`
      } else {
        // No request was made
        errorMsg = `Somethig wrong happened in the request.`
      }
      dispatch(appOperations.catchErrorOpe(errorMsg))
    } finally {
      axiosSource.cancel()
      setIsLoading(false)
    }
  }, [companyName, dispatch])

  return [isLoading, dispatchGetMembersRes]
}

const initMembersOpe = (): MembersActions["InitMembers"] => companiesActions.initMembersAct([])

// ========== Referenced from outside the companies domain ==========
export const companiesOperations = {useGetMembersOpe, initMembersOpe}
