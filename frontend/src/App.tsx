import { Grid } from "@mui/material"
import {Container} from "@mui/material"
import DFCard from "./components/DFCard"
import DFChart from "./components/DFChart"
import CFRCard from "./components/CFRCard"
import CFRChart from "./components/CFRChart"
import LeadTimeCard from "./components/LeadTimeCard"
import LeadTimeChart from "./components/LeadTimeChart"
import MttrCard from "./components/MttrCard"
import MttrChart from "./components/MttrChart"

function App() {

  return (
    <Container>
      <Grid container spacing={3} alignItems="stretch">
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DFCard/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <CFRCard/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <LeadTimeCard/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MttrCard/>
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="stretch">
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DFChart/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <CFRChart/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <LeadTimeChart/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MttrChart/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
