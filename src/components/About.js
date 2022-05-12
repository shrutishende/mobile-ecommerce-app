import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Similique consectetur aperiam, nisi, hic iusto
                            officia laborum consequuntur modi asperiores ullam
                            atque quis fugit explicabo id nam nobis omnis
                            aliquam rem laboriosam repellat minus, eligendi
                            earum necessitatibus. Doloremque explicabo deleniti
                            minima temporibus, neque voluptate minus totam optio
                            laudantium nemo placeat ducimus veritatis! Unde,
                            dolorum? Ut incidunt pariatur labore fuga fugit,
                            dolor repudiandae, rerum voluptatem eos esse sunt
                            voluptas provident laudantium suscipit ea quidem
                            perspiciatis iste autem explicabo itaque. Corrupti
                            ad voluptatum asperiores vel ut. Pariatur eaque
                            officiis possimus. Iure dignissimos repudiandae vero
                            eveniet, quo maiores saepe modi, a ab vitae
                            exercitationem.
                        </p>
                        <NavLink
                            to="/contact"
                            className="btn btn-outline-primary px-3"
                        >
                            Contact Us
                        </NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img
                            src="assets/images/about.png"
                            alt="about us"
                            height="400px"
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
