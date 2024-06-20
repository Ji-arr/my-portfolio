import "./Certificate.css";

export const Certificate = () => {
  const filePath = `${process.env.PUBLIC_URL}`;
  const images = [
    {
      id: 1,
      src: filePath + "/cert1.png",
      name: "Certificate of Participation",
      description:
        "Participated in GoCrayons: Web Design and Web Development Workshop",
    },
    {
      id: 2,
      src: filePath + "/cert2.png",
      name: "Certificate of Completion",
      description: "Certificate of Completion: Endsofttech Web Solutions (EWS)",
    },
  ];
  return (
    <div className="cert-area" id="certificate">
      <h1>Certifcates</h1>
      <div className="flex-wrap">
        {images.map((image) => {
          return (
            <div className="content">
              <div
                className="left"
                style={{ backgroundImage: `url(${image.src})` }}
              ></div>
              <div className="right">
                <div className="right-text">
                  <h1>{image.name}</h1>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
