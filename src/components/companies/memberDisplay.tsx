import React, {FC} from "react"
import {Helmet} from "react-helmet"
import {GithubUser} from "@redx/companies"
import {Avatar, Box, Card, CardHeader, Link, Typography} from "@material-ui/core"
import {useStyles} from "./memberDisplay.styles"

export type MemberDisplayProps = {
  companyNameUpper: string | undefined
  githubUsers: GithubUser[]
}

export const MemberDisplayComp: FC<MemberDisplayProps> = ({
  companyNameUpper = "Company",
  githubUsers = []
}) => {
  const classes = useStyles()
  return (
    <>
      <Helmet>
        <title>Members | React-Redux-TS-Prac</title>
      </Helmet>
      <Typography variant="h2">{companyNameUpper} のメンバー</Typography>
      <Box className={classes.parentBox}>
        {githubUsers.map(githubUser => (
          <Link
            key={githubUser.id}
            href={`https://github.com/${githubUser.login}`}
            target="_blank"
            rel="noopener, noreferrer">
            <Card className={classes.childCard}>
              <CardHeader
                title={githubUser.login}
                subheader={`GitHub ID : ${githubUser.id}`}
                avatar={<Avatar alt="memberIcon" variant="rounded" src={`${githubUser.avatar_url}`} />}
              />
            </Card>
          </Link>
        ))}
      </Box>
    </>
  )
}
