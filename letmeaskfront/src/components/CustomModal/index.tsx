import exitImg from '../../assets/images/exit.svg';
import { Button } from '../Button';
import './styles.scss';

type modalProps = {
    show:boolean
    onShow: () => void
}

export function CustomModal(props:modalProps) {

    if(!props.show){
        return null;
    }

    return (
        <div className="modal" 
        {...props}>
            <div className="modal-content" >
                <img src={exitImg} alt="Terminar Sala" />
                <span>Encerrar Sala</span>
                <p>Tem certeza que você deseja encerrar esta sala?</p>

                <div>
                    <Button onClick={props.onShow}> Cancelar</Button>
                    <Button id="confirm-button">Sim, Encerrar.</Button>
                </div>
            </div>
            
        </div>
    
    );
}