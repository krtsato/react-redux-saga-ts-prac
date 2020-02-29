import React, {FC} from "react"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core"
import GroupRoundedIcon from "@material-ui/icons/GroupRounded"

const companies = ["facebook", "airbnb", "netflix"]

export const CompanyDisplayComp: FC = () => (
  <>
    <Helmet>
      <title>Companies ｜ React-Redux-TS-Prac</title>
    </Helmet>
    <Typography variant="h2">Tech Companies</Typography>
    <List>
      {companies.map(companyName => (
        <ListItem key={companyName} button component={Link} to={`/${companyName}/members`}>
          <ListItemIcon>
            <GroupRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={`${companyName} のメンバー`} />
        </ListItem>
      ))}
    </List>
  </>
)
