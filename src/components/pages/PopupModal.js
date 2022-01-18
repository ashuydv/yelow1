import React from "react";
import "../style.css";

const PopupModal = () => {
  return (
    <div id="modal" className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-8">
            <h5 className="mb-2">Order Details</h5>
            <div className="row mb-2">
              <div className="col">
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <img
                    src="https:/dummyimage.com/60x60"
                    className="img-fluid rounded-circle border border-success"
                    alt=""
                  />
                  <p className="my-2">Processing</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center justify-content-center flex-column ">
                  <img
                    src="https:/dummyimage.com/60x60"
                    className="img-fluid rounded-circle border border-success"
                    alt=""
                  />
                  <p className="my-2">Processing</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center justify-content-center flex-column ">
                  <img
                    src="https:/dummyimage.com/60x60"
                    className="img-fluid rounded-circle border border-success"
                    alt=""
                  />
                  <p className="my-2">Processing</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center justify-content-center flex-column ">
                  <img
                    src="https:/dummyimage.com/60x60"
                    className="img-fluid rounded-circle border border-success"
                    alt=""
                  />
                  <p className="my-2">Processing</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center justify-content-center flex-column ">
                  <img
                    src="https:/dummyimage.com/60x60"
                    className="img-fluid rounded-circle border border-success"
                    alt=""
                  />
                  <p className="my-2">Processing</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center justify-content-center flex-column ">
                  <img
                    src="https:/dummyimage.com/60x60"
                    className="img-fluid rounded-circle border border-success"
                    alt=""
                  />
                  <p className="my-2">Processing</p>
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <div className="d-flex align-items-center justify-content-start border border-success px-0 p-2">
                  <img
                    src="https:/dummyimage.com/100"
                    className="img-fluid mx-2"
                    alt=""
                  />
                  <div>
                    <p className="mb-1">Nescafe Gold</p>
                    <p className="mb-1">Lorem, ipsum dolor...</p>
                    <a className="mb-1" href="#">
                      Nescafe                    </a>
                    <p className="mb-1">Price: 25$</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center justify-content-start border border-success px-0 p-2">
                  <img
                    src=""
                    className="img-fluid mx-2"
                    alt=""
                  />
                  <div>
                    <p className="mb-1">Nescafe Gold</p>
                    <p className="mb-1">Lorem, ipsum dolor...</p>
                    <p className="mb-1">
                      https://nescafe.com
                    </p>
                    <p className="mb-1">Price: 25$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-2 pt-3">
              <div className="col-lg-4 px-1">
                <img
                  src="https://dummyimage.com/200"
                  className="img-fluid border border-success"
                  alt=""
                />
              </div>
              <div className="col-lg-8">
                <div className="row mb-1 border border-success px-0 p-2">
                  <div className="col-lg-4">
                    <div className="card">
                      <h1>helo</h1>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <p className="mb-0">
                      <div className="form-group">
                        <label for=""></label>
                        <select className="form-control" name="" id="">
                          <option></option>
                          <option></option>
                          <option></option>
                        </select>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <p className="mb-1 border border-success p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="mb-1 border border-success p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h5 className="mb-2">Chat With Executive</h5>
            <div className="card chat-box border-primary">
              <div className="card-body border border-primary rounded px-2 py-0 pt-4 h-20">
                <div className="chat-conversation">
                  <ul className="list-unstyled mb-0">
                    <li className="">
                      <div className="conversation-list">
                        <div className="ctext-wrap">
                          <div className="conversation-name">Steven Franklin</div>
                          <p>Hello!</p>
                          <p className="chat-time mb-0">
                            <i className="bx bx-time-five align-middle me-1"></i>{" "}
                            10:37
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="right">
                      <div className="conversation-list">
                        <div className="dropdown">
                          <a
                            href="#"
                            aria-haspopup="true"
                            className="dropdown-toggle"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </a>
                          <div
                            tabIndex="-1"
                            role="menu"
                            aria-hidden="true"
                            className="dropdown-menu-end dropdown-menu"
                          >
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Copy
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Save
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Forward
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                        <div className="ctext-wrap">
                          <div className="conversation-name">Henry Wells</div>
                          <p>Wow that's great</p>
                          <p className="chat-time mb-0">
                            <i className="bx bx-time-five align-middle me-1"></i>{" "}
                            10:37
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="conversation-list">
                        <div className="ctext-wrap">
                          <div className="conversation-name">Steven Franklin</div>
                          <p>Hello!</p>
                          <p className="chat-time mb-0">
                            <i className="bx bx-time-five align-middle me-1"></i>{" "}
                            10:37
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="right">
                      <div className="conversation-list">
                        <div className="dropdown">
                          <a
                            href="#"
                            aria-haspopup="true"
                            className="dropdown-toggle"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </a>
                          <div
                            tabIndex="-1"
                            role="menu"
                            aria-hidden="true"
                            className="dropdown-menu-end dropdown-menu"
                          >
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Copy
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Save
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Forward
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                        <div className="ctext-wrap">
                          <div className="conversation-name">Henry Wells</div>
                          <p>Wow that's great</p>
                          <p className="chat-time mb-0">
                            <i className="bx bx-time-five align-middle me-1"></i>{" "}
                            10:37
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="conversation-list">
                        <div className="ctext-wrap">
                          <div className="conversation-name">Steven Franklin</div>
                          <p>Hello!</p>
                          <p className="chat-time mb-0">
                            <i className="bx bx-time-five align-middle me-1"></i>{" "}
                            10:37
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="right">
                      <div className="conversation-list">
                        <div className="dropdown">
                          <a
                            href="#"
                            aria-haspopup="true"
                            className="dropdown-toggle"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </a>
                          <div
                            tabIndex="-1"
                            role="menu"
                            aria-hidden="true"
                            className="dropdown-menu-end dropdown-menu"
                          >
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Copy
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Save
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Forward
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                        <div className="ctext-wrap">
                          <div className="conversation-name">Henry Wells</div>
                          <p>Wow that's great</p>
                          <p className="chat-time mb-0">
                            <i className="bx bx-time-five align-middle me-1"></i>{" "}
                            10:37
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="conversation-list">
                        <div className="ctext-wrap">
                          <div className="conversation-name">Steven Franklin</div>
                          <p>Hello!</p>
                          <p className="chat-time mb-0">
                            <i className="bx bx-time-five align-middle me-1"></i>{" "}
                            10:37
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="right">
                      <div className="conversation-list">
                        <div className="dropdown">
                          <a
                            href="#"
                            aria-haspopup="true"
                            className="dropdown-toggle"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </a>
                          <div
                            tabIndex="-1"
                            role="menu"
                            aria-hidden="true"
                            className="dropdown-menu-end dropdown-menu"
                          >
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Copy
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Save
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Forward
                            </a>
                            <a
                              href="#"
                              tabIndex="0"
                              role="menuitem"
                              className="dropdown-item"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                        <div className="ctext-wrap">
                          <div className="conversation-name">Henry Wells</div>
                          <p>Wow that's great</p>
                          <p className="chat-time mb-0">
                            <i className="bx bx-time-five align-middle me-1"></i>{" "}
                            10:37
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-2 chat-input-section mt-2">
                  <div className="row">
                    <div className="col">
                      <div className="position-relative">
                        <input
                          type="text"
                          className="form-control chat-input"
                          placeholder="Enter Message..."

                        />
                        {/* <div className="chat-input-links">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="/chat">
                                <i
                                  className="mdi mdi-emoticon-happy-outline"
                                  id="Emojitooltip"
                                ></i>
                              </a>
                            </li>{" "}
                            <li className="list-inline-item">
                              <a href="/chat">
                                <i
                                  className="mdi mdi-file-image-outline"
                                  id="Imagetooltip"
                                ></i>
                              </a>
                            </li>{" "}
                            <li className="list-inline-item">
                              <a href="/chat">
                                <i
                                  className="mdi mdi-file-document-outline"
                                  id="Filetooltip"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                    <div className="col-auto col">
                      <button
                        type="button"
                        className="btn-rounded chat-send btn btn-primary"
                      >
                        <i className="mdi mdi-send"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary">
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
