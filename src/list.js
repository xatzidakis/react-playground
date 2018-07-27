import React from 'react'

let array = ['Loukaniko', 'souvlaki', 'pastitsio'];

let List = function() {
    return (
        <ul className="michalis">{array.map(function(el){
            return <li>{el}</li>
        })}</ul>
    )

}

export default List;