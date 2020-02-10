import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    colorCircle: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: "50%",
      margin: theme.spacing(1),
      width: 40,
      height: 40
    }
  })
)
