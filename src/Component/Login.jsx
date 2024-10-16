import { useState } from 'react';
import "../Style/Login.css";
import image1 from "../image/contact/9.png";
import image2 from "../image/contact/10.png";
import image3 from "../image/contact/11.png";
import image4 from "../image/contact/12.png";

const MyForm = ({ formData, handleChange, handleSubmit, handleFocus }) => {
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form-1'>
                <label htmlFor="name" className='info'>Your Name :</label>
                <input
                    type="text"
                    id="name"
                    className='info1'
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                />
            </div>
            <br />
            <div className='form-1'>
                <label htmlFor="email" className='info'>Email Id :</label>
                <input
                    type="email"
                    id="email"
                    className='info1'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                />
            </div>
            <br />
            <div className='form-1'>
                <label htmlFor="phoneno" className='info'>Phone No :</label>
                <input
                    type="text"
                    id="phoneno"
                    className='info1'
                    name="phoneno"
                    value={formData.phoneno}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phoneno')}
                />
            </div>
            <br />
            <div className='form-1'>
                <label htmlFor="password" className='info'>Password:</label>
                <input
                    type="password"
                    id="password"
                    className='info1'
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => handleFocus('password')}
                />
            </div>
            <br />

            <button type="submit" className='custom-btn btn-16'>
                Submit
            </button>
        </form>
    );
};

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneno: '',
        password: '',
    });

    const [currentImage, setCurrentImage] = useState(image1);
    const [isHoverActive, setIsHoverActive] = useState(false); // New state for hover

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleFocus = (inputName) => {
        setIsHoverActive(true); // Activate hover when focusing
        switch (inputName) {
            case 'name':
                setCurrentImage(image1);
                break;
            case 'email':
                setCurrentImage(image2);
                break;
            case 'phoneno':
                setCurrentImage(image3);
                break;
            case 'password':
                setCurrentImage(image4);
                break;
            default:
                setCurrentImage(image1);
        }
    };

    const handleBlur = () => {
        setIsHoverActive(false); // Deactivate hover when input loses focus
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className='login'>
            <div className="contact" id='contact' >
                <div 
                    className={`image-hover-wrapper ${isHoverActive ? 'hover-active' : ''}`  } 
                   id='login-a'
                >
                    <h2> Welcome To<br/> <span className='text-green-500'>Tradexpro Exchange  </span>  </h2>
                    <img src={currentImage} alt="" className='contact-left-img' />
                </div>
                <div className='contact-right' >
                    <div className='contact-right-a'>
                        <h1 className='contact-right-a-h1'>Login</h1>
                        <div className='contact-right-div'></div>
                    </div>

                    <div className='contact-right-aa' id='submit'>
                        <MyForm 
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleFocus={handleFocus}
                            handleBlur={handleBlur} // Pass blur handler to MyForm if needed
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
