import { Modal } from 'react-bootstrap';
import { Button } from '../Button';
import './styles.scss';

type modalProps = {
  onHide: () => void
  show: boolean
  onConfirm: () => Promise<void>
  title: string
  message: string
  confirmText: string
  icon: string
}

export function CustomModal(props: modalProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <img src={props.icon} alt="Icone" />
      <span>{props.title}</span>
      <p>
        {props.message}
      </p>
      <div>
        <Button onClick={props.onHide}>Cancelar</Button>
        <Button id="confirm" onClick={props.onConfirm}>{props.confirmText}</Button>
      </div>

    </Modal>
  )
}