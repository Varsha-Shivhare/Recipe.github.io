import React, {useState} from 'react';


 const MenuData = ({menuData, searchText}) => {


  const[cartItem, setcartItem] = useState([]);


  const handleAddtoCart = (e) => {
    setcartItem({
      cartItem: e.target.value
      })
  }

  console.log(searchText)

  return (
            <div className="contentWrapper">
                  {
                      // eslint-disable-next-line array-callback-return
                      menuData.filter(item  => {
                        if(searchText){
                          if(item.name.toLowerCase().includes(searchText.toLowerCase()) || item.category.toLowerCase().includes(searchText.toLowerCase())){
                            return true
                          }
                        }else{
                          return true
                        }
                      }).map((currEle) => {
                        const {id, name, image, price} = currEle;
                      
                      return(
                      
                        <div className='background' key={id} >
                          <div className='menuItem'>
                            <h3 className="name">{name}</h3>
                            <img src={image} alt="images" className='image' />
                            <h3 className="price">Price - {price}</h3>
                            <button className='cartBtn' value={cartItem} onClick={handleAddtoCart}>Add to cart</button>
                          </div>
                        </div>
                        
                      )
                      }
                      )
                  }
            </div>
  )
}

export default MenuData;
