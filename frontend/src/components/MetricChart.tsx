import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, Typography, CircularProgress } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

export interface ChartProps{
    xaxisData: string[],
    yaxisData: number[],
    xaxislabel?: string,
    yaxislabel?: string,
    loading?: boolean,
    error: string
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const MetricChart= ({xaxisData, yaxisData, yaxislabel, loading, error}: ChartProps) => {
const data= {
    labels: xaxisData,
    datasets: [
        {
            label: yaxislabel,
            data: yaxisData,
            fill: true,
            backgroundColor: grey[200],
            borderColor: pink[500],
            tension: 0.4
        }
    ]
};

const options= {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            title: {display: true}
        },
        y: {
            title: {display: true, text: yaxislabel}
        }
    }
};
return(
    <Box display='flex' justifyContent='center' alignItems='center' minHeight={200}>
        {/* {loading && <CircularProgress size= {24}/>}
        {error && (
            <Typography variant="body2" color="error">
                {error}
            </Typography>
        )} */}
        {/* {!loading && !error && <Line data={data} options={options}/>} */}

        <Line data={data} options={options}/>
    </Box>
)
}

export default MetricChart