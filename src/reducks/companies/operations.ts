import {useMemo, useState} from "react"
import axios from "axios"
import {githubConfig} from "@serv/axios/config"
import {AppActions} from "@redx/app/types"
import {appOperations} from "@redx/app/operations"
import {companiesActions} from "./actions"
import {MembersActions} from "./types"

type GetMembersAsync = Promise<MembersActions["GetMembers"] | AppActions["CatchError"]>

type UseGetMembersOpe = [boolean, GetMembersAsync]

// companyName may equals to undefined because of URL getting by useParams()
const useGetMembersOpe = (companyName: string | undefined = ""): UseGetMembersOpe => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const getMembersResult = useMemo(async (): GetMembersAsync => {
    setIsLoading(true)
    const instance = axios.create(githubConfig())
    const source = axios.CancelToken.source()

    try {
      const res = await instance.get(`/orgs/${companyName}/members`)
      const githubUsers = res.data
      return companiesActions.getMembersAct(companyName, githubUsers)
    } catch (err) {
      if (err.response) {
        // Except status 2xx
        const {status, statusText} = err.response
        setError(`Error! HTTP Status: ${status}\n${statusText}`)
      } else if (err.request) {
        // The request was made but no response
        setError(`Error! No response was received.`)
      } else {
        // No request was made
        setError(`Error! Somethig wrong happened in the request.`)
      }
      return appOperations.catchErrorOpe(error)
    } finally {
      setIsLoading(false)
      source.cancel()
    }
  }, [companyName, error])

  return [isLoading, getMembersResult]
}

// ========== Referenced from outside the companies domain ==========
export const companiesOperations = {useGetMembersOpe}
