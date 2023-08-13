import index from '../../index.module.css'
import style from './footer.module.css'
import icon1 from '../img/footerIcons/facebook.svg'
import icon2 from '../img/footerIcons/tweet.svg'
import icon3 from '../img/footerIcons/whatsup.svg'
import icon4 from '../img/footerIcons/insta.svg'


export const Footer = () => {

    return (
        <>
            <div className={style.big__footer__wrapper}>
                <div className={index.container}>

                    <div className={index.flex}>
                        <div className={style.price__card}>
                            <h3 className={style.named}>Freelancer</h3>
                            <div className={style.priced}><span><sup>$</sup>19<sub>/mo</sub> </span> </div>
                            <ul className={style.contentp}>
                                <li className={style.midle_text_card}>5 Psd fles included</li>
                                <li className={style.midle_text_card}>24 hours free support</li>
                                <li className={style.midle_text_card}>Multiple features installed</li>
                                <li className={style.midle_text_card}>100 Elements PSD + Al</li>
                            </ul>
                            <button className={style.button}>Subscribe</button>
                        </div>
                        <div className={style.price__card}>
                            <h3 className={style.named}>Freelancer</h3>
                            <div className={style.priced}><span><sup>$</sup>19<sub>/mo</sub> </span> </div>
                            <ul className={style.contentp}>
                                <li className={style.midle_text_card}>5 Psd fles included</li>
                                <li className={style.midle_text_card}>24 hours free support</li>
                                <li className={style.midle_text_card}>Multiple features installed</li>
                                <li className={style.midle_text_card}>100 Elements PSD + Al</li>
                            </ul>
                            <button className={style.button}>Subscribe</button>
                        </div>
                        <div className={style.price__card}>
                            <h3 className={style.named}>Freelancer</h3>
                            <div className={style.priced}><span><sup>$</sup>19<sub>/mo</sub> </span> </div>
                            <ul className={style.contentp}>
                                <li className={style.midle_text_card}>5 Psd fles included</li>
                                <li className={style.midle_text_card}>24 hours free support</li>
                                <li className={style.midle_text_card}>Multiple features installed</li>
                                <li className={style.midle_text_card}>100 Elements PSD + Al</li>
                            </ul>
                            <button className={style.button}>Subscribe</button>
                        </div>
                        <div className={style.price__card}>
                            <h3 className={style.named}>Freelancer</h3>
                            <div className={style.priced}><span><sup>$</sup>19<sub>/mo</sub> </span> </div>
                            <ul className={style.contentp}>
                                <li className={style.midle_text_card}>5 Psd fles included</li>
                                <li className={style.midle_text_card}>24 hours free support</li>
                                <li className={style.midle_text_card}>Multiple features installed</li>
                                <li className={style.midle_text_card}>100 Elements PSD + Al</li>
                            </ul>
                            <button className={style.button}>Subscribe</button>
                        </div>


                    </div>
                    <div className={style.line}></div>
                    <div className={index.flex}>
                        <div className={style.navigatio__navbar}>

                            <ul className={index.flex}>
                                <li>Home</li>
                                <li>Privacy</li>
                                <li>Terms & Conditions</li>
                                <li>About us</li>
                                <li>Contact us</li>
                            </ul>

                        </div>
                        <div className={index.flex}>
                            <img className={style.icons} src={icon1} />
                            <img className={style.icons} src={icon2} />
                            <img className={style.icons} src={icon3} />
                            <img className={style.icons} src={icon4} />
                        </div>
                    </div>
                    <h3 className={style.mini__text}>@ A new era 2016. Awesome wireframe  by Andrei Dorin</h3>
                </div>



            </div>


        </>
    );
}
export default Footer;