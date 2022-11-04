import {Container, Row, Col } from "react-bootstrap"
export default function Content(){
    return(
        <Container>
            <Row className="" >
                    <Col sm={12} md={6} className="coll order-1 py-3 px-5">
                        <div className="px-4 py-0 py-md-5">
                            <div className='logo'>
                                <img src="https://ikken.fueko.net/content/images/2019/08/ikken.svg" alt="" width="150px" />
                            </div>
                            <p className='vertical-text d-none d-md-block'>Thoughts, stories and ideas</p>
                        </div>
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
                            <p>by Priscilla Egberi</p>
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
                    <Col sm={12} md={6} className="coll order-md-1" style={{ background: "url(https://images.unsplash.com/photo-1526887520775-4b14b8aed897?ixlib=rb-1.2.1&q=70&fm=jpg&crop=entropy&cs=tinysrgb&w=768&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ) no-repeat center/cover" }}></Col>
                </Row>
        </Container>
    )
}