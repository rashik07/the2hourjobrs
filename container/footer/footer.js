import React from "react";

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
                      <a className="footer-list-link" href="" target="_self">
                        About Us
                      </a>
                    </li>
                    <li className="footer-list-item">
                      <a className="footer-list-link" href="">
                        Feedback
                      </a>
                    </li>
                    <li className="footer-list-item">
                      <a className="footer-list-link" href="" target="_self">
                        Community
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="footer-list">
                    <li className="footer-list-item">
                      <a className="footer-list-link" href="" target="_self">
                        Trust, Safety &amp; Security
                      </a>
                    </li>
                    <li className="footer-list-item">
                      <a className="footer-list-link" href="" target="_self">
                        Help &amp; Support
                      </a>
                    </li>
                    <li className="footer-list-item">
                      <a className="footer-list-link" href="" target="_self">
                        {" "}
                        Foundation
                      </a>
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
                      <a className="footer-list-link" href="" target="_self">
                        Privacy Policy
                      </a>
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
