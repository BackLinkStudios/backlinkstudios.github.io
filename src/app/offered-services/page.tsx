import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import FAQ from "@/components/FAQ/FAQ";

export default function OurServices() {
    return (
        <>
            <div className="container _._mt-10 label">
                <h2 className="h2_text gradient_text _._text-center _._text-wrap animate__animated animate__flipInX animate__slower">Our Services</h2>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className="box">
                            <h2>SEO</h2>
                            <p>We ensure that our customers’ products are not just ranked; we go the extra mile to ensure they are top of mind and top of the competition with the help of search engine optimization services. Our target is the keyword best for their business, services, or products matching customers intentions.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="box">
                            <h2>Copywriting</h2>
                            <p>One of our services includes copywriting, and we develop persuasive content for marketing and sales to generate conversions and sales. Examples include websites, emails, catalogs, advertisements, and others. We help you develop it professionally with the help of our qualified copywriters, who ensure it meets all the standards.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="box">
                            <h2>Backlink</h2>
                            <p>We help them design a responsive website, and from that, they can grow their business. We develop custom responsive websites and landing pages that help them create a brand. We offer the best and most professional website development services at a very affordable price.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="box">
                            <h2>Link Building</h2>
                            <p>We help our customers realize their value and be unique in a crowded market, taking time to listen, learn and even understand. We condense our findings to something new compelling, and meaningful. Our hard work helps up get the desired results time and time again.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="box">
                            <h2>Guest Blogging</h2>
                            <p>One of our goals is to provide you with a way to attain your target audience without paying for ads. When you get people on your site, you can delight them with your quality products, intriguing copy, and a motivating call to action.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="box">
                            <h2>Niche Edits</h2>
                            <p>We also offer services such as inserting links in already existing pieces of content that have already been published on the web. We use this SEO strategy to help most clients sell their products. We ensure customer satisfaction by doing extra that you can only get with us.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <FAQ></FAQ>
        </>
    );
}
