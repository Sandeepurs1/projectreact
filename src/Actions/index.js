export const settablenumber =(value) => async dispatch =>{
    dispatch({
        type:"SETTABLENUMBER",
        payload:value
    })
}
export const resettablenumber = () => async dispatch => {
    dispatch({
        type:"RESETTABLENUMBER"
    })
}

export const addorder = (id,name,price,table_number,imageUrl) => async dispatch => {
    dispatch({
        type:"ADDORDER",
        payload:{
            id:id,
            name:name,
            price:price,
            table_number:table_number,
            imageUrl:imageUrl

        }
    })
}