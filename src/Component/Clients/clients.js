import index from '../../index.module.css'
import client from './clients.module.css'
import clientsimg from '../img/client.png'

export const Client = () => {

    return (
        <>
            <div className={client.wrapper}>
                <div className={index.container}>
                    <div className={index.flex}>
                        <div className={client.text__content}>


                            <h1 className={client.content__h1}>Johnatan Doe </h1>

                            <div className={client.flex__wrap}>
                                <p className={client.content__p}>Marketing Specialist</p>
                                <div className={client.line}></div>
                            </div>
                            <p className={client.content__p}>To make your web design company famous in the little
                                we are here to provide you as many as catchy and useful
                                web design company will surely help your company.</p>
                            <button className={client.button}>Learn More</button>
                        </div>

                        <div className={client.img__content}>
                            <img className={client.img} src={clientsimg} />
                        </div>

                    </div>








                </div>

            </div>
        </>
    );


}
export default Client;