import index from '../../index.module.css'
import time from './tim.module.css'
import timimage from '../img/Testimonial.png'
import timlogo from '../img/Logo.svg'
import userimg from '../img/userimg.svg'


export const Time = () => {
    return (
        <>
            <div className={time.section__wrapper}>
                <div className={index.container}>
                    <div className={time.logo}>
                        <img src={timlogo} />
                    </div>
                    <div className={time.text__content}>
                        <h1>“Always a pleasure to work with The Agency Creative. Such professional and happy people and you know you’ll receive a quick innovative and no fuss service.”</h1>
                    </div>
                    <div className={time.user_info_wrp}>
                        <div className={time.userimg} >
                            <img src={userimg} />
                        </div>
                        <div className={time.userinfo}>
                            <div className={time.username}>Johnatan Doe </div>
                            <div className={time.exspert}>Web Designer.</div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}
export default Time