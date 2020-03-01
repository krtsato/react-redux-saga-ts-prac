import React, {FC, useEffect} from "react"
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {companiesOperations, companiesSelectors} from "@redx/companies"
import {MemberDisplayComp} from "@comp/companies/memberDisplay"
import {Spinner} from "@comm/spinner"

export const MemberDisplayCont: FC = () => {
  const {companyName} = useParams()
  const [isLoading, getMembersResult] = companiesOperations.useGetMembersOpe(companyName)
  const githubUsers = useSelector(companiesSelectors.getMembersSel)

  useEffect(() => {
    getMembersResult()
  }, [getMembersResult])

  return isLoading ? <Spinner /> : <MemberDisplayComp companyName={companyName} githubUsers={githubUsers} />
}
