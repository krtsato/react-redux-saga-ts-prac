import React, {FC} from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import {TodoFormCont} from "@cont/todos/todoForm"
import {TodoDisplayCont} from "@cont/todos/todoDisplay"
import {HomeComp} from "@comp/home"
import {MembersComp} from "@comp/members/members"
import {CompaniesComp} from "@comp/members/companies"

export const App: FC = () => (
  <Switch>
    <Route exact path="/">
      <HomeComp />
    </Route>
    <Route path="/todo">
      <TodoFormCont />
      <TodoDisplayCont />
    </Route>
    <Route exact path="/companies">
      <CompaniesComp />
    </Route>
    <Route path="/:companyName/members">
      <MembersComp />
    </Route>
    <Redirect to="/" />
  </Switch>
)

/* ================ Router example ==================
<Switch>
  <Route path="/characters/:abbrev">
    <CharasIndexCont />
  </Route>
  <Route exact path="/">
    <HomeComp />
  </Route>
  <Redirect to="/" />
</Switch>
==================================== */
