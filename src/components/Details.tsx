const Details = () => {
  return (
    <section className="w-full h-1/2  flex flex-col items-center p-5">
      <div className="w-1/3  p-10 flex flex-col gap-4">
        <DetailLine title="type" text="web app" />
        <DetailLine title="made with" text="next 14" />
        <DetailFeatures
          title="features"
          text={["server component", "App routing"]}
        />
      </div>
    </section>
  );
};

export default Details;

const DetailLine = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="flex justify-between border-b">
      {" "}
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};

const DetailFeatures = ({ title, text }: { title: string; text: string[] }) => {
  return (
    <div className="flex justify-between border-b">
      <p>{title}:</p>
      <ul className="text-end">
        {text.map((item, i) => (
          <li key={`${title}-${i}`}> {item}</li>
        ))}
      </ul>
    </div>
  );
};
