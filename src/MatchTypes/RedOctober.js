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


const RedOctoberExplainer = () => {
    return (
        <Container>
            <Typography variant="h4" align="center">Red October AK Match</Typography>
            <Box sx={{ my: 4 }}>
                <DesktopArticleImage imageUrl="images/explainers/RedAKInCircle_ArticleSize.png"
                                     altText="Red October Logo"/>

                <Typography variant="body1" paragraph>
                    Every October, EWPSA hosts the Red October AK match - a 2-Gun match focused on the Kalasknikov platform and the Cold War. Expect a Monthly 2-Gun style match with somewhat closer ranges (they are AKs, after all) and a Cold War theme. Red October is an Outlaw match - meaning there is no national umbrella organization - so we use the same rules as our Monthly 2-Gun matches. Stick around afterwards, there will be some small prizes for the winners of each division.
                </Typography>

                <Typography variant="body1" paragraph>
                    Red October is a stage points time plus match, which means that each stage is worth a certain number of match points, and your time is divided by the best time on that stage to get your stage points. The match points are the sum of your stage points. The shooter with the most match points wins. There will be four stages, expect a round count of about 150-200 rifle rounds and 150ish pistol rounds.
                </Typography>

                <Typography variant="body1" paragraph>
                    Red October has three custom divisions, described below, covering both Cold War and modern setups. No AK? No problem! We still want you to shoot the match - check out our Western Spy division. Costumes absolutely encouraged but by no means required. Before you ask, Galils and the various Swiss rifles go in Western Spy.
                </Typography>

                <Typography variant="h5" align="center">Red October Divisions</Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>
                            <strong>Warsaw Pact</strong> - Iron sights or pre-1989 optics, and pre-1989 AK configurations. Iron sights on pistols.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DesktopArticleImage imageUrl="images/explainers/AKM_ArticleSize.png"
                                             altText="AKM, courtesy of wikipedia"/>
                        <Typography variant="body1" paragraph>
                            Rifles must be an AK family rifle in a Cold War configuration. Optics are OK, as long as they are Cold War era side rail mounts. No picatinny rails. Rifles must be chambered in a Warsaw Pact caliber (7.62x39, 5.45x39, 7.62x54R, etc). If you have a PKM/RPK/SVD, you may shoot it as an "AK" in this division. Any period magazine is permitted. Grips, stocks, handguards, etc should be approximately period-correct, but we're not going to be too picky.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Pistols must be 9mm or larger caliber, and must have iron sights. No compensators on pistols. Modern or western pistols are fine. Pistol magazines are limited to 140mm in length.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>
                            <strong>Zenitcope</strong> - Modernized AKs and any pistol.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DesktopArticleImage imageUrl="images/explainers/ZenitcoAK74_ArticleSize.png"
                                             altText="AK74, courtesy of Gunghis Kahn"/>
                        <Typography variant="body1" paragraph>
                            Modernized AKs in any configuration. Zenitco, Zenitcope, lights, lasers, optics, rails... whatever you want. Rifles must be chambered in an intermediate or battle rifle caliber, but 5.56x45mm AKs are welcome here. Any magazine is permitted. 
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Pistols must be 9mm or larger caliber. No magazine length or capacity restrictions. Pistols may have compensators, red dots, etc. Western pistols are fine, although if you have a Stechkin we are very impressed.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>
                            <strong>Western Spy</strong> - For Capitalist Kalashnicels. Any rifle and any pistol.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DesktopArticleImage imageUrl="images/explainers/CIA_ArticleSize.png"
                                             altText="And ye shall know the truth, and the truth shall make you free"/>
                        <Typography variant="body1" paragraph>
                            Any rifle in any configuration that doesn't fit into an AK division, that is chambered in an intermediate or battle rifle caliber (no magnum rifle calibers). Any sighting system or muzzle device may be used. No magazine length or capacity restrictions.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Pistols must be 9mm or larger caliber. No magazine length or capacity restrictions. Pistols may have compensators, red dots, etc.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    )
}

export default RedOctoberExplainer;