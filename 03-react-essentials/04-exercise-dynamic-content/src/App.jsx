import './App.css'


/*Your task is to fill the already existing User component with some life! You should output the user's first name and last name (stored in the also already existing userData object) inside of the User component's <h2> element.

In addition, you should output the title (also stored in userData) in the <p> element inside the User component.

You're not allowed to copy & paste the values into the component.

The finished app could look like this:
 */
export const userData = {
  firstName: 'Lars',
  lastName: 'Schlögel',
  title: 'Full Stack Developer',
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
      {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}
function App() {

    return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User />
    </div>
    );
}

export default App
