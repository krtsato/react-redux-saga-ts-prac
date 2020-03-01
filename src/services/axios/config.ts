import {AxiosRequestConfig} from "axios"

const defaultConfig: AxiosRequestConfig = {
  baseURL: "https://api.github.com",
  timeout: 5000
}

export const githubConfig = (optionConfig?: AxiosRequestConfig): AxiosRequestConfig => ({
  ...defaultConfig,
  ...optionConfig
})
