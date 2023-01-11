
const Header = (props) => {
    return (<div id="header">
        <div id={props.id}>
            {props.content}
        </div>
    </div>
    );
}

export default Header;