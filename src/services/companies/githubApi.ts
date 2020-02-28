import axios from "axios"
import {User} from "@redx/companies/types"

type ApiConfig = {
  baseURL: string
  timeout: number
}

const defaultConfig: ApiConfig = {
  baseURL: "https://api.github.com",
  timeout: 5000
}

export const getMemberCompanies = (optionConfig?: ApiConfig) => {
  const config = {
    ...defaultConfig,
    ...optionConfig
  }
  const instance = axios.create(config)

  const getMembers = async (organizationName: string) => {
    try {
      const res = await instance.get(`/orgs/${organizationName}/members`)
      return res.data
    } catch (err) {
      const {status, statusText} = err.response
      throw new Error(`Error! HTTP Status: ${status} | ${statusText}`)
    }
  }
  return getMembers
}
