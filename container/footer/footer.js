import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
  
          <footer
            className="footer-navbar-wrapper footer-default ng-scope"
            role="contentinfo"
            data-ng-controller="footerController"
          >
            <div className="sr-only" role="heading" aria-level="2">
              Footer navigation
            </div>
            <div className="container">
              <div className="footer-items">
                <div>
                  <ul className="footer-list">
                    <li className="footer-list-item">
                      <Link className="footer-list-link" href="/FooterPages/About_us" target="_self">
                        About Us
                      </Link>
                    </li>
                    <li className="footer-list-item">
                      <Link className="footer-list-link" href="/FooterPages/WorkFlow">
                        How it Works
                      </Link>
                    </li>
                    <li className="footer-list-item">
                      <Link className="footer-list-link" href="" target="_self">
                        Community
                      </Link>
                    </li>
                  </ul>
                </div>
               
                <div>
                  <ul className="footer-list">
                    <li className="footer-list-item">
                      <a className="footer-list-link" href="" target="_self">
                        Terms of Service
                      </a>
                    </li>
                    <li className="footer-list-item">
                      <Link className="footer-list-link" href="/FooterPages/Privacy" target="_self">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="footer-list-item">
                      <a className="footer-list-link" href="" target="_self">
                        Accessibility
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="footer-list">
                    <li className="footer-list-item">
                      <a className="footer-list-link" href="" target="_self">
                        Desktop App
                      </a>
                    </li>
                    <li className="footer-list-item">
                      <a className="footer-list-link" href="" target="_self">
                        Cookie Policy
                      </a>
                    </li>
                    <li className="footer-list-item">
                      <a className="footer-list-link" href="" target="_self">
                        Enterprise Solutions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
  );
};

export default Footer;
