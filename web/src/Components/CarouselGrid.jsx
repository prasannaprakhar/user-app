import { ImageSection } from "./Carousel"
import "./CarouselGrid.css"

export const CarouselGrid = () => {
    return (
        <div className="grid-container">
            <div className="grid-item ">
                <ImageSection/>
            </div>
            <div className="grid-item ">
            <ImageSection/>
            </div>
            <div className="grid-item ">
            <ImageSection/>
            </div>
            <div className="grid-item ">
            <ImageSection/>
            </div>
        </div>

    )
}