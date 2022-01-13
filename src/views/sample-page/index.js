// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="API Validator">
        <Typography variant="body2">
            This is itended do demonstrate how the 42Crunch API can be integrated into any web app or Service
        </Typography>
    </MainCard>
);

export default SamplePage;
