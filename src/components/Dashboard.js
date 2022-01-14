import React from "react";
import "./style.css";

const VerticalSidebar = () => {
  return (
    <div>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box d-lg-none d-md-block">
                <a className="logo logo-dark" href="/">
                  <span className="logo-sm">
                    <img
                      src="/static/media/logo.a0143fa8.svg"
                      alt=""
                      height="22"
                    />
                  </span>
                </a>
                <a className="logo logo-light" href="/">
                  <span className="logo-sm">
                    <img
                      src="/static/media/logo-light.96c274da.svg"
                      alt=""
                      height="22"
                    />
                  </span>
                </a>
              </div>
              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 header-item"
                id="vertical-menu-btn"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>
              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </form>
              <div className="dropdown-mega d-none d-lg-block ms-2 dropdown">
                <button
                  aria-haspopup="true"
                  className="btn header-item dropdown-toggle"
                  aria-expanded="false"
                >
                  {" "}
                  Mega Menu <i className="mdi mdi-chevron-down"></i>
                </button>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  className="dropdown-megamenu dropdown-menu"
                >
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="font-size-14 mt-0">UI Components</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <a href="/dashboard">Lightbox</a>
                            </li>
                            <li>
                              <a href="/dashboard">Range Slider</a>
                            </li>
                            <li>
                              <a href="/dashboard">Sweet Alert</a>
                            </li>
                            <li>
                              <a href="/dashboard">Rating</a>
                            </li>
                            <li>
                              <a href="/dashboard">Forms</a>
                            </li>
                            <li>
                              <a href="/dashboard">Tables</a>
                            </li>
                            <li>
                              <a href="/dashboard">Charts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="font-size-14 mt-0">Applications</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <a href="/dashboard">Ecommerce</a>
                            </li>
                            <li>
                              <a href="/dashboard">Calendar</a>
                            </li>
                            <li>
                              <a href="/dashboard">Email</a>
                            </li>
                            <li>
                              <a href="/dashboard">Projects</a>
                            </li>
                            <li>
                              <a href="/dashboard">Tasks</a>
                            </li>
                            <li>
                              <a href="/dashboard">Contacts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="font-size-14 mt-0">Extra Pages</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <a href="/dashboard">Light Sidebar</a>
                            </li>
                            <li>
                              <a href="/dashboard">Compact Sidebar</a>
                            </li>
                            <li>
                              <a href="/dashboard">Horizontal layout</a>
                            </li>
                            <li>
                              <a href="/dashboard"> Maintenance</a>
                            </li>
                            <li>
                              <a href="/dashboard">Coming Soon</a>
                            </li>
                            <li>
                              <a href="/dashboard">Timeline</a>
                            </li>
                            <li>
                              <a href="/dashboard">FAQs</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="row">
                        <div className="col-sm-6">
                          <h5 className="font-size-14 mt-0">UI Components</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <a href="/dashboard">Lightbox</a>
                            </li>
                            <li>
                              <a href="/dashboard">Range Slider</a>
                            </li>
                            <li>
                              <a href="/dashboard">Sweet Alert</a>
                            </li>
                            <li>
                              <a href="/dashboard">Rating</a>
                            </li>
                            <li>
                              <a href="/dashboard">Forms</a>
                            </li>
                            <li>
                              <a href="/dashboard">Tables</a>
                            </li>
                            <li>
                              <a href="/dashboard">Charts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-5">
                          <div>
                            <img
                              src="/static/media/megamenu-img.8b069df4.png"
                              alt=""
                              className="img-fluid mx-auto d-block"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  type="button"
                  className="btn header-item noti-icon"
                  id="page-header-search-dropdown"
                >
                  <i className="mdi mdi-magnify"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="d-inline-block dropdown">
                <button
                  aria-haspopup="true"
                  className="btn header-item"
                  aria-expanded="false"
                >
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z"
                    alt="Yelow"
                    height="16"
                    className="me-1"
                  />
                </button>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  className="language-switch dropdown-menu-end dropdown-menu"
                >
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    className="notify-item none dropdown-item"
                  >
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAUIBgQBAv/EACkQAAIBAgQFBAMBAAAAAAAAAAECAwAEBQYREhUWVZTRExRRUiIxQXH/xAAaAQACAwEBAAAAAAAAAAAAAAAABgEDBwQC/8QAKREAAgEDAgUDBQEAAAAAAAAAAQIDAAQRIVQFEhMUkhWRkwYWNFNxgf/aAAwDAQACEQMRAD8AyzSSSMWZ2ZmbVmJJJJ/przc32aq04BgXRrDtk8V8PguW4Y5JrrDcNggiR3eR7eMKqqNST+NZfH9WxSukcdhKzuQqgMNSa2b1+ID8Z/epO3N9mo3N9mqlbC7yLiF/Lh8WHwRS+pshe5w4QpK2u3buK/idw0Aan/AMC6NYdsniui6+omsigueHSLzZ5SJFIOP5Xo8dVTyvZyqcA4bTQ/0VJe5vs1G5vs1VpwDAujWHbJ4o4BgXRrDtk8VyfeFvspPIVHr8W3f3qS9zfZq9WSSNgyuysraqwJBBH9FVnwDAujWHbJ4o4BgXRrDtk8UfeFvspPIUevRbZ/enFYLMM/D0ZbLD8QtPd3UbX07e3kUxsCm5VjaRwGAGm5K3tZWe1fFbO4w9cCTCgzBzcL6Tes4kDEuI2JJPyaW+ENbIl7JcdPRY+UO4U5LjUAnXFLkcqxTwBwSjNhsAkf7iluRsTytMbuC6ksPd2uIMDLd7bZxbFQFKkiMFtQdRWlshavcXN9Dhl5BLcNtmmlkt2icwnaoURO5BA+wFZmfIqJbotpiVuXnhMd0TAwOpZ9HTQjcdH0/KtLbPuugnLiWuxHT32sReZQw2hthLf5rTJxm74XcWkkNrFbo8VmoEglQu7FkY5xy5Oh0ql2w5m7h5WmkcEBHVUQEkDBNOKKKKQKsooooooqT+aMx9cv8AuH80c0Zj65f9w/mubEY40v75ERVVbiVVAGgAB/Qrl2r8Cto7S120PxrT6IoSAehH4LTPmjMfXL/uH80c0Zj65f8AcP5pZtX4FG1fgUdpa7aH41qejD+mPwWmfNGY+uX/AHD+aOaMx9cv+4fzSzavwKNq/Ao7S120PxrR0Yf0x+C0z5ozH1y/7h/NHNGY+uX/AHD+aWbV+BXVh0cb39ijorK1xErAjUEE/o0dna7aH41qDFCBnoR+C1//2Q=="
                      alt="Yelow"
                      className="me-1"
                      height="12"
                    />
                    <span className="align-middle">Spanish</span>
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    className="notify-item none dropdown-item"
                  >
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcCBQH/xAAlEAABAgILAQEAAAAAAAAAAAABAAIDUQUREhYXVFWjpNLiITL/xAAYAQEBAQEBAAAAAAAAAAAAAAAABwEDBf/EACURAAACCQUBAQAAAAAAAAAAAAABAgMEBREVVKPRFBZVkpTSUf/aAAwDAQACEQMRAD8AiL4sWI98SJFe57nEucSSST9JJK8tOmV3bs03kdyH2S7NN5Hch9l31bLVKe5D1JA/eEb/ADLMDhWnTKWnTK7t2abyO5D7Jdmm8juQ+yaxlqlPcgkD94Rv8yzA4Vp0ylp0yu7dmm8juQ+yXZpvI7kPsmsZapT3IJA/eEb/ADLMDhWnTK9ZFiw3siQ4r2va4FrgSCCPoIIXcuzTeR3IfZLs03kdyH2TVstUp7kEgfvCN/mWYFWRVjC8a5xfaYXjXOL7UunzqqraeBft0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkVpFt/wC3iRSoSU5SRgZlER+Iwi3UJJUJLIBEYRbqEkqEkgERhFuoSRn7YJlaSMTIv0wiP//Z"
                      alt="Yelow"
                      className="me-1"
                      height="12"
                    />
                    <span className="align-middle">German</span>
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    className="notify-item none dropdown-item"
                  >
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMGBwQI/8QAIxAAAgACCwEAAAAAAAAAAAAAAAECBAcRFhdRVFajpNPiA//EABoBAQACAwEAAAAAAAAAAAAAAAABBgIEBwj/xAAmEQAAAwUJAQEAAAAAAAAAAAAAAQIDBhZUowQRExRSVZPR0hIx/9oADAMBAAIRAxEAPwD3UDLL6qM9S8Oa6xfVRnqXhzXWbeQt0k341dDDERrIamDLL6qM9S8Oa6xfVRnqXhzXWMhbpJvxq6DERrIamDLL6qM9S8Oa6xfVRnqXhzXWMhbpJvxq6DERrIamDLL6qM9S8Oa6xfVRnqXhzXWMhbpJvxq6DERrIeBgXOySz+16Fkln9r0WmLHfn6TXyLBAD27TXY+xTAXOySz+16Fkln9r0Isd+fpNfIQA9u012PsUwFzsks/tehZJZ/a9CLHfn6TXyEAPbtNdj7FMBc7JLP7XoWSWf2vQix35+k18hAD27TXY+xcwd07BBBOzUEECUK+v0SSVSVTOapYHGR6SSv6Iju/SIxECWpYCpYATeIgS1LAVLABeIgS1LA6ZKCCOdlYI4E4X9fmmmq062BCl/KTO78K8f//Z"
                      alt="Yelow"
                      className="me-1"
                      height="12"
                    />
                    <span className="align-middle">Russian</span>
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    className="notify-item none dropdown-item"
                  >
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAgCBwEDBAX/xAAjEAACAQMEAgMBAAAAAAAAAAABAgADBzYEEXSxUbISIUQW/8QAFwEBAQEBAAAAAAAAAAAAAAAABwYFCP/EACcRAAIAAgkEAwAAAAAAAAAAAAABAgMEBQYHETM0dII1NrHBEiEx/9oADAMBAAIRAxEAPwD1mdmYu7sWLbkk7kkyO58yMJzKT5ZtqSf6at9/gre6xi4ulqcmrcCr7rGLjRYXoS3Ez0atDyeTCLPdnKl+/wAVLtozEWa7OVrwqPbShrPTc4RGu77he1m+UVlufMyrupDK5UqdwQdiCJiEnh2aT+mjuhCEFzi4s21OTVuBV91jFxdLU5NW4FX3WMXGiwnQluJno1aFk8mEWa7OVrwqPbRmYs12crXhUe2lDWem5wiNd33C9rN8orKEISeHc7oT0NaiJrdWiIFUVXAAGwABmj4r4EGYocG1icWliWpyatwKvusYuLvazJq3Cq+yxiozWF6EtxM9GrQsnkyMWa7OVrwqPbRm4tF18qXhUu2lDWem5wiNd33A9rN8oq6E27DxOnRIj63So6AqatMEEbg7mTw6RR/GFvD8WJ//2Q=="
                      alt="Yelow"
                      className="me-1"
                      height="12"
                    />
                    <span className="align-middle">Italian</span>
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    className="notify-item active dropdown-item"
                  >
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z"
                      alt="Yelow"
                      className="me-1"
                      height="12"
                    />
                    <span className="align-middle">English</span>
                  </button>
                </div>
              </div>
              <div className="d-none d-lg-inline-block ms-1 dropdown">
                <button
                  aria-haspopup="true"
                  className="btn header-item noti-icon"
                  aria-expanded="false"
                >
                  <i className="bx bx-customize"></i>
                </button>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  className="dropdown-menu-lg dropdown-menu-end dropdown-menu"
                >
                  <div className="px-lg-2">
                    <div className="no-gutters row">
                      <div className="col">
                        <a className="dropdown-icon-item" href="/dashboard">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJ/UExURUdwTCEgIB8fHyAfHyAfHyAfHyAfHx8eHiAfHx8eHiAfHyAfHyAfHx8eHiAfH5jU5h8eHiAfHyAfHyAfHx8eHh8eHiAfHyAfIAQBAxgWFiEhISEgIAwCACAgIB0bGi40NhkVFCAfH5za8FBncENVXKTm95vZ8Jza8J7c8R0bGhMTEx0cHCAfHyEgH73//yEgIJ7c8QAAAIfF6TM7PwwJCh4cHHm45SAfHyAfH5za8CAfH5za8Jza8Jza8Jza8CAfH5za8G6VokRVWxIKCJza8JvY7pza8DtITTlFSZ3b8AMHCgAABJza8ElBPDA4PFVLRK3z/zEvLRcXGEVBPTA5PJza8AADB5vZ74XD6QIAAIrJ67T+/4HA6BAIByAfH4zK7IrI6zE4O7D5/yAfHwEAACIgIJza8BUWGAACBhoaGvXLsQ0PEZ/g957c8RATFf/oy1p4hfzRticqLIC+6Jrm///jxiMiIvDEq//Xu/bHq//fxG5eVRgXF////P/z0P/22lNHQv/gv//877H5/xcTEhUOC76cicyolCcjIf/avdivlpvY7mZaUQMHC1lNRfrNsPTJr//o0v/cwf3WuHtnXIshF4VuYvTEqfrcyM+oqOrW1PTm4v716zM7PqHf8v/t1SkpJsD//1RueGebxaPn/IXK/TVIV3OapbmXheK0mNuymv/GrdWZhu/Tx+u7pI54adymkf/658+dlMifn+S1mafq+7uhizYvLeLCufLs7/rk1mNVTf/NrtOskqeHd8aXlXFgVv/kwZU1LNW1neK9tJAuJsCMirJwa+nKv9zFx2CRtVuKronG6naszSUnKUZaZG+TmUFPU3agr3GkxIu8xSfH+3sAAABzdFJOUwD97RwqJTMat/4VL6DlCwmSOh2qV77yhGEIms8njIj9+xEk6wESA6CMcwRtUGQlwnjIs9iu9u3fsS5e3hvwhB66hguP9eJfotdT9nPf4o7mPNW62Kc/5MnTMeRzzcTG3/LkYv////////////////////54WQMpAAACTklEQVQYGXXABVMiYRgA4BdYdhkExa5TR8Xuvu7u7v5g2V06XFGxO7C72+vu7s74Qaczd87sIg/85yeUJMMCsUK+FFzIEEISvwSZxF8iSwpEczyBT4L4xMAXhniE4CIQ8QRgwCMWID458PgipEYag0ZD07TGYHCgOcuBI1GIWA3lqEcOrVbrUNdXUzSLfIHDB7EG7fXGi411tRdq6y7dedrl1KjTgGMNop3PSm+WGO35+fkNHSUlpT0U8geO4ABneUX7w9tXWxmGKXzU/7HyyX2tBLhCVT0vh/q7b7W3MW1Fb169H6p4TIXAP1IRQfiIMV/qRUXl8+4HHUwnY//w9l1lZ7kzHBP7EIRICpg3juMemLd2zGwcHOjrLbjB9PYNDI72sgYc88Bx3BsDQiSN9FQCpFDFxrKyVvO1KwXmwtGy0i4qBUDpGSkVEbDA73D5vYIGo/2y3Vhkfl28PQl4NoQABAdl79vV0lzc3LLnwP4dBPB4rbNkwbwM1byMRHAVk7qe3gIAyWpWIBCwKAgWFTS8dfdBQY5cIMsRsv6wuARLhIU+rUBhKCQgFNwIPrYkTR6uVqjD80LBvWxhIFKgsLxT4IYy9XyWJbo6ujo64tyJvbGwiM1H9OM/kalmosb0bXhct2m1F/DExpG6KZPqxy/Vd9XsrGriro5cEQVcUSSp05s+T0XU/HGM6T6Z9DqSjAcur7Vkk77KNjnzu+rrzKStSt9ErloGfOk7yRGr1Tb9ZdpmtY6QG+NWgivlofTMk2dyz+YeP5oZvy0GFvwFlSbPVswTomsAAAAASUVORK5CYII="
                            alt="Github"
                          />
                          <span>GitHub</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="/dashboard">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAdCAMAAABopjdHAAAAwFBMVEVHcEwAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4Mri5Y4AAAAP3RSTlMAIwhydxy28hIWIc+je6u9P/b9BUziKJcMxKdZAjyMXjfXu8Hm1eou2t0z+rKRRq+A7my6Qp/M34PrU1YPiL7YsJ9AAAABbUlEQVQYGW3Bh3aiQAAF0EedoSMiYu+isdcka7Lv//9qYTib3eR4LwB9b9yilWBtefeN2NFR6h3WJOfeLIqizn3REiQXgdaEMSdb5uiaWTLXc+mOH5+XOSlGaJDJDN+NSJ7QILn0zcegcJ2SpWUvaZcleFROk44d+jf/MF1sWHlHl895OPI5GyM+10bML97US/iXiazB2jIo8uJtzlqSQptQWZ6hxzoMQaU1gGVTCfUsbPnaR0hllkG2WUkCmCQDmFRuEk2TlcSESdJAQCVoAj0q4YfWXrRduaXyC0BKRQRAARwFK5sxAGdL5X0YW/HniUrkomQNWVt11lQ2swFq4+GK/7RsA7XrzkKWGu3Q/h3Z4c7YQw5yVHpiYTpAX1quJZuATKO1hsqLR+H556smc6mNH0c74dZBxbFZEuv77DLtTARLZx2Vvs+f4j6UIX+yUCte+V03R60/PvA/ouvii7N/m742yESsLrtejsofWqVrkBSdwYAAAAAASUVORK5CYII="
                            alt="bitbucket"
                          />
                          <span>Bitbucket</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="/dashboard">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA0lBMVEVHcEzEI2HDI2HDI2HEI2HDI2HDI2HEI2HDImHDI2HDI2HDImDDI2HEI2HDI2HDI2HDI2HEI2HDI2HDI2HDI2HDI2HDI2HDI2HDI2HDI2HDI2HEJGLDI2HDI2HDI2HqTInxU5C9HFq7GlnyVJHEI2HpS4jwUY/BIV/tTou3FlTCImDzVZK6GVfUNXPfP32+HVziQ4DaOnjrTYrFJWO/Hl3MLGrKKmjAH17uUI3cPXrXN3XSMnC1FFLoSYf1V5T4WpfPLm3mR4TIKGbQMG7wU5DqS4gW3fYwAAAAH3RSTlMAlnPA0mVNzNyLQuQo7zUfxPFVXWx6pPMCRX/1A3yvLDJKvgAAAk1JREFUGBllwIV2GmkUAOAbIUD8bCrp2v1dx10ZBmbf/5WW0DZtTz/44X518fzwef3pwyP87uZKiJhRSlns1iv41f2Vpk73bdumYVUwff0FfvKS07rUNJz4wrlJwpqJj/Dug2D5vNsHrPUS0Sx+rgqxhW/+EKxsuMpEoKWSiCj5rqTiTzh7EqzkSkof0WBPMkRpfORYIW7hzZrmjZKIGd8HrPUSCe8Cmx7pA5zcOpp4iYhSSRfkxvOxtDacUNeXALBmR45n0reUhSaMh7jlxnfsAeDJ0YRjZoxaiG8OsXBDsB95JtWs9S2s4spz1Rg5R+mxcrWu99Gi8ETt6RYu6qrr92WV18wOVuSFyHYZZojIU/YMVzkdBmstK0QVtpgUQTepE0KmhG5go8uwD8M0SkZD/LQrg7zrj8c+TJO0voMNjSa1ELIoY3jT9rlzwWCtHQZbizu4oinHN7LhyYENTNeHtG3bri+F28AFCwmeyKXpmaWHJAxytVsIX3YpfYZVcTAGUfLxYIND1ExzwVqOJ7ynW3hycUJQ8lnbuGu8yZrSlipDbEanvwCsWe8lH7XViTcSkXc2Hw1Kn7LPrwA3ukimLB/c6PGNSmIaEakyV/wDJ9e08v2gR49nBnPbEeP37K9XOLkX9UHTyP+HXy29LdWuY+4Gzl5EHKQTfsfTIDcp01v46vVSFOXsVYZnZK5FVegLeLcStAjnhpNlIZwkoo7dFn7yuNasLrs2itq0dE5sbuBXL2tHGY1jyqjeXP4Nv3m8/LS+u7v+9+MtvPsfo0R0DDqUOxMAAAAASUVORK5CYII="
                            alt="dribbble"
                          />
                          <span>Dribbble</span>
                        </a>
                      </div>
                    </div>
                    <div className="no-gutters row">
                      <div className="col">
                        <a className="dropdown-icon-item" href="/dashboard">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAMAAABkz+JgAAAAxlBMVEVHcEwAfuYAfuYAfuYAfuYAfecAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuUAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAf+UAfuYAfuYAfuYAfuYAfuYAfuYAfuYAf+YAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuUAfuYAgOcAfuYAfeYAf+YAfuYAfuZXV9ysAAAAQXRSTlMACxEy+QLr/PX+2xgHGh58vjZgQeTHDu1k6RWMKIbTudej4Jipy0cFcPPvL3MkTBNn0HfFVq5Q6LVrOh8GnFk8kkQ6JVUAAAGsSURBVBgZfcEHgppAAAXQjw4Mgi5iD/Yu9o6uW/Lvf6kgiowmm/cQq3y1G0g0hvMKXuTaksESMdei2LhQaWuTIbOQxZW+9xnyJys8NMqCEVHXAYybPiNyOMNNZW3wYWBjVZeMmVsPocVOMiE3bl4yITdpYFSlShyKXZ8qs4ZcmYrSKIvxd4+KzQXQ+oJ31X4OV5VmlXdyYCM0rklGrLSOG/0tz4jcZnGz7JEMnCwS2sQiWSroiHlDnlY6nngDGjMo3tseXun9dyi8jiyn8MzeyamLh31A0ndSSKQmPZJBLYuI7kheZaouYpcWI7KJK+9T8M7sL3CVq5uMHS5ArkOFudeB4pSK0gWjElXiMOoKqn6tgVReMpEZvuUzTMjWBSGt1mMs8zmrp+uCselcw01uJxkRzqXDanouGJFlGw/jQsCQUThaJIPC0WAoOKeg0k6SRnHpM+I0LMrWAs/m6a/urCl4I7ru6ewV8KxtLO0uE3m7OG3j2dmXFlWdKZt44bYEVZlOEX/RagYTxsTGv1S6Pm/MfAM/+CiWeWUds/jZh1Oi8VvDf+mLbVrHsz8x4n90MIcLhQAAAABJRU5ErkJggg=="
                            alt="dropbox"
                          />
                          <span>Dropbox</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="/dashboard">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAMAAADCMPhoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJAUExURUdwTGVPRGVPRHVeUGVPRGVPRGRPRWVPRGVPRGVPRGRQRWVPRWVPRGVPRGVPRGRPRWVPRGVPRGVPRGVPRGVPRGBVUmVPRGVPRGtUR2VPRGVPRGVPRGVPRGVPRGVPRGVPRF9LQ3NZSZ6IdmVPRGNVT3poX2VPRGVPRHlhRl9gZIFnR2VPRJBpTP3rzvTSqxIgNEme1yyDwhUiNY5oTGZQRGlSRfzoyf3qzffbuPXixZpzVfTVsGBMQ/PQqXpbSIRiSnFWRvjlyP///39fSW1URrKUeIhkSkM8Pe/Np4tmSyx8tvrgvv37+ZRtT5ZwUuPDn1VHQ595WnNYR5FqTVKCo2NOQ/vlxdrBpCEpN9y7mPXUrj1IWZV7ZzWKxqqTfunIo/PRq7mafsm/ubipoP338LispLyrmKWNeFtlcPzy55yBa/PNo9e2lCcsOO3AkO7Gm1lZXhUpQi6CvsilgzA8TaeCY0SZ05yDbysuOTExOvbYs/HdwaqHaeDBnc62nGJqeOXQtBspPLKch8ytj/327fjz7sO3r35sWb+yqbOObk5jdmNdXzR7sPHJnfDbvUVujVd1inhxcVJgb7+aeerXvDZ5qo2Aeyg0Rh9PdkhphShzq/fixBxFaRk1UZ97XjpznjZCUzQzO15LQydrnq6Vf829sPnn06GGcIRlTy4+UqCeoPLv7s7Hw+Hd2+zp546UnqCjpc62e7uoayhfiqmRSHWAjlBTROa+T9KxTFKFqe/HTp+XXllwgsW4a5e0njlHS3QagBcAAAArdFJOUwChif0QVMAFATnZ3hjoM8j3bbLSKPesC/SV9JpILoBY8Pz9kf3wgnaT/pqvGFBIAAACu0lEQVQ4y3WU5VsiURTGCZFBxcCu7ebOXBiQRgQBRbBwLbCwde3uWN1Ht7u7w+3u/df23mGYhcf1/fp776k5Z3i8CIklObm8rZWbndr9c+2QmCeOF22P34Tj+Ae/KX79/vHlQObeK+dPViRERWBCtOewQqH48/3rx3cvFmkIYX90RPLMbgVWyef3b/0Qc0hLw3hUwjmGN3741A1Z0bFhPBaHV0w8fP5mGdJI2DCV/Y/HMLzx1r1Fum7qvslkKuqH9A4xlz/67ATiI8P+MXraJA9quiiJC7DthFKJyoP+5TqM1XmWQq9dncZxyZBSqWwsgWN0EcJ5hSqA5eSaJGJOIUMJfRVWIOwCQVWV7UxnDaILiI8M05h7ASg1GEqrQFm9r1bGGmSXkeEahCi+HQCDdYbCMg8MxrCGVMRvQFiH8qPsZ3ynB44wluJww21IV6MCAHAYzYMMpuqbk1kD/7ry7oNqxOX5ACxQ6HlfOXovLE/gxjTkRbFdankhAKP4ce8kpXMbizNEoTkUoNpG51AEFSgzI4Oj13jJMa/R7+IHDfssoNJMNaARokDHWyjKWKMlrVqS1DYJgkW4QMBnRgacA1T21ZAh6RrisEFgAXMa3Roy2F2gcl4TwtqZZmEcW0NVYCmAP6HTUBziGl1LoC24MsRu1B9QMX1e1CGm17h1LStd6683pESw0aSMAm8eM8nxmyT56HFra+vLVx6bzXY0NCyxgFkSFSidJa0rT3ra23t6PDbPuj6LuwnWAGpJsulY++qqx7bR0WntEnFLkYYNFgDGSXK2s62jo61zQe+eD9/rRLxNTgD0bBc1bl+zMCXsMiQ4hN0JHCGHtl64P+L2RNihtqju1FoxXuqSC4jI442XYoe6IP/Z06ZJoTwradN5E/xEOafolP/9INIFyYxHKpNs+RMhUnIk4T+Gv3cNvzi99G5fAAAAAElFTkSuQmCC"
                            alt="mail_chimp"
                          />
                          <span>Mail Chimp</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="/dashboard">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAACplBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////60uX///////////////////////////////9uytzmmQDpqCA+uZHgFWPkkQAWjnjODgjIAQNVwdYarX3XADfcAEj5/f3cAE7L7PN/1e7ppAuw49I2t42G1bjjFnJkyuXsqyX22qE8uJDyn75zzN70qcViegRUgh/ZAT245ddB2aIzACb34LAFgmbMAgpFsrj//vTS7/QVqnr+/PrppxwwvIzvw2Puu1BKvdT+8PXI7OEOqHaS1+XfA15cw9f96r7E6vFcz/pLdARCvZTw+fbfDV9lhhv/ryHpU4zhGmj2vtH7AlgdtIEYDjGm3+oKlG8bk3zrtwmd2+ggl4FSwpoIimozpJrIkgDe9PrPJQB12v/rtiT8//8rpoR/0N6v4/LtwBxSwtvlO3vI6+pgxqVGu9MLp3NzzLC95++Zkxzwibb/GW0bfWb33qvumwD+c6cUACE3ADAvs4k5UVo3EDnvzCxsxK/kfUb96vnSNgD+rBznnh81r4zUEil7ysTpf4H384miwZjWOxfcag395/cPjW714Hn3ynT6nABVvc9gx+D44rVkx9rbWhfkjxzmS4V3ih1Lj03fFV7TDCJmnV5staHhK2njMHNuxc0nn4Jv0e+wVX9dqo3sFmem6P9Eu9JtAC/IvG1Jfhxym1BsgQqh5/9AEjyoAErufqr01pXrsDYoDjQ4Gj0cy47Alw5wLFTuAVp6z7PYJWp43rueFVRmEkb0ZprVAEUgt4QsiG94nZYsIT9Gx5y9/+uQ18Ci3coAom6/ICZyAAAAKXRSTlMAP9pMoGFRR+eup71y+9DzuF0xoyLgFQKyWWadV4P2w5b+kQivDFtcxZCJTt8AAAKlSURBVBgZdcCDU2QBGADwrxXaai/76oTvvbdmNnezbetqsjHZOtu2bdvGf3K1u9NMN9cPFmPzOOtZsBQ6jiX5IxP+z5bjLxKJnprCP+wtGSwAsMJnpB9J4Vq2I8MeFliiZziuBLDBZJKixrNR5eaGxmBgrupNTx9ANoDj2HhxMXn3YZAsJUNlDno8z/4Ar7g0S1sWL4Z6NfQgtNuXIPpyeKC3zFMuEMR5861Vsbfu590LDbnYQpxIcbMDPXqBl1d+Yl1sZ5As90ZIUVHIhdxuWRUagZ4Test3tB+M9s0irl0pCgnNC+3obEIT0FlHw6Zd9WJxZIM7QRC5Z/PODDVmc5wtQIeNg0G+R8XianEt4SvLatnb6Fd85LA1GJjl9GUR7g311eLIaPeq2LaYbR6Uh1+8EVhZrAIA04yUIMI9OlJcu2ETzksiKYrMNuMickwAaDm3ZbJjxNV2QWIdzosgqdaaQwcCT196gubAxsGODDeVd0V+gDwN522s2b5/X6laqVYMcwCYNOQzzMLlAkGcN87ZsnmrRCoN8xGWhpWYwhwrG3AqCJgWJGowNbjERyGNkkh2+hQqFYE0MOC/f6kJGL0+olRmnpNIJNIodWZPMNJBh+7KDx+deTF5p1woFPqcl0qjmnevQBc66Lhi2ad3Wu3U80fCm4XqTEXzyVMee0wtQI8VXxKmLP9YOTtb+bhcfXm4rLWry8Mvxgj0lgUrCoUjHyqntJOvJ8qQtjyJpCgywhj0eIEKofDNZ+33ma8/2rhGsPq4KCFBFMEFPYfUnjBl6cS3Co3mS5ozAAuTRaLkeBYY2GFgcCr+rBAI5G/5awCM0d8fGbCAacxgmxR4TefLe9EGAJhcLhMWs8Vff9L7Pa1hCSb4eyAc2bAUBzOOCx0W+QuvxroExNCXxAAAAABJRU5ErkJggg=="
                            alt="slack"
                          />
                          <span>Slack</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  className="btn header-item noti-icon"
                  data-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen"></i>
                </button>
              </div>
              <li className="dropdown d-inline-block dropdown">
                <button
                  id="page-header-notifications-dropdown"
                  aria-haspopup="true"
                  className="btn header-item noti-icon"
                  aria-expanded="false"
                >
                  <i className="bx bx-bell bx-tada"></i>
                  <span className="badge bg-danger rounded-pill">3</span>
                </button>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 dropdown-menu"
                >
                  <div className="p-3">
                    <div className="align-items-center row">
                      <div className="col">
                        <h6 className="m-0"> Notifications </h6>
                      </div>
                      <div className="col-auto">
                        <a href="#" className="small">
                          {" "}
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-simplebar="init" style={{ height: "230px" }}>
                    <div
                      className="simplebar-wrapper"
                      style={{ margin: " 0px" }}
                    >
                      <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                      </div>
                      <div className="simplebar-mask">
                        <div
                          className="simplebar-offset"
                          style={{ right: "0px", bottom: " 0px" }}
                        >
                          <div
                            className="simplebar-content-wrapper"
                            tabindex="0"
                            role="region"
                            aria-label="scrollable content"
                            style={{ height: "auto", overflow: "hidden" }}
                          >
                            <div
                              className="simplebar-content"
                              style={{ padding: " 0px" }}
                            >
                              <a
                                className="text-reset notification-item"
                                href="/"
                              >
                                <div className="d-flex">
                                  <div className="avatar-xs me-3">
                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                      <i className="bx bx-cart"></i>
                                    </span>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mt-0 mb-1">
                                      Your order is placed
                                    </h6>
                                    <div className="font-size-12 text-muted">
                                      <p className="mb-1">
                                        If several languages coalesce the
                                        grammar
                                      </p>
                                      <p className="mb-0">
                                        <i className="mdi mdi-clock-outline"></i>{" "}
                                        3 min ago{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a
                                className="text-reset notification-item"
                                href="/"
                              >
                                <div className="d-flex">
                                  <img
                                    src="/static/media/avatar-3.2cfd5ba6.jpg"
                                    className="me-3 rounded-circle avatar-xs"
                                    alt="user-pic"
                                  />
                                  <div className="flex-grow-1">
                                    <h6 className="mt-0 mb-1">James Lemire</h6>
                                    <div className="font-size-12 text-muted">
                                      <p className="mb-1">
                                        It will seem like simplified English.
                                      </p>
                                      <p className="mb-0">
                                        <i className="mdi mdi-clock-outline"></i>
                                        1 hours ago{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a
                                className="text-reset notification-item"
                                href="/"
                              >
                                <div className="d-flex">
                                  <div className="avatar-xs me-3">
                                    <span className="avatar-title bg-success rounded-circle font-size-16">
                                      <i className="bx bx-badge-check"></i>
                                    </span>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mt-0 mb-1">
                                      Your item is shipped
                                    </h6>
                                    <div className="font-size-12 text-muted">
                                      <p className="mb-1">
                                        If several languages coalesce the
                                        grammar
                                      </p>
                                      <p className="mb-0">
                                        <i className="mdi mdi-clock-outline"></i>{" "}
                                        3 min ago
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a
                                className="text-reset notification-item"
                                href="/"
                              >
                                <div className="d-flex">
                                  <img
                                    src="/static/media/avatar-4.b23e41d9.jpg"
                                    className="me-3 rounded-circle avatar-xs"
                                    alt="user-pic"
                                  />
                                  <div className="flex-grow-1">
                                    <h6 className="mt-0 mb-1">
                                      Salena Layfield
                                    </h6>
                                    <div className="font-size-12 text-muted">
                                      <p className="mb-1">
                                        As a skeptical Cambridge friend of mine
                                        occidental.
                                      </p>
                                      <p className="mb-0">
                                        <i className="mdi mdi-clock-outline"></i>
                                        1 hours ago{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="simplebar-placeholder"
                        style={{ width: "0px", height: " 0px" }}
                      ></div>
                    </div>
                    <div
                      className="simplebar-track simplebar-horizontal"
                      style={{ visibility: "hidden" }}
                    >
                      <div
                        className="simplebar-scrollbar"
                        style={{ width: "0px", display: "none" }}
                      ></div>
                    </div>
                    <div
                      className="simplebar-track simplebar-vertical"
                      style={{ visibility: "hidden" }}
                    >
                      <div
                        className="simplebar-scrollbar"
                        style={{ height: "0px", display: "none" }}
                      ></div>
                    </div>
                  </div>
                  <div className="p-2 border-top d-grid">
                    <a
                      className="btn btn-sm btn-link font-size-14 text-center"
                      href="/dashboard"
                    >
                      <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                      <span>View More..</span>
                    </a>
                  </div>
                </div>
              </li>
              <div className="d-inline-block dropdown">
                <button
                  id="page-header-user-dropdown"
                  aria-haspopup="true"
                  className="btn header-item"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle header-profile-user"
                    src="/static/media/avatar-1.3921191a.jpg"
                    alt="Header Avatar"
                  />
                  <span className="d-none d-xl-inline-block ms-1">admin</span>
                  <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  className="dropdown-menu-end dropdown-menu"
                >
                  <a
                    href="/profile"
                    tabindex="0"
                    role="menuitem"
                    className="dropdown-item"
                  >
                    <i className="bx bx-user font-size-16 align-middle ms-1"></i>
                    Profile
                  </a>
                  <a
                    href="/crypto-wallet"
                    tabindex="0"
                    role="menuitem"
                    className="dropdown-item"
                  >
                    <i className="bx bx-wallet font-size-16 align-middle me-1"></i>
                    My Wallet
                  </a>
                  <a
                    href="#"
                    tabindex="0"
                    role="menuitem"
                    className="dropdown-item"
                  >
                    <span className="badge bg-success float-end">11</span>
                    <i className="bx bx-wrench font-size-17 align-middle me-1"></i>
                    Settings
                  </a>
                  <a
                    href="auth-lock-screen"
                    tabindex="0"
                    role="menuitem"
                    className="dropdown-item"
                  >
                    <i className="bx bx-lock-open font-size-16 align-middle me-1"></i>
                    Lock screen
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/logout">
                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </div>
              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item noti-icon right-bar-toggle"
                >
                  <i className="bx bx-cog bx-spin"></i>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="vertical-menu">
          <div className="navbar-brand-box">
            <a className="logo logo-dark" href="/">
              <span className="logo-sm">
                <img src="/static/media/logo.a0143fa8.svg" alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  height="17"
                />
              </span>
            </a>
            <a className="logo logo-light" href="/">
              <span className="logo-sm">
                <img
                  src="/static/media/logo-light.96c274da.svg"
                  alt=""
                  height="22"
                />
              </span>
              <span className="logo-lg">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  height="19"
                />
              </span>
            </a>
          </div>
          <div data-simplebar="true" className="h-100">
            <div data-simplebar="init" className="h-100">
              <div className="simplebar-wrapper" style={{ margin: " 0px" }}>
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer"></div>
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: "0px", bottom: " 0px" }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      tabindex="0"
                      role="region"
                      aria-label="scrollable content"
                      style={{ height: "100%", overflow: "hidden scroll" }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ padding: " 0px" }}
                      >
                        <div id="sidebar-menu" className="mm-show">
                          <ul
                            className="metismenu list-unstyled mm-show mm-active"
                            id="side-menu"
                          >
                            <li className="menu-title">Menu</li>
                            <li className="mm-active">
                              <a
                                href="/"
                                aria-expanded="false"
                                className="mm-active"
                              >
                                <i className="bx bx-home-circle"></i>
                                <span className="badge rounded-pill bg-info float-end">
                                  04
                                </span>
                                <span>Dashboards</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse mm-show"
                                aria-expanded="false"
                              >
                                <li className="mm-active">
                                  <a href="/dashboard" className="active">
                                    Default
                                  </a>
                                </li>
                                <li>
                                  <a href="/dashboard-saas">Saas</a>
                                </li>
                                <li>
                                  <a href="/dashboard-crypto">Crypto</a>
                                </li>
                                <li>
                                  <a href="/dashboard-blog">Blog</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-title">Apps</li>
                            <li>
                              <a className="" href="/calendar">
                                <i className="bx bx-calendar"></i>
                                <span>Calendar</span>
                              </a>
                            </li>
                            <li>
                              <a className="" href="/chat">
                                <i className="bx bx-chat"></i>
                                <span>Chat</span>
                              </a>
                            </li>
                            <li>
                              <a className="" href="/apps-filemanager">
                                <i className="bx bx-file"></i>
                                <span className="badge rounded-pill bg-success float-end">
                                  New
                                </span>
                                <span>File Manager</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-store"></i>
                                <span>Ecommerce</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/ecommerce-products">Products</a>
                                </li>
                                <li>
                                  <a href="/ecommerce-product-details/1">
                                    Product Details
                                  </a>
                                </li>
                                <li>
                                  <a href="/ecommerce-orders">Orders</a>
                                </li>
                                <li>
                                  <a href="/ecommerce-customers">Customers</a>
                                </li>
                                <li>
                                  <a href="/ecommerce-cart">Cart</a>
                                </li>
                                <li>
                                  <a href="/ecommerce-checkout">Checkout</a>
                                </li>
                                <li>
                                  <a href="/ecommerce-shops">Shops</a>
                                </li>
                                <li>
                                  <a href="/ecommerce-add-product">
                                    Add Product
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-bitcoin"></i>
                                <span>Crypto</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/crypto-wallet">Wallet</a>
                                </li>
                                <li>
                                  <a href="/crypto-buy-sell">Buy/Sell</a>
                                </li>
                                <li>
                                  <a href="/crypto-exchange">Exchange</a>
                                </li>
                                <li>
                                  <a href="/crypto-lending">Lending</a>
                                </li>
                                <li>
                                  <a href="/crypto-orders">Orders</a>
                                </li>
                                <li>
                                  <a href="/crypto-kyc-application">
                                    KYC Application
                                  </a>
                                </li>
                                <li>
                                  <a href="/crypto-ico-landing">ICO Landing</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-envelope"></i>
                                <span>Email</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/email-inbox">Inbox</a>
                                </li>
                                <li>
                                  <a href="/email-read">Read Email </a>
                                </li>
                                <li>
                                  <a href="/" aria-expanded="false">
                                    <span className="badge rounded-pill badge-soft-success float-end">
                                      New
                                    </span>
                                    <span>Templates</span>
                                  </a>
                                  <ul
                                    className="sub-menu mm-collapse"
                                    aria-expanded="false"
                                  >
                                    <li>
                                      <a href="/email-template-basic">
                                        Basic Action
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/email-template-alert">
                                        Alert Email{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/email-template-billing">
                                        Billing Email{" "}
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-receipt"></i>
                                <span>Invoices</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/invoices-list">Invoice List</a>
                                </li>
                                <li>
                                  <a href="/invoices-detail">Invoice Detail</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-briefcase-alt-2"></i>
                                <span>Projects</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/projects-grid">Projects Grid</a>
                                </li>
                                <li>
                                  <a href="/projects-list">Projects List</a>
                                </li>
                                <li>
                                  <a href="/projects-overview">
                                    Project Overview
                                  </a>
                                </li>
                                <li>
                                  <a href="/projects-create">Create New</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-task"></i>
                                <span>Tasks</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/tasks-list">Task List</a>
                                </li>
                                <li>
                                  <a href="/tasks-kanban">Kanban Board</a>
                                </li>
                                <li>
                                  <a href="/tasks-create">Create Task</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bxs-user-detail"></i>
                                <span>Contacts</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/contacts-grid">User Grid</a>
                                </li>
                                <li>
                                  <a href="/contacts-list">User List</a>
                                </li>
                                <li>
                                  <a href="/contacts-profile">Profile</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/" aria-expanded="false">
                                <span className="badge rounded-pill bg-success float-end">
                                  New
                                </span>
                                <i className="bx bxs-detail"></i>
                                <span>Blog</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/blog-list">Blog List</a>
                                </li>
                                <li>
                                  <a href="/blog-grid">Blog Grid</a>
                                </li>
                                <li>
                                  <a href="/blog-details">Blog Details</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-title">Pages</li>
                            <li>
                              <a href="/" aria-expanded="false">
                                <i className="bx bx-user-circle"></i>
                                <span className="badge rounded-pill bg-success float-end">
                                  New
                                </span>
                                <span>Authentication</span>
                              </a>
                              <ul className="sub-menu mm-collapse">
                                <li>
                                  <a href="/pages-login">Login</a>
                                </li>
                                <li>
                                  <a href="/pages-login-2">Login 2</a>
                                </li>
                                <li>
                                  <a href="/pages-register">Register</a>
                                </li>
                                <li>
                                  <a href="/pages-register-2">Register 2</a>
                                </li>
                                <li>
                                  <a href="/page-recoverpw">Recover Password</a>
                                </li>
                                <li>
                                  <a href="/pages-recoverpw-2">
                                    Recover Password 2
                                  </a>
                                </li>
                                <li>
                                  <a href="/auth-lock-screen">Lock Screen</a>
                                </li>
                                <li>
                                  <a href="/auth-lock-screen-2">
                                    Lock Screen 2
                                  </a>
                                </li>
                                <li>
                                  <a href="/page-confirm-mail">Confirm Mail</a>
                                </li>
                                <li>
                                  <a href="/page-confirm-mail-2">
                                    Confirm Mail 2
                                  </a>
                                </li>
                                <li>
                                  <a href="/auth-email-verification">
                                    Email Verification
                                  </a>
                                </li>
                                <li>
                                  <a href="/auth-email-verification-2">
                                    Email Verification 2
                                  </a>
                                </li>
                                <li>
                                  <a href="/auth-two-step-verification">
                                    Two Step Verification
                                  </a>
                                </li>
                                <li>
                                  <a href="/auth-two-step-verification-2">
                                    Two Step Verification 2
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-file"></i>
                                <span>Utility</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/pages-starter">Starter Page</a>
                                </li>
                                <li>
                                  <a href="/pages-maintenance">Maintenance</a>
                                </li>
                                <li>
                                  <a href="/pages-comingsoon">Coming Soon</a>
                                </li>
                                <li>
                                  <a href="/pages-timeline">Timeline</a>
                                </li>
                                <li>
                                  <a href="/pages-faqs">FAQs</a>
                                </li>
                                <li>
                                  <a href="/pages-pricing">Pricing</a>
                                </li>
                                <li>
                                  <a href="/pages-404">Error 404</a>
                                </li>
                                <li>
                                  <a href="/pages-500">Error 500</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-title">Components</li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-tone"></i>
                                <span>UI Elements</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/ui-alerts">Alerts</a>
                                </li>
                                <li>
                                  <a href="/ui-buttons">Buttons</a>
                                </li>
                                <li>
                                  <a href="/ui-cards">Cards</a>
                                </li>
                                <li>
                                  <a href="/ui-carousel">Carousel</a>
                                </li>
                                <li>
                                  <a href="/ui-dropdowns">Dropdowns</a>
                                </li>
                                <li>
                                  <a href="/ui-offcanvas">OffCanvas</a>
                                </li>
                                <li>
                                  <a href="/ui-grid">Grid</a>
                                </li>
                                <li>
                                  <a href="/ui-images">Images</a>
                                </li>
                                <li>
                                  <a href="/ui-lightbox">Lightbox</a>
                                </li>
                                <li>
                                  <a href="/ui-modals">Modals</a>
                                </li>
                                <li>
                                  <a href="/ui-rangeslider">Range Slider</a>
                                </li>
                                <li>
                                  <a href="/ui-session-timeout">
                                    Session Timeout
                                  </a>
                                </li>
                                <li>
                                  <a href="/ui-progressbars">Progress Bars</a>
                                </li>
                                <li>
                                  <a href="/ui-placeholders">Placeholders</a>
                                </li>
                                <li>
                                  <a href="/ui-sweet-alert">Sweet-Alert</a>
                                </li>
                                <li>
                                  <a href="/ui-tabs-accordions">
                                    Tabs &amp; Accordions
                                  </a>
                                </li>
                                <li>
                                  <a href="/ui-typography">Typography</a>
                                </li>
                                <li>
                                  <a href="/ui-toasts">Toasts</a>
                                </li>
                                <li>
                                  <a href="/ui-video">Video</a>
                                </li>
                                <li>
                                  <a href="/ui-general">General</a>
                                </li>
                                <li>
                                  <a href="/ui-colors">Colors</a>
                                </li>
                                <li>
                                  <a href="/ui-rating">Rating</a>
                                </li>
                                <li>
                                  <a href="/ui-notifications">Notifications</a>
                                </li>
                                <li>
                                  <a href="/ui-breadcrumb">Breadcrumb</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/" aria-expanded="false">
                                <i className="bx bxs-eraser"></i>
                                <span className="badge rounded-pill bg-danger float-end">
                                  10
                                </span>
                                <span>Forms</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/form-elements">Form Elements</a>
                                </li>
                                <li>
                                  <a href="/form-layouts">Form Layouts</a>
                                </li>
                                <li>
                                  <a href="/form-validation">Form Validation</a>
                                </li>
                                <li>
                                  <a href="/form-advanced">Form Advanced</a>
                                </li>
                                <li>
                                  <a href="/form-editors">Form Editors</a>
                                </li>
                                <li>
                                  <a href="/form-uploads">Form File Upload </a>
                                </li>
                                <li>
                                  <a href="/form-xeditable">Form Xeditable</a>
                                </li>
                                <li>
                                  <a href="/form-repeater">Form Repeater</a>
                                </li>
                                <li>
                                  <a href="/form-wizard">Form Wizard</a>
                                </li>
                                <li>
                                  <a href="/form-mask">Form Mask</a>
                                </li>
                                <li>
                                  <a href="/dual-listbox">Transfer List</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-list-ul"></i>
                                <span>Tables</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/tables-basic">Basic Tables</a>
                                </li>
                                <li>
                                  <a href="/tables-datatable">Data Tables</a>
                                </li>
                                <li>
                                  <a href="/tables-responsive">
                                    Responsive Table
                                  </a>
                                </li>
                                <li>
                                  <a href="/tables-editable">Editable Table</a>
                                </li>
                                <li>
                                  <a href="/tables-dragndrop">
                                    Drag &amp; Drop Table
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bxs-bar-chart-alt-2"></i>
                                <span>Charts</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/apex-charts">Apex charts</a>
                                </li>
                                <li>
                                  <a href="/chartist-charts">Chartist Chart</a>
                                </li>
                                <li>
                                  <a href="/chartjs-charts">Chartjs Chart</a>
                                </li>
                                <li>
                                  <a href="/e-charts">E Chart</a>
                                </li>
                                <li>
                                  <a href="/sparkline-charts">
                                    Sparkline Chart
                                  </a>
                                </li>
                                <li>
                                  <a href="/charts-knob">Knob Chart</a>
                                </li>
                                <li>
                                  <a href="/re-charts">Re Chart</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-aperture"></i>
                                <span>Icons</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/icons-boxicons">Boxicons</a>
                                </li>
                                <li>
                                  <a href="/icons-materialdesign">
                                    Material Design
                                  </a>
                                </li>
                                <li>
                                  <a href="/icons-dripicons">Dripicons</a>
                                </li>
                                <li>
                                  <a href="/icons-fontawesome">Font awesome</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-map"></i>
                                <span>Maps</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="false"
                              >
                                <li>
                                  <a href="/maps-google">Google Maps</a>
                                </li>
                                <li>
                                  <a href="/maps-vector">Vector Maps</a>
                                </li>
                                <li>
                                  <a href="/maps-leaflet">Leaflet Maps</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                className="has-arrow"
                                href="/"
                                aria-expanded="false"
                              >
                                <i className="bx bx-share-alt"></i>
                                <span>Multi Level</span>
                              </a>
                              <ul
                                className="sub-menu mm-collapse"
                                aria-expanded="true"
                              >
                                <li>
                                  <a href="/dashboard">Level 1.1</a>
                                </li>
                                <li>
                                  <a
                                    className="has-arrow"
                                    href="/dashboard"
                                    aria-expanded="false"
                                  >
                                    Level 1.2
                                  </a>
                                  <ul
                                    className="sub-menu mm-collapse"
                                    aria-expanded="true"
                                  >
                                    <li>
                                      <a href="/dashboard">Level 2.1</a>
                                    </li>
                                    <li>
                                      <a href="/dashboard">Level 2.2</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="simplebar-placeholder"
                  style={{ width: "auto", height: "1276px" }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-horizontal"
                style={{ visibility: "hidden" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ width: "0px", display: "none" }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-vertical"
                style={{ visibility: "visible" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{
                    height: "25px",
                    transform: "translate3d(0px, 0px, 0px)",
                    display: "block",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="sidebar-background"></div>
        </div>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-0 font-size-18">Dashboard</h4>
                    <div className="page-title-right">
                      <nav className="" aria-label="breadcrumb">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item">
                            <a href="/dashboard">Dashboards</a>
                          </li>
                          <li
                            className="active breadcrumb-item"
                            aria-current="page"
                          >
                            <a href="/dashboard">Dashboard</a>
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="overflow-hidden card">
                    <div className="bg-primary bg-soft">
                      <div className="row">
                        <div className="col-7">
                          <div className="text-primary p-3">
                            <h5 className="text-primary">Welcome Back !</h5>
                            <p>Yelow Dashboard</p>
                          </div>
                        </div>
                        <div className="align-self-end col-5">
                          <img
                            src="/static/media/profile-img.43b59e59.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-0 card-body">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="avatar-md profile-user-wid mb-4">
                            <img
                              src="/static/media/avatar-1.3921191a.jpg"
                              alt=""
                              className="img-thumbnail rounded-circle"
                            />
                          </div>
                          <h5 className="font-size-15 text-truncate">
                            Henry Price
                          </h5>
                          <p className="text-muted mb-0 text-truncate">
                            UI/UX Designer
                          </p>
                        </div>
                        <div className="col-sm-8">
                          <div className="pt-4">
                            <div className="row">
                              <div className="col-6">
                                <h5 className="font-size-15">125</h5>
                                <p className="text-muted mb-0">Projects</p>
                              </div>
                              <div className="col-6">
                                <h5 className="font-size-15">$1245</h5>
                                <p className="text-muted mb-0">Revenue</p>
                              </div>
                            </div>
                            <div className="mt-4">
                              <a className="btn btn-primary btn-sm" href="/">
                                View Profile{" "}
                                <i className="mdi mdi-arrow-right ms-1"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="mini-stats-wid card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <p className="text-muted fw-medium">Orders</p>
                          <h4 className="mb-0">1,235</h4>
                        </div>
                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                          <span className="avatar-title">
                            <i className="bx bx-copy-alt font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="mini-stats-wid card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <p className="text-muted fw-medium">Revenue</p>
                          <h4 className="mb-0">$35, 723</h4>
                        </div>
                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                          <span className="avatar-title">
                            <i className="bx bx-archive-in font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="mini-stats-wid card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <p className="text-muted fw-medium">Average Price</p>
                          <h4 className="mb-0">$16.2</h4>
                        </div>
                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                          <span className="avatar-title">
                            <i className="bx bx-purchase-tag-alt font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                        <div class="card-body">
                        <div className="mb-4 h4 card-title">Orders</div>
                          <div class="mb-2 row">
                            <div class="col-sm-4">
                              <div class="search-box me-2 mb-2 d-inline-block">
                                <div class="position-relative">
                                  <label
                                    for="search-bar-0"
                                    class="search-label"
                                  >
                                    <span
                                      id="search-bar-0-label"
                                      class="sr-only"
                                    >
                                      Search this table
                                    </span>
                                    <input
                                      id="search-bar-0"
                                      type="text"
                                      aria-labelledby="search-bar-0-label"
                                      class="form-control "
                                      placeholder="Search"
                                      value=""
                                    />
                                  </label>
                                  <i class="bx bx-search-alt search-icon"></i>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-8">
                              <div class="text-sm-end">
                                <button
                                  type="button"
                                  class="btn-rounded mb-2 me-2 btn btn-success"
                                >
                                  <i class="mdi mdi-plus me-1"></i> Add New
                                  Order
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="table-responsive">
                            <div class="react-bootstrap-table">
                              <table class="table table align-middle table-nowrap table-check">
                                <thead class="table-light">
                                  <tr>
                                    <th
                                      class="selection-cell-header"
                                      data-row-selection="true"
                                    >
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </th>
                                    <th
                                      tabindex="0"
                                      aria-label="Order ID sort desc"
                                      class="sortable"
                                    >
                                      Order ID<span class="caret-4-desc"></span>
                                    </th>
                                    <th
                                      tabindex="0"
                                      aria-label="Billing Name sortable"
                                      class="sortable"
                                    >
                                      Billing Name<span class="order-4"></span>
                                    </th>
                                    <th
                                      tabindex="0"
                                      aria-label="Date sortable"
                                      class="sortable"
                                    >
                                      Date<span class="order-4"></span>
                                    </th>
                                    <th
                                      tabindex="0"
                                      aria-label="Total sortable"
                                      class="sortable"
                                    >
                                      Total<span class="order-4"></span>
                                    </th>
                                    <th
                                      tabindex="0"
                                      aria-label="Payment Status sortable"
                                      class="sortable"
                                    >
                                      Payment Status
                                      <span class="order-4"></span>
                                    </th>
                                    <th
                                      tabindex="0"
                                      aria-label="Payment Method sortable"
                                      class="sortable"
                                    >
                                      Payment Method
                                      <span class="order-4"></span>
                                    </th>
                                    <th
                                      tabindex="0"
                                      aria-label="View Details sortable"
                                      class="sortable"
                                    >
                                      View Details<span class="order-4"></span>
                                    </th>
                                    <th tabindex="0">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td class="selection-cell">
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </td>
                                    <td>
                                      <a
                                        class="text-body fw-bold"
                                        href="/ecommerce-orders"
                                      >
                                        #SK2547
                                      </a>
                                    </td>
                                    <td>Dustin Moser</td>
                                    <td>02 Oct 2019</td>
                                    <td>$350</td>
                                    <td>
                                      <span class="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <i class="fab fa-cc-mastercard me-1"></i>{" "}
                                      Mastercard
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn-sm btn-rounded btn btn-primary"
                                      >
                                        View Details
                                      </button>
                                    </td>
                                    <td>
                                      <div class="d-flex gap-3">
                                        <a
                                          class="text-success"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-pencil font-size-18"
                                            id="edittooltip"
                                          ></i>
                                        </a>
                                        <a
                                          class="text-danger"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-delete font-size-18"
                                            id="deletetooltip"
                                          ></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="selection-cell">
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </td>
                                    <td>
                                      <a
                                        class="text-body fw-bold"
                                        href="/ecommerce-orders"
                                      >
                                        #SK2546
                                      </a>
                                    </td>
                                    <td>William Cruz</td>
                                    <td>03 Oct 2019</td>
                                    <td>$374</td>
                                    <td>
                                      <span class="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <i class="fab fas fa-money-bill-alt me-1"></i>{" "}
                                      COD
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn-sm btn-rounded btn btn-primary"
                                      >
                                        View Details
                                      </button>
                                    </td>
                                    <td>
                                      <div class="d-flex gap-3">
                                        <a
                                          class="text-success"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-pencil font-size-18"
                                            id="edittooltip"
                                          ></i>
                                        </a>
                                        <a
                                          class="text-danger"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-delete font-size-18"
                                            id="deletetooltip"
                                          ></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="selection-cell">
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </td>
                                    <td>
                                      <a
                                        class="text-body fw-bold"
                                        href="/ecommerce-orders"
                                      >
                                        #SK2545
                                      </a>
                                    </td>
                                    <td>Jacob Hunter</td>
                                    <td>04 Oct 2019</td>
                                    <td>$392</td>
                                    <td>
                                      <span class="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <i class="fab fa-cc-paypal me-1"></i>{" "}
                                      Paypal
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn-sm btn-rounded btn btn-primary"
                                      >
                                        View Details
                                      </button>
                                    </td>
                                    <td>
                                      <div class="d-flex gap-3">
                                        <a
                                          class="text-success"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-pencil font-size-18"
                                            id="edittooltip"
                                          ></i>
                                        </a>
                                        <a
                                          class="text-danger"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-delete font-size-18"
                                            id="deletetooltip"
                                          ></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="selection-cell">
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </td>
                                    <td>
                                      <a
                                        class="text-body fw-bold"
                                        href="/ecommerce-orders"
                                      >
                                        #SK2544
                                      </a>
                                    </td>
                                    <td>Ronald Taylor</td>
                                    <td>04 Oct 2019</td>
                                    <td>$404</td>
                                    <td>
                                      <span class="font-size-12 badge-soft-warning badge bg-warning rounded-pill">
                                        Refund
                                      </span>
                                    </td>
                                    <td>
                                      <i class="fab fa-cc-visa me-1"></i> Visa
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn-sm btn-rounded btn btn-primary"
                                      >
                                        View Details
                                      </button>
                                    </td>
                                    <td>
                                      <div class="d-flex gap-3">
                                        <a
                                          class="text-success"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-pencil font-size-18"
                                            id="edittooltip"
                                          ></i>
                                        </a>
                                        <a
                                          class="text-danger"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-delete font-size-18"
                                            id="deletetooltip"
                                          ></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="selection-cell">
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </td>
                                    <td>
                                      <a
                                        class="text-body fw-bold"
                                        href="/ecommerce-orders"
                                      >
                                        #SK2543
                                      </a>
                                    </td>
                                    <td>Barry Dick</td>
                                    <td>05 Oct 2019</td>
                                    <td>$412</td>
                                    <td>
                                      <span class="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <i class="fab fa-cc-mastercard me-1"></i>{" "}
                                      Mastercard
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn-sm btn-rounded btn btn-primary"
                                      >
                                        View Details
                                      </button>
                                    </td>
                                    <td>
                                      <div class="d-flex gap-3">
                                        <a
                                          class="text-success"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-pencil font-size-18"
                                            id="edittooltip"
                                          ></i>
                                        </a>
                                        <a
                                          class="text-danger"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-delete font-size-18"
                                            id="deletetooltip"
                                          ></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="selection-cell">
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </td>
                                    <td>
                                      <a
                                        class="text-body fw-bold"
                                        href="/ecommerce-orders"
                                      >
                                        #SK2543
                                      </a>
                                    </td>
                                    <td>Barry Dick</td>
                                    <td>05 Oct 2019</td>
                                    <td>$412</td>
                                    <td>
                                      <span class="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <i class="fab fa-cc-mastercard me-1"></i>{" "}
                                      Mastercard
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn-sm btn-rounded btn btn-primary"
                                      >
                                        View Details
                                      </button>
                                    </td>
                                    <td>
                                      <div class="d-flex gap-3">
                                        <a
                                          class="text-success"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-pencil font-size-18"
                                            id="edittooltip"
                                          ></i>
                                        </a>
                                        <a
                                          class="text-danger"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-delete font-size-18"
                                            id="deletetooltip"
                                          ></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="selection-cell">
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </td>
                                    <td>
                                      <a
                                        class="text-body fw-bold"
                                        href="/ecommerce-orders"
                                      >
                                        #SK2542
                                      </a>
                                    </td>
                                    <td>Juan Mitchell</td>
                                    <td>06 Oct 2019</td>
                                    <td>$384</td>
                                    <td>
                                      <span class="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <i class="fab fa-cc-paypal me-1"></i>{" "}
                                      Paypal
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn-sm btn-rounded btn btn-primary"
                                      >
                                        View Details
                                      </button>
                                    </td>
                                    <td>
                                      <div class="d-flex gap-3">
                                        <a
                                          class="text-success"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-pencil font-size-18"
                                            id="edittooltip"
                                          ></i>
                                        </a>
                                        <a
                                          class="text-danger"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-delete font-size-18"
                                            id="deletetooltip"
                                          ></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="selection-cell">
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </td>
                                    <td>
                                      <a
                                        class="text-body fw-bold"
                                        href="/ecommerce-orders"
                                      >
                                        #SK2542
                                      </a>
                                    </td>
                                    <td>Juan Mitchell</td>
                                    <td>06 Oct 2019</td>
                                    <td>$384</td>
                                    <td>
                                      <span class="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <i class="fab fa-cc-paypal me-1"></i>{" "}
                                      Paypal
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn-sm btn-rounded btn btn-primary"
                                      >
                                        View Details
                                      </button>
                                    </td>
                                    <td>
                                      <div class="d-flex gap-3">
                                        <a
                                          class="text-success"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-pencil font-size-18"
                                            id="edittooltip"
                                          ></i>
                                        </a>
                                        <a
                                          class="text-danger"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-delete font-size-18"
                                            id="deletetooltip"
                                          ></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="selection-cell">
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </td>
                                    <td>
                                      <a
                                        class="text-body fw-bold"
                                        href="/ecommerce-orders"
                                      >
                                        #SK2541
                                      </a>
                                    </td>
                                    <td>Jamal Burnett</td>
                                    <td>07 Oct 2019</td>
                                    <td>$380</td>
                                    <td>
                                      <span class="font-size-12 badge-soft-danger badge bg-danger rounded-pill">
                                        Chargeback
                                      </span>
                                    </td>
                                    <td>
                                      <i class="fab fa-cc-visa me-1"></i> Visa
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn-sm btn-rounded btn btn-primary"
                                      >
                                        View Details
                                      </button>
                                    </td>
                                    <td>
                                      <div class="d-flex gap-3">
                                        <a
                                          class="text-success"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-pencil font-size-18"
                                            id="edittooltip"
                                          ></i>
                                        </a>
                                        <a
                                          class="text-danger"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-delete font-size-18"
                                            id="deletetooltip"
                                          ></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="selection-cell">
                                      <input
                                        type="checkbox"
                                        class="selection-input-4"
                                      />
                                    </td>
                                    <td>
                                      <a
                                        class="text-body fw-bold"
                                        href="/ecommerce-orders"
                                      >
                                        #SK2541
                                      </a>
                                    </td>
                                    <td>Jamal Burnett</td>
                                    <td>07 Oct 2019</td>
                                    <td>$380</td>
                                    <td>
                                      <span class="font-size-12 badge-soft-danger badge bg-danger rounded-pill">
                                        Chargeback
                                      </span>
                                    </td>
                                    <td>
                                      <i class="fab fa-cc-visa me-1"></i> Visa
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        class="btn-sm btn-rounded btn btn-primary"
                                      >
                                        View Details
                                      </button>
                                    </td>
                                    <td>
                                      <div class="d-flex gap-3">
                                        <a
                                          class="text-success"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-pencil font-size-18"
                                            id="edittooltip"
                                          ></i>
                                        </a>
                                        <a
                                          class="text-danger"
                                          href="/ecommerce-orders"
                                        >
                                          <i
                                            class="mdi mdi-delete font-size-18"
                                            id="deletetooltip"
                                          ></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="pagination pagination-rounded justify-content-end mb-2">
                            <ul class="pagination react-bootstrap-table-page-btns-ul">
                              <li class="active page-item" title="1">
                                <a href="#" class="page-link">
                                  1
                                </a>
                              </li>
                              <li class="page-item" title="2">
                                <a href="#" class="page-link">
                                  2
                                </a>
                              </li>
                              <li class="page-item" title="next page">
                                <a href="#" class="page-link">
                                  &gt;
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-4 h4 card-title">Latest Transaction</div>
                    <div className="table-responsive">
                      <div className="react-bootstrap-table">
                        <table className="table table align-middle table-nowrap table-check">
                          <thead className="table-light">
                            <tr>
                              <th
                                className="selection-cell-header"
                                data-row-selection="true"
                              >
                                <input
                                  type="checkbox"
                                  className="selection-input-4"
                                />
                              </th>
                              <th
                                tabindex="0"
                                aria-label="Order ID sort desc"
                                className="sortable"
                              >
                                Order ID<span className="caret-4-desc"></span>
                              </th>
                              <th
                                tabindex="0"
                                aria-label="Billing Name sortable"
                                className="sortable"
                              >
                                Billing Name<span className="order-4"></span>
                              </th>
                              <th
                                tabindex="0"
                                aria-label="Date sortable"
                                className="sortable"
                              >
                                Date<span className="order-4"></span>
                              </th>
                              <th
                                tabindex="0"
                                aria-label="Total sortable"
                                className="sortable"
                              >
                                Total<span className="order-4"></span>
                              </th>
                              <th
                                tabindex="0"
                                aria-label="Payment Status sortable"
                                className="sortable"
                              >
                                Payment Status
                                <span className="order-4"></span>
                              </th>
                              <th
                                tabindex="0"
                                aria-label="Payment Method sortable"
                                className="sortable"
                              >
                                Payment Method
                                <span className="order-4"></span>
                              </th>
                              <th
                                tabindex="0"
                                aria-label="View Details sortable"
                                className="sortable"
                              >
                                View Details<span className="order-4"></span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="selection-cell">
                                <input
                                  type="checkbox"
                                  className="selection-input-4"
                                />
                              </td>
                              <td>
                                <a
                                  className="text-body fw-bold"
                                  href="/dashboard"
                                >
                                  #SK2548
                                </a>
                              </td>
                              <td>Clark Benson</td>
                              <td>2019-10-01</td>
                              <td>$345</td>
                              <td>
                                <span className="font-size-12 badge-soft-warning badge bg-warning rounded-pill">
                                  Refund
                                </span>
                              </td>
                              <td>
                                <i className="fab fa-cc-visa me-1"></i> Visa
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn-sm btn-rounded btn btn-primary"
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="selection-cell">
                                <input
                                  type="checkbox"
                                  className="selection-input-4"
                                />
                              </td>
                              <td>
                                <a
                                  className="text-body fw-bold"
                                  href="/dashboard"
                                >
                                  #SK2547
                                </a>
                              </td>
                              <td>Dustin Moser</td>
                              <td>2019-10-02</td>
                              <td>$350</td>
                              <td>
                                <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <i className="fab fa-cc-mastercard me-1"></i>{" "}
                                Mastercard
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn-sm btn-rounded btn btn-primary"
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="selection-cell">
                                <input
                                  type="checkbox"
                                  className="selection-input-4"
                                />
                              </td>
                              <td>
                                <a
                                  className="text-body fw-bold"
                                  href="/dashboard"
                                >
                                  #SK2546
                                </a>
                              </td>
                              <td>William Cruz</td>
                              <td>2019-10-03</td>
                              <td>$374</td>
                              <td>
                                <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <i className="fab fas fa-money-bill-alt me-1"></i>{" "}
                                COD
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn-sm btn-rounded btn btn-primary"
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="selection-cell">
                                <input
                                  type="checkbox"
                                  className="selection-input-4"
                                />
                              </td>
                              <td>
                                <a
                                  className="text-body fw-bold"
                                  href="/dashboard"
                                >
                                  #SK2545
                                </a>
                              </td>
                              <td>Jacob Hunter</td>
                              <td>2019-10-04</td>
                              <td>$392</td>
                              <td>
                                <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <i className="fab fa-cc-paypal me-1"></i> Paypal
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn-sm btn-rounded btn btn-primary"
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="selection-cell">
                                <input
                                  type="checkbox"
                                  className="selection-input-4"
                                />
                              </td>
                              <td>
                                <a
                                  className="text-body fw-bold"
                                  href="/dashboard"
                                >
                                  #SK2544
                                </a>
                              </td>
                              <td>Ronald Taylor</td>
                              <td>2019-10-04</td>
                              <td>$404</td>
                              <td>
                                <span className="font-size-12 badge-soft-warning badge bg-warning rounded-pill">
                                  Refund
                                </span>
                              </td>
                              <td>
                                <i className="fab fa-cc-visa me-1"></i> Visa
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn-sm btn-rounded btn btn-primary"
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="selection-cell">
                                <input
                                  type="checkbox"
                                  className="selection-input-4"
                                />
                              </td>
                              <td>
                                <a
                                  className="text-body fw-bold"
                                  href="/dashboard"
                                >
                                  #SK2543
                                </a>
                              </td>
                              <td>Barry Dick</td>
                              <td>2019-10-05</td>
                              <td>$412</td>
                              <td>
                                <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <i className="fab fa-cc-mastercard me-1"></i>{" "}
                                Mastercard
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn-sm btn-rounded btn btn-primary"
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="pagination pagination-rounded justify-content-end">
                      <ul className="pagination react-bootstrap-table-page-btns-ul">
                        <li className="active page-item" title="1">
                          <a href="#" className="page-link">
                            1
                          </a>
                        </li>
                        <li className="page-item" title="2">
                          <a href="#" className="page-link">
                            2
                          </a>
                        </li>
                        <li className="page-item" title="3">
                          <a href="#" className="page-link">
                            3
                          </a>
                        </li>
                        <li className="page-item" title="next page">
                          <a href="#" className="page-link">
                            &gt;
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                {/* <div className="card">
                    <div className="card-body">
                      <div className="d-sm-flex flex-wrap">
                        <div className="card-title mb-4 h4 card-title">
                          Email Sent
                        </div>
                        <div className="ms-auto">
                          <ul className="nav nav-pills">
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="one_month"
                                href="/dashboard"
                              >
                                Week
                              </a>{" "}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="one_month"
                                href="/dashboard"
                              >
                                Month
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="active nav-link"
                                id="one_month"
                                href="/dashboard"
                              >
                                Year
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div
                        options="[object Object]"
                        series="[object Object],[object Object],[object Object]"
                        type="bar"
                        height="360"
                        className="apex-charts"
                        width="100%"
                        style={{minHeight: "375px"}}
                      >
                        <div
                          id="apexchartspskux77v"
                          className="apexcharts-canvas apexchartspskux77v apexcharts-theme-light"
                          style={{width: "766px", height: "360px"}}
                        >
                          <svg
                            id="SvgjsSvg1898"
                            width="766"
                            height="360"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlnsSvgjs="http://svgjs.dev"
                            className="apexcharts-svg"
                            xmlnsData="ApexChartsNS"
                            transform="translate(0, 0)"
                            style={{background: "transparent"}}
                          >
                            <foreignObject x="0" y="0" width="766" height="360">
                              <div
                                className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                                xmlns="http://www.w3.org/1999/xhtml"
                                style={{inset: "auto 0px 1px", position: "absolute", maxHeight: '180px'}}
                              >
                                <div
                                  className="apexcharts-legend-series"
                                  rel="1"
                                  seriesname="SeriesxA"
                                  dataCollapsed="false"
                                  style={{margin: "2px 5px"}}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel="1"
                                    dataCollapsed="false"
                                    style={{background: "rgb(85, 110, 230) !important", color: 'rgb(85, 110, 230)', height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "2px"}}
                                  ></span>
                                  <span
                                    className="apexcharts-legend-text"
                                    rel="1"
                                    i="0"
                                    dataDefault-text="Series%20A"
                                    dataCollapsed="false"
                                    style={{color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily: "Helvetica, Arial, sans-serif"}}
                                  >
                                    Series A
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  rel="2"
                                  seriesname="SeriesxB"
                                  dataCollapsed="false"
                                  style={{margin: "2px 5px"}}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel="2"
                                    dataCollapsed="false"
                                    style={{background: "rgb(241, 180, 76) !important", color: "rgb(241, 180, 76)", height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "2px"}}
                                  ></span>
                                  <span
                                    className="apexcharts-legend-text"
                                    rel="2"
                                    i="1"
                                    dataDefaultText="Series%20B"
                                    dataCollapsed="false"
                                    style={{color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily: "Helvetica, Arial, sans-serif"}}
                                  >
                                    Series B
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  rel="3"
                                  seriesname="SeriesxC"
                                  dataCollapsed="false"
                                  style={{margin: "2px 5px"}}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel="3"
                                    dataCollapsed="false"
                                    style={{background: 'rgb(52, 195, 143) !important', color: "rgb(52, 195, 143)", height: "12px", width: "12px", left: "0px", 
                                    top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "2px"}}
                                  ></span>
                                  <span
                                    className="apexcharts-legend-text"
                                    rel="3"
                                    i="2"
                                    dataDefaultText="Series%20C"
                                    dataCollapsed="false"
                                    style={{color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    Series C
                                  </span>
                                </div>
                              </div>
                     <style type="text/css">	    	
      .apexcharts-legend {	
        display: flex;	
        overflow: auto;	
        padding: 0 1"0px",	
      }	
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {	
        flex-wrap: wrap	
      }	
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
        flex-direction: column;	
        bottom: 0;	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
        justify-content: flex-start;	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {	
        justify-content: center;  	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {	
        justify-content: flex-end;	
      }	
      .apexcharts-legend-series {	
        cursor: pointer;	
        line-height: normal;	
      }	
      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{	
        display: flex;	
        align-items: center;	
      }	
      .apexcharts-legend-text {	
        position: relative;	
        fontSize: 14px;	
      }	
      .apexcharts-legend-text *, .apexcharts-legend-marker * {	
        pointer-events: none;	
      }	
      .apexcharts-legend-marker {	
        position: relative;	
        display: inline-"block";	
        cursor: pointer;	
        margin-right: 3px;	
        border-style: solid;
      }	
      	
      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{	
        display: inline-"block";	
      }	
      .apexcharts-legend-series.apexcharts-no-click {	
        cursor: auto;	
      }	
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {	
        display: "none" !important;	
      }	
      .apexcharts-inactive-legend {	
        opacity: 0.45;	
      }</style> 
                            </foreignObject>
                            <g
                              id="SvgjsG1900"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(44.62797927856445, 30)"
                            >
                              <defs id="SvgjsDefs1899">
                                <linearGradient
                                  id="SvgjsLinearGradient1904"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    id="SvgjsStop1905"
                                    stop-opacity="0.4"
                                    stop-color="rgba(216,227,240,0.4)"
                                    offset="0"
                                  ></stop>
                                  <stop
                                    id="SvgjsStop1906"
                                    stop-opacity="0.5"
                                    stop-color="rgba(190,209,230,0.5)"
                                    offset="1"
                                  ></stop>
                                  <stop
                                    id="SvgjsStop1907"
                                    stop-opacity="0.5"
                                    stop-color="rgba(190,209,230,0.5)"
                                    offset="1"
                                  ></stop>
                                </linearGradient>
                                <clipPath id="gridRectMaskpskux77v">
                                  <rect
                                    id="SvgjsRect1909"
                                    width="715.3720207214355"
                                    height="263.81759814834595"
                                    x="-2"
                                    y="0"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    strokeWidth="0"
                                    stroke="none"
                                    strokeDasharray="0"
                                    fill="#fff"
                                  ></rect>
                                </clipPath>
                                <clipPath id="forecastMaskpskux77v"></clipPath>
                                <clipPath id="nonForecastMaskpskux77v"></clipPath>
                                <clipPath id="gridRectMarkerMaskpskux77v">
                                  <rect
                                    id="SvgjsRect1910"
                                    width="715.3720207214355"
                                    height="267.81759814834595"
                                    x="-2"
                                    y="-2"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    strokeWidth="0"
                                    stroke="none"
                                    strokeDasharray="0"
                                    fill="#fff"
                                  ></rect>
                                </clipPath>
                              </defs>
                              <rect
                                id="SvgjsRect1908"
                                width="8.892150259017944"
                                height="263.81759814834595"
                                x="0"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                strokeWidth="0"
                                strokeDasharray="3"
                                fill="url(#SvgjsLinearGradient1904)"
                                className="apexcharts-xcrosshairs"
                                y2="263.81759814834595"
                                filter="none"
                                fillOpacity="0.9"
                              ></rect>
                              <g
                                id="SvgjsG1954"
                                className="apexcharts-xaxis"
                                transform="translate(0, 0)"
                              >
                                <g
                                  id="SvgjsG1955"
                                  className="apexcharts-xaxis-texts-g"
                                  transform="translate(0, -4)"
                                >
                                  <text
                                    id="SvgjsText1957"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="29.640500863393147"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1958">Jan</tspan>
                                    <title>Jan</title>
                                  </text>
                                  <text
                                    id="SvgjsText1960"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="88.92150259017944"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1961">Feb</tspan>
                                    <title>Feb</title>
                                  </text>
                                  <text
                                    id="SvgjsText1963"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="148.20250431696573"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1964">Mar</tspan>
                                    <title>Mar</title>
                                  </text>
                                  <text
                                    id="SvgjsText1966"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="207.48350604375202"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1967">Apr</tspan>
                                    <title>Apr</title>
                                  </text>
                                  <text
                                    id="SvgjsText1969"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="266.76450777053833"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1970">May</tspan>
                                    <title>May</title>
                                  </text>
                                  <text
                                    id="SvgjsText1972"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="326.04550949732464"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1973">Jun</tspan>
                                    <title>Jun</title>
                                  </text>
                                  <text
                                    id="SvgjsText1975"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="385.32651122411096"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1976">Jul</tspan>
                                    <title>Jul</title>
                                  </text>
                                  <text
                                    id="SvgjsText1978"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="444.6075129508973"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1979">Aug</tspan>
                                    <title>Aug</title>
                                  </text>
                                  <text
                                    id="SvgjsText1981"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="503.88851467768353"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1982">Sep</tspan>
                                    <title>Sep</title>
                                  </text>
                                  <text
                                    id="SvgjsText1984"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="563.1695164044697"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1985">Oct</tspan>
                                    <title>Oct</title>
                                  </text>
                                  <text
                                    id="SvgjsText1987"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="622.450518131256"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1988">Nov</tspan>
                                    <title>Nov</title>
                                  </text>
                                  <text
                                    id="SvgjsText1990"
                                    font-family="Helvetica, Arial, sans-serif"
                                    x="681.7315198580422"
                                    y="292.81759814834595"
                                    text-anchor="middle"
                                    dominant-baseline="auto"
                                    font-size="12px"
                                    font-weight="400"
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                  >
                                    <tspan id="SvgjsTspan1991">Dec</tspan>
                                    <title>Dec</title>
                                  </text>
                                </g>
                                <line
                                  id="SvgjsLine1992"
                                  x1="0"
                                  y1="264.81759814834595"
                                  x2="711.3720207214355"
                                  y2="264.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeWidth="1"
                                  strokeLinecap="butt"
                                ></line>
                              </g>
                              <g id="SvgjsG2007" className="apexcharts-grid">
                                <g
                                  id="SvgjsG2008"
                                  className="apexcharts-gridlines-horizontal"
                                >
                                  <line
                                    id="SvgjsLine2023"
                                    x1="0"
                                    y1="0"
                                    x2="711.3720207214355"
                                    y2="0"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine2024"
                                    x1="0"
                                    y1="52.76351962966919"
                                    x2="711.3720207214355"
                                    y2="52.76351962966919"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine2025"
                                    x1="0"
                                    y1="105.52703925933838"
                                    x2="711.3720207214355"
                                    y2="105.52703925933838"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine2026"
                                    x1="0"
                                    y1="158.29055888900757"
                                    x2="711.3720207214355"
                                    y2="158.29055888900757"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine2027"
                                    x1="0"
                                    y1="211.05407851867676"
                                    x2="711.3720207214355"
                                    y2="211.05407851867676"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine2028"
                                    x1="0"
                                    y1="263.81759814834595"
                                    x2="711.3720207214355"
                                    y2="263.81759814834595"
                                    stroke="#e0e0e0"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  ></line>
                                </g>
                                <g
                                  id="SvgjsG2009"
                                  className="apexcharts-gridlines-vertical"
                                ></g>
                                <line
                                  id="SvgjsLine2010"
                                  x1="0"
                                  y1="264.81759814834595"
                                  x2="0"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2011"
                                  x1="59.28100172678629"
                                  y1="264.81759814834595"
                                  x2="59.28100172678629"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2012"
                                  x1="118.56200345357259"
                                  y1="264.81759814834595"
                                  x2="118.56200345357259"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2013"
                                  x1="177.8430051803589"
                                  y1="264.81759814834595"
                                  x2="177.8430051803589"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2014"
                                  x1="237.12400690714517"
                                  y1="264.81759814834595"
                                  x2="237.12400690714517"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2015"
                                  x1="296.40500863393146"
                                  y1="264.81759814834595"
                                  x2="296.40500863393146"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2016"
                                  x1="355.6860103607178"
                                  y1="264.81759814834595"
                                  x2="355.6860103607178"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2017"
                                  x1="414.9670120875041"
                                  y1="264.81759814834595"
                                  x2="414.9670120875041"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2018"
                                  x1="474.2480138142904"
                                  y1="264.81759814834595"
                                  x2="474.2480138142904"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2019"
                                  x1="533.5290155410767"
                                  y1="264.81759814834595"
                                  x2="533.5290155410767"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2020"
                                  x1="592.8100172678629"
                                  y1="264.81759814834595"
                                  x2="592.8100172678629"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2021"
                                  x1="652.0910189946492"
                                  y1="264.81759814834595"
                                  x2="652.0910189946492"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2022"
                                  x1="711.3720207214354"
                                  y1="264.81759814834595"
                                  x2="711.3720207214354"
                                  y2="270.81759814834595"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-xaxis-tick"
                                ></line>
                                <line
                                  id="SvgjsLine2030"
                                  x1="0"
                                  y1="263.81759814834595"
                                  x2="711.3720207214355"
                                  y2="263.81759814834595"
                                  stroke="transparent"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                ></line>
                                <line
                                  id="SvgjsLine2029"
                                  x1="0"
                                  y1="1"
                                  x2="0"
                                  y2="263.81759814834595"
                                  stroke="transparent"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                ></line>
                              </g>
                              <g
                                id="SvgjsG1911"
                                className="apexcharts-bar-series apexcharts-plot-series"
                              >
                                <g
                                  id="SvgjsG1912"
                                  className="apexcharts-series"
                                  seriesName="SeriesxA"
                                  rel="1"
                                  dataRealIndex="0"
                                >
                                  <path
                                    id="SvgjsPath1914"
                                    d="M 25.194425733884174 263.81759814834595L 25.194425733884174 147.73785496307374Q 25.194425733884174 147.73785496307374 25.194425733884174 147.73785496307374L 34.08657599290212 147.73785496307374Q 34.08657599290212 147.73785496307374 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 25.194425733884174 263.81759814834595L 25.194425733884174 147.73785496307374Q 25.194425733884174 147.73785496307374 25.194425733884174 147.73785496307374L 34.08657599290212 147.73785496307374Q 34.08657599290212 147.73785496307374 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595z"
                                    pathFrom="M 25.194425733884174 263.81759814834595L 25.194425733884174 263.81759814834595L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595L 34.08657599290212 263.81759814834595L 25.194425733884174 263.81759814834595"
                                    cy="147.73785496307374"
                                    cx="84.47542746067046"
                                    j="0"
                                    val="44"
                                    barHeight="116.07974318527222"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1915"
                                    d="M 84.47542746067046 263.81759814834595L 84.47542746067046 118.71791916675568Q 84.47542746067046 118.71791916675568 84.47542746067046 118.71791916675568L 93.3675777196884 118.71791916675568Q 93.3675777196884 118.71791916675568 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 84.47542746067046 263.81759814834595L 84.47542746067046 118.71791916675568Q 84.47542746067046 118.71791916675568 84.47542746067046 118.71791916675568L 93.3675777196884 118.71791916675568Q 93.3675777196884 118.71791916675568 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595z"
                                    pathFrom="M 84.47542746067046 263.81759814834595L 84.47542746067046 263.81759814834595L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595L 93.3675777196884 263.81759814834595L 84.47542746067046 263.81759814834595"
                                    cy="118.71791916675568"
                                    cx="143.75642918745675"
                                    j="1"
                                    val="55"
                                    barHeight="145.09967898159027"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1916"
                                    d="M 143.75642918745675 263.81759814834595L 143.75642918745675 155.6523829075241Q 143.75642918745675 155.6523829075241 143.75642918745675 155.6523829075241L 152.64857944647468 155.6523829075241Q 152.64857944647468 155.6523829075241 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 143.75642918745675 263.81759814834595L 143.75642918745675 155.6523829075241Q 143.75642918745675 155.6523829075241 143.75642918745675 155.6523829075241L 152.64857944647468 155.6523829075241Q 152.64857944647468 155.6523829075241 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595z"
                                    pathFrom="M 143.75642918745675 263.81759814834595L 143.75642918745675 263.81759814834595L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595L 152.64857944647468 263.81759814834595L 143.75642918745675 263.81759814834595"
                                    cy="155.6523829075241"
                                    cx="203.03743091424303"
                                    j="2"
                                    val="41"
                                    barHeight="108.16521524082184"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1917"
                                    d="M 203.03743091424303 263.81759814834595L 203.03743091424303 87.05980738895417Q 203.03743091424303 87.05980738895417 203.03743091424303 87.05980738895417L 211.92958117326097 87.05980738895417Q 211.92958117326097 87.05980738895417 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 203.03743091424303 263.81759814834595L 203.03743091424303 87.05980738895417Q 203.03743091424303 87.05980738895417 203.03743091424303 87.05980738895417L 211.92958117326097 87.05980738895417Q 211.92958117326097 87.05980738895417 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595z"
                                    pathFrom="M 203.03743091424303 263.81759814834595L 203.03743091424303 263.81759814834595L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595L 211.92958117326097 263.81759814834595L 203.03743091424303 263.81759814834595"
                                    cy="87.05980738895417"
                                    cx="262.31843264102935"
                                    j="3"
                                    val="67"
                                    barHeight="176.75779075939178"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1918"
                                    d="M 262.31843264102935 263.81759814834595L 262.31843264102935 205.77772655570985Q 262.31843264102935 205.77772655570985 262.31843264102935 205.77772655570985L 271.2105829000473 205.77772655570985Q 271.2105829000473 205.77772655570985 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 262.31843264102935 263.81759814834595L 262.31843264102935 205.77772655570985Q 262.31843264102935 205.77772655570985 262.31843264102935 205.77772655570985L 271.2105829000473 205.77772655570985Q 271.2105829000473 205.77772655570985 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595z"
                                    pathFrom="M 262.31843264102935 263.81759814834595L 262.31843264102935 263.81759814834595L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595L 271.2105829000473 263.81759814834595L 262.31843264102935 263.81759814834595"
                                    cy="205.77772655570985"
                                    cx="321.59943436781566"
                                    j="4"
                                    val="22"
                                    barHeight="58.03987159263611"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1919"
                                    d="M 321.59943436781566 263.81759814834595L 321.59943436781566 150.37603094455721Q 321.59943436781566 150.37603094455721 321.59943436781566 150.37603094455721L 330.4915846268336 150.37603094455721Q 330.4915846268336 150.37603094455721 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 321.59943436781566 263.81759814834595L 321.59943436781566 150.37603094455721Q 321.59943436781566 150.37603094455721 321.59943436781566 150.37603094455721L 330.4915846268336 150.37603094455721Q 330.4915846268336 150.37603094455721 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595z"
                                    pathFrom="M 321.59943436781566 263.81759814834595L 321.59943436781566 263.81759814834595L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595L 330.4915846268336 263.81759814834595L 321.59943436781566 263.81759814834595"
                                    cy="150.37603094455721"
                                    cx="380.880436094602"
                                    j="5"
                                    val="43"
                                    barHeight="113.44156720378875"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1920"
                                    d="M 380.880436094602 263.81759814834595L 380.880436094602 168.8432628149414Q 380.880436094602 168.8432628149414 380.880436094602 168.8432628149414L 389.77258635361994 168.8432628149414Q 389.77258635361994 168.8432628149414 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 380.880436094602 263.81759814834595L 380.880436094602 168.8432628149414Q 380.880436094602 168.8432628149414 380.880436094602 168.8432628149414L 389.77258635361994 168.8432628149414Q 389.77258635361994 168.8432628149414 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595z"
                                    pathFrom="M 380.880436094602 263.81759814834595L 380.880436094602 263.81759814834595L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595L 389.77258635361994 263.81759814834595L 380.880436094602 263.81759814834595"
                                    cy="168.8432628149414"
                                    cx="440.1614378213883"
                                    j="6"
                                    val="36"
                                    barHeight="94.97433533340454"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1921"
                                    d="M 440.1614378213883 263.81759814834595L 440.1614378213883 126.63244711120606Q 440.1614378213883 126.63244711120606 440.1614378213883 126.63244711120606L 449.05358808040626 126.63244711120606Q 449.05358808040626 126.63244711120606 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 440.1614378213883 263.81759814834595L 440.1614378213883 126.63244711120606Q 440.1614378213883 126.63244711120606 440.1614378213883 126.63244711120606L 449.05358808040626 126.63244711120606Q 449.05358808040626 126.63244711120606 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595z"
                                    pathFrom="M 440.1614378213883 263.81759814834595L 440.1614378213883 263.81759814834595L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595L 449.05358808040626 263.81759814834595L 440.1614378213883 263.81759814834595"
                                    cy="126.63244711120606"
                                    cx="499.4424395481746"
                                    j="7"
                                    val="52"
                                    barHeight="137.1851510371399"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1922"
                                    d="M 499.4424395481746 263.81759814834595L 499.4424395481746 200.50137459274293Q 499.4424395481746 200.50137459274293 499.4424395481746 200.50137459274293L 508.3345898071926 200.50137459274293Q 508.3345898071926 200.50137459274293 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 499.4424395481746 263.81759814834595L 499.4424395481746 200.50137459274293Q 499.4424395481746 200.50137459274293 499.4424395481746 200.50137459274293L 508.3345898071926 200.50137459274293Q 508.3345898071926 200.50137459274293 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595z"
                                    pathFrom="M 499.4424395481746 263.81759814834595L 499.4424395481746 263.81759814834595L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595L 508.3345898071926 263.81759814834595L 499.4424395481746 263.81759814834595"
                                    cy="200.50137459274293"
                                    cx="558.7234412749609"
                                    j="8"
                                    val="24"
                                    barHeight="63.316223555603024"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1923"
                                    d="M 558.7234412749609 263.81759814834595L 558.7234412749609 216.33043048164367Q 558.7234412749609 216.33043048164367 558.7234412749609 216.33043048164367L 567.6155915339789 216.33043048164367Q 567.6155915339789 216.33043048164367 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 558.7234412749609 263.81759814834595L 558.7234412749609 216.33043048164367Q 558.7234412749609 216.33043048164367 558.7234412749609 216.33043048164367L 567.6155915339789 216.33043048164367Q 567.6155915339789 216.33043048164367 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595z"
                                    pathFrom="M 558.7234412749609 263.81759814834595L 558.7234412749609 263.81759814834595L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595L 567.6155915339789 263.81759814834595L 558.7234412749609 263.81759814834595"
                                    cy="216.33043048164367"
                                    cx="618.0044430017472"
                                    j="9"
                                    val="18"
                                    barHeight="47.48716766670227"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1924"
                                    d="M 618.0044430017472 263.81759814834595L 618.0044430017472 168.8432628149414Q 618.0044430017472 168.8432628149414 618.0044430017472 168.8432628149414L 626.8965932607651 168.8432628149414Q 626.8965932607651 168.8432628149414 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 618.0044430017472 263.81759814834595L 618.0044430017472 168.8432628149414Q 618.0044430017472 168.8432628149414 618.0044430017472 168.8432628149414L 626.8965932607651 168.8432628149414Q 626.8965932607651 168.8432628149414 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595z"
                                    pathFrom="M 618.0044430017472 263.81759814834595L 618.0044430017472 263.81759814834595L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595L 626.8965932607651 263.81759814834595L 618.0044430017472 263.81759814834595"
                                    cy="168.8432628149414"
                                    cx="677.2854447285334"
                                    j="10"
                                    val="36"
                                    barHeight="94.97433533340454"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1925"
                                    d="M 677.2854447285334 263.81759814834595L 677.2854447285334 137.18515103713992Q 677.2854447285334 137.18515103713992 677.2854447285334 137.18515103713992L 686.1775949875514 137.18515103713992Q 686.1775949875514 137.18515103713992 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595z"
                                    fill="rgba(85,110,230,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="0"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 677.2854447285334 263.81759814834595L 677.2854447285334 137.18515103713992Q 677.2854447285334 137.18515103713992 677.2854447285334 137.18515103713992L 686.1775949875514 137.18515103713992Q 686.1775949875514 137.18515103713992 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595z"
                                    pathFrom="M 677.2854447285334 263.81759814834595L 677.2854447285334 263.81759814834595L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595L 686.1775949875514 263.81759814834595L 677.2854447285334 263.81759814834595"
                                    cy="137.18515103713992"
                                    cx="736.5664464553197"
                                    j="11"
                                    val="48"
                                    barHeight="126.63244711120605"
                                    barWidth="8.892150259017944"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1926"
                                  className="apexcharts-series"
                                  seriesName="SeriesxB"
                                  rel="2"
                                  dataRealIndex="1"
                                >
                                  <path
                                    id="SvgjsPath1928"
                                    d="M 25.194425733884174 147.73785496307374L 25.194425733884174 113.44156720378876Q 25.194425733884174 113.44156720378876 25.194425733884174 113.44156720378876L 34.08657599290212 113.44156720378876Q 34.08657599290212 113.44156720378876 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 25.194425733884174 147.73785496307374L 25.194425733884174 113.44156720378876Q 25.194425733884174 113.44156720378876 25.194425733884174 113.44156720378876L 34.08657599290212 113.44156720378876Q 34.08657599290212 113.44156720378876 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374z"
                                    pathFrom="M 25.194425733884174 147.73785496307374L 25.194425733884174 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 34.08657599290212 147.73785496307374L 25.194425733884174 147.73785496307374"
                                    cy="113.44156720378876"
                                    cx="84.47542746067046"
                                    j="0"
                                    val="13"
                                    barHeight="34.29628775928497"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1929"
                                    d="M 84.47542746067046 118.71791916675568L 84.47542746067046 58.03987159263611Q 84.47542746067046 58.03987159263611 84.47542746067046 58.03987159263611L 93.3675777196884 58.03987159263611Q 93.3675777196884 58.03987159263611 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 84.47542746067046 118.71791916675568L 84.47542746067046 58.03987159263611Q 84.47542746067046 58.03987159263611 84.47542746067046 58.03987159263611L 93.3675777196884 58.03987159263611Q 93.3675777196884 58.03987159263611 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568z"
                                    pathFrom="M 84.47542746067046 118.71791916675568L 84.47542746067046 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 93.3675777196884 118.71791916675568L 84.47542746067046 118.71791916675568"
                                    cy="58.03987159263611"
                                    cx="143.75642918745675"
                                    j="1"
                                    val="23"
                                    barHeight="60.67804757411957"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1930"
                                    d="M 143.75642918745675 155.6523829075241L 143.75642918745675 102.88886327785491Q 143.75642918745675 102.88886327785491 143.75642918745675 102.88886327785491L 152.64857944647468 102.88886327785491Q 152.64857944647468 102.88886327785491 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 143.75642918745675 155.6523829075241L 143.75642918745675 102.88886327785491Q 143.75642918745675 102.88886327785491 143.75642918745675 102.88886327785491L 152.64857944647468 102.88886327785491Q 152.64857944647468 102.88886327785491 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241z"
                                    pathFrom="M 143.75642918745675 155.6523829075241L 143.75642918745675 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 152.64857944647468 155.6523829075241L 143.75642918745675 155.6523829075241"
                                    cy="102.88886327785491"
                                    cx="203.03743091424303"
                                    j="2"
                                    val="20"
                                    barHeight="52.76351962966919"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1931"
                                    d="M 203.03743091424303 87.05980738895417L 203.03743091424303 65.95439953708649Q 203.03743091424303 65.95439953708649 203.03743091424303 65.95439953708649L 211.92958117326097 65.95439953708649Q 211.92958117326097 65.95439953708649 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 203.03743091424303 87.05980738895417L 203.03743091424303 65.95439953708649Q 203.03743091424303 65.95439953708649 203.03743091424303 65.95439953708649L 211.92958117326097 65.95439953708649Q 211.92958117326097 65.95439953708649 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417z"
                                    pathFrom="M 203.03743091424303 87.05980738895417L 203.03743091424303 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 211.92958117326097 87.05980738895417L 203.03743091424303 87.05980738895417"
                                    cy="65.95439953708649"
                                    cx="262.31843264102935"
                                    j="3"
                                    val="8"
                                    barHeight="21.105407851867675"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1932"
                                    d="M 262.31843264102935 205.77772655570985L 262.31843264102935 171.48143879642487Q 262.31843264102935 171.48143879642487 262.31843264102935 171.48143879642487L 271.2105829000473 171.48143879642487Q 271.2105829000473 171.48143879642487 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 262.31843264102935 205.77772655570985L 262.31843264102935 171.48143879642487Q 262.31843264102935 171.48143879642487 262.31843264102935 171.48143879642487L 271.2105829000473 171.48143879642487Q 271.2105829000473 171.48143879642487 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985z"
                                    pathFrom="M 262.31843264102935 205.77772655570985L 262.31843264102935 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 271.2105829000473 205.77772655570985L 262.31843264102935 205.77772655570985"
                                    cy="171.48143879642487"
                                    cx="321.59943436781566"
                                    j="4"
                                    val="13"
                                    barHeight="34.29628775928497"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1933"
                                    d="M 321.59943436781566 150.37603094455721L 321.59943436781566 79.14527944450381Q 321.59943436781566 79.14527944450381 321.59943436781566 79.14527944450381L 330.4915846268336 79.14527944450381Q 330.4915846268336 79.14527944450381 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 321.59943436781566 150.37603094455721L 321.59943436781566 79.14527944450381Q 321.59943436781566 79.14527944450381 321.59943436781566 79.14527944450381L 330.4915846268336 79.14527944450381Q 330.4915846268336 79.14527944450381 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721z"
                                    pathFrom="M 321.59943436781566 150.37603094455721L 321.59943436781566 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 330.4915846268336 150.37603094455721L 321.59943436781566 150.37603094455721"
                                    cy="79.14527944450381"
                                    cx="380.880436094602"
                                    j="5"
                                    val="27"
                                    barHeight="71.2307515000534"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1934"
                                    d="M 380.880436094602 168.8432628149414L 380.880436094602 121.35609514823912Q 380.880436094602 121.35609514823912 380.880436094602 121.35609514823912L 389.77258635361994 121.35609514823912Q 389.77258635361994 121.35609514823912 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 380.880436094602 168.8432628149414L 380.880436094602 121.35609514823912Q 380.880436094602 121.35609514823912 380.880436094602 121.35609514823912L 389.77258635361994 121.35609514823912Q 389.77258635361994 121.35609514823912 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414z"
                                    pathFrom="M 380.880436094602 168.8432628149414L 380.880436094602 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 389.77258635361994 168.8432628149414L 380.880436094602 168.8432628149414"
                                    cy="121.35609514823912"
                                    cx="440.1614378213883"
                                    j="6"
                                    val="18"
                                    barHeight="47.48716766670227"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1935"
                                    d="M 440.1614378213883 126.63244711120606L 440.1614378213883 68.59257551856996Q 440.1614378213883 68.59257551856996 440.1614378213883 68.59257551856996L 449.05358808040626 68.59257551856996Q 449.05358808040626 68.59257551856996 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 440.1614378213883 126.63244711120606L 440.1614378213883 68.59257551856996Q 440.1614378213883 68.59257551856996 440.1614378213883 68.59257551856996L 449.05358808040626 68.59257551856996Q 449.05358808040626 68.59257551856996 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606z"
                                    pathFrom="M 440.1614378213883 126.63244711120606L 440.1614378213883 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 449.05358808040626 126.63244711120606L 440.1614378213883 126.63244711120606"
                                    cy="68.59257551856996"
                                    cx="499.4424395481746"
                                    j="7"
                                    val="22"
                                    barHeight="58.03987159263611"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1936"
                                    d="M 499.4424395481746 200.50137459274293L 499.4424395481746 174.11961477790834Q 499.4424395481746 174.11961477790834 499.4424395481746 174.11961477790834L 508.3345898071926 174.11961477790834Q 508.3345898071926 174.11961477790834 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 499.4424395481746 200.50137459274293L 499.4424395481746 174.11961477790834Q 499.4424395481746 174.11961477790834 499.4424395481746 174.11961477790834L 508.3345898071926 174.11961477790834Q 508.3345898071926 174.11961477790834 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293z"
                                    pathFrom="M 499.4424395481746 200.50137459274293L 499.4424395481746 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 508.3345898071926 200.50137459274293L 499.4424395481746 200.50137459274293"
                                    cy="174.11961477790834"
                                    cx="558.7234412749609"
                                    j="8"
                                    val="10"
                                    barHeight="26.381759814834595"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1937"
                                    d="M 558.7234412749609 216.33043048164367L 558.7234412749609 174.11961477790834Q 558.7234412749609 174.11961477790834 558.7234412749609 174.11961477790834L 567.6155915339789 174.11961477790834Q 567.6155915339789 174.11961477790834 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 558.7234412749609 216.33043048164367L 558.7234412749609 174.11961477790834Q 558.7234412749609 174.11961477790834 558.7234412749609 174.11961477790834L 567.6155915339789 174.11961477790834Q 567.6155915339789 174.11961477790834 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367z"
                                    pathFrom="M 558.7234412749609 216.33043048164367L 558.7234412749609 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 567.6155915339789 216.33043048164367L 558.7234412749609 216.33043048164367"
                                    cy="174.11961477790834"
                                    cx="618.0044430017472"
                                    j="9"
                                    val="16"
                                    barHeight="42.21081570373535"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1938"
                                    d="M 618.0044430017472 168.8432628149414L 618.0044430017472 105.52703925933838Q 618.0044430017472 105.52703925933838 618.0044430017472 105.52703925933838L 626.8965932607651 105.52703925933838Q 626.8965932607651 105.52703925933838 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 618.0044430017472 168.8432628149414L 618.0044430017472 105.52703925933838Q 618.0044430017472 105.52703925933838 618.0044430017472 105.52703925933838L 626.8965932607651 105.52703925933838Q 626.8965932607651 105.52703925933838 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414z"
                                    pathFrom="M 618.0044430017472 168.8432628149414L 618.0044430017472 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 626.8965932607651 168.8432628149414L 618.0044430017472 168.8432628149414"
                                    cy="105.52703925933838"
                                    cx="677.2854447285334"
                                    j="10"
                                    val="24"
                                    barHeight="63.316223555603024"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1939"
                                    d="M 677.2854447285334 137.18515103713992L 677.2854447285334 79.14527944450381Q 677.2854447285334 79.14527944450381 677.2854447285334 79.14527944450381L 686.1775949875514 79.14527944450381Q 686.1775949875514 79.14527944450381 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992z"
                                    fill="rgba(241,180,76,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="1"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 677.2854447285334 137.18515103713992L 677.2854447285334 79.14527944450381Q 677.2854447285334 79.14527944450381 677.2854447285334 79.14527944450381L 686.1775949875514 79.14527944450381Q 686.1775949875514 79.14527944450381 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992z"
                                    pathFrom="M 677.2854447285334 137.18515103713992L 677.2854447285334 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 686.1775949875514 137.18515103713992L 677.2854447285334 137.18515103713992"
                                    cy="79.14527944450381"
                                    cx="736.5664464553197"
                                    j="11"
                                    val="22"
                                    barHeight="58.03987159263611"
                                    barWidth="8.892150259017944"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1940"
                                  className="apexcharts-series"
                                  seriesName="SeriesxC"
                                  rel="3"
                                  dataRealIndex="2"
                                >
                                  <path
                                    id="SvgjsPath1942"
                                    d="M 25.194425733884174 113.44156720378876L 25.194425733884174 84.42163140747071Q 25.194425733884174 84.42163140747071 25.194425733884174 84.42163140747071L 34.08657599290212 84.42163140747071Q 34.08657599290212 84.42163140747071 34.08657599290212 84.42163140747071L 34.08657599290212 84.42163140747071L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 25.194425733884174 113.44156720378876L 25.194425733884174 84.42163140747071Q 25.194425733884174 84.42163140747071 25.194425733884174 84.42163140747071L 34.08657599290212 84.42163140747071Q 34.08657599290212 84.42163140747071 34.08657599290212 84.42163140747071L 34.08657599290212 84.42163140747071L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876z"
                                    pathFrom="M 25.194425733884174 113.44156720378876L 25.194425733884174 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 34.08657599290212 113.44156720378876L 25.194425733884174 113.44156720378876"
                                    cy="84.42163140747071"
                                    cx="84.47542746067046"
                                    j="0"
                                    val="11"
                                    barHeight="29.019935796318055"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1943"
                                    d="M 84.47542746067046 58.03987159263611L 84.47542746067046 13.190879907417298Q 84.47542746067046 13.190879907417298 84.47542746067046 13.190879907417298L 93.3675777196884 13.190879907417298Q 93.3675777196884 13.190879907417298 93.3675777196884 13.190879907417298L 93.3675777196884 13.190879907417298L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 84.47542746067046 58.03987159263611L 84.47542746067046 13.190879907417298Q 84.47542746067046 13.190879907417298 84.47542746067046 13.190879907417298L 93.3675777196884 13.190879907417298Q 93.3675777196884 13.190879907417298 93.3675777196884 13.190879907417298L 93.3675777196884 13.190879907417298L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611z"
                                    pathFrom="M 84.47542746067046 58.03987159263611L 84.47542746067046 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 93.3675777196884 58.03987159263611L 84.47542746067046 58.03987159263611"
                                    cy="13.190879907417298"
                                    cx="143.75642918745675"
                                    j="1"
                                    val="17"
                                    barHeight="44.84899168521881"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1944"
                                    d="M 143.75642918745675 102.88886327785491L 143.75642918745675 63.31622355560302Q 143.75642918745675 63.31622355560302 143.75642918745675 63.31622355560302L 152.64857944647468 63.31622355560302Q 152.64857944647468 63.31622355560302 152.64857944647468 63.31622355560302L 152.64857944647468 63.31622355560302L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 143.75642918745675 102.88886327785491L 143.75642918745675 63.31622355560302Q 143.75642918745675 63.31622355560302 143.75642918745675 63.31622355560302L 152.64857944647468 63.31622355560302Q 152.64857944647468 63.31622355560302 152.64857944647468 63.31622355560302L 152.64857944647468 63.31622355560302L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491z"
                                    pathFrom="M 143.75642918745675 102.88886327785491L 143.75642918745675 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 152.64857944647468 102.88886327785491L 143.75642918745675 102.88886327785491"
                                    cy="63.31622355560302"
                                    cx="203.03743091424303"
                                    j="2"
                                    val="15"
                                    barHeight="39.57263972225189"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1945"
                                    d="M 203.03743091424303 65.95439953708649L 203.03743091424303 26.381759814834595Q 203.03743091424303 26.381759814834595 203.03743091424303 26.381759814834595L 211.92958117326097 26.381759814834595Q 211.92958117326097 26.381759814834595 211.92958117326097 26.381759814834595L 211.92958117326097 26.381759814834595L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 203.03743091424303 65.95439953708649L 203.03743091424303 26.381759814834595Q 203.03743091424303 26.381759814834595 203.03743091424303 26.381759814834595L 211.92958117326097 26.381759814834595Q 211.92958117326097 26.381759814834595 211.92958117326097 26.381759814834595L 211.92958117326097 26.381759814834595L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649z"
                                    pathFrom="M 203.03743091424303 65.95439953708649L 203.03743091424303 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 211.92958117326097 65.95439953708649L 203.03743091424303 65.95439953708649"
                                    cy="26.381759814834595"
                                    cx="262.31843264102935"
                                    j="3"
                                    val="15"
                                    barHeight="39.57263972225189"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1946"
                                    d="M 262.31843264102935 171.48143879642487L 262.31843264102935 116.07974318527222Q 262.31843264102935 116.07974318527222 262.31843264102935 116.07974318527222L 271.2105829000473 116.07974318527222Q 271.2105829000473 116.07974318527222 271.2105829000473 116.07974318527222L 271.2105829000473 116.07974318527222L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 262.31843264102935 171.48143879642487L 262.31843264102935 116.07974318527222Q 262.31843264102935 116.07974318527222 262.31843264102935 116.07974318527222L 271.2105829000473 116.07974318527222Q 271.2105829000473 116.07974318527222 271.2105829000473 116.07974318527222L 271.2105829000473 116.07974318527222L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487z"
                                    pathFrom="M 262.31843264102935 171.48143879642487L 262.31843264102935 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 271.2105829000473 171.48143879642487L 262.31843264102935 171.48143879642487"
                                    cy="116.07974318527222"
                                    cx="321.59943436781566"
                                    j="4"
                                    val="21"
                                    barHeight="55.40169561115265"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1947"
                                    d="M 321.59943436781566 79.14527944450381L 321.59943436781566 42.210815703735385Q 321.59943436781566 42.210815703735385 321.59943436781566 42.210815703735385L 330.4915846268336 42.210815703735385Q 330.4915846268336 42.210815703735385 330.4915846268336 42.210815703735385L 330.4915846268336 42.210815703735385L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 321.59943436781566 79.14527944450381L 321.59943436781566 42.210815703735385Q 321.59943436781566 42.210815703735385 321.59943436781566 42.210815703735385L 330.4915846268336 42.210815703735385Q 330.4915846268336 42.210815703735385 330.4915846268336 42.210815703735385L 330.4915846268336 42.210815703735385L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381z"
                                    pathFrom="M 321.59943436781566 79.14527944450381L 321.59943436781566 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 330.4915846268336 79.14527944450381L 321.59943436781566 79.14527944450381"
                                    cy="42.210815703735385"
                                    cx="380.880436094602"
                                    j="5"
                                    val="14"
                                    barHeight="36.93446374076843"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1948"
                                    d="M 380.880436094602 121.35609514823912L 380.880436094602 92.33615935192107Q 380.880436094602 92.33615935192107 380.880436094602 92.33615935192107L 389.77258635361994 92.33615935192107Q 389.77258635361994 92.33615935192107 389.77258635361994 92.33615935192107L 389.77258635361994 92.33615935192107L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 380.880436094602 121.35609514823912L 380.880436094602 92.33615935192107Q 380.880436094602 92.33615935192107 380.880436094602 92.33615935192107L 389.77258635361994 92.33615935192107Q 389.77258635361994 92.33615935192107 389.77258635361994 92.33615935192107L 389.77258635361994 92.33615935192107L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912z"
                                    pathFrom="M 380.880436094602 121.35609514823912L 380.880436094602 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 389.77258635361994 121.35609514823912L 380.880436094602 121.35609514823912"
                                    cy="92.33615935192107"
                                    cx="440.1614378213883"
                                    j="6"
                                    val="11"
                                    barHeight="29.019935796318055"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1949"
                                    d="M 440.1614378213883 68.59257551856996L 440.1614378213883 21.10540785186769Q 440.1614378213883 21.10540785186769 440.1614378213883 21.10540785186769L 449.05358808040626 21.10540785186769Q 449.05358808040626 21.10540785186769 449.05358808040626 21.10540785186769L 449.05358808040626 21.10540785186769L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 440.1614378213883 68.59257551856996L 440.1614378213883 21.10540785186769Q 440.1614378213883 21.10540785186769 440.1614378213883 21.10540785186769L 449.05358808040626 21.10540785186769Q 449.05358808040626 21.10540785186769 449.05358808040626 21.10540785186769L 449.05358808040626 21.10540785186769L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996z"
                                    pathFrom="M 440.1614378213883 68.59257551856996L 440.1614378213883 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 449.05358808040626 68.59257551856996L 440.1614378213883 68.59257551856996"
                                    cy="21.10540785186769"
                                    cx="499.4424395481746"
                                    j="7"
                                    val="18"
                                    barHeight="47.48716766670227"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1950"
                                    d="M 499.4424395481746 174.11961477790834L 499.4424395481746 129.27062309268953Q 499.4424395481746 129.27062309268953 499.4424395481746 129.27062309268953L 508.3345898071926 129.27062309268953Q 508.3345898071926 129.27062309268953 508.3345898071926 129.27062309268953L 508.3345898071926 129.27062309268953L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 499.4424395481746 174.11961477790834L 499.4424395481746 129.27062309268953Q 499.4424395481746 129.27062309268953 499.4424395481746 129.27062309268953L 508.3345898071926 129.27062309268953Q 508.3345898071926 129.27062309268953 508.3345898071926 129.27062309268953L 508.3345898071926 129.27062309268953L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834z"
                                    pathFrom="M 499.4424395481746 174.11961477790834L 499.4424395481746 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 508.3345898071926 174.11961477790834L 499.4424395481746 174.11961477790834"
                                    cy="129.27062309268953"
                                    cx="558.7234412749609"
                                    j="8"
                                    val="17"
                                    barHeight="44.84899168521881"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1951"
                                    d="M 558.7234412749609 174.11961477790834L 558.7234412749609 142.46150300010683Q 558.7234412749609 142.46150300010683 558.7234412749609 142.46150300010683L 567.6155915339789 142.46150300010683Q 567.6155915339789 142.46150300010683 567.6155915339789 142.46150300010683L 567.6155915339789 142.46150300010683L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 558.7234412749609 174.11961477790834L 558.7234412749609 142.46150300010683Q 558.7234412749609 142.46150300010683 558.7234412749609 142.46150300010683L 567.6155915339789 142.46150300010683Q 567.6155915339789 142.46150300010683 567.6155915339789 142.46150300010683L 567.6155915339789 142.46150300010683L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834z"
                                    pathFrom="M 558.7234412749609 174.11961477790834L 558.7234412749609 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 567.6155915339789 174.11961477790834L 558.7234412749609 174.11961477790834"
                                    cy="142.46150300010683"
                                    cx="618.0044430017472"
                                    j="9"
                                    val="12"
                                    barHeight="31.658111777801512"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1952"
                                    d="M 618.0044430017472 105.52703925933838L 618.0044430017472 52.76351962966919Q 618.0044430017472 52.76351962966919 618.0044430017472 52.76351962966919L 626.8965932607651 52.76351962966919Q 626.8965932607651 52.76351962966919 626.8965932607651 52.76351962966919L 626.8965932607651 52.76351962966919L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 618.0044430017472 105.52703925933838L 618.0044430017472 52.76351962966919Q 618.0044430017472 52.76351962966919 618.0044430017472 52.76351962966919L 626.8965932607651 52.76351962966919Q 626.8965932607651 52.76351962966919 626.8965932607651 52.76351962966919L 626.8965932607651 52.76351962966919L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838z"
                                    pathFrom="M 618.0044430017472 105.52703925933838L 618.0044430017472 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 626.8965932607651 105.52703925933838L 618.0044430017472 105.52703925933838"
                                    cy="52.76351962966919"
                                    cx="677.2854447285334"
                                    j="10"
                                    val="20"
                                    barHeight="52.76351962966919"
                                    barWidth="8.892150259017944"
                                  ></path>
                                  <path
                                    id="SvgjsPath1953"
                                    d="M 677.2854447285334 79.14527944450381L 677.2854447285334 31.658111777801544Q 677.2854447285334 31.658111777801544 677.2854447285334 31.658111777801544L 686.1775949875514 31.658111777801544Q 686.1775949875514 31.658111777801544 686.1775949875514 31.658111777801544L 686.1775949875514 31.658111777801544L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381z"
                                    fill="rgba(52,195,143,1)"
                                    fillOpacity="1"
                                    stroke-opacity="1"
                                    strokeLinecap="round"
                                    strokeWidth="0"
                                    strokeDasharray="0"
                                    className="apexcharts-bar-area"
                                    index="2"
                                    clipPath="url(#gridRectMaskpskux77v)"
                                    pathTo="M 677.2854447285334 79.14527944450381L 677.2854447285334 31.658111777801544Q 677.2854447285334 31.658111777801544 677.2854447285334 31.658111777801544L 686.1775949875514 31.658111777801544Q 686.1775949875514 31.658111777801544 686.1775949875514 31.658111777801544L 686.1775949875514 31.658111777801544L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381z"
                                    pathFrom="M 677.2854447285334 79.14527944450381L 677.2854447285334 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 686.1775949875514 79.14527944450381L 677.2854447285334 79.14527944450381"
                                    cy="31.658111777801544"
                                    cx="736.5664464553197"
                                    j="11"
                                    val="18"
                                    barHeight="47.48716766670227"
                                    barWidth="8.892150259017944"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1913"
                                  className="apexcharts-datalabels"
                                  dataRealIndex="0"
                                ></g>
                                <g
                                  id="SvgjsG1927"
                                  className="apexcharts-datalabels"
                                  dataRealIndex="1"
                                ></g>
                                <g
                                  id="SvgjsG1941"
                                  className="apexcharts-datalabels"
                                  dataRealIndex="2"
                                ></g>
                              </g>
                              <line
                                id="SvgjsLine2031"
                                x1="0"
                                y1="0"
                                x2="711.3720207214355"
                                y2="0"
                                stroke="#b6b6b6"
                                strokeDasharray="0"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              ></line>
                              <line
                                id="SvgjsLine2032"
                                x1="0"
                                y1="0"
                                x2="711.3720207214355"
                                y2="0"
                                strokeDasharray="0"
                                strokeWidth="0"
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              ></line>
                              <g
                                id="SvgjsG2033"
                                className="apexcharts-yaxis-annotations"
                              ></g>
                              <g
                                id="SvgjsG2034"
                                className="apexcharts-xaxis-annotations"
                              ></g>
                              <g
                                id="SvgjsG2035"
                                className="apexcharts-point-annotations"
                              ></g>
                            </g>
                            <g
                              id="SvgjsG1993"
                              className="apexcharts-yaxis"
                              rel="0"
                              transform="translate(14.627979278564453, 0)"
                            >
                              <g
                                id="SvgjsG1994"
                                className="apexcharts-yaxis-texts-g"
                              >
                                <text
                                  id="SvgjsText1995"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="31.5"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan1996">100</tspan>
                                  <title>100</title>
                                </text>
                                <text
                                  id="SvgjsText1997"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="84.26351962966919"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan1998">80</tspan>
                                  <title>80</title>
                                </text>
                                <text
                                  id="SvgjsText1999"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="137.02703925933838"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan2000">60</tspan>
                                  <title>60</title>
                                </text>
                                <text
                                  id="SvgjsText2001"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="189.79055888900757"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan2002">40</tspan>
                                  <title>40</title>
                                </text>
                                <text
                                  id="SvgjsText2003"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="242.55407851867676"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan2004">20</tspan>
                                  <title>20</title>
                                </text>
                                <text
                                  id="SvgjsText2005"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="20"
                                  y="295.31759814834595"
                                  text-anchor="end"
                                  dominant-baseline="auto"
                                  font-size="11px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{fontFamily:" Helvetica, Arial, sans-serif"}}
                                >
                                  <tspan id="SvgjsTspan2006">0</tspan>
                                  <title>0</title>
                                </text>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1901"
                              className="apexcharts-annotations"
                            ></g>
                          </svg>
                          <div className="apexcharts-tooltip apexcharts-theme-light">
                            <div
                              className="apexcharts-tooltip-title"
                              style={{fontFamily:" Helvetica, Arial, sans-serif", fontSize: "12px"}}
                            ></div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{order: "1"}}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{backgroundColor: "rgb(85, 110, 230)"}}
                              ></span>
                              <div
                                className="apexcharts-tooltip-text"
                                style={{fontFamily:" Helvetica, Arial, sans-serif", fontSize: "12px"}}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label"></span>
                                  <span className="apexcharts-tooltip-text-y-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label"></span>
                                  <span className="apexcharts-tooltip-text-goals-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label"></span>
                                  <span className="apexcharts-tooltip-text-z-value"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{order: "2"}}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{backgroundColor: "rgb(241, 180, 76)"}}
                              ></span>
                              <div
                                className="apexcharts-tooltip-text"
                                style={{fontFamily:" Helvetica, Arial, sans-serif", fontSize: "12px"}}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label"></span>
                                  <span className="apexcharts-tooltip-text-y-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label"></span>
                                  <span className="apexcharts-tooltip-text-goals-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label"></span>
                                  <span className="apexcharts-tooltip-text-z-value"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{order: "3"}}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{backgroundColor: "rgb(52, 195, 143)"}}
                              ></span>
                              <div
                                className="apexcharts-tooltip-text"
                                style={{fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px"}}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label"></span>
                                  <span className="apexcharts-tooltip-text-y-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label"></span>
                                  <span className="apexcharts-tooltip-text-goals-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label"></span>
                                  <span className="apexcharts-tooltip-text-z-value"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                            <div className="apexcharts-yaxistooltip-text"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-4 h4 card-title">Social Source</div>
                    <div className="text-center">
                      <div className="avatar-sm mx-auto mb-4">
                        <span className="avatar-title rounded-circle bg-primary bg-soft font-size-24">
                          <i className="mdi mdi-facebook text-primary"></i>
                        </span>
                      </div>
                      <p className="font-16 text-muted mb-2"></p>
                      <h5>
                        <a className="text-dark" href="/dashboard">
                          Facebook -{" "}
                          <span className="text-muted font-16">125 sales</span>{" "}
                        </a>
                      </h5>
                      <p className="text-muted">
                        Maecenas nec odio et ante tincidunt tempus. Donec vitae
                        sapien ut libero venenatis faucibus tincidunt.
                      </p>
                      <a className="text-primary font-16" href="/dashboard">
                        Learn more <i className="mdi mdi-chevron-right"></i>
                      </a>
                    </div>
                    <div className="mt-4 row">
                      <div className="col-4">
                        <div className="social-source text-center mt-3">
                          <div className="avatar-xs mx-auto mb-3">
                            <span className="avatar-title rounded-circle bg-primary font-size-16">
                              <i className="mdi mdi-facebook text-white"></i>
                            </span>
                          </div>
                          <h5 className="font-size-15">Facebook</h5>
                          <p className="text-muted mb-0">125 sales</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="social-source text-center mt-3">
                          <div className="avatar-xs mx-auto mb-3">
                            <span className="avatar-title rounded-circle bg-info font-size-16">
                              <i className="mdi mdi-twitter text-white"></i>
                            </span>
                          </div>
                          <h5 className="font-size-15">Twitter</h5>
                          <p className="text-muted mb-0">112 sales</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="social-source text-center mt-3">
                          <div className="avatar-xs mx-auto mb-3">
                            <span className="avatar-title rounded-circle bg-pink font-size-16">
                              <i className="mdi mdi-instagram text-white"></i>
                            </span>
                          </div>
                          <h5 className="font-size-15">Instagram</h5>
                          <p className="text-muted mb-0">104 sales</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-5 h4 card-title">Activity</div>
                    <ul className="verti-timeline list-unstyled">
                      <li className="event-list">
                        <div className="event-timeline-dot">
                          <i className="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              22 Nov{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>Responded to need “Volunteer Activities</div>
                          </div>
                        </div>
                      </li>
                      <li className="event-list">
                        <div className="event-timeline-dot">
                          <i className="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              17 Nov{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div id="activitytext">
                              Everyone realizes why a new common language would
                              be desirable... <a href="/dashboard">Read more</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="event-list active">
                        <div className="event-timeline-dot">
                          <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              15 Nov{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>Joined the group “Boardsmanship Forum”</div>
                          </div>
                        </div>
                      </li>
                      <li className="event-list">
                        <div className="event-timeline-dot">
                          <i className="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              12 Nov{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>Responded to need “In-Kind Opportunity”</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="text-center mt-4">
                      <a className="btn btn-primary btn-sm" href="/">
                        View More <i className="mdi mdi-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-4 h4 card-title">
                      Top Cities Selling Product
                    </div>
                    <div className="text-center">
                      <div className="mb-4">
                        <i
                          className="bx bx-map-pin text-primary display-4"
                          style={{ lineHeight: "1" }}
                        ></i>
                      </div>
                      <h3>1,456</h3>
                      <p>San Francisco</p>
                    </div>
                    <div className="table-responsive mt-4">
                      <table className="table align-middle table-nowrap">
                        <tbody>
                          <tr>
                            <td style={{ width: "30%" }}>
                              <p className="mb-0">San Francisco</p>
                            </td>
                            <td style={{ width: "25%" }}>
                              <h5 className="mb-0">1,456</h5>
                            </td>
                            <td>
                              <div className="progress bg-transparent progress-sm progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  aria-valuenow="94"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "94%" }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="mb-0">Los Angeles</p>
                            </td>
                            <td>
                              <h5 className="mb-0">1,123</h5>
                            </td>
                            <td>
                              <div className="progress bg-transparent progress-sm progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow="82"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "82%" }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="mb-0">San Diego</p>
                            </td>
                            <td>
                              <h5 className="mb-0">1,026</h5>
                            </td>
                            <td>
                              <div className="progress bg-transparent progress-sm progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  aria-valuenow="70"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "70%" }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">2022 © Yelow.</div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Design &amp; Develop by Themesbrand
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VerticalSidebar;
