import React, {FC, useEffect, useMemo} from "react"
import {useSelector, useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import {companiesOperations, companiesSelectors} from "@redx/companies"
import {MemberDisplayComp} from "@comp/companies/memberDisplay"
import {Spinner} from "@comm/spinner"
import {firstCharaUpper} from "@comm/utilityFunc/stringFmt"

export const MemberDisplayCont: FC = () => {
  const {companyName} = useParams()
  const [isLoading, dispatchGetMembersRes] = companiesOperations.useGetMembersOpe(companyName)
  const githubUsers = useSelector(companiesSelectors.getMembersSel)
  const dispatch = useDispatch()

  const companyNameUpper = useMemo(() => (companyName ? firstCharaUpper(companyName) : ""), [companyName])

  useEffect((): VoidFunction => {
    dispatchGetMembersRes()
    return (): void => {
      // Store has no githubUsers' state when you leave membersDisplayComp
      // because the component should not display the previous company's members even for a moment.
      dispatch(companiesOperations.initMembersOpe())
    }
  }, [dispatch, dispatchGetMembersRes])

  return isLoading ? (
    <Spinner />
  ) : (
    <MemberDisplayComp companyNameUpper={companyNameUpper} githubUsers={githubUsers} />
  )
}
