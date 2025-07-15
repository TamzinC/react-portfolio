import {useState} from 'react';
import styles from './Contact.module.css';

function Contact(props) {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    access_key: '0c0b524a-4b70-4633-8d60-aaa6937c29ef'
  }) 

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(formData);

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: data
        }).then(res => res.json())
          .then(data => {
            setSuccess(true);
            setFormData({
              ...formData,
              name: '',
              email: '',
              message: ''
            })

            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          })
          .catch(err => console.log(err));



      console.log('Form Submitted!')
      console.log(formData)
  };
  
    return (
      <>
        <h1 className={styles.header}>Contact Me</h1>

        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit}>
            <input 
              name='name' 
              value={formData.name} 
              onChange={handleChange} 
              type='text' 
              placeholder='Enter your name' />
            <input 
              name='email' 
              value={formData.email} 
              onChange={handleChange} 
              type='text' 
              placeholder='Enter your email address' />
            <textarea 
              name='message' 
              value={formData.message} 
              onChange={handleChange} 
              placeholder='Enter your message' 
              cols='30' 
              rows='10'></textarea>
            <button className={(styles.btn)}>Submit</button>
          </form>
        </div>

        {success && <p className={styles.success}>Form Submitted Sucessfully!</p>}
      </>
    )
  }
  
  export default Contact;