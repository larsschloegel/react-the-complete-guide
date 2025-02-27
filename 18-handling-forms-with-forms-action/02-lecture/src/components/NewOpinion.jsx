import { useActionState } from 'react';

function newOpinionAction(prevFormState, formData) {
  const userName = formData.get('userName');
  const title = formData.get('title');
  const body = formData.get('body');

  let errors = [];

  if (!userName.trim()) {
    errors.push('Please enter your name.')
  }

  if (!title.trim() !== '') {
    errors.push('Please enter a title.')
  }


  if (errors.length > 0) {
    return {
      errors, enteredValue: {
        userName,
        title,
        body,
      },
    };
  }

  return { errors: null }

}
export function NewOpinion() {
  const [formState, formAction, pending] = useActionState(newOpinionAction, { errors: null });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValue?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValue?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValue?.body}></textarea>
        </p>

        {formState.errors && (
          <ul className='errors'>
            {formState.errors.map(error => <li key={error}>{error}</li>)}
          </ul>)}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
