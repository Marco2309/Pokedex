import React from 'react';

function Pagination(props){
    const pokemonArray = Array.apply(null, Array(10)).map(() => {})
    //3. Mostrar las páginas disponibles
    //Si solicitamos la página 10 mostrariamos [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] ( |10 - 5| |10 + 4| )
    //Si solicitamos la página 14 mostrariamos [9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ( |14 - 5 | |14 + 4| )
    let getNumButton = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="pagination-row">
            {
                pokemonArray.map( (element, index) => {
                    return  <div 
                                key={index}
                                onClick={() => props.fetchPageFn(3)}
                                onClick={(evento) => getNumButton(evento)}
                                className="item">
                                {index+1}
                            </div>
                            
                    
                })
            }
            
        </div>
    )
}

export default Pagination;