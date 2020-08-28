import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



function Footer() {
    return(
        <footer className="page-footer font-small teal pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-7 mt-md-0 mt-3">
                        <h4 class="text-uppercase font-weight-bold">About/关于本网站</h4>
                        <p class="aboutPage-text">
                        This website is a personal blog, mainly to record the process of learning web development by myself. During the learning process, I will continue to add projects completed by myself and my own learning experience. This website was developed by using React.
                        </p>
                        <p class="aboutPage-text">
                        本网站是个人博客, 主要是为了记录自己学习web开发的过程, 会在学习过程中持续添加自己完成的Project,以及自己的学习心得。本网站使用React进行开发。
                        </p>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3" />
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h4 class="text-uppercase font-weight-bold">address/地址</h4>
                            <div className="footer-address">
                                <p>24 south 1 Yihuan Rd. Chengdu</p>
                                <p>成都市武侯区一环路南一段24号四川大学望江校区</p>
                                <p>610065</p>
                            </div>
                    </div>
                    <div className="col-md-2">
                        <h4 class="text-uppercase font-weight-bold">Contact/联系我</h4>
                        <div className="footer-contact">
                                <p>Tel/电话: &nbsp;(+86)155-2079-0612</p>
                                <p>Email/邮箱: <br/>  &nbsp;452000761@qq.com <br/>  
                                    cmchenming13@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">©2020 Copyright Ming Chen
            </div>
        </footer>
   
    )
}



export default Footer;