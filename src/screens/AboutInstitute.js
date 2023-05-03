import React from "react";

const AboutInstitute = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          textAlign: "justify",
        }}
      >
        <h3>About The Department</h3>
        <p>
          The Department of Electronic and Communication Engineering (ECE),
          National Institute of Technology Delhi was established in 2010,
          immediately with the beginning of the Institute under the aegis of the
          Ministry of Human Resource and Development (MHRD), Govt. of India.
          Currently, it is offering one Undergraduate (B. Tech.) Program and two
          Postgraduate (M. Tech) programs in ECE and VLSI Design. The Department
          also offers Ph.D. and Post-Doctoral Fellowship (PDF) Programme in
          relevant areas, like electronic devices and circuits, semiconductor
          photonics, optical communication and opto-electronics, signal & speech
          processing, analog & digital VLSI design and circuits, antenna & wave
          propagation, networking, AI and ML etc.
        </p>
        <p>
          It has excellent laboratories and research facilities in electronic
          devices and circuits, electronic measurement and instrumentation,
          microprocessor and microcontroller, microwave and antenna design,
          optical fiber communication and optical device, multimedia, and
          advanced communication and design automation and simulation
          laboratory. The faculty of the department has published 123 reputed
          international journal papers and 78 international/ national conference
          papers in the last 3 academic years. Departmental faculty has
          published journal papers in IEEE Transaction on Electronic devices,
          IEEE Photonics Technology, IEEE Electron Devices, Springer journals,
          Elsevier journals etc. The Department and faculty members have
          received projects, grants, and fellowships from the Ministry of
          Electronics and Information Technology (MeitY), the Department of
          Science and Technology (DST)-SERB, and other funding agencies. The
          Department has active collaborations with academic Institutes &
          research institutes in India and abroad.
        </p>
        <p>
          {" "}
          The Department of ECE has a blend of young as well as experienced
          dynamic faculty members and is committed to providing quality
          education and research in the field. Faculty members of the department
          have excellent academic & research credentials and published numerous
          articles in the diversified field and have adequate experience in
          advanced research. The department of ECE provides a creative learning
          environment to the students for excellence in technical education. The
          department hopes to achieve the national goals and objectives of
          industrialization and self-reliance.
        </p>
      </div>
    </div>
  );
};

export default AboutInstitute;
