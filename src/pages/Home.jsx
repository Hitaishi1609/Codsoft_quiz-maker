import { useState } from "react"
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"



const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("IsAuthenticated", isAuthenticated)



  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-col bg-amber-200 border-4 border-amber-400 rounded-full w-3/4 h-3/4 absolute items-center">

        <p className="font-extrabold font-serif text-4xl text-amber-500 mt-10"> {(isAuthenticated) ? "Welcome to Online Quiz Maker!" : "Test Your Knowledge Here!"}</p>

        <p className="font-medium font-serif text-amber-500 w-11/12 mt-6 ">Aenean pretium, purus at vulputate consequat, eros metus pretium erat, ut commodo eros arcu id arcu. Orci varius natoque penat ibus et magnis dis parturient montes, nascetur ridiculus mus. In sit amet tellus condimentum leo ultricies sollicitudin. Donec lacus velit, aliquam sit amet molestie sed, vulputate non diam. Sed dictum nisl est, id interdum mauris lobortis vitae. Mauris dui nunc, congue in venenatis eget, mollis ut justo. Donec sed urna pharetra, consectetur mauris sed, hendrerit elit. Integer sit amet ex. Donec lacus velit, aliquam sit amet molestie sed, vulputate non diam. Sed dictum nisl est, id interdum mauris lobortis vitae. Mauris dui nunc, congue in venenatis eget, mollis ut justo. Donec sed urna pharetra, consectetur mauris sed, hendrerit elit. Integer sit amet ex.</p>


        <div className="flex flex-col gap-4 w-3/4 items-center mt-6">

          {
            (isAuthenticated) ?
            <div>
                <Link to="/take-quiz">
                    <button className='bg-amber-200 border-4 border-amber-400   text-amber-500 py-[8px] px-[10px] rounded-[8px] w-60'>
                      Take a Quiz
                    </button>
                  </Link>

                  <Link to="/post-quiz">
                    <button className='bg-amber-200 border-4 border-amber-400   text-amber-500 py-[8px] px-[10px] rounded-[8px] w-60'>
                      Post a Quiz
                    </button>
                  </Link>
            </div>
             : <div>
                <Link to="/login">
                    <button className='bg-amber-200 border-4 border-amber-400   text-amber-500 py-[8px] px-[10px] rounded-[8px] w-60'>
                      Login
                    </button>
                  </Link>

                  <Link to="/signup">
                    <button className='bg-amber-200 border-4 border-amber-400   text-amber-500 py-[8px] px-[10px] rounded-[8px] w-60'>
                      Sign Up
                    </button>
                  </Link>
             </div>

          }


         


      </div>

      
      </div>
    </div>
    
  
    ); 
};

export default Home;
