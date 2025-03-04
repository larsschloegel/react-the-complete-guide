export default function Meal( { meal : {id, description, image, name, price}}) {
    return(
        <article className="meal-item">
            <img src={`http://localhost:3000/${image}`} alt={id} ></img>
            <h3>{name}</h3>
        </article>
    )
}