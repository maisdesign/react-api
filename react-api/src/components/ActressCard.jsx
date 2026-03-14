function ActressCard({ actress }) {
    let safeUrl = actress.image.replace('/220px-', '/250px-');
    safeUrl = actress.image.replace('/800px-', '/250px-');
    return <>
        <li>{actress.name}</li>
        <li>{actress.birth_year}</li>
        <li>{actress.nationality}</li>
        <li>{actress.awards}</li>
        <li>{actress.biography}</li>
        <li><img src={safeUrl} alt={actress.name} /></li>
        <li>{actress.name}</li>
    </>
}

export default ActressCard