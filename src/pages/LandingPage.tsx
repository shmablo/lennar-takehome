import Header from '../components/ui/header/Header';
import Callout from '../components/ui/callout/Callout';
import SignupForm from '../components/ui/signupForm/SignUpForm';
import Illustration from '../assets/Illustration.svg';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />

        <main className={styles.hero}>
          <section className={styles.content}>
            <Callout />

            <h1 className={styles.heading}>
              A better way to
              <span>ship web apps</span>
            </h1>

            <p className={styles.description}>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>

            <SignupForm />
          </section>

          <div className={styles.illustrationContainer}>
            <img
              className={styles.illustration}
              src={Illustration}
              alt=""
            />
          </div>
        </main>
      </div>
    </div>
  );
}