import React, { useState } from "react";

export default function MiniProject() {
  // lay du lieu tren local ve
  const [todo, setTodo] = useState("");
  //   const [check, setCheck] = useState(false);
  const [todos, setTodos] = useState(() => {
    const jobLocal = JSON.parse(localStorage.getItem("jobs")) || [];
    return jobLocal;
  });

  // change
  const handleChange = (event) => {
    setTodo(event.target.value);
    // setCheck(event.target.value);
  };

  // submit
  const hanldeSubmit = (e) => {
    e.preventDefault();
    const newTodo = [...todos, todo];
    // cap nhat lai state
    setTodos(newTodo);
    // luu len local
    localStorage.setItem("jobs", JSON.stringify(newTodo));
    // clear o input
    setTodo("");
  };

  // delete
  const handleDelete = (index) => {
    const newTodo = todos.filter((value, i) => i !== index);
    localStorage.setItem("jobs", JSON.stringify(newTodo));
    setTodos(newTodo);
  };
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center
              h-100"
          >
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    MINI PROJECT TODO LIST
                  </h3>
                  <form
                    className="d-flex justify-content-center
                              align-items-center mb-4"
                    onSubmit={(e) => hanldeSubmit(e)}
                  >
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form2"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Them cong viec"
                        value={todo}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info
                                  ms-2"
                    >
                      Thêm
                    </button>
                  </form>
                  {/* Tabs navs */}
                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả công việc</a>
                    </li>
                  </ul>
                  {/* Tabs navs */}
                  {/* Tabs content */}
                  <div className="tab-content">
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        {todos.map((todo, i) => (
                          <li
                            key={i}
                            className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          rounded justify-content-between"
                            style={{ backgroundColor: "#f4f6f7" }}
                          >
                            <div>
                              <input
                                className="form-check-input
                                                  me-2"
                                type="checkbox"
                                defaultChecked=""
                                // onChange={handleChange}
                                // value={check}
                              />
                              <span>{todo}</span>
                            </div>
                            <div>
                              <a
                                href="#!"
                                className="text-info"
                                title="Sửa công việc"
                              >
                                <i
                                  className="fas
                                                      fa-pencil-alt
                                                      me-3"
                                />
                              </a>
                              <a
                                href="#!"
                                className="text-danger"
                                title="Xóa công việc"
                              >
                                <i
                                  className="fas
                                                      fa-trash-alt"
                                  onClick={() => handleDelete(i)}
                                />
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Tabs content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
