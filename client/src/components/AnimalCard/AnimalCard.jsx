import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {calculateAge} from "../../utils/utils";




function AnimalCard({data}) {
    const age = calculateAge(data.dateOfBirth);

    return (
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                alt={data.name}
                height="140"
                image={data.photoUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name} - {age} y.o.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="warning">
                    <Link style={{ color: "#e59b08" }} to={`/foster-form/${data.id}`}>Adopt</Link>
                </Button>
                <Button size="small">
                    <Link style={{ color: "#1976d2" }} to={`/animals/${data.id}`}>Learn More</Link>
                </Button>
            </CardActions>
        </Card>
    )
}
export default AnimalCard;

