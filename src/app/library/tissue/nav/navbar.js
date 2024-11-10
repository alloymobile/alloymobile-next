import AlloyLinkLogo from "../../cell/link/link-logo";
import AlloyLinkIconBar from "../bar/link-icon-bar";

export default function AlloyNavbar(props){
    return (
        <nav className = {props.navBar.className}>
            <div className="container-fluid">
            <AlloyLinkLogo linkLogo={props.navBar.logo} />

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

 
            <div className="navbar-collapse collapse justify-content-end" id="navbarCollapse">
                <AlloyLinkIconBar linkIconBar={props.navBar.linkIconBar} />
            </div>


                {/* <div className={props.navbar.container.className}>
                    <div className={props.navbar.brand.className}>
                        {props.navbar.brand.text}
                    </div>
                    <div className={props.navbar.links.className}>
                        {props.navbar.links.map((link, index) => (
                            <a key={index} href={link.href} className={link.className}>
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div> */}
            </div>
        </nav>
    )
}