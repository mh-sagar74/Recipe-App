import { Button, Grid, TextField } from "@mui/material";

export default function SearchBox() {
  return (
    <div>
      <Grid container>
        <Grid item>
          <TextField />
        </Grid>
        <Grid item>
          <Button>Search</Button>
        </Grid>
      </Grid>
    </div>
  );
}
