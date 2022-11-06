import React from "react";
import '.././App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default class ChildrenContainer extends React.Component {

    render() {
        return (
            <motion.div className='Minicard' initial={{ x: '-100vw' }} animate={{ x: '0' }} transition={{ delay: 0.3 }}>
                <p style={{ fontWeight: 'bold', color: '#002147', textAlign: 'center' }}>Unit Testing - Choose a specialism</p>
                <div style={{ margin: '0 auto', width: '95%' }} >
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid xs={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation-concept_53876-112224.jpg?w=1800&t=st=1667505212~exp=1667505812~hmac=8f08b6252f020527d8f058cdeaa34656a0c252c93d392b850f52bd17b18e9828"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid xs={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation-concept_53876-112224.jpg?w=1800&t=st=1667505212~exp=1667505812~hmac=8f08b6252f020527d8f058cdeaa34656a0c252c93d392b850f52bd17b18e9828"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid xs={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation-concept_53876-112224.jpg?w=1800&t=st=1667505212~exp=1667505812~hmac=8f08b6252f020527d8f058cdeaa34656a0c252c93d392b850f52bd17b18e9828"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid xs={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation-concept_53876-112224.jpg?w=1800&t=st=1667505212~exp=1667505812~hmac=8f08b6252f020527d8f058cdeaa34656a0c252c93d392b850f52bd17b18e9828"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid xs={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation-concept_53876-112224.jpg?w=1800&t=st=1667505212~exp=1667505812~hmac=8f08b6252f020527d8f058cdeaa34656a0c252c93d392b850f52bd17b18e9828"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            
                        </Grid>
                    </Box>
                </div>
            </motion.div>
        )
    }
}