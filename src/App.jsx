import styles from "./style";

import { NavBar,AboutUs,CTA,Footer,Hero,Products,Testimonials } from "./components"

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}><NavBar/></div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} pt-20`}><Hero/></div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutUs/>
          <Products/>
          <Testimonials/>
          <CTA/>
          <Footer/>
        </div>
      </div>


    </div>
  );
};

export default App;
