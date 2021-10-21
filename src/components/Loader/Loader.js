import Load from "react-loader-spinner";
import style from './Loader.module.css'

const Loader = () => {
    return (
        <Load className={style.loader} type="Rings" color="#5757c2" height={100} width={100} />
    );
}

export default Loader;
