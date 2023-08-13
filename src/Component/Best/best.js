import index from '../../index.module.css'
import best from './best.module.css'
import besticon from '../img/besticon.png'


export const Best = () => {
    return (<>
        <div className={best.section__wrapper}>
            <div className={index.container}>
                <div className={best.content__wrapper}>

                    <h1 className={best.text__content__h1}>Best features in the world</h1>
                    <p className={best.text__content__p}>Capture more customers wd recall. Whether you need a tising or as a tagline for you. Capture more customers wd recall. Whether you need a tising or as a tagline for you.</p>
                    <div className={best.card__wrapper}>
                        <div className={index.flex}>
                            <div className={best.cardfirst}>
                                <ul className={best.card}>
                                    <img className={best.card__img} src={besticon} />
                                    <li className={best.card_text1}>Crafted with detail</li>
                                    <li className={best.card_text}>Powerful creations for the practice safe design creations for the prac.</li>
                                </ul>
                                <div className={best.line}></div>
                            </div>
                            <div className={best.cardfirst}>
                                <ul className={best.card}>
                                    <img className={best.card__img} src={besticon} />
                                    <li className={best.card_text1}>Crafted with detail</li>
                                    <li className={best.card_text}>Powerful creations for the practice safe design creations for the prac.</li>
                                </ul>
                                <div className={best.line}></div>
                            </div>
                            <div className={best.cardfirst}>
                                <ul className={best.card}>
                                    <img className={best.card__img} src={besticon} />
                                    <li className={best.card_text1}>Crafted with detail</li>
                                    <li className={best.card_text}>Powerful creations for the practice safe design creations for the prac.</li>
                                </ul>
                                <div className={best.line}></div>
                            </div>
                        </div>
                        <div className={index.flex}>
                            <div className={best.cardfirst}>
                                <ul className={best.card}>
                                    <img className={best.card__img} src={besticon} />
                                    <li className={best.card_text1}>Crafted with detail</li>
                                    <li className={best.card_text}>Powerful creations for the practice safe design creations for the prac.</li>
                                </ul>
                                <div className={best.line}></div>
                            </div>
                            <div className={best.cardfirst}>
                                <ul className={best.card}>
                                    <img className={best.card__img} src={besticon} />
                                    <li className={best.card_text1}>Crafted with detail</li>
                                    <li className={best.card_text}>Powerful creations for the practice safe design creations for the prac.</li>
                                </ul>
                                <div className={best.line}></div>
                            </div>
                            <div className={best.cardfirst}>
                                <ul className={best.card}>
                                    <img className={best.card__img} src={besticon} />
                                    <li className={best.card_text1}>Crafted with detail</li>
                                    <li className={best.card_text}>Powerful creations for the practice safe design creations for the prac.</li>
                                </ul>
                                <div className={best.line}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </>);



}
export default Best;