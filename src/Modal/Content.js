import { Accordion } from '../Accordion/Accordion'
import './style.css'

export const Content = ({ setIsOpen }) => { 

        return(
            <div className='modal_content'>
                <p><Accordion /></p>
                <button onClick={ () => setIsOpen(false) }>CLOSE MODAL</button>
            </div>
        )
}