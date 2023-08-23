import { useState } from "react"
import { data } from "./data"

export const Test = () => {

    const [card, setCard] = useState(data)

    const deleteCard = (id) => {
        let newItemDelete = card.filter( cardEl => cardEl.id !==id);
        setCard(newItemDelete)
    }


    return(
        <div className="TestBox">
            {card.map((el => {
                const {id, title, image} = el
                return(
                    <div key={id}>
                        <p>{title}</p>
                        <img src={image} width={200} alt="color"></img>
                        <button onClick={ () => deleteCard(id) } className="delItem">X</button>
                    </div>
                )
            }))}
            <button onClick={ () => setCard( [] ) }>delete all</button>
            <br />
        </div>
    )
} 