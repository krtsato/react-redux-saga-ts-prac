import React, {FC} from "react"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core"
import GroupRoundedIcon from "@material-ui/icons/GroupRounded"

type CompanyDisplayProps = {
  companyNames: string[]
  companyNamesUpper: (name: string) => string
}

export const CompanyDisplayComp: FC<CompanyDisplayProps> = ({companyNames = [], companyNamesUpper}) => (
  <>
    <Helmet>
      <title>Companies ｜ React-Redux-TS-Prac</title>
    </Helmet>
    <Typography variant="h2">Tech Companies</Typography>
    <List>
      {companyNames.map(companyName => (
        <ListItem key={companyName} button component={Link} to={`/${companyName}/members`}>
          <ListItemIcon>
            <GroupRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={`${companyNamesUpper(companyName)} のメンバー`} />
        </ListItem>
      ))}
    </List>
  </>
)
