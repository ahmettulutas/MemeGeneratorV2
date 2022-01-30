import SelectButton from "./selectbutton.jsx";

const Meme = ({ id, url, alt, name }) => {
  return (
    <main className="each-meme">
      <div className="meme-info">
        <p>{name}</p>
        <img key={id} alt={name} src={url}></img>
      </div>
      <SelectButton />
    </main>
  );
};
export default Meme;
