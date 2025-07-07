// App.jsx
import React, { useState } from "react";

import { useEffect } from "react";
import "./App.css";

export default function App() {
  const [tab, setTab] = useState("offensive");
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const skills = {
    offensive: [
      "Web, System, and Network Attacks",
      "File uploads, JWT, SQLi, XSS, SSRF and more",
      "Burp Suite, Metasploit",
      "Vulnerability Assessment & Pentesting",
      "Privilege Escalation",
    ],
    hunting: [
      "APT Profiling",
      "Behaviour Analysis",
      "IoC Investigation",
      "Wireshark",
    ],
    other: ["Bash Scripting", "Networks and Firewalls", "Linux"],
  };

  const books = [
    {
      img: "/images/book1.png",
      title: "CEHv12",
      link: "https://www.amazon.com/gp/aw/d/B0BNNVSP5H/ref=tmm_kin_swatch_0?ie=UTF8&sr=",
    },
    {
      img: "/images/book2.png",
      title: "CEHv12 Practical",
      link: "https://www.amazon.com/Complete-Practical-Implementation-Certified-312-50-Hands-ebook/dp/B0C6Y55RN1?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.RZ-QoDXscdpgfFdl7BFxoZgnML1wgj_0N3Z3YD3lE7shPeDkcp51FKZUi2qNCPNeva4DrZGv3DGTCp_3JcfJSJe1IaVGybPaOwOMoMbrVmQdrQ_1OKZPQkS5iYAq-uCTeFiOiBjakkZFn91batye8C7Nm-CR_eMQ7ieyZnWoOEz4ykUyG7WCYARU5Dueq8NkX-bqCIlPMPA6jR_APJu0rhQKqLIpDZW4ENjmE6xoBcU.h07_WQtqvQLFB4rz4bWDEXdmQBb6SvnoDsJwybtvemQ&dib_tag=AUTHOR",
    },
    {
      img: "/images/book3.png",
      title: "PCNSE",
      link: "https://www.amazon.com/PCNSE-Certified-Security-Engineer-Questions/dp/B0CYPF6KPY/?_encoding=UTF8&pd_rd_w=C31ns&content-id=amzn1.sym.bc3ba8d1-5076-4ab7-9ba8-a5c6211e002d&pf_rd_p=bc3ba8d1-5076-4ab7-9ba8-a5c6211e002d&pf_rd_r=146-5037502-5271617&pd_rd_wg=BBIHb&pd_rd_r=6dee708b-f5bd-48fc-94dc-96996a67b0e5&ref_=aufs_ap_sc_dsk",
    },
    {
      img: "/images/book4.png",
      title: "PCNSA",
      link: "https://www.amazon.com/PCNSA-Certified-Security-Administrator-Questions/dp/B0CQ7HHCW6/?_encoding=UTF8&pd_rd_w=C31ns&content-id=amzn1.sym.bc3ba8d1-5076-4ab7-9ba8-a5c6211e002d&pf_rd_p=bc3ba8d1-5076-4ab7-9ba8-a5c6211e002d&pf_rd_r=146-5037502-5271617&pd_rd_wg=BBIHb&pd_rd_r=6dee708b-f5bd-48fc-94dc-96996a67b0e5&ref_=aufs_ap_sc_dsk",
    },
    {
      img: "/images/book5.png",
      title: "CCNP SPCOR",
      link: "https://www.amazon.com/CCNP-SPCOR-Implementing-Operating-Technologies/dp/B0BRQ4NBJR/?_encoding=UTF8&pd_rd_w=C31ns&content-id=amzn1.sym.bc3ba8d1-5076-4ab7-9ba8-a5c6211e002d&pf_rd_p=bc3ba8d1-5076-4ab7-9ba8-a5c6211e002d&pf_rd_r=146-5037502-5271617&pd_rd_wg=BBIHb&pd_rd_r=6dee708b-f5bd-48fc-94dc-96996a67b0e5&ref_=aufs_ap_sc_dsk",
    },
    {
      img: "/images/book6.png",
      title: "CCNP SVPN",
      link: "https://www.amazon.com/Exam-Implementing-Solutions-Networks-Questions-ebook/dp/B0CHBJK616?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.RZ-QoDXscdpgfFdl7BFxoZgnML1wgj_0N3Z3YD3lE7shPeDkcp51FKZUi2qNCPNeva4DrZGv3DGTCp_3JcfJSJe1IaVGybPaOwOMoMbrVmQdrQ_1OKZPQkS5iYAq-uCTeFiOiBjakkZFn91batye8C7Nm-CR_eMQ7ieyZnWoOEz4ykUyG7WCYARU5Dueq8NkX-bqCIlPMPA6jR_APJu0rhQKqLIpDZW4ENjmE6xoBcU.h07_WQtqvQLFB4rz4bWDEXdmQBb6SvnoDsJwybtvemQ&dib_tag=AUTHOR",
    },
    {
      img: "/images/book7.png",
      title: "Fortinet NSE-4",
      link: "https://www.amazon.com/Fortinet-Network-Security-Professional-NSE-ebook/dp/B0CJYPYKKQ/?_encoding=UTF8&pd_rd_w=C31ns&pd_rd_wg=BBIHb&pd_rd_r=6dee708b-f5bd-48fc-94dc-96996a67b0e5&content-id=amzn1.sym.bc3ba8d1-5076-4ab7-9ba8-a5c6211e002d&ref_=aufs_ap_sc_dsk",
    },
  ];

  // -------- ************************ --------

  const certs = [
    {
      img: "/images/cert1.png",
      title: "CompTIA PenTest+",
      link: "https://www.coursera.org/account/accomplishments/specialization/XF7WX1GR8LG6?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n",
    },
    {
      img: "/images/cert2.png",
      title: "Certified AppSec Practitioner v2 (CAP)",
      link: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXf6o25vPjpVIwY9v2nemBLp+Dz74f+/rN6CaLyvkQd+iIog0Zt8evoveYuii24TfaRnXn/KTMcdbWE4JS4sixmU=",
    },
    {
      img: "/images/cert3.png",
      title: "Cisco Network Security",
      link: "https://www.credly.com/badges/8a98c307-dc32-4fd9-a8d9-1859727dd21c/linked_in_profile",
    },
    {
      img: "/images/cert4.png",
      title: "CyberOps Associate",
      link: "https://www.credly.com/badges/f9c7d390-eb23-476f-a7a7-ba952c5765e0/linked_in_profile",
    },
    {
      img: "/images/cert5.png",
      title: "International Law in Action",
      link: "https://www.coursera.org/account/accomplishments/verify/YFHSK1LTIFY0",
    },
    ,
    {
      img: "/images/cert6.png",
      title: "Cyber Threat Hunting",
      link: "https://www.coursera.org/account/accomplishments/verify/7737S908YYB1",
    },
    {
      img: "/images/cert7.png",
      title: "Advanced Threat Hunting and Incident Response",
      link: "https://www.coursera.org/account/accomplishments/verify/V0WF6R6Y045N",
    },
  ];

  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01 ";
    const fontSize = 12;
    const columns = canvas.width / fontSize;

    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0ff";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal">
      <div className="header">
        <canvas id="matrix-canvas" className="matrix-canvas"></canvas>

        <h1>&gt;_ Muneeb Raza</h1>
        <p className="typing">Making cyber world better!</p>
      </div>

      <section>
        <h2>&gt; Whoami</h2>
        <p>
          I'm a Security Researcher, OSINT Investigator, and Co-Author of
          multiple cybersecurity books. Skilled in offensive security, threat
          hunting, and OSINT.
        </p>

        <iframe
          src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=582640"
          style={{
            display: "block",
            margin: "40px auto 0px",
            width: "100%",
            maxWidth: "400px",
            // height: "300px",
            border: "none",
          }}
        ></iframe>
      </section>

      <section id="books">
        <h2>&gt; Books</h2>
        <div className="book-grid">
          {(showAllBooks ? books : books.slice(0, 4)).map((book, idx) => (
            <div className="book-card" key={idx}>
              <img src={book.img} alt={book.title} />
              <h4 style={{ color: "#0f0", fontSize: "14px", marginTop: "8px" }}>
                {book.title}
              </h4>
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                View on Amazon
              </a>
            </div>
          ))}
        </div>

        {books.length > 4 && (
          <button
            className="see-more-btn"
            onClick={() => setShowAllBooks(!showAllBooks)}
          >
            {showAllBooks ? "See Less" : "See More"}
          </button>
        )}
      </section>

      <section id="certifications">
        <h2>&gt; Certifications</h2>
        <div className="book-grid">
          {(showAllCerts ? certs : certs.slice(0, 4)).map((cert, idx) => (
            <div className="book-card" key={idx}>
              <img src={cert.img} alt={cert.title} />
              <h4 style={{ color: "#0f0", fontSize: "14px", marginTop: "8px" }}>
                {cert.title}
              </h4>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                Verify Certificate
              </a>
            </div>
          ))}
        </div>

        {certs.length > 4 && (
          <button
            className="see-more-btn"
            onClick={() => setShowAllCerts(!showAllCerts)}
          >
            {showAllCerts ? "See Less" : "See More"}
          </button>
        )}
      </section>

      <section>
        <h2>&gt; Skills</h2>
        <div className="tabs">
          {Object.keys(skills).map((key) => (
            <button
              key={key}
              className={tab === key ? "active" : ""}
              onClick={() => setTab(key)}
            >
              {key}
            </button>
          ))}
        </div>
        <ul className="skills">
          {skills[tab].map((s, i) => (
            <li key={i}>• {s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>&gt; Experience</h2>
        <ul>
          <li>Team Lead at IPSpecialist (Jan 2024-July 2024)</li>
          <li>Content Developer at IPSpecialist (Jan 2022-Dec 2023)</li>
          <li>Penetration Testing Intern at CFSS (Aug 2024-Sep 2024)</li>
          <li>
            Cyber Crime Investigation Intern at CFSS (June 2024-July 2024)
          </li>
        </ul>
      </section>

      <section>
        <h2>&gt; Contact</h2>
        <p>
          [✉️] razamuneeb902@gmail.com <br />
          [🔗]{" "}
          <a href="https://www.linkedin.com/in/muneeb-raza98/" target="_blank">
            LinkedIn
          </a>{" "}
          |
          <a href="https://tryhackme.com/p/Muneeb007" target="_blank">
            {" "}
            TryHackMe
          </a>{" "}
        <br/>
          [🔗]{" "}
          <a href="https://medium.com/@razamuneeb902" target="_blank">
            Medium
          </a>
          {" "}|
          
          {" "}
          <a href="https://github.com/muneebrw/" target="_blank">
            Github
          </a>
        </p>
      </section>

      <footer>
        <p className="footer-text">root@portfolio:~# ./contact_me.sh</p>
      </footer>
    </div>
  );
}
