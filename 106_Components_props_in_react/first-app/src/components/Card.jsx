import "./Card.css"

const Card = (props)=>{
    return (
        <>
            <div className="card" style={{overflow: "hidden"}}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <img src={props.api} alt="pic.png" style={{"border-radius": "7px"}}/>
            </div>
        </>
    )
}

export default Card;