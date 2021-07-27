
const HeroButtons = props =>{

    return(
        <div className="container d-flex justify-content-center shadow-lg">
            <div className="form-group">
                <button className="btn btn-success btn-lg">View Menu</button>
            </div>
            <div className="form-group ms-4">
                <button className="btn btn-danger btn-lg">Quick Order</button>
            </div>
        </div>
    )
}

export default HeroButtons;