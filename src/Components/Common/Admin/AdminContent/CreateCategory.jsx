import Header from '../../heading/Header'
import Footer from '../../footer/Footer'
import AdminMenu from '../AdminMenu'
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Modal } from "antd";
import CategoryForm from '../../Category/CategoryForm'
import CategoryTable from '../../Category/CategoryTable'

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", {
        name,
      });
      if (data?.success) {
        alert(`${name} is created`);
        getAllCategory();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
    }
  };

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      alert("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <>
     <Header/>
     
    <div className="container-fluid">
          <div className='row'>

            <div className="col-md-3">
              <AdminMenu />

            </div>
            <div className="col-md-9">
              
       <CategoryTable/>
      </div>
            </div>
            </div>
     <Footer/>
    </>
  )
}

export default CreateCategory
