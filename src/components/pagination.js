import React from 'react';

function Pagination(props){
    // const pokemonArray = Array.apply(null, Array(10)).map(() => {});
    const pokemonArray  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    //10 mostrariamos [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] ( |10 - 5| |10 + 4| )
    //14 mostrariamos [9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ( |14 - 5 | |14 + 4| )
    
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