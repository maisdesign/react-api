function PersonCard({ person }) {

    return <>
        <div className="card person-card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={person.image} onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://picsum.photos/200/300";
                    }} alt={person.name} className="rounded-start single-card-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{person.birth_year}</p>
                        <p className="card-text">{person.nationality}</p>
                        <p className="card-text">{person.biography}</p>
                        <p className="card-text awards">{(Array.isArray(person.awards)) ? person.awards.join(', ') : person.awards}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PersonCard