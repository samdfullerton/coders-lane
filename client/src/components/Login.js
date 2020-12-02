import React from 'react'
import './RegistrationForm.css'
// regular html for  registration

export default function Login() {
    return (
        <div>
             
            <h2>Login</h2>
            <div class="form-control">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Enter username" />
                <small>Error message</small>
            </div>
            
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" />
                <small>Error message</small>
            </div>
            <div class="form-control">
            
            <button type="submit">Submit</button>
        
             </div>
        </div>
    
    )
}

