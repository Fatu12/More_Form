import React,{useState} from 'react'
 const UserForm = (props) => {
    // create object that hold all the information that we need to
    // create this form, and one getter and setter for all
    // ternary operators: offer a better way ti conditionally render an element. For ternary refresher check out 
    const [userData,setUserDate] = useState({
        firstName: "",
        lastName: "",
        email : "",
        password : "", 
        confirmPassword:"" 
    })
    // store some information to keep track , their is no limit on how much state we can use
    const [allUsers,setAllUsers]= useState([]);
    // event is that the user is trying to tpy
    const changeHandler=(event)=>{
        // update the state
        setUserDate({...userData,[event.target.name]: event.target.value})
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        
        let isValid = formValidation()
        if(isValid){
            // make an object and return  back as string
            console.log(`userData: ${JSON.stringify(userData)}`)
            // we can't do .push because this is a function not array
             // it  can take all the user data we have and add the current user data in it
            setAllUsers([...allUsers, userData])

            // let clear the state  and back to the original 
            setUserDate({
                firstName : "",
                lastName : "",
                email : "",
                password : "",
                confirmPassword : ""
            })
        }
        console.log("submit complete")
    }
    const formValidation = (e)=>{
        console.log("started validations")
        // assuming that this is true
        let isValid = true
        if(userData.firstName.length < 2 || userData.lastName.length < 2  ){
            isValid = false
            console.log("first and last name must be  more than 2 characters ")
        }    
        if (userData.email.length < 5) {
            isValid = false
            console.log("Email must be at least 5 character")
        }
        if (userData.password.length < 8) {
            isValid = false
            console.log("Password must be at least 8 characters")
        }
        if(userData.password !== userData.confirmPassword){
            isValid = false
            console.log("Password must match ")
        }
        
        console.log("complete validations")
        return isValid 
    }
    console.log("ALL USERS --->", allUsers)
  return (
    <div>
       <div className="row">
        <form className="col-md-4 offset-1" onSubmit={submitHandler}>
            <h1>Create a Form</h1>
            <div className="form-group">
                {/* to red of the the message to pop up before we typ,we can do userData.firstName  */}
                <label htmlFor="firstName"> First Name</label>
                {userData.firstName && userData.firstName.length < 2 ? 
                <p> first name must be at least 2 characters </p>:null
                }
                <input type="text" name= "firstName" onChange={changeHandler} value = {userData.firstName} className='form-control mt-2'/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName"> Last Name</label>
                {/* Ternary operator */}
                {userData.lastName && userData.firstName.length < 2 ?
                <p> Last name must be at least 2 characters.</p>:null }
                <input type="text" name = "lastName" onChange={changeHandler}  value = {userData.lastName} className='form-control mt-2' />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                {userData.email && userData.email.length < 5 ? 
                <p> Email must be at least 5 characters</p>: null}
                <input type="text" name="email" onChange={changeHandler}  value ={userData.email} className="form-control mt-2" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                {userData.password && userData.password.length < 8?
                <p>Password  be at least 8 characters</p> : null}
                <input type="password" name='password' onChange={changeHandler} value = {userData.password} className="form-control mt-2" />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                {userData.password !== userData.confirmPassword ? 
                <p> The passwords must match and be at least 8 characters.</p>: null}
                <input type="password" name='confirmPassword'onChange={changeHandler} value= {userData.confirmPassword}  className="form-control mt-2" />
            </div>
            <button className="btn btn-primary" value="submit">Create</button>
        </form>
       </div>
        {/* <div className="col-md-3 offset-1">
          
            
            <h4> Your information </h4>
            <h1> First Name {userData.firstName}</h1>
            <h1>Last Name {userData.lastName}</h1>
            <h1>Email {userData.email}</h1>
            <h1>Password {userData.password}</h1>
            <h1>Confirm Password {userData.confirmPassword}</h1>
           
        </div> */}
        <div className="col-md-3">
            <h1> User Information</h1>
            <ul>
            {/* // the map take three parameters, that the first parameter takes a value, second takes index and three the array it self,but the
            filters is just condition */}
                {
                    // map takes three parameters
                    allUsers.map((user,index)=>
                    <div key={index}>
                        <p>First Name: {user.firstName}</p>
                        <p>Last Name: {user.lastName}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                    </div>)
                }

            </ul>
        </div>
                    
                   
                   
                
                    
    </div>

   ) }
export default UserForm;
