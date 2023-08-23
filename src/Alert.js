import Swal from "sweetalert2"

export const Alert = () => {
    const alertButton = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }
    return(
        <div className="styleBorderAlert">
            <button onClick={ () => alertButton() }>SWEET - ALERT</button>
        </div>
    )
}