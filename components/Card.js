import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card'

const style = {
  marginBottom: '1.2rem'
}

const CardComponent = ({ name, breed }) => (
    <Card style={ style }>
        <CardMedia
            overlay={
                <CardTitle
                    title={ name }
                    subtitle={ breed } />
            }>
            <img src="http://unsplash.it/300x300" />
        </CardMedia>
    </Card>
)

export default CardComponent
