import "./GharSecondSection.css"
import logo2 from '../images/logo2.png';


export const GharSecondSection = () => {
    return (
        <div className="videoContainer">
            <div className="video-section">
            <video width="500" height="300" controls>
            <source src="mov_bbb.mp4" type="video/mp4"/>
            <source src="mov_bbb.ogg" type="video/ogg"/>
            Your browser does not support HTML video.
        </video>

            </div>
            <div className="Othersection">
                <img src={logo2} alt=""/>
            </div>
        </div>
    )
}