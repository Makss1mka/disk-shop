import React from "react"
import "../../styles/description.css"

export class DescriptionBlock extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="description-outer">
                <div class="description-block">
                    <p className="description-block-item">
                        Добро пожаловать в Vinyl Voyage — кладезь музыкальных шедевров на виниле, оживляющая 
                        дух прошлого в самом сердце Минска. Здесь, среди уютных стен, наполненных теплым шепотом 
                        виниловых пластинок, вы найдете не просто музыку, а настоящие истории.
                    </p>
                    <div className="description-block-item">
                        <p>Скорее переходите в каталог, чтобы выбрать, то что нравится.</p>
                        <button onClick={()=>{}} className="description-katalog-button">Перейти в каталог</button>
                    </div>      
                </div>  
            </div>
        )
    }

}