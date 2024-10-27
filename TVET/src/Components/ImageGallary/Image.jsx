// componet by fuad hasan

const Image = ({ data }) => {
  const { src, des } = data;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{des}</p>
      </div>
      <figure>
        <img src={src} alt="Shoes" />
      </figure>
    </div>
  );
};

export default Image;
