function Home() {
  const MyDetails = {
    FullName: "Praveen Guptha Nandipati",
    Age: 41,
    Occupation: "Sr. Software Engineer",
    Experience: "12 yrs",
    Primary: 9642123254,
    Secondary: 7995165789,
    Address: "49, Kondaveedu Enclave, Kousalya colony, Bachupally, Hyderabad",
    Skills:
      "UX/UI Designing, UI Development, Frontend Development, Graphic Designing",
    Technologies:
      "Figma, Adobe XD, Photoshop, Illustrator, Html, CSS, SCSS, Javascript, Jquery, Bootstrap, Tailwind CSS, Angular, React",
    Married: "Married",
    Native: "Repalle, Guntur Dist, Andhra Pradesh",
    Qualification: "Master Degree in Arts",
    Year: 2009,
  };

  const objectProperties = Object.entries(MyDetails);

  var name="Praveen"

  return (
    <div>
      <h1>Introduction of {name}</h1>
      <div>
        <table>
          {objectProperties.map(([key, value]) => (
            <tr>
              <td>{key}</td>
              <td align="center">:</td>
              <td>{value}</td>             
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Home;
