import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';

const CarouselPage = () => {
  return (
    <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={false} className="z-depth-1">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img className="d-block w-100" width="700px" height="400px" src="https://i.pinimg.com/originals/a7/1b/07/a71b074f2b0861f83a105014c148a741.jpg" alt="First slide" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img className="d-block w-20"  width="700px" height="400px" src="https://media1.popsugar-assets.com/files/ons1/258/2589280/38_2009/33604e69500a5ff6_zara.jpg" alt="Second slide" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img className="d-block w-100"  width="700px" height="400px" src="https://static.zara.net/photos///mkt/spots/aw18-campaign-man/layout-large//mancamp7-zoom-mancamp7.lo.jpg?1532600693290" alt="Third slide" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img className="d-block w-100"  width="700px" height="400px" src="https://cdn1.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/zara_store_sydney.jpg" alt="Mattonit's item" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;