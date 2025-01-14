const Card = ({ name, text, email, emailHref }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>
                {text}
            </p>
            <p>
                <a href={emailHref}>{email}</a>
            </p>
        </div>
    )
}
export default Card;