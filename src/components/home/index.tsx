import React, {FC} from "react"
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"
import {Container, List} from "@material-ui/core"
import {charasData} from "@cont/charas/index"
import "./index.css"

const abbrevs = Object.keys(charasData)
export const HomeComp: FC = () => (
  <>
    <Helmet>
      <title>作品紹介 | はねバド!</title>
    </Helmet>
    <header>
      <h1>『はねバド!』作品紹介</h1>
    </header>
    <Container className="summary">
      <p>
        『はねバド!』は、濱田浩輔による日本の漫画。高校女子バドミントンを題材
        にした作品で、『good!アフタヌーン』(講談社)にて2013年32号より現在も連載中。
      </p>
      <p>
        舞台は神奈川県にある北小町高校バドミントン部。
        自身の母校を強くしたいと新しくコーチに就任した立花健太郎だったが、練習
        が厳しすぎると部員が続々とやめていき、キャプテンの荒垣なぎさも彼に反抗的で部は 分裂寸前。
        そんなとき、運動神経抜群でバドミントン経験者の1年生「羽咲綾乃」を見か
        けた立花は、彼女を部にスカウトしようとするが......。
      </p>
    </Container>
    <h2>登場人物</h2>
    <List as="ul">
      {abbrevs.map(abbrev => (
        <List.Item as="li" key={abbrev}>
          <Link to={`/characters/${abbrev}`}>{charasData[abbrev].school}</Link>
        </List.Item>
      ))}
    </List>
  </>
)
