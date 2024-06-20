import "./Footer.css";
export const Footer = () => {
  const footer_links = [
    { id: 1, href: "https://www.facebook.com/portagana.jayar", name: "F" },
    { id: 2, href: "https://twitter.com", name: "X" },
    {
      id: 3,
      href: "https://www.linkedin.com/in/jay-ar-portagana-15a985269/",
      name: "In",
    },
    { id: 4, href: "", name: "G" },
  ];
  return (
    <div className="footer" id="contact">
      <div className="footer-links">
        {footer_links.map((f_link, index) => {
          return (
            <a key={index} href={f_link.href}>
              <p>{f_link.name}</p>
            </a>
          );
        })}
      </div>
      <div className="copyright">@ 2024 Jay-Ar Portagana</div>
    </div>
  );
};
