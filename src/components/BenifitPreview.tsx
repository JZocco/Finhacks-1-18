type BenifitPreviewProps = {
    title: string;
    description: string;
    imageSrc: string;
  };

  const BenifitPreview = ({
    title,
    description,
    imageSrc
  }: BenifitPreviewProps): JSX.Element => {
    return (
      <div className="flex bg-green-100 p-8 m-2 rounded text-black">
        <img
          className="rounded border-8 border-green-300"
          src={imageSrc}
          width={144}
          height={144}
          alt="benifit image"
        />
        <div className="ml-4 w-72 flex flex-col justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
          <div className="text-right">
          <button
            className={`px-4 py-2 border border-black-500 bg-green-500 text-white hover:bg-green-600`}
          >
            Learn More
          </button>
        </div>
        </div>
      </div>
    );
  };
  
  export default BenifitPreview;
  