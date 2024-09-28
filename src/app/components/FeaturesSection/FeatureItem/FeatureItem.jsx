// FeatureItem.js
import "/Users/rimamihova/dev/WebstormProjects/mvp-gh/src/app/components/FeaturesSection/featuresSection.css"
import React from "react";

function FeatureItem({ icon: Icon, title, description }) {
    return (
        <div className="single-features">
            <div className="signle-icon">
                <i>
                    <Icon />
                </i>

            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureItem;
