import React, {FC, useState, useCallback} from "react"
import {Redirect, useHistory, useParams} from "react-router-dom"
import {CharasIndexComp} from "@comp/example/peopleListApp/charas/index"
import {CharaData} from "@comp/example/peopleListApp/charas/index/charasList"

export interface CharasData {
  [abbrev: string]: {
    school: string
    players: CharaData[]
  }
}

interface CharaAxsDiverProps {
  target: string | undefined
}

// JSON API から取得したと仮定する
export const charasData: CharasData = {
  kitakomachi: {
    school: "北小町高校",
    players: [
      {
        id: 1,
        name: "羽咲 綾乃",
        age: 16,
        height: 151
      },
      {
        id: 2,
        name: "荒垣 なぎさ",
        age: 18,
        height: 174
      },
      {
        id: 3,
        name: "泉 理子",
        age: 18,
        height: 163
      }
    ]
  },
  furejo: {
    school: "フレゼリシア女子短大付属高校",
    players: [
      {
        id: 4,
        name: "志波姫 唯華",
        age: 18,
        height: 165
      },
      {
        id: 5,
        name: "コニー・クリステンセン",
        age: 16
      },
      {
        id: 6,
        name: "多賀城 ヒナ",
        age: 17
      }
    ]
  }
}

export const CharasIndexCont: FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()
  const {abbrev} = useParams()

  // ホームに戻るボタンで使う
  const backToHome = useCallback(() => {
    history.push("/")
  }, [history])

  // ローディングが終了したと仮定する
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  const CharasAxsDivider: FC<CharaAxsDiverProps> = ({target}) => {
    const abbrevs = Object.keys(charasData)
    if (typeof target === "undefined" || !abbrevs.includes(target)) return <Redirect to="/" />

    const roster = {
      school: charasData[target].school,
      players: charasData[target].players
    }

    return <CharasIndexComp isLoading={isLoading} roster={roster} backToHome={backToHome} />
  }

  return <CharasAxsDivider target={abbrev} />
}
