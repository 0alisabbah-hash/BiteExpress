import logo from './logo.svg';
import './Styles/style.css';
import './App.css';

function App() {
  // function called even 
  const num = [4, 7, 2, 8];
  const CampusList = ['Beirut', 'Saida', 'Tyre'];

  let sum = 0;
  const even = () =>{
     // find the sum of the array
     //for(let i=0; i<num.length; i++)
      //sum += num[i];
     // another way
     for (const d of num) 
      sum = sum +d;
    return(sum);
  }
  return (
      <div className='about-container' >
           <p>{even()}</p>
           <p>{sum}</p>
           <h1>the total is {sum}</h1>
           <h1>About LIU</h1>
           <h2>Home</h2>
           <p>Welcome to the Lebanese International University, a place where we believe together we can accomplish a better future. We invite you to explore the diverse and prominent community of students, staff, faculty, and administrators that make up what LIU truly is.</p>
           <div className='listDiv'>
            
            <ol>
              <li>Arts and Science</li>
              <li>School of Business</li>
              <li>School of Engineering</li>
              <li>School of Pharmacy</li>
            </ol>
            <ul>
              { //  const CampusList = ['Beirut', 'Saida', 'Tyre'];
                CampusList.map(item => 
                <li> {item}</li>
                )
              }
            </ul>

           </div>
      </div>    
  );
}

export default App;
