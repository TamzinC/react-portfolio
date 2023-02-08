import {useState} from 'react';

const styles = {
  header: {
    textAlign: 'center',
    margin: '20px 0'
  },
  btn: {
    backgroundColor: 'lightseagreen',
    color: '#fff',
    cursor: 'pointer'
  }
};

function Contact(props) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  }) 

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted!')
    console.log(formData)
  };
  
    return (
      <>
        <h1 style={styles.header}>Contact Me</h1>

        <form onSubmit={handleSubmit}>
          <input name='name' onChange={handleChange} type='text' placeholder='Enter your name' />
          <input name='email' onChange={handleChange} type='text' placeholder='Enter your Email Address' />
          <textarea name='message' onChange={handleChange} placeholder='Enter your message' cols='30' rows='10'></textarea>
          <button style={(styles.btn)}>Submit</button>
        </form>

      </>
    )
  }
  
  export default Contact;