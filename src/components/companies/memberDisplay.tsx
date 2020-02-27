import React, {FC} from "react"
import {Helmet} from "react-helmet"
// import {User} from ""
import {Avatar, Card, CardHeader, Link, Typography} from "@material-ui/core"

/*
  ・User のデータ, 型を入れる
  ・user.login の名付けを再検討
  ・isLoading によるスピナー表示を Container 側で行う
  ・CardMedia の表示位置, サイズを調整する
*/

export type MemberDisplayProps = {
  companyName: string
  users: User[]
}

export const MemberDisplayComp: FC<MemberDisplayProps> = ({companyName = "Company Name", users = []}) => (
  <>
    <Helmet>
      <title>Members | react-redux-saga-ts-prac</title>
    </Helmet>
    <Typography variant="h2">{companyName} Members</Typography>
    {users.map(user => (
      <Link
        key={user.id}
        href={`https://github.com/${user.login}`}
        target="_blank"
        rel="noopener, noreferrer">
        <Card>
          <CardHeader
            title={user.login}
            subheader={`GitHub ID : ${user.id}`}
            avatar={
              <Avatar component="img" alt="memberIcon" variant="rounded" src={`${user.avatar_url}`}>
                hoge
              </Avatar>
            }
          />
        </Card>
      </Link>
    ))}
  </>
)
