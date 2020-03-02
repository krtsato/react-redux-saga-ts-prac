import React, {FC} from "react"
import {Box, CircularProgress} from "@material-ui/core"

export const Spinner: FC = () => (
  <Box display="flex" alignItems="center" justifyContent="center" height={300}>
    <CircularProgress color="secondary" size={100} />
  </Box>
)
