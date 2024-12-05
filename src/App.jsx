
import './App.css'
import ReuseableForm from './components/ReuseableForm/ReuseableForm';
// import HookForm from './components/HookForm/HookForm'
function App() {
  const handleSignupSubmit = data => {
    console.log('sign up data', data)
  }
  const handleUpdateProfile = data => {
    console.log('Update profile', data)
  }

  return (
    <>
      <div>
        <h1>Form master</h1>
        {/* <HookForm></HookForm> */}
        <ReuseableForm fromTitle={'Sign Up'} handleSubmit={handleSignupSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p> please Sign up right Now</p>
          </div>
        </ReuseableForm>
        <ReuseableForm fromTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitButton='updated'>
          <div>
            <h2>Update profile</h2>
            <p>always keep your update profile</p>
          </div>
        </ReuseableForm>
      </div>
    </>
  )
}

export default App;
