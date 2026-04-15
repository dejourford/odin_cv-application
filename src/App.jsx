import "./App.css"
import { Input } from "./components/Input"


function App() {
  const handleClick = (e) => {
    // if edit button is clicked
    if (e.target.id === "edit") {
      console.log("truee  edit")
    }

    // if save button is clicked
    if (e.target.id === "save") {
      console.log("truee save")
    }

    // if create cv button is clicked
    if (e.target.className.includes("create-cv")) {
      console.log("truee")
    }
  }
  
  
  return (
    <>
      <h1>CV Application</h1>
      <main>

        {/* Personal Info Section */}
        <section className="cv-section" id="personal">
          <h2>Personal Information</h2>
          <form>
            <Input type={"text"} name={"name"} />
            <Input type={"email"} name={"email"} />
            <Input type={"number"} name={"phone"} />
            <div className="button-group">
              <button type="button" id="edit" onClick={handleClick}>Edit</button>
              <button type="button" id="save" onClick={handleClick}>Save</button>
            </div>
          </form>
        </section>

        {/* Education Section */}
        <section className="cv-section" id="education">
          <h2>Education Information</h2>
          <form>
            <Input type={"text"} name={"school name"} />
            <Input type={"text"} name={"major"} />
            <Input type={"number"} name={"year of graduation"} />
            <div className="button-group">
              <button type="button" id="edit">Edit</button>
              <button type="button" id="save">Save</button>
            </div>
          </form>
        </section>

        {/* Work Experience Section */}
        <section className="cv-section" id="experience">
          <h2>Work Experience</h2>
          <form>
            <Input type={"text"} name={"company name"} />
            <Input type={"text"} name={"position"} />
            <Input type={"textarea"} name={"responsibilities"} />
            <Input type={"number"} name={"from"} />
            <Input type={"number"} name={"to"} />
            <div className="button-group">
              <button type="button">Edit</button>
              <button type="button">Save</button>
            </div>
          </form>
        </section>

        {/* Create Form Button */}
        <button className="create-cv-button" onClick={handleClick}>Create CV!</button>
      </main>
    </>
  )
}

export default App
