import React from 'react'

const WelcomeCard = () => {
    return (
        <div>
            <div className="mini-stats-wid card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                    <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                        <span className="avatar-title">
                          <i className="bx bx-copy-alt font-size-24"></i>
                        </span>
                      </div>
                      <div className="flex-grow-2">
                        <p className="text-muted fw-medium mb-2">James Clear</p>
                        <h4 className="mb-0">Software Developer</h4>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    )
}

export default WelcomeCard
