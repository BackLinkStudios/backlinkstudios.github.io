import "./Home.scss";
import BgSvg from "./BgSvg";
import { FC, ReactElement } from "react";
import Typer from "@/components/Typer/Typer";
import { Container, Row, Col } from "react-bootstrap";
import { Services } from "../ServiceList";
import Link from "next/link";
// export default function Home() {
//     return (
//         <>
//             <div className="container _._mt-10">
//                 <h2 className="h2_text _._text-center">Get theTargeted andRelevant Traffic.</h2>
//             </div>
//             <BgSvg />
//         </>
//     );
// }

export const Home: FC<any> = (): ReactElement => {
    return (
        <>
            <div className="container _._mt-10 animate__animated animate__flipInX animate__slow">
                <h2 className="h2_text _._text-center anim">Get the Targeted and Relevant Traffic,</h2>
                <h2 className="h2_text _._text-center">
                    <span className="gradient_text">
                        <Typer />
                    </span>
                </h2>
            </div>
            <br />
            <br />
            <br />
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <img src="./abt3.png" alt="" />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="_._p-2 _._flex _._align-middle _._justify-center _._items-center">
                            <span>
                                <b>Welcome to The Backlink Studios</b>
                                <h1>Boost Your Ranking</h1>
                                <p>At Backlink Studios, we are not just about making profits. We aim to see our clients prosper and their business .Welcome to the link seller; here, we offer the best services that will ensure a boost to your ranking. We are digital specialists who help re-known brands push their brands beyond boundaries. We help our clients achieve this by ensuring best practices, such as using the best marketing techniques and data-driven insights and developing processes that unlock their business growth.</p>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {Services.map((service, i) => {
                        return (
                            <Col key={i} sm={12} md={6} lg={6}>
                                <Link href={`/offered-services/${service.link}`} className="box _._flex _._flex-col md:_._flex-row _._text-white">
                                    <div className="md:_._mr-5">
                                        <img src={`/${service.icon}`} alt="" width="1000px" height="auto" />
                                    </div>
                                    <div>
                                        <h3>{service.heading}</h3>
                                        <p>{service.body}</p>
                                    </div>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            {/* <BgSvg /> */}
        </>
    );
};
