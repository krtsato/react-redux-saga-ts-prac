import React, {FC} from "react"
// import {CharasData} from "@cont/charas/index"

export const CharasIndexComp: FC = () => <h1>キャラ</h1>

/*
import {Header, Icon, Item} from "semantic-ui-react"

export interface Character {
  name: string
  age: number
  height?: number
}

interface CharacterListProps {
  school: string
  characters: Character[]
}

const CharasIndexComp: FC<CharacterListProps> = ({school = "校名不明", characters}) => (
  <>
    <Header as="h2">{school}</Header>
    <Item.Group>
      {characters.map((c, i) => (
        <Item key={i}>
          <Icon name="user circle" size="huge" />
          <Item.Content>
            <Item.Header>{c.name}</Item.Header>
            <Item.Meta>{c.age}歳</Item.Meta>
            <Item.Meta>
              {c.height ? c.height : "???"}
              cm
            </Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
)
*/
