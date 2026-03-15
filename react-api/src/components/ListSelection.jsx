function ListSelection({ setSelected }) {
    return <>

        <div className="form-floating my-3">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(e) => setSelected(e.target.value)}>
                <option defaultValue>What would you like to see?</option>
                <option value="actresses">Actresses Only</option>
                <option value="actors">Actors Only</option>
                <option value="both">Whole academy</option>
            </select>
            <label htmlFor="floatingSelect">Choose who you wanna see</label>
        </div>

    </>
}

export default ListSelection