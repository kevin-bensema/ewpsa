import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Box
} from '@mui/material';
import DesktopArticleImage from '../Components/DesktopArticleImage';


const SteelChallengeExplainer = () => {
    return (
        <Container>
            <Typography variant="h4" align="center">USPSA Matches</Typography>
            <Box sx={{ my: 4 }}>
                <DesktopArticleImage imageUrl="images/explainers/SCSA-Logo_ArticleSize.png"
                                     altText="Steel Challenge Shooting Association Logo"/>

                <Typography variant="body1" paragraph>
                    EWPSA hosts Steel Challenge matches on the second Sunday of every other month (except in winter). We shoot all eight USPSA Steel Challenge stages. Exact match dates and registration is available on <a href="https://practiscore.com/clubs/ewpsa-2">Practiscore</a>.
                </Typography>

                <Typography variant="body1" paragraph>
                    Information about equipment and divisions may be found in the Steel Challenge rules at <a href="https://scsa.org/rules">scsa.org/rules</a>.
                </Typography>
            </Box>
        </Container>
    )
}

export default SteelChallengeExplainer;