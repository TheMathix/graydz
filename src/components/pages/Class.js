import React, {useState, useEffect} from 'react';
import '../../App.css'
import Footer from '../items/Footer'
import Navbar from '../items/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import ClassCards from '../items/ClassCards';
import { getPosts } from '../../actions/posts';
import { useHistory } from 'react-router-dom';

function Class(props) {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const [act_list, setAct_list] = useState()

  const state  = props.location.state
 
  const new_class_name = JSON.parse(localStorage.getItem('class'))
  const old_class_name = JSON.parse(localStorage.getItem('class_c'))
 
  const filters = {email: user?.result.email, turma: new_class_name}
  const dispatch = useDispatch();
  // const history = useHistory();

  if(new_class_name !== old_class_name){
      dispatch(getPosts(filters));
  }

  const activities = useSelector((state) => state.posts)


  useEffect(()=>{
    if(((new_class_name !== null) &&(new_class_name !== old_class_name) ) || (old_class_name == null)){
      
      localStorage.setItem('class_c', JSON.stringify(new_class_name))
      
      setAct_list( <ClassCards class_act={activities.class_activities} /> )
    }

  }
  // ,[new_class_name, old_class_name])
  )
  return (
    <>
      <Navbar />
        <Sidebar >
          
        </Sidebar>

        {act_list}

        <div style={{height:"600px"}}></div>
      <Footer />
    </>
  );
}

export default Class;
