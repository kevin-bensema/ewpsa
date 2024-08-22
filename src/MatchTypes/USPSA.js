import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DesktopArticleImage from '../Components/DesktopArticleImage';

const UspsaExplainer = () => {
    return (
        <Container>
            <Typography variant="h4" align="center">USPSA Matches</Typography>
            <Box sx={{ my: 4 }}>
                <DesktopArticleImage imageUrl="images/explainers/USPSA-Logo_ArticleSize.png"
                                     altText="USPSA Logo"/>

                <Typography variant="body1" paragraph>
                    As a USPSA affiliated club, we host monthly Level 1 USPSA matches. Matches are held in the practical shooting bays, on the 3rd 
                    Sunday of every month. Registration is available on <a href="https://practiscore.com/clubs/ewpsa-2">Practiscore</a>.
                </Typography>

                <Typography variant="body1" paragraph>
                    A typical Level-1 match here consists of 3-5 regular stages, a speed shoot, and a classifier stage. The regular stages are typically 28-32 
                    round Comstock Long courses, with a mix of paper and steel targets. Registration opens at 9:00 AM, with the shooters meeting at 9:45 AM. Shooting
                    starts at 10:00 AM. New shooters shoot free!
                </Typography>

                <Typography variant="body1" paragraph>
                    Information about equipment and divisions may be found in the USPSA rules at <a href="https://uspsa.org/rules">uspsa.org/rules</a>.
                </Typography>
            </Box>
        </Container>
    )
}

export default UspsaExplainer;
