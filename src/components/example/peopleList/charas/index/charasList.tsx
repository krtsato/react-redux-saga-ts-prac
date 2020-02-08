import React, {FC} from "react"
import {List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography} from "@material-ui/core"
import PersonIcon from "@material-ui/icons/Person"

export interface CharaData {
  id: number
  name: string
  age: number
  height?: number
}

interface CharasListProps {
  school: string
  players: CharaData[]
}

export const CharasList: FC<CharasListProps> = ({school = "校名不明", players}) => (
  <>
    <Typography variant="h2">{school}</Typography>
    <List>
      {players.map(player => (
        <ListItem key={player.id}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={`${player.name}`}
            secondary={
              <>
                <Typography>{player.age}歳</Typography>
                <Typography>{player.height ? player.height : "???"}cm</Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  </>
)
