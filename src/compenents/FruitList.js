function fruitList({fruits}){
    return(
        fruits.map((fruit, index) => (
            <li key={index}>{fruit.name}</li>
        ))
    )
}

export default fruitList