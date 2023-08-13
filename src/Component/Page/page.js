import index from '../../index.module.css'
import page from './page.module.css'

export const Page = () => {
    return (
        <div div className={page.wrapper}>
            <div className={index.container}>
                <h1 className={page.text_content}>
                    People have tried to predict the future since the dawn of time.
                </h1>
                <button className={page.button}>Get Started</button>
            </div>


        </div>
    );
}
export default Page;