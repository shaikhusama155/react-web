import React from 'react'


export default function Slider() {
  return (
    <div>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={'https://media.istockphoto.com/id/984324980/photo/mens-clothing-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=tgjreSS1s5qQvaMnbK1gPQOUa8qxGjmSfaoV-a2R9cU='} className="d-block w-100" height={'500px'} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG91dGZpdHRlcnMlMjBzdHlsZXMlMjBjbG90aGVzJTIwc2hvb3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'} className="d-block w-100" height={'500px'} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3V0Zml0dGVycyUyMHN0eWxlcyUyMGNsb3RoZXMlMjBzaG9vdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'} className="d-block w-100" height={'500px'} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
