import { useState } from 'react';
import "../Style/Login.css";
import image1 from "../image/contact/13.png";
import image2 from "../image/contact/13.png";
import image3 from "../image/contact/14.png";

const MyForm = ({ formData, handleChange, handleSubmit, handleFocus, errors }) => {
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form-1'>
                <label htmlFor="email" className='info'>Your Email :</label>
                <input
                    type="email"
                    id="email"
                    className='info1'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                />
                {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <br />
            <div className='form-1'>
                <label htmlFor="password" className='info'>Password :</label>
                <input
                    type="password"
                    id="password"
                    className='info1'
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => handleFocus('password')}
                />
                {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <br />
            <button type="submit" className='custom-btn btn-16'>Submit</button>
        </form>
    );
};

const Signup = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [currentImage, setCurrentImage] = useState(image1);
    const [isZoomActive, setIsZoomActive] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setIsZoomActive(value !== '' || (name === 'email' && formData.password !== '') || (name === 'password' && formData.email !== ''));
    };

    const handleFocus = (inputName) => {
        switch (inputName) {
            case 'email':
                setCurrentImage(image2);
                break;
            case 'password':
                setCurrentImage(image3);
                break;
            default:
                setCurrentImage(image1);
        }
        setIsZoomActive(true);
    };

    const validate = () => {
        let isValid = true;
        const newErrors = { email: '', password: '' };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Enter a valid email';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className='Singup'>

            <div className="contact" id='contact' data-aos="fade-up">
                <div className={`image-hover-wrapper ${isZoomActive ? 'hover-active' : ''}`}   id='login-a' >
                <h2> Welcome To<br/> <span className='text-green-500'>Tradexpro Exchange  </span>  </h2>
                    <img src={currentImage} alt="" className='contact-left-img' />
                </div>
                <div className='contact-right' >
                    <div className='contact-right-a'>
                        <h1 className='contact-right-a-h1'>Signup</h1>
                        <div className='contact-right-div'></div>
                    </div>
                    <div className='contact-right-aa' id='submit'>
                        <MyForm
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleFocus={handleFocus}
                            errors={errors}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
