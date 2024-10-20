import Image from "next/image";
import Girl from "../../public/images/site/girl.jpg";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={Girl}
          alt="An image showing a girl"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Arezou</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;
