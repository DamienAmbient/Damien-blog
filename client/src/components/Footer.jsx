import {
    Footer,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsGithub,
    BsDribbble,
} from "react-icons/bs";

export default function FooterCom() {
    return (
        <Footer container className=" border border-t-8 border-teal-500">
            <div className=" w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className=" mt-5">
                        <Link
                            to="/"
                            className=" self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
                        >
                            <span className=" px-2 py-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-white">
                                Damien's
                            </span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterTitle title="About"></FooterTitle>
                            <FooterLinkGroup col>
                                <FooterLink
                                    href="https://omnifood-fp7.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Omnifood
                                </FooterLink>
                                <FooterLink
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Some link
                                </FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Follow us"></FooterTitle>
                            <FooterLinkGroup col>
                                <FooterLink
                                    href="https://omnifood-fp7.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Omnifood
                                </FooterLink>
                                <FooterLink
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Some link
                                </FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Legal"></FooterTitle>
                            <FooterLinkGroup col>
                                <FooterLink href="#">Privacy Policy</FooterLink>
                                <FooterLink href="#">
                                    Terms &amp; Conditions
                                </FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider></FooterDivider>
                <div className=" w-full sm:flex sm: items-center sm:justify-between">
                    <FooterCopyright
                        href="#"
                        by="Damien's blog"
                        year={new Date().getFullYear()}
                    ></FooterCopyright>
                    <div className="flex gap-6 sm:mt0 mt-4 sm:justify-center">
                        <FooterIcon href="#" icon={BsFacebook}></FooterIcon>
                        <FooterIcon href="#" icon={BsInstagram}></FooterIcon>
                        <FooterIcon href="#" icon={BsTwitter}></FooterIcon>
                        <FooterIcon href="#" icon={BsGithub}></FooterIcon>
                        <FooterIcon href="#" icon={BsDribbble}></FooterIcon>
                    </div>
                </div>
            </div>
        </Footer>
    );
}
