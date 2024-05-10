function Cards(props: { color: string; title: string; description: string; image:{url: string,alt: string}}) {
  return (
    <div
      style={{ borderColor: props.color }}
      className={`w-[350px] border-t-4  h-[250px] rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}
    >
      <div className="pt-8 pl-8 w-full tracking-normal">
        <h1 className="font-bold font-sans tracking-wide text-gray-600 text-xl">{props.title}</h1>
        <p className="text-gray-400  font-sans mt-4 tracking-wide">{props.description}</p>
      </div>
      <div className="w-full p-8 flex justify-end">
        <img src={props.image.url} alt={props.image.alt} />
      </div>
    </div>
  );
}

export default Cards;
