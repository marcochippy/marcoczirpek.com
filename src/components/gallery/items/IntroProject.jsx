function IntroProject({ details }) {
  const toolsList = details.tools.map((tool, index) => (
    <li className="" key={index}>
      {tool}
    </li>
  ));

  const summaryParagraphs = details.summary.split("\n\n");

  return (
    <>
      <div className="flex">
        <div>
          <p>{details.subHead}</p>
          <h3 className="text-4xl font-bold">{details.headline}</h3>
          <p className="text-xl font-bold">{details.time}</p>
        </div>
      </div>
      <div className="flex w-[75%] mx-auto my-5">
        <div className="">
          {summaryParagraphs.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "mt-4 " : ""}>
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="ml-10">{toolsList}</ul>
      </div>
    </>
  );
}

export default IntroProject;
