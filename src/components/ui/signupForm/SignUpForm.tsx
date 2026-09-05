import { useState, type FormEvent } from 'react';
import Button from '../button/Button'
import styles from './SignupForm.module.css';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    setError('');
    console.log('Trial requested for:', email);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fields}>
        <label className="visuallyHidden" htmlFor="email">
          Email address
        </label>

        <input
          id="email"
          className={styles.input}
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-describedby={error ? 'email-error' : 'signup-helper'}
          aria-invalid={Boolean(error)}
          required
        />

        <Button className={styles.submitButton} type="submit">
          Start free trial
        </Button>
      </div>

      {error ? (
        <p id="email-error" className={styles.error} role="alert">
          {error}
        </p>
      ) : (
        <p id="signup-helper" className={styles.helperText}>
          Start your free 14-day trial, no credit card necessary. By providing
          your email, you agree to our{' '}
          <a href="#terms">terms of service</a>.
        </p>
      )}
    </form>
  );
}