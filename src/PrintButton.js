export const PrintButton = () => {
    const printThePageButton = () => {
        window.print();
    }
    return(
        <div>
            <button onClick={ () => printThePageButton() } className="PrintButtonGreen">PRINT THE PAGE</button>
        </div>
    )
}