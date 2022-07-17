import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import CategorySelect from "../../components/ui/CategorySelect";

const heads = [
  {
    name: "PhD Alex Coleman",
    img: "user3.jpg",
    email: "alex@research.com",
    phone: "+1 (505) 4865 847",
  },
  {
    name: "James Malvin",
    img: "user2.jpg",
    email: "james@research.com",
    phone: "+1 (505) 4865 847",
  },
  {
    name: "Alice Croose",
    img: "user5.jpg",
    email: "alice@research.com",
    phone: "+1 (505) 4865 847",
  },
  {
    name: "Gilbert Hasford",
    img: "user4.jpg",
    email: "gilbert@research.com",
    phone: "+1 (505) 4865 847",
  },
  {
    name: "Douglas Header",
    img: "user1.jpg",
    email: "douglas@research.com",
    phone: "+1 (505) 4865 847",
  },
];


function ContactUs() {
  const [category, setCategory] = useState()
  return (
    <>
      <Layout title="Contact Us">
        <Header />
        <div className="container">
          <div className="col-md-11 col-lg-8 col-xl-7 d-flex align-items-center pt-3 pb-1 pb-md-3">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p className="mb-2 small">CONTACT US</p>
              <h3
                className="display-s fs-3 pulse animated fw-normal"
                data-bss-disabled-mobile="true">
                We are here to help, Lets talk
              </h3>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-2 pt-xl-3">
          <div className="card-group row">
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0 py-2">
              <div className="card-body p-md-2 p-xl-3">
                <h6 className="text-primary card-title pb-2">ADDRESS</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="fw-normal">ABC 24 STREET MANHATAN</h6>
                </div>
              </div>
            </div>
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0 py-2">
              <div className="card-body p-md-2 p-xl-3">
                <h6 className="text-dark card-title pb-0">PHONE AND EMAIL</h6>
                <a
                  className="d-flex justify-content-between align-items-center text-decoration-none"
                  href="#">
                  <h6 className="fw-normal mb-0">info@company.com</h6>
                  <MdArrowForward size={20} className="ms-3" />
                </a>
                <a
                  className="d-flex justify-content-between align-items-center text-decoration-none"
                  href="#">
                  <h6 className="fw-normal mb-0">+1(505) 8576 857</h6>
                  <MdArrowForward size={20} className="ms-3" />
                </a>
              </div>
            </div>
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0 py-2">
              <div className="card-body p-md-2 p-xxl-3">
                <h6 className="text-primary card-title pb-0">SOCIALS</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <a
                    className="d-flex justify-content-between align-items-center text-decoration-none"
                    href="#">
                    <h6 className="fw-normal mb-0">LinkedIn&nbsp;</h6>
                    <MdArrowForward size={20} className="ms-3" />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <a
                    className="d-flex justify-content-between align-items-center text-decoration-none"
                    href="#">
                    <h6 className="fw-normal mb-0">facebook</h6>
                    <MdArrowForward size={20} className="ms-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pb-4 pb-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col px-0">
              <div className="card rounded-0 border-0">
                <iframe
                  allowfullscreen=""
                  frameborder="0"
                  src="https://cdn.bootstrapstudio.io/placeholders/map.html"
                  width="100%"
                  height="400"></iframe>
                <div className="card-img-overlay container">
                  <div className="mt-3">
                    <h6 className="ms-3 mb-0">LEARN MORE</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container px-md-0 py-3 py-md-5">
            <div className="row">
              <div className="col-md-4">
                <h1 className="display-5 fs-3 pulse animated border-top border-3 border-primary py-3">
                  Heads
                </h1>
                <CategorySelect category={category} setCategory={setCategory} />
              </div>
              <div className="col-md-8 d-flex align-items-center pt-1 px-lg-3">
                <div className="mt-md-4 mt-lg-5 row w-100">
                  {heads?.map((head) => (
                    <div className="col-md-6 d-flex justify-content-start align-items-center mb-5">
                      <div>
                        <img
                          className="img-fluid"
                          src={`/images/${head?.img}`}
                          width="100px"
                        />
                      </div>
                      <div className="ms-4">
                        <h5 className="mb-0">{head?.name}</h5>
                        <h6 className="fw-normal text-primary mb-0">
                          {head?.phone}
                        </h6>
                        <h6 className="fw-normal text-primary">
                          {head?.email}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  );
}

export default ContactUs;
