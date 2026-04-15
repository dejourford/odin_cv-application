import { useState } from "react";
import "./App.css"
import { Input } from "./components/Input"


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cvData, setCvData] = useState(null);
  
  
  const handleEdit = (e) => {
    // if edit button is clicked show input fields with data pre-filled
    e.preventDefault();
    console.log("edit mode...")

    setIsSubmitted(false);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("displaying cd data...")

    // get form data
    const formData = new FormData(e.target)
    console.log(formData)

    const data = {
      name: formData.get("name")
    }

    setCvData(data);
    setIsSubmitted(true);
  }


  return (
    <>
      <h1>CV Application</h1>
      <main>
        {isSubmitted ? (
          <div className="cv-display">
            <h2>{cvData.name}</h2>
            <button className="button" type="button" id="edit-cv-button" onClick={handleEdit}>Edit</button>
          </div>
        )  : (
        <form onSubmit={handleSubmit}>
          {/* Personal Info Section */}
          <section className="cv-section" id="personal">
            <h2>Personal Information</h2>
            <Input type={"text"} name={"name"} />
            <Input type={"email"} name={"email"} />
            <Input type={"number"} name={"phone"} />

          </section>

          {/* Education Section */}
          <section className="cv-section" id="education">
            <h2>Education Information</h2>

            <Input type={"text"} name={"school name"} />
            <Input type={"text"} name={"major"} />
            <Input type={"number"} name={"year of graduation"} />

          </section>

          {/* Work Experience Section */}
          <section className="cv-section" id="experience">
            <h2>Work Experience</h2>

            <Input type={"text"} name={"company name"} />
            <Input type={"text"} name={"position"} />
            <Input type={"textarea"} name={"responsibilities"} />
            <Input type={"number"} name={"from"} />
            <Input type={"number"} name={"to"} />

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
