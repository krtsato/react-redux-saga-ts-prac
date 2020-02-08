import React, {FC} from "react"
import {Helmet} from "react-helmet"
import {Button, Container, Divider, Typography} from "@material-ui/core"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import {Spinner} from "@comm/spinner"
import {CharaData, CharasList} from "@comp/example/peopleListApp/charas/index/charasList"

interface CharasIndexCompProps {
  backToHome: VoidFunction
  isLoading: boolean
  roster: {
    school: string
    players: CharaData[]
  }
}

export const CharasIndexComp: FC<CharasIndexCompProps> = ({backToHome, isLoading, roster}) => (
  <>
    <Helmet>
      <title>キャラクター一覧 | はねバド！</title>
    </Helmet>
    <Container component="header">
      <Typography variant="h1">はねバド！ キャラクター一覧</Typography>
    </Container>
    {isLoading ? <Spinner /> : <CharasList {...roster} />}
    <Divider variant="middle" />
    <Button startIcon={<HomeRoundedIcon />} onClick={backToHome}>
      ホームへ
    </Button>
  </>
)
