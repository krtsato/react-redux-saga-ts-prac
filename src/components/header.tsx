import React, {FC} from "react"
import {Link} from "react-router-dom"
import {AppBar, Toolbar, Button, Typography} from "@material-ui/core"
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded"
import DomainRoundedIcon from "@material-ui/icons/DomainRounded"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"

import {useStyles} from "./header.styles"

export const HeaderComp: FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1" className={classes.appTitle}>
          React-Redux-Saga-TS-Prac
        </Typography>
        <Button variant="text" color="inherit" startIcon={<HomeRoundedIcon />} component={Link} to="/">
          Home
        </Button>
        <Button
          variant="text"
          color="inherit"
          startIcon={<ListAltRoundedIcon />}
          component={Link}
          to="/todos">
          Todo Manage
        </Button>
        <Button
          variant="text"
          color="inherit"
          startIcon={<DomainRoundedIcon />}
          component={Link}
          to="/companies">
          Tech Company
        </Button>
      </Toolbar>
    </AppBar>
  )
}
