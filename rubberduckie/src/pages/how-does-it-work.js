import React from "react";

import Layout from "../components/layout";
import "../styles/how.scss";

const HowDoesItWork = () => {
    return (
        <Layout>
            <div className="how">
                <div className="how__how-to-section">
                    <div className="how__header">Rubber Duckie Debugging</div>
                    <div className="how__intro">The rubber duck debugging method is as follows:</div>
                    <div className="how__list">
                        <div>
                            1. Beg, borrow, steal, buy, fabricate, or otherwise obtain a rubber duck (bathrub variety).
                            Place rubber duck on desk and inform it you are just going to go over some code with it, if that's all right.
                        </div>
                        <div>
                            2. Explain to the duck what your code is supposed to do, and then go into detail and explain your code line by line.
                        </div>
                        <div>
                            3. At some point you will tell the duck what you are doing next and then realise that is not in fact what you are actually doing.
                            The duckie will sit there serenly, happy in the knowledege that it has helped you on your way.
                        </div>
                    </div>
                </div>
                <div className="how__secret-section">
                    <div className="how__header">Secret Tips!</div>
                        <div className="how__intro">The rubber duck debugging method is as follows:</div>
                    </div>
            </div>
        </Layout>
    )
}

export default HowDoesItWork;