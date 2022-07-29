import React, { useEffect, useState } from "react";
import { useCrud } from "../../hooks/useCrud";
import Spinner from "../../components/ui/Spinner";
import { MdDelete, MdEdit, MdRefresh } from "react-icons/md";
import { useStorage } from "../../hooks/useStorage";

const roles = ["admin", "manager"];

function Admins() {
  const { data, allData, postLoading, postError, error, loading, message } =
    useCrud("all-admins", "/api/admins");

  const [members, setMembers] = useState([]);

  const { sessionStorage } = useStorage();

  //get members
  useEffect(() => {
    const mems = sessionStorage.getItem("all-payments");
    console.log(mems);
    if (mems) {
      setMembers(mems);
    }
  }, []);

  const [show, setShow] = useState();
  const [action, setAction] = useState(false); //set to prevent form spinner on delete

  const [admin, setAdmin] = useState(null);
  const [id, setId] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (admin?.id) {
      setId(admin?.id);
      setRole(admin?.role);
    }
  }, [admin]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      id,
      role,
    };

    console.log(body);

    admin?.name
      ? await data.updateData(body, `/api/admins/${admin?._id}`)
      : await data.addData(body, "/api/admins/create");
  };

  const deleteAdmin = async (id) => {
    setAction(true);
    console.log(id);
    await data.deleteData(`/api/admins/${id}`);
  };

  return (
    <>
      <h5>{admin?.id ? "Edit admin" : "Add admin"}</h5>
      {message && <p className="text-success">{message}</p>}
      {postError && <p className="text-danger">{postError}</p>}
      <div className="row">
        <div className="col-lg-5">
          <form className="row mb-4" onSubmit={handleSubmit}>
            <div className="">
              <div className="mb-3">
                <label htmlFor="role" className="mb-2" id="role">
                  Members
                </label>
                <select
                  className="form-select rounded-0"
                  name="member"
                  id="member"
                  value={id}
                  onChange={(e) => setId(e.target.value)}>
                  <option value="">--Select member--</option>
                  {members?.map((member) => (
                    <option value={member?.id}>{member?.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="role" className="mb-2" id="role">
                  Role
                </label>
                <select
                  className="form-select rounded-0"
                  name="role"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}>
                  <option value="">--Select role--</option>
                  {roles?.map((role) => (
                    <option value={role}>{role}</option>
                  ))}
                </select>
              </div>
              <div className="my-3 mt-4 d-flex justify-content-between">
                {admin?.id && (
                  <button
                    className="btn btn-light"
                    onClick={() => setAdmin(null)}>
                    Cancel
                  </button>
                )}

                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={postLoading || !id || !role}>
                  {postLoading && !action ? (
                    <Spinner className="ms-2" />
                  ) : (
                    <span className="">
                      {admin?.id ? "Save admin" : "Add admin"}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-7">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">Admins</h5>
                <button
                  className="btn btn-light my-3 ms-3"
                  onClick={() => data.getAllData("/api/admins")}>
                  <MdRefresh />
                </button>
              </div>

              <p className="card-text">Added admins</p>
              {allData?.length == 0 && (
                <p className="my-3">There are no admins</p>
              )}
              {allData?.length > 0 && (
                <div className="row">
                  <div className="col">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allData?.map((data) => (
                            <>
                              <tr key={data?._id}>
                                <td className="text-nowrap">{data?.name}</td>
                                <td className="text-nowrap">{data?.role}</td>
                                <td className="text-nowrap">
                                  <a
                                    href="#"
                                    onClick={() => setMember(data)}
                                    className="text-decoration-none">
                                    <MdEdit size={16} className="text-muted" />
                                  </a>
                                  <a
                                    className="ms-4"
                                    type="button"
                                    onClick={() => setShow(data?._id)}>
                                    <MdDelete
                                      size={16}
                                      className="text-muted"
                                    />
                                  </a>
                                </td>
                              </tr>
                              {show == data?._id && (
                                <tr className="mt-3 bg-light small">
                                  <td className="text-nowrap">
                                    <span>Are you sure</span>
                                    <a
                                      className="text-decoration-none ms-3"
                                      type="button"
                                      onClick={() => setShow()}>
                                      Cancel
                                    </a>
                                    <a
                                      className="ms-3 text-decoration-none text-danger"
                                      type="button"
                                      onClick={() => deleteAdmin(data?._id)}>
                                      {postLoading ? (
                                        <Spinner className="ms-2" />
                                      ) : (
                                        <span className="">Delete</span>
                                      )}
                                    </a>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              )}
                            </>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admins;
