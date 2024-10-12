import React from "react"
import "../../styles/welcomeBlock.css"

export class WelcomeBlock extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="welcome-block">
                <div className="welcome-block-image-overlay"></div>
                <div className="welcome-block-text">
                    <h1 className="welocme-block-text-line-1">Vinil</h1>
                    <h1 className="welocme-block-text-line-2">Voyage</h1>
                    <h2 className="welocme-block-text-line-3">in Minsk</h2>
                </div>
            </div>
        )
    }

}
