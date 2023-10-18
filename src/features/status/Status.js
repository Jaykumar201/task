import React from 'react'

const Status = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        unknown 1
        {items.map((item) => (
          <div className="card">
            <div>{item.id}</div>
            <div className="top">
              <span className="title">{reduce(item.title)}</span>
              <div className="img-container">
                <img src="yeri-redvelvet-crop.jpg" className="userImg" />
                <div className="status"></div>
              </div>
            </div>
            <div className="middle">
              <span className="heading">{items.userId}</span>
            </div>
            <div className="footer">
              <div className="icon">
                {/* <i className="fa-solid fa-triangle-exclamation" style="color: #276867;"></i> */}
              </div>
              <div className="featReq">
                <div className="circle"></div>
                {items.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-item">
        todo 2
        {items.map((item) => (
          <div className="card">
            <h3>{item.id}</h3>
            <div className="top">
              <span className="title">{reduce(item.title)}</span>
              <div className="img-container">
                <img src="yeri-redvelvet-crop.jpg" className="userImg" />
                <div className="status"></div>
              </div>
            </div>
            <div className="middle">
              <span className="heading">{items.userId}</span>
            </div>
            <div className="footer">
              <div className="icon">
                {/* <i className="fa-solid fa-triangle-exclamation" style="color: #276867;"></i> */}
              </div>
              <div className="featReq">
                <div className="circle"></div>
                {items.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-item">
        inprogess 3
        {items.map((item) => (
          <div className="card">
            <h3>{item.id}</h3>
            <div className="top">
              <span className="title">{reduce(item.title)}</span>
              <div className="img-container">
                <img src="yeri-redvelvet-crop.jpg" className="userImg" />
                <div className="status"></div>
              </div>
            </div>
            <div className="middle">
              <span className="heading">{items.userId}</span>
            </div>
            <div className="footer">
              <div className="icon">
                {/* <i className="fa-solid fa-triangle-exclamation" style="color: #276867;"></i> */}
              </div>
              <div className="featReq">
                <div className="circle"></div>
                {items.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-item">
        Done 4
        {items.map((item) => (
          <div className="card">
            <h3>{item.id}</h3>
            <div className="top">
              <span className="title">{reduce(item.title)}</span>
              <div className="img-container">
                <img src="yeri-redvelvet-crop.jpg" className="userImg" />
                <div className="status"></div>
              </div>
            </div>
            <div className="middle">
              <span className="heading">{items.userId}</span>
            </div>
            <div className="footer">
              <div className="icon">
                {/* <i className="fa-solid fa-triangle-exclamation" style="color: #276867;"></i> */}
              </div>
              <div className="featReq">
                <div className="circle"></div>
                {items.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-item">
        Cancel
        {items.map((item) => (
          <div className="card">
            <h3>{item.id}</h3>
            <div className="top">
              <span className="title">{reduce(item.title)}</span>
              <div className="img-container">
                <img src="yeri-redvelvet-crop.jpg" className="userImg" />
                <div className="status"></div>
              </div>
            </div>
            <div className="middle">
              <span className="heading">{items.userId}</span>
            </div>
            <div className="footer">
              <div className="icon">
                {/* <i className="fa-solid fa-triangle-exclamation" style="color: #276867;"></i> */}
              </div>
              <div className="featReq">
                <div className="circle"></div>
                {items.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Status
