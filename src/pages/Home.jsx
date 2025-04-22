import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <>
        <NavBar/>
        <div className="container">
            <div className="row" style={{ marginTop: "67px" }}>
                <div className="col">
                    <div id="carouselExampleCaptions" className="carousel slide" style={{ height: "100%", overflow: "hidden" }}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner" style={{ height: "100%" }}>
                            <div className="carousel-item active">
                                <video className="d-block w-100" autoPlay loop muted style={{ objectFit: "cover", height: "100%" }}>
                                    <source src="/assets/videos/loveanime1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <video className="d-block w-100" autoPlay loop muted style={{ objectFit: "cover", height: "100%" }}>
                                    <source src="/assets/videos/loveanime1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <video className="d-block w-100" autoPlay loop muted style={{ objectFit: "cover", height: "100%" }}>
                                    <source src="/assets/videos/loveanime1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Home
