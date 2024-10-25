import React from 'react'
import { addorder, resettablenumber } from '../Actions';
import {connect} from 'react-redux';

const Card = ({addorder,table_number}) => {
    const[data,setData] = React.useState([]);
    React.useEffect(()=>{
        fetch('http://localhost:3001/getallproducts').then(
            response => response.json()
        ).then(
            json => {
                setData(json)
            }
        )

    },[])

    const Handler = async (id,productname,price,imageUrl) => {
        if(table_number !=null){
          await addorder(id,productname,price,table_number,imageUrl)
          await resettablenumber
          alert('order placed successfully')
        }
        else{
            alert('please select the table number')
        }
    }
  return (
    <div>
      <center>
        {data.length > 0?
        
        <div className='container'>
            <div className='row'>
                {data.map((item)=>(
                    <div className='col-md-4 mt-5' style={{padding:"5px"}} key={item.id}>
                       <div className='card' style={{width:"18rem",padding:"3px"}}>
                       <img src= {item.imageUrl} className='card-img-top'/>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <div className='card-text'>Rs.{item.price}</div>
                            <button className='btn btn-primary' onClick={()=>Handler(item.id,item.name,item.price,item.imageUrl)}>Order</button>
                        </div>
                       </div>
                    </div>
                ))}
            </div>

        </div>
        :
        <div className='spinner-border text-primary'>

        </div>
    }
      </center>
    </div>
  )
}

const mapStateToProps= state=>({
    
    table_number : state.tablereducer.table_number
})

export default connect(mapStateToProps,{addorder}) (Card)
