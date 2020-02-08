import React, {FC} from "react"
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"
import {Container, List, ListItem, Typography, ListItemText} from "@material-ui/core"
import {charasData} from "@cont/example/peopleListApp/charas/index"

export const HomeComp: FC = () => {
  // JSON API から取得したと仮定する
  const abbrevs = Object.keys(charasData)

  return (
    <>
      <Helmet>
        <title>作品紹介 | はねバド!</title>
      </Helmet>
      <Container component="header">
        <Typography variant="h1">『はねバド!』作品紹介</Typography>
      </Container>
      <Container>
        <Typography>
          『はねバド!』は、濱田浩輔による日本の漫画。高校女子バドミントンを題材
          にした作品で、『good!アフタヌーン』(講談社)にて2013年32号より現在も連載中。
        </Typography>
        <Typography>
          舞台は神奈川県にある北小町高校バドミントン部。
          自身の母校を強くしたいと新しくコーチに就任した立花健太郎だったが、練習
          が厳しすぎると部員が続々とやめていき、キャプテンの荒垣なぎさも彼に反抗的で部は
          分裂寸前。 そんなとき、運動神経抜群でバドミントン経験者の1年生「羽咲綾乃」を見か
          けた立花は、彼女を部にスカウトしようとするが......。
        </Typography>
      </Container>
      <Typography variant="h2">登場人物</Typography>
      <List>
        {abbrevs.map(abbrev => (
          <ListItem key={abbrev}>
            <ListItemText>
              <Link to={`/characters/${abbrev}`}>{charasData[abbrev].school}</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}
