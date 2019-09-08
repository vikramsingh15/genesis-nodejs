import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: ''
  });

  const { email, name, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login({ email, name, password });
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Sign into Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            onChange={e => onChange(e)}
            type='text'
            placeholder='Nickname'
            name='name'
            value={name}
            required
          />
        </div>
        <div className='form-group'>
          <input
            onChange={e => onChange(e)}
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            required
          />
        </div>
        <div className='form-group'>
          <input
            onChange={e => onChange(e)}
            type='password'
            placeholder='Password'
            name='password'
            value={password}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </Fragment>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired
};
export default connect(
  null,
  { login }
)(Login);
