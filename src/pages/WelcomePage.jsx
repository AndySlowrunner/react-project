import logo from '../shared/icons/Image 1.png';
import icon from '../shared/icons/icon.svg';

export const WelcomePage = () => {
    return (
      <>
        <img src={logo} alt="Logo" />
        <h1>Task Pro</h1>
        <img src={icon} alt="Icon" />    
        <p>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <button type="button">Registration</button>
        <button type="button">Log In</button>
      </>
    );
};