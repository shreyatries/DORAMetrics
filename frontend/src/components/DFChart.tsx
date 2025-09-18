import MetricChart from "./MetricChart";

const DFChart=()=> {
    return (
        <MetricChart 
        xaxisData={['Jan', 'Feb', 'Mar']}
        yaxisData={[10, 20, 30]}
        yaxislabel="Number of days"
        loading
        error="There is an error"/>
    )
}

export default DFChart;