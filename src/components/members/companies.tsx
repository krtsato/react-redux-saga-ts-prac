import React, {FC} from "react"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import {Container, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core"
import GroupRoundedIcon from "@material-ui/icons/GroupRounded"

const companies = ["facebook", "airbnb", "netflix"]

export const CompaniesComp: FC = () => (
  <>
    <Helmet>
      <title>Companies ｜react-redux-saga-ts-prac</title>
    </Helmet>
    <Container>
      <Typography variant="h2">テック企業の開発メンバ</Typography>
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
    </Container>
  </>
)
