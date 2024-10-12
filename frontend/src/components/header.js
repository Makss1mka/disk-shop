import React from "react" 
import { IconKatalog, IconPhone, IconShoppingCart, IconUser } from "../utils/icons"
import "../styles/header.css"

export class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="header">
                <div className="header-item">
                    <HeaderButton 
                        className="header-button"
                        text="Каталог"
                        textClassName="header-button-text"
                        Icon={IconKatalog}
                        iconClassName="header-button-icon"
                    />
                    <HeaderButton 
                        className="header-button"
                        text="Связь с нами"
                        textClassName="header-button-text"
                        Icon={IconPhone}
                        iconClassName="header-button-icon"
                    />
                </div>
                <div className="header-item">
                    <HeaderButton 
                        className="header-button"
                        text="Корзина"
                        textClassName="header-button-text"
                        Icon={IconShoppingCart}
                        iconClassName="header-button-icon"
                    />
                    <HeaderButton 
                        className="header-button"
                        text="Личный кабинет"
                        textClassName="header-button-text"
                        Icon={IconUser}
                        iconClassName="header-button-icon"
                    />
                </div>
            </header>
        )
    }
}

function HeaderButton({ className, text, textClassName, Icon, iconClassName, onClick=()=>{} }) {
    return (
        <button className={className} onClick={onClick}>
            <Icon className={iconClassName}/>
            <p className={textClassName}>
                {text}
            </p>
            <div class="header-button-line"></div>
        </button>
    )
}
