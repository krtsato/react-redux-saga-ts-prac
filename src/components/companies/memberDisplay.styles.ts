import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
  parentBox: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "center",
    width: "90%",
    margin: "auto"
  },
  childCard: {
    minWidth: 250
  }
})
