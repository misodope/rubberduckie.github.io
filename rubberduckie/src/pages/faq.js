import "../styles/faq.scss";

import React from "react";
import Layout from "../components/layout";

const Faq = () => {
    return (
        <Layout>
            <div className="faqs">
                <div className="faqs__header">
                    FAQs
                </div>
                <div className="faqs__container">
                    <div className="faqs__container--question">
                        Why rubber duckies? Does this really help me solve problems?
                    </div>
                    <div className="faqs__container--answer">
                        It would be woderful if this were true, but the fact is that most ducks prefer to take a mentoring role. There are a few ducks however that do choose to code,
                        but these are the ducks that nobody hears about because they are selected for secret government projects that are highly classified in nature.
                    </div>
                </div>
                <div className="faqs__container">
                    <div className="faqs__container--question">
                        Where can I learn mode about rubber duck debugging?
                    </div>
                    <div className="faqs__container--answer">
                        More information can be found at wikipedia.org, lists.ethernal.org, codinghorror.com, and zenhub.com
                    </div>
                </div>
                <div className="faqs__container">
                    <div className="faqs__container--question">
                        Where can I hire my own duck?
                    </div>
                    <div className="faqs__container--answer">
                        Great question you can support this site by buying a rubber duckie. Buying a rubber duckie helps to keep this site running (fees and stuff like that, quack!).
                    </div>
                </div>
                <div className="faqs__container">
                    <div className="faqs__container--question">
                        How do I show support?
                    </div>
                    <div className="faqs__container--answer">
                        You can show support by checking out the creator of this site on TikTok @Misodope
                        If you like what we're doing and want to show some additional support you could buy me a cofee and we can have a chat! 
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Faq;