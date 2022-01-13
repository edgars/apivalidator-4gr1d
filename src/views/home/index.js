/* eslint-disable jsx-a11y/label-has-associated-control */
// material-ui
import { Typography, Input, Button, Divider, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import FileUpload from 'ui-component/extended/FileUpload';
import FancyFileUpload from 'ui-component/extended/FancyFileUpload';

// ==============================|| SAMPLE PAGE ||============================== //

const theme = {
    spacing: 8
};

function Home() {
    return (
        <MainCard title="API Validator">
            <Typography variant="body2">
                This is itended do demonstrate how the 42Crunch API can be integrated into any web app or Service
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography variant="body">Please, upload your API File:</Typography>
            <Box sx={{ m: 2 }} />
            <Divider />
            <Box sx={{ m: 2 }} />
            <Box sx={{ m: 2 }} />
            <FancyFileUpload />
        </MainCard>
    );
}

export default Home;
