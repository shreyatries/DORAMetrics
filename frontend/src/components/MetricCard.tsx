import {Card} from '@mui/material';
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material';
import {Box} from '@mui/material';

export interface CardProps{
    title?: string | null,
    value?: string | null
}

const MetricCard=({title, value}: CardProps)=> {
    return (
    <Box sx={{ minWidth: 275 }}>
        <Card variant='outlined'>
            <CardContent>
                <Typography variant="h5" component="div">{title}</Typography>
                <Typography variant='body2'> {value} </Typography>
            </CardContent>
        </Card>
    </Box>
    )
}

export default MetricCard