import { GridTile } from 'material-ui/GridList'
import ModalDialog from 'Component/ModalDialog'

const show = false

const showModal = () => {
  alert()
}

export default ({ image }) => (
  <GridTile onClick={ (e) => showModal() }>
    <img src={image} />
    {
      
    }
    <ModalDialog />
  </GridTile>
)