import React from 'react';

function Pagination(props){
    const pokemonArray  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    let getNumeration = (index)=>{
        let sum = 0 
        if(index>4){
            sum = index - 4
        }
        return sum
    }
    let stl = props.page
    let style="btn btn-primary"
    return (
        <div className="pagination-row">
            {   
                pokemonArray.map( (element, index) => {
                    let num = getNumeration(stl) + index
                    num===stl? style="btn btn-danger": style="btn btn-primary"
                    return  (<div 
                                key={element}
                                className={style}
                                onClick={() => props.fetchPageFn(num)}
                                >
                                {num+1}
                            </div> ) 
                })
            }
        </div>
    )
}

export default Pagination;