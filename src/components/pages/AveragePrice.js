import React from 'react'

const AveragePrice = () => {
    return (
        <div>
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
    )
}

export default AveragePrice
