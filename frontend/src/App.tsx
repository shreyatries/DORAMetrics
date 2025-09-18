import { Grid } from "@mui/material"
import {Container} from "@mui/material"
import DFCard from "./components/DFCard"
import DFChart from "./components/DFChart"


function App() {

  return (
    <Container>
      <Grid container spacing={3} alignItems="stretch">
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DFCard/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DFCard/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DFCard/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DFCard/>
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="stretch">
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DFChart/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DFChart/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DFChart/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DFChart/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
