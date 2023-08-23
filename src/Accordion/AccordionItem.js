import { useState } from "react"

export const AccordionItem = ({ title, context, fruitPicture }) => {
    const[isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className="accordion_position">
            <div className={isOpen ? 'active' : 'default'} onClick={handleIsOpen}>
            <img src={fruitPicture} width={50} alt="fruit" />
            </div>
            {
                isOpen && <div className="content">
                <h3>{ title }</h3>
                <p>{ context }</p>
                </div>
            }
        </div>
    )
}

