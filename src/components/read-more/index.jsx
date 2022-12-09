import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import "./style.css";





const ReadMore = () => {
    return(
        <div className="read-more">
            <h2>Read More</h2>
            <div className="line"></div>
            <div className="text">
                <p>This is the kind of bites you can get almost every single night:</p>
               <StaticImage
                    src="https://bedbugguide-server.a-max.uk/wp-content/uploads/2022/12/bedbugbite.jpg"
                    alt="bg"
                    loading="lazy"
                    placeholder="none"
                />
                <p>{'"'}The product works absolutely great! I had never even seen a bed bug till a family member got them!</p>
                <br/>
                <p>We started getting some bites so we immediately bought <Link to={'https://www.saybyebugs.com/?ver=2&AFFID=guide&utm_campaign=not_AMP_page'}>SayByeBugs</Link> & {"haven't"} had a bite since! We would recommend it to {'anyone!"'}
                </p>
                <br/>
                <b>Stop Bed Bugs:</b>
                <br/>
                <br/>
                <p>Request your kit here:</p>
                <p>Get Started:</p>
                <Link to={'https://www.saybyebugs.com/?ver=2&AFFID=guide&utm_campaign=not_AMP_page'}>Get SayByeBugs</Link>
            </div>
        </div>
    )
}

export default ReadMore;