import "./styles.css";

export const CardLoader = () => {
  return (
    <>
      {[1, 2, 3, 4].map((item, index) => (
        <div className="card-loader-container" key={index}>
          <div className="card-loader-content" />
        </div>
      ))}
    </>
  );
};
