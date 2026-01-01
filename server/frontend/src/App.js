import LoginPanel from "./components/Login/Login"
<<<<<<< HEAD
import Register from "./components/Register/Register"
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";
=======
import { Routes, Route } from "react-router-dom";

>>>>>>> 6bf6c0a1d8dedb6d949c9878a99fafa33168319c
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
<<<<<<< HEAD
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
    </Routes>
  );
}
export default App;
=======
    </Routes>
  );
}
export default App;
>>>>>>> 6bf6c0a1d8dedb6d949c9878a99fafa33168319c
