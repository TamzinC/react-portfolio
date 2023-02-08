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
  },
  success: {
    textAlign: 'center',
    color: 'lightseagreen',
    marginTop: '15px'
  }
};

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



      console.log('form submitted!')
      console.log(formData)
  };
  
    return (
      <>
        <h1 style={styles.header}>Contact Me</h1>


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
            placeholder='Enter your Email Address' />
          <textarea 
            name='message' 
            value={formData.message} 
            onChange={handleChange} 
            placeholder='Enter your message' 
            cols='30' 
            rows='10'></textarea>
          <button style={(styles.btn)}>Submit</button>
        </form>

        {success && <p style={styles.success}>Form Submitted Sucessfully!</p>}
      </>
    )
  }
  
  export default Contact;