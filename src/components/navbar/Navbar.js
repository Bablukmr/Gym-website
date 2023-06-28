import React, { useState } from "react";
import styles from "./Navbar.module.css";
import GYM from "../assets/gym.png";
import Button from "@mui/material/Button";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [click, setClick] = useState(true);

  function handlenav() {
    setClick(!click);
  }
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.image}>
         <a href="/#"><img src={GYM} alt="GYM" /></a> 
        </div>
        <div className={styles.navbar_tems}>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="#about">About_Us</a>
          </li>
          <li>
            <a href="#program">Program</a>
          </li>
          <li>
            <a href="#trainer">Trainer</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <Button variant="contained" color="success">
            Join Us
          </Button>
        </div> 
        <div onClick={handlenav} className={styles.mobile}>
          {click ? (
            <DehazeIcon />
          ) : (
            <div className={styles.mobile_list}>
              <CloseIcon className={styles.closeicon} />
              <div className={styles.mobile_list_ancor}>
                <li>
                  <a href="/#">Home</a>
                </li>
                <li>
                  <a href="#about">AboutUs</a>
                </li>
                <li>
                  <a href="#program">Program</a>
                </li>
                <li>
                  <a href="#trainer">Trainer</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <Button variant="contained" color="success">
            Join Us
          </Button>
              </div>
            </ div>
          )}
        </div>
      </div>
    </nav>
  );
}
