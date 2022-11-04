import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Row, Col } from "react-bootstrap"
import { FaAward } from "react-icons/fa"
// import SwipeFile from  "./SwipeFile"

export default function Header() {
    const datas = [
                    { imgsrc: "url(https://images.unsplash.com/photo-1526887520775-4b14b8aed897?ixlib=rb-1.2.1&q=70&fm=jpg&crop=entropy&cs=tinysrgb&w=768&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)", writer:"by Megan Anderson & Charles Barrett" },
                    { imgsrc: "url(https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-1.2.1&q=70&fm=jpg&crop=entropy&cs=tinysrgb&w=768&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)", writer:"by Hannah Lee, Victoria West & David Cole"},
                    { imgsrc: "url(https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-1.2.1&q=70&fm=jpg&crop=entropy&cs=tinysrgb&w=768&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)", writer:"4 years ago by David Cole $ Charles Barrett"},
                    { imgsrc: "url(https://images.unsplash.com/photo-1511407337274-9c172957270e?ixlib=rb-1.2.1&q=70&fm=jpg&crop=entropy&cs=tinysrgb&w=768&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)", writer:"by David Cole"},
                ]
                
    
    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {datas.map((data)=>(
                <SwiperSlide >
                <Row className="" >
                    <Col sm={12} md={6} className="coll order-1 py-3 px-5">
                        <div className="post-content text-center text-md-start" >
                            <div className="global-featured mb-5">
                                <div className="d-flex justify-content-between">
                                    <FaAward size={19} />
                                    <div className="border-end border-secondary pe-2">
                                        The story<br />
                                        <small style={{ fontSize: "8px" }}>of the month</small>
                                    </div>

                                    <div className="ps-2">
                                        <div>
                                            <span>2019</span>
                                        </div>
                                        <div><span>July</span></div>
                                    </div>
                                </div>
                            </div>
                            <p>{data.writer}</p>
                            <p className='h1 mt-4 mb-4'>A brand is a voice</p>
                            <p className='d-none d-md-block mb-5'>
                                Age, inquies, ista parva sunt. Ad eos igitur converte te, quaeso. Progressionis para doca illi, nos admirabilia dicamus.
                            </p>
                            <div className="">
                                <a href="/tag/review/" className="me-4">Review</a>
                                <a href="/tag/interview/">Interview</a>
                            </div>

                        </div>
                    </Col>
                    <Col sm={12} md={6} className="coll order-md-1" style={{ background: `${data.imgsrc} no-repeat center/cover` }}></Col>
                </Row>
            </SwiperSlide>
            ))}
                        ...
        </Swiper>
    )
}