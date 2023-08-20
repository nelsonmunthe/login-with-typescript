import './HeaderModal.css';
const HeaderModal:React.FC<{title: string}> = (props) => {
    return(
        <div className="header-modal">
            <h1>{props.title}{process.env.NODE_ENV === 'development' && ' Development'}</h1>
        </div>
    )
};

export default HeaderModal;