import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "../Assets/Images/github.png";

function Footer() {
  return (
    <div class="container ">
    <footer class="d-flex bg-dark flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
        </a>
        <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><Link class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></Link></li>
        <li class="ms-3"><Link class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></Link></li>
        <li class="ms-3"><Link class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></Link></li>
        </ul>
    </footer>
    </div>
);
}

export default Footer;


