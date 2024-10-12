import React from "react"

export class DescriptionBlock extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="description-block">
                <div class="description-content">
                    <p className="description-content-item">
                        Добро пожаловать в Vinyl Voyage — кладезь музыкальных шедевров на виниле, оживляющая 
                        дух прошлого в самом сердце Минска. Здесь, среди уютных стен, наполненных теплым шепотом 
                        виниловых пластинок, вы найдете не просто музыку, а настоящие истории.
                    </p>
                    <div className="description-content-item">
                        <p>Скорее переходите в каталог, чтобы выбрать, то что нравится.</p>
                        <button onClick={()=>{}} className="description-katalog-button">Перейти в каталог</button>
                    </div>      
                </div>  
            </div>
        )
    }

}