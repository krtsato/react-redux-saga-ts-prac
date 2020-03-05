import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      marginBottom: theme.spacing(3)
    },
    appTitle: {
      flexGrow: 1
    }
  })
)
