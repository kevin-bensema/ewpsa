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
import FileDownload from '../Components/FileDownload';

const Monthly2GunExplainer = () => {
    return (
        <Container>
            <Typography variant="h4" align="center">Monthly 2-Gun Matches</Typography>
            <Box sx={{ my: 4 }}>
                
                <Typography variant="body1" paragraph>
                    Monthly 2-Gun is EWPSA's standard 2-gun match. It is hosted on the fourth Saturday of most months in the RMSF pistol bays - though sometimes a 'specialty match' is substituted. Check Practiscore for details. Monthly 2-Gun is an outlaw time plus 2-gun match. The rules are available for download below. We typically shoot four stages in each match. Note that one or two stages may involve some physical element such as extended running, climbing over small obstacles or through tunnels, or throwing kettlebells. In general, these matches have more steel and less paper than our 3-gun matches.
                </Typography>

                <Typography variant="h5" align="center">Divisions</Typography>
                <Typography variant="body1" paragraph>
                    Monthly 2-Gun has six divisions, described in short below. Please note that in case of any contradiction between the explainers below and the rules, the rules take precedence.
                </Typography>
            </Box>
            <Box sx={{ my: 4 }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>
                            <strong>Limited</strong> - Unmagnified optics and iron sighted pistols.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DesktopArticleImage imageUrl="images/explainers/Limited2Gun_ArticleSize.png"
                                             altText="Limited Division for 2-Gun"/>
                        <Typography variant="body1" paragraph>
                            Any rifle in an intermediate or battle rifle caliber. Compensators or muzzle brakes are limited to 3" in length and 1" in diameter. Suppressors are permitted. The rifle many only have a single unmagnified sighting system, such as a red dot, holographic sight, or iron sights. Inline backup irons will not be counted as a second sighting system. The rifle may not have a bipod. If laser aiming devices are attached, they may not be used during the course of fire. Magazines are limited to a maximum of 30 rounds.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Pistols must be 9mm or larger caliber, must be legal for USPSA Limited division, and must have iron sights - no red dots or lasers permitted.  No compensators on pistols. Pistol magazines are limited to 140mm in length.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>
                            <strong>Tactical</strong> - Rifles with one magnified optic and Carry Optics or Limited pistols.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DesktopArticleImage imageUrl="images/explainers/TacticalDivision_ArticleSize.png"
                                             altText="Tactical Division for 2-Gun"/>
                        <Typography variant="body1" paragraph>
                            Any rifle in an intermediate or battle rifle caliber. Compensators or muzzle brakes are limited to 3" in length and 1" in diameter. Suppressors are permitted. The rifle many only have a single unmagnified sighting system, such as a red dot, holographic sight, or iron sights. Inline backup irons will not be counted as a second sighting system. The rifle may not have a bipod. If laser aiming devices are attached, they may not be used during the course of fire. Magazines are limited to a maximum of 30 rounds.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Pistols must be 9mm or larger caliber, and must be either USPSA Carry Optics or USPSA Limited legal. No compensators on pistols. Pistol magazines are limited to 140mm in length. PCCs (Trooper only) are restricted to iron sights and 30 round magazines.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>
                            <strong>Open</strong> - Almost anything goes.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DesktopArticleImage imageUrl="images/explainers/OpenDivision2Gun_ArticleSize.png"
                                             altText="Open Division for 2-Gun"/>
                        <Typography variant="body1" paragraph>
                            Any rifle with any sighting system or number of sighting systems in an intermediate or battle rifle caliber. Any muzzle device is permitted. Bipods are permitted, but must be collapsed at the start signal. Bags, tripods, and rear monopods may not be used. No magazine type, capacity, or length restrictions.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Any pistol in any handgun configuration (no braced pistols, PDWs. Needs to be a normal pistol. You know what I mean). Compensators and slide-mounted optics are permitted. No magazine type, capacity, or length restrictions.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>
                            <strong>Armored</strong> - Suffering is fun!
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DesktopArticleImage imageUrl="images/explainers/Armored_ArticleSize.png"
                                             altText="Armored Division for 2-Gun"/>
                        <Typography variant="body1" paragraph>
                            Any rifle with any sighting system or number of sighting systems in an intermediate or battle rifle caliber. Any muzzle device is permitted. Bipods are permitted, but must be collapsed at the start signal. Bags, tripods, and rear monopods may not be used. No magazine type, capacity, or length restrictions.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Any pistol in any handgun configuration (no braced pistols, PDWs. Needs to be a normal pistol. You know what I mean). Compensators and slide-mounted optics are permitted. No magazine type, capacity, or length restrictions.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Shooter must wear either front and rear rifle-rated plates (rated for at least 7.62x39) or front and rear training plates that weigh at least 6 lbs each. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>
                            <strong>Retro</strong> - Nothing after 1991
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DesktopArticleImage imageUrl="images/explainers/Retro2Gun_ArticleSize.png"
                                             altText="Retro Division for 2-Gun"/>
                        <Typography variant="body1" paragraph>
                            Any rifle in service before January 1, 1992, reproductions thereof, or rifles that substantially share external appearance (this means your 20" PSA AR-15 with a picatinny carry handle is an acceptable "M16A2"). Must be chambered in an intermediate or battle rifle caliber. Pre-1992 optics, reproductions thereof, or modern versions with the same form factor are permitted. Period-correct bipods are permitted. Magazines are limited to period capacity, but may be modern designs. No picatinny rails for optic mounting.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Iron sighted pistols of a design in service before January 1, 1992, reproductions thereof, or pistols that substantially share external appearance (your gen 4 Glock 17 is an acceptable "gen 2 Glock 17"). Pistol magazines are limited to 140mm or period capacity, whichever is greater.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>
                            <strong>Heavy Metal</strong> - Battle rifles and heavy pistol calibers.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DesktopArticleImage imageUrl="images/explainers/HeavyMetal2Gun_ArticleSize.png"
                                             altText="Heavy Metal Division for 2-Gun"/>
                        <Typography variant="body1" paragraph>
                            Any battle rifle with any sighting system. 6.5 Creedmoor, 308 Winchester, 30-06 Springfield, 7.62x54R, etc. Any muzzle device is permitted. Bipods are permitted, but must be collapsed at the start signal. Bags, tripods, and rear monopods may not be used. No magazine type, capacity, or length restrictions.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Any handgun chambered in 10mm, 41 Magnum, 45 ACP, or larger. Compensators and slide-mounted optics are permitted. No magazine type, capacity, or length restrictions.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Box>
            <Box sx={{ my: 4 }}>
                <Typography variant="h5" align="center">Rules</Typography>
                <Typography variant="body1" paragraph>
                    Available in PDF format for download below.
                </Typography>

                <FileDownload fileUrl="public/files/2gun_rules.pdf" displayName="2-Gun Rules"/>
            </Box>
        </Container>
    )
}

export default Monthly2GunExplainer;