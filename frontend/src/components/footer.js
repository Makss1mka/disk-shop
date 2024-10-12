import React from "react" 
import { IconFacebook, IconInstagram, IconTelegram, IconTwitter, IconVk, IconYoutube } from "../utils/icons"
import "../styles/footer.css"

export class Footer extends React.Component {
    constructor(props) {
        super(props)

        this.socials = [
            {
                text: "Instagram",
                icon: IconInstagram,
            },
            {
                text: "Facebook",
                icon: IconFacebook,
            },
            {
                text: "Telegram",
                icon: IconTelegram,
            },
            {
                text: "Twitter",
                icon: IconTwitter,
            },
            {
                text: "Youtube",
                icon: IconYoutube
            },
            {
                text: "VK",
                icon: IconVk
            },
        ]
    }

    render() {
        return (
            <footer className="footer">
                <p className="footer-sub-text">2024 @ Disk Shop Minsk</p>
                <p className="footer-pre-social-text">Ссылки на наши соц сети:</p>
                <div className="footer-socials">
                    {this.socials.map((socialItem)=>{
                        return (
                            <div className="footer-social-block">
                                <socialItem.icon className="footer-social-icon"/>
                                <a href="https://youtube.com" target="_blank" className="footer-social-ref">{socialItem.text}</a>
                            </div>
                        )  
                    })}
                </div>
            </footer>
        )
    }

}
