import index from '../../index.module.css'
import next from './next.module.css'
import image from '../img/image.png'
import play from '../img/vidioicon.svg'


export const Next = () => {

    return (

        <>
            <div className={next.content__wrap}>
                <div className={index.container}>
                    <div className={next.content__center}>
                        <h1 className={next.content__h1}>Watch how we work</h1>
                        <p className={next.content__p}>Capture more customers with a great brand recall. Whether you need a tising or as a tagline for your business, our slogan generator will help you come up with us.</p>
                        <img className={next.img} src={play} />
                    </div>

                </div>
            </div>

        </>
    );
}
export default Next