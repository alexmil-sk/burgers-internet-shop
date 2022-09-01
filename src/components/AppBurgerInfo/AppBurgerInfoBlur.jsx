import React from 'react';
import classes from './AppBurgerInfo.module.scss';
import burgerImg from '../../assets/image/template.jpg';

function AppBurgerInfoBlur() {
  
  
  return (
    <>
      <div className={classes.AppBurgerInfo} style={{filter: 'blur(10px)'}}>
        
        <div className={classes.AppBurgerInfoContainer}>
          <img src={burgerImg} alt='burgerImg'/>
          <div className={classes.AppBurgerInfoContainerText}>
            
            <div className={classes.AppBurgerInfoContainerTextInfo}>
              <h2>Card of Burger</h2>
              <h3>Burger name</h3>
              <p><strong>ID:</strong>&nbsp;0</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptatem.</p>
              <p>Types:&nbsp;wheat flour&nbsp;|&nbsp;rye flour
              
              </p>Sizes:&nbsp;Big size&nbsp;|&nbsp;Medium size&nbsp;|&nbsp;Small size&nbsp;|&nbsp;King size
              <p>Rating: <span>★ ★ ★ ★ ★</span></p>
            </div>
            
            <div className={classes.AppBurgerInfoContainerTextBottom}>
              <p><strong>Price:</strong><span>&nbsp; 950&nbsp;&#8381;</span></p>
              <button>order</button>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default AppBurgerInfoBlur;
