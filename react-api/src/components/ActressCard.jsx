function ActressCard({ actress }) {

    return <>
        <li>{actress.name}</li>
        <li>{actress.birth_year}</li>
        <li>{actress.nationality}</li>
        <li>{actress.awards}</li>
        <li>{actress.biography}</li>
        <li><img src={actress.image} alt={actress.name} /></li>
        <li>{actress.name}</li>
    </>
}

export default ActressCard