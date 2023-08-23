import { AddShoppingCart } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";


export function MaterialUi() {
    return(
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCart/>
            </IconButton>



            
        </div>
    )
}