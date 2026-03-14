function ActressCard({ actress }) {

    return <>
        <div className="card actress-card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={actress.image} alt={actress.name} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{actress.name}</h5>
                        <p className="card-text">{actress.birth_year}</p>
                        <p className="card-text">{actress.nationality}</p>
                        <p className="card-text">{actress.biography}</p>
                        <p className="card-text awards">{actress.awards}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ActressCard