import "./FAQ.scss";

export default function FAQ() {
    return (
        <>
            <section className="faq-area pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faq-wrap">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item active">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Can AI content writing replace human writers?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How does AI content writing work?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What is AI content writing?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                What are the benefits of using AI content writing?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Is AI content writing ethical?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                How much does AI content writing cost?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                How accurate is the content generated by AI software?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// export default function FAQ() {
//     return (
//         <>
//             <section className="faq-area pb-150">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="faq-wrap">
//                                 <Accordion id="accordionExample" defaultActiveKey="0">
//                                     <Accordion.Item eventKey="0">
//                                         <Accordion.Header>Can AI content writing replace human writers?</Accordion.Header>
//                                         <Accordion.Body>
//                                             <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                     <Accordion.Item eventKey="1">
//                                         <Accordion.Header>How does AI content writing work?</Accordion.Header>
//                                         <Accordion.Body>
//                                             <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                     <Accordion.Item eventKey="2">
//                                         <Accordion.Header>What is AI content writing?</Accordion.Header>
//                                         <Accordion.Body>
//                                             <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                     <Accordion.Item eventKey="3">
//                                         <Accordion.Header>What are the benefits of using AI content writing?</Accordion.Header>
//                                         <Accordion.Body>
//                                             <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                     <Accordion.Item eventKey="4">
//                                         <Accordion.Header>Is AI content writing ethical?</Accordion.Header>
//                                         <Accordion.Body>
//                                             <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                     <Accordion.Item eventKey="5">
//                                         <Accordion.Header>How much does AI content writing cost?</Accordion.Header>
//                                         <Accordion.Body>
//                                             <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                     <Accordion.Item eventKey="6">
//                                         <Accordion.Header>How accurate is the content generated by AI software?</Accordion.Header>
//                                         <Accordion.Body>
//                                             <p>AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.</p>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                 </Accordion>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

