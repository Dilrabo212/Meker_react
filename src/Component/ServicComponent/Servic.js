import index from '../../index.module.css'
import servis from "./Servis.module.css"

import cardicon from '../img/card1.svg'
import cardicon2 from '../img/cardicon2.svg'
export const Servis = () => {
    return (<>
        <div className={servis._section_wrep}>
            <div className={index.container}>
                <div className={servis.text_maen}>
                    <h1 className={servis.section__h1}>We provide great services</h1>
                    <p className={servis.section__p}>We help people to think independent. Be the boss of your brand and be the storyteller. An appropriate approach.</p>
                </div>
                <div className={index.flex}>
                    <div className={servis.section__card}>
                        <ul>
                            <img className={servis.img} src={cardicon} />
                            <li className={servis.bold_text__card}>Web Design</li>
                            <li className={servis.p__text__card}>Powerful creations for the practice safe design.</li>
                        </ul>
                    </div>
                    <div className={servis.section__card}>
                        <ul>
                            <img className={servis.img} src={cardicon2} />
                            <li className={servis.bold_text__card}>Web Design</li>
                            <li className={servis.p__text__card}>Powerful creations for the practice safe design.</li>
                        </ul>
                    </div>
                    <div className={servis.section__card}>
                        <ul>
                            <img className={servis.img} src={cardicon} />
                            <li className={servis.bold_text__card}>Web Design</li>
                            <li className={servis.p__text__card}>Powerful creations for the practice safe design.</li>
                        </ul>
                    </div>
                    <div className={servis.section__card}>
                        <ul>
                            <img className={servis.img} src={cardicon2} />
                            <li className={servis.bold_text__card}>Web Design</li>
                            <li className={servis.p__text__card}>Powerful creations for the practice safe design.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Servis;