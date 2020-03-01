import React, {FC} from "react"
import {Helmet} from "react-helmet"
import {GithubUser} from "@redx/companies"
import {Avatar, Card, CardHeader, Link, Typography} from "@material-ui/core"

// CardMedia の表示位置, サイズを調整する

export type MemberDisplayProps = {
  companyName: string | undefined
  githubUsers: GithubUser[]
}

export const MemberDisplayComp: FC<MemberDisplayProps> = ({
  companyName = "Company Name",
  githubUsers = []
}) => (
  <>
    <Helmet>
      <title>Members | React-Redux-TS-Prac</title>
    </Helmet>
    <Typography variant="h2">{companyName} Members</Typography>
    {githubUsers.map(githubUser => (
      <Link
        key={githubUser.id}
        href={`https://github.com/${githubUser.login}`}
        target="_blank"
        rel="noopener, noreferrer">
        <Card>
          <CardHeader
            title={githubUser.login}
            subheader={`GitHub ID : ${githubUser.id}`}
            avatar={
              <Avatar alt="memberIcon" variant="rounded" src={`${githubUser.avatar_url}`}>
                hoge
              </Avatar>
            }
          />
        </Card>
      </Link>
    ))}
  </>
)
