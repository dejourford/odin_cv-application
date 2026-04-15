import { useState } from "react";
import "./App.css"
import { Input } from "./components/Input"


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cvData, setCvData] = useState(null);
  const [formDataState, setFormDataState] = useState({
  name: "",
  email: "",
  phone: "",
  schoolName: "",
  major: "",
  graduationYear: "",
  companyName: "",
  position: "",
  responsibilities: "",
  from: "",
  to: ""
});

  const handleEdit = () => {
    // if edit button is clicked show input fields with data pre-filled
    // e.preventDefault();
    console.log("edit mode...")

    setFormDataState(cvData);
    setIsSubmitted(false);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("displaying cd data...")

    setCvData(formDataState);
    setIsSubmitted(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDataState(prev => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <>
      <h1>CV Application</h1>
      <main>
        {isSubmitted ?
          (
            <div className="cv-display">
              {console.log(cvData)}
              {/* personal info */}
              <section className="cv-section" id="personal">
                <h2>{cvData.name}</h2>
                <h2>{cvData.email}</h2>
                <h2>{cvData.phone}</h2>
              </section>
              {/* education */}
              <section className="cv-section" id="personal">
                <h2>{cvData.schoolName}</h2>
                <h2>{cvData.major}</h2>
                <h2>{cvData.graduationYear}</h2>
              </section>

              {/* work experience */}
              <section className="cv-section" id="personal">
                <h2>{cvData.companyName}</h2>
                <h2>{cvData.position}</h2>
                <h2>{cvData.responsibilities}</h2>
                <div className="timeframe">
                  <h2 id="from">{cvData.from}</h2>
                  <h2 id="to">{cvData.to}</h2>
                </div>
              </section>
              <button className="button" type="button" id="edit-cv-button" onClick={handleEdit}>Edit</button>
            </div>
          ) :
          (
            <form onSubmit={handleSubmit}>
              {/* Personal Info Section */}
              <section className="cv-section" id="personal">
                <h2>Personal Information</h2>
                <Input type={"text"} name={"name"} value={formDataState.name} onChange={handleChange} />
                <Input type={"email"} name={"email"} value={formDataState.email} onChange={handleChange} />
                <Input type={"number"} name={"phone"} value={formDataState.phone} onChange={handleChange} />

              </section>

              {/* Education Section */}
              <section className="cv-section" id="education">
                <h2>Education Information</h2>

                <Input type={"text"} name={"schoolName"} value={formDataState.schoolName} onChange={handleChange} />
                <Input type={"text"} name={"major"} value={formDataState.major} onChange={handleChange} />
                <Input type={"number"} name={"graduationYear"} value={formDataState.graduationYear} onChange={handleChange} />

              </section>

              {/* Work Experience Section */}
              <section className="cv-section" id="experience">
                <h2>Work Experience</h2>

                <Input type={"text"} name={"companyName"} value={formDataState.companyName} onChange={handleChange} />
                <Input type={"text"} name={"position"} value={formDataState.position} onChange={handleChange} />
                <Input type={"textarea"} name={"responsibilities"} value={formDataState.responsibilities} onChange={handleChange} />
                <Input type={"number"} name={"from"} value={formDataState.from} onChange={handleChange} />
                <Input type={"number"} name={"to"} value={formDataState.to} onChange={handleChange} />

              </section>

              {/* Form Buttons */}
              <button className="button" type="button" id="edit-cv-button" onClick={handleEdit}>Edit</button>
              <button className="button" type="submit" id="create-cv-button">Create CV!</button>
            </form>
          )}
      </main>
    </>
  )
}

export default App
