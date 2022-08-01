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
  const [category, setCategory] = useState();
  return (
    <>
      <Layout title="Contact Us">
        <Header />
        <div className="container">
          <div className="col-md-11 col-lg-8 col-xl-7 d-flex align-items-center pt-3 pb-1 pb-md-3">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p className="mb-2 small">CONTACT US</p>
              <h3
                className="pulse animated fw-normal"
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
                <h6 className="card-title mb-2">ADDRESS</h6>
                <div className="">
                  <h6 className="fw-normal">Rosa Luxemburg</h6>
                  <h6 className="fw-normal">Straat Amsterdam Netherlands</h6>
                </div>
              </div>
            </div>
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0 py-2">
              <div className="card-body p-md-2 p-xl-3">
                <h6 className="card-title pb-0">PHONE AND EMAIL</h6>
                <a
                  className="d-flex justify-content-between align-items-center text-decoration-none mb-2"
                  href="mailto:info@researchandplanners.eu">
                  <h6 className="fw-normal mb-0">
                    info@researchandplanners.eu
                  </h6>
                  <MdArrowForward size={20} className="ms-3" />
                </a>
                <a
                  className="d-flex justify-content-between align-items-center text-decoration-none"
                  href="tel:+31685119357">
                  <h6 className="fw-normal mb-0">+31685119357</h6>
                  <MdArrowForward size={20} className="ms-3" />
                </a>
              </div>
            </div>
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0 py-2">
              <div className="card-body p-md-2 p-xl-3">
                <h6 className="card-title pb-0">SOCIALS</h6>
                <a
                  className="d-flex justify-content-between align-items-center text-decoration-none mb-2"
                  href="#">
                  <h6 className="fw-normal mb-0">LinkedIn&nbsp;</h6>
                  <MdArrowForward size={20} className="ms-3" />
                </a>
                <a
                  className="d-flex justify-content-between align-items-center text-decoration-none"
                  href="#">
                  <h6 className="fw-normal mb-0">Facebook</h6>
                  <MdArrowForward size={20} className="ms-3" />
                </a>
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
                  src="https://www.google.com/maps/place/Oklahoma+City+National+Memorial+%26+Museum/@35.5189236,-97.5686736,12.3z/data=!4m13!1m7!3m6!1s0x87ad8a547ef8d281:0x33a21274d14f3a9d!2sOklahoma+City,+OK,+USA!3b1!8m2!3d35.4675602!4d-97.5164276!3m4!1s0x87b2172e2e45cdab:0x4053cf454d77320f!8m2!3d35.4731496!4d-97.5170593?hl=en"
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
                <h3 className="pulse animated border-top border-3 border-primary py-3">
                  Heads
                </h3>
                <div className="mb-4">
                  <CategorySelect
                    categoryExist={category}
                    setCategory={setCategory}
                  />
                </div>
              </div>
              <div className="col-md-8 d-flex align-items-center pt-1 px-lg-3">
                <div className="mt-md-4 mt-lg-5 row w-100">
                  {heads?.map((head) => (
                    <div className="col-md-6 d-flex justify-content-start align-items-top mb-5">
                      <div>
                        <img
                          className="img-fluid"
                          src={`/images/${head?.img}`}
                          width="100px"
                        />
                      </div>
                      <div className="ms-4">
                        <h6 className="mb-0">{head?.name}</h6>
                        <h6 className="fw-normal text-muted mb-0">
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
