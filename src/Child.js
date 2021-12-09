import PropTypes from 'prop-types';
import { string } from 'prop-types';
function Child( {title, numberofstudents, array, user, Handlealert, children} ){
// console.log(props)
    return (
        <div>  
            
            <h1>{title}</h1>
            <p> the number of students today is : {numberofstudents}  </p>
              {array.map((el,i)=>  <li  key={i}  >{el}</li>     )  }

              <p>{user.name}  | {user.age}  </p>

              <button  onClick={ ()=> Handlealert(user.name)  }  >click me !</button>

           {children}

              </div>
    )
}

export default Child 

Child.propTypes={
    title: PropTypes.string,
    numberofstudents: PropTypes.number,
    array: PropTypes.arrayOf(string).isRequired,
    user: PropTypes.object,
    Handlealert: PropTypes.func


}


Child.defaultProps={
    title:'hello'
}