import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import Account from "../../components/settings/Account";
import Payment from "../../components/settings/Payment";

const headings = ["Account", "Payment"];

function Settings() {
  const [show, setShow] = useState("Account");
  //1. get user
  const { loading, error, userData } = useUser("user");

  if (loading) return "loading...";

  if (error) return "There is an error";

  return (
    <>
      <div className="col-md-9 col-lg-7">
        <h4>Settings</h4>
        <div className="list-inline ms-0 my-4">
          {headings.map((heading) => (
            <a
              onClick={() => setShow(heading)}
              href="#"
              className={`list-item text-decoration-none h5 ms-4 ${
                heading == show ? "active" : "text-muted"
              }`}>
              {heading}
            </a>
          ))}
        </div>
        {show == "Account" && <Account />}
        {show == "Payment" && <Payment userData={userData} />}
      </div>
    </>
  );
}

export default Settings;
