import React, {FC} from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import {Container} from "@material-ui/core"
import {TodoFormCont} from "@cont/todos/todoForm"
import {TodoDisplayCont} from "@cont/todos/todoDisplay"
import {HomeComp} from "@comp/home"
import {HeaderComp} from "@comp/header"
import {MemberDisplayComp} from "@comp/companies/memberDisplay"
import {CompanyDisplayComp} from "@comp/companies/companyDisplay"

export const App: FC = () => (
  <>
    <HeaderComp />
    <Container>
      <Switch>
        <Route exact path="/">
          <HomeComp />
        </Route>
        <Route path="/todos">
          <TodoFormCont />
          <TodoDisplayCont />
        </Route>
        <Route exact path="/companies">
          <CompanyDisplayComp />
        </Route>
        <Route path="/:companyName/members">
          <MemberDisplayComp />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Container>
  </>
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
