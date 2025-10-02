import { Card, CardContent, Typography, Tooltip, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export interface CardProps {
  title?: string | null;
  value?: string | null;
  infoText?: string | null;
}

const MetricCard = ({ title, value, infoText }: CardProps) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 3,
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            borderColor: 'primary.main',
          },
        }}
      >
        <CardContent sx={{ textAlign: 'center', p: 3 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              borderBottom: '2px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, color: 'text.secondary' }}
            >
              {title}
            </Typography>
            <Tooltip title={infoText}>
                <InfoOutlinedIcon color="info" fontSize="small" />
            </Tooltip>
            
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              letterSpacing: '0.5px',
              mt: 2,
            }}
          >
            {value}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MetricCard;
