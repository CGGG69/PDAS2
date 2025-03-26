import ProfileCard from "./ProfileCard"
function App() {

  return (
    <>
      <h2>Componente App</h2>
      <section className="hero is-dark">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
              title="alexa"
              handle="@alexa"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRZYN799w8bvBrjJqtXKSSYTqeC5gQjE4_Q&s"
              />
            </div>
            <div className="column is-4">
              <ProfileCard/>
          </div>
          <div className="column is-4">
              <ProfileCard/>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default App

