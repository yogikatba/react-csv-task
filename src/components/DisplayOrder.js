import React from 'react'

export default function DisplayOrder({object}) {

    let {items} = object
    let item = []
    let j=''
    for(let i=0;i<items.length;i++){
        while(items[i]!==';'){
            j+=items[i]
            i++;
        }
        item.push(j)
        console.log(item)
        j=''
    }
    // {item.map(i=><div>{i}</div>)}

    return (
        <div>
            
        </div>
    )
}
