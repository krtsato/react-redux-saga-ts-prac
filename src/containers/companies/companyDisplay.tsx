import React, {FC, useMemo, useCallback} from "react"
import {CompanyDisplayComp} from "@comp/companies/companyDisplay"
import {firstCharaUpper} from "@comm/utilityFunc/stringFmt"

export const CompanyDisplayCont: FC = () => {
  // define all company temporarily
  const companyNames = useMemo(() => ["facebook", "airbnb", "netflix"], [])

  const companyNamesUpper = useCallback((name: string): string => firstCharaUpper(name), [])

  return <CompanyDisplayComp companyNames={companyNames} companyNamesUpper={companyNamesUpper} />
}
