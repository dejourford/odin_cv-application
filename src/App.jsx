import "./App.css"
import { Input } from "./components/Input"


function App() {
  const handleEdit = (e) => {
    // if edit button is clicked show input fields with data pre-filled
    e.preventDefault();
    console.log("edit mode...")

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted")
  }


  return (
    <>
      <h1>CV Application</h1>
      <main>
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
          <button className="button" id="edit-cv-button" onClick={handleEdit}>Edit</button>
          <button className="button" id="create-cv-button" type="submit" onClick={handleSubmit}>Create CV!</button>
        </form>
      </main>
    </>
  )
}

export default App
