import { useState, type FormEvent } from 'react';
import Button from '../button/Button';
import styles from './SignupForm.module.css';
import { createUser } from '../../../api/createUser';

type SubmissionStatus = 'idle' | 'submitting' | 'success';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] =
    useState<SubmissionStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    setError('');
    setStatus('submitting');

    try {
      const user = await createUser(email);

      console.log('Created user:', user);
      setStatus('success');
    } catch {
      setError('Something went wrong.')
      setStatus('idle');
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.fields}>
        <label className="visuallyHidden" htmlFor="email">
          Email address
        </label>

        <input
          id="email"
          className={styles.input}
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="email"
          value={email}
          disabled={status === 'submitting'}
          onChange={(event) => {
            setEmail(event.target.value);

            if (error) {
              setError('');
            }
          }}
          aria-describedby={
            error ? 'email-error' : 'signup-helper'
          }
          aria-invalid={Boolean(error)}
          required
        />

        <Button
          className={styles.submitButton}
          type="submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting'
            ? 'Submitting...'
            : 'Start free trial'}
        </Button>
      </div>

      {error && (
        <p
          id="email-error"
          className={styles.error}
          role="alert"
        >
          {error}
        </p>
      )}

      {status === 'success' && (
        <p className={styles.success} role="status">
          Your free trial has been created.
        </p>
      )}

      {status === 'idle' && !error && (
        <p
          id="signup-helper"
          className={styles.helperText}
        >
          Start your free 14-day trial, no credit card necessary.
          By providing your email, you agree to our{' '}
          <a href="#terms">terms of service</a>.
        </p>
      )}
    </form>
  );
}