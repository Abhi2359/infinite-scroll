import React, { useState, useRef, useCallback } from "react";
import { Card, SkeletonCard } from "../components/Card";
import useGetUsers from "../hooks/useGetUsers";
import { useLogout } from "../hooks/useLogout";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { users, hasMore, loading, error } = useGetUsers(null, pageNumber);
  const observer = useRef();
  const { logout } = useLogout();

  const lastUserCardRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      },
      [loading, hasMore]
    );
    if (node) observer.current.observe(node);
  });

  return (
    <div className="home-container">
      <div className="navbar">
        <h1>Users</h1>
        <button
          className="button is-block is-warning"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
      <div style={{ overflowY: "auto", height: "100%" }}>
        {users.map((user, index) => {
          if (users.length === index + 1) {
            return (
              <Card
                innerRef={lastUserCardRef}
                key={user.id.value}
                user={user}
              />
            );
          } else {
            return <Card key={user.id.value} user={user} />;
          }
        })}
        {loading && (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </div>
      {error && <div>Error</div>}
    </div>
  );
};

export default Home;
