import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonGroup: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      height: 24
    },
    displayButton: {
      fontSize: 15
    }
  })
)
