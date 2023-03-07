import React from "react";

const SkeletonCard = () => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  className="skeleton"
                  src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey.png"
                  style={{ borderRadius: "50%", width: "48px", height: "48px" }}
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ user, innerRef }) => {
  return (
    <>
      <div ref={innerRef} className="card" style={{ display: "flex" }}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  style={{ borderRadius: "50%" }}
                  src={user.picture.medium}
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{user.name.first}</p>
              <p className="subtitle is-6">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card, SkeletonCard };
