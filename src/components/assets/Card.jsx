import './Card.css'
export const Card = () => {
    return (
        <div className="card">
            <div className="picture">
                <img src="" alt="profile"/>
            </div>
            <div className="content">
                <p>Jayar Portagana</p>
                <p>Computer Science</p>
                <div className="icons" style={{color:"red"}}>
                    <a href="twitter.com"><i class="fa fa-twitter">twitter</i></a>  
                    <a href="linkedin.com"><i class="fa fa-linkedin">linked in</i></a>  
                    <a href="facebook.com"><i class="fa fa-facebook">facebook</i></a> 
                </div>
            </div>
        </div>
    )
}