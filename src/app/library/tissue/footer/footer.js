import AlloyLinkLogo from "../../cell/link/link-logo";
import AlloyIconBar from "../bar/icon-bar";
import AlloyLinkBar from "../bar/link-bar";

export default function AlloyFooter(props){
    return (
        <footer className={props.footer.className}>
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-lg-6 mx-auto text-center my-5">
                        {/* Logo */}
                        <AlloyLinkLogo linkLogo={props.footer.logo} />
                        <p className="mt-3 text-white">{props.footer.title}</p>
                        {/* Links */}
                        <AlloyLinkBar linkBar={props.footer.pageLinks} />
                        {/* <ul className="nav justify-content-center text-primary-hover mt-3 mt-md-0">
                            {props.footer.link.map((i, index) => (
                                <li key={index} className="nav-item">
                                    <AlloyLink link={i} />
                                </li>
                            ))}
                        </ul> */}
                        {/* Social media button */}
                        <AlloyIconBar iconBar={props.footer.socialLinks} />
                        {/* <ul className="list-inline mt-3 mb-0">
                            {props.footer.social.map((i, index) => (
                                <li key={index} className="list-inline-item">
                                    <AlloyLinkIcon linkIcon={i} />
                                </li>
                            ))}
                        </ul> */}
                        {/* Bottom footer link */}
                        <div className="mt-3 text-white">
                            ©2021 <a href="https://www.alloymobile.com/" className="text-reset btn-link text-primary-hover" target="_blank" rel="noopener noreferrer">AlloyMobile</a>. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}