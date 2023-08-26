import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from '../../heading/Header'
import Footer from '../../footer/Footer'
import AdminMenu from '../AdminMenu'
import { useNavigate } from "react-router-dom";

const UploadContent = () => {

const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [authorofcontent, setAuthor] = useState("");
  const [videolink, setVideoLink] = useState("");
  const [linkofcontent, setContentLink] = useState("");
  const [price, setPrice] = useState("");
  const [videono, setVideoNo] = useState("");
  const [category, setCategory] = useState("");

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
    //eslint-disable-next-line
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // const productData = new FormData();
      // productData.append("title", title);
      // productData.append("description", description);
      // productData.append("price", price);
      // productData.append("authorofcontent", authorofcontent);
      // productData.append("thumbnail", thumbnail);
      // productData.append("videolink", videolink);
      // productData.append("linkofcontent", linkofcontent);
      // productData.append("videono", videono);
      // const { data } = axios.post(
      //   "/api/v1/content/create-content",
      //   productData,
      //   );

      const res = await axios.post("/api/v1/content/create-content", {
        
      });


      if (data?.success) {
        console.log(productData);
        alert("Product Created Successfully");
        navigate("/");
      } else {
        console.log(productData);
        alert(data?.message);
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className='row'>

          <div className="col-md-3">
            <AdminMenu />

          </div>
          <div className="col-md-9">
            <h1> Hello uploadcontent </h1>

  <form onSubmit={handleCreate}>

            <select class="form-select" onChange={(value) => {
              setCategory(value);
            }} aria-label="Default select example" showSearch>
              <option > Select category
              </option>
              {categories?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}

            </select>

            <div className="mb-3">
              <label className="btn btn-outline-secondary col-md-12">
                {thumbnail ? thumbnail.name : "Upload Photo"}
                <input
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={(e) => setThumbnail(e.target.files[0])}
                  hidden
                />
              </label>
            </div>

            <div className="mb-3">
              {thumbnail && (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(thumbnail)}
                    alt="product_photo"
                    height={"200px"}
                    className="img img-responsive"
                  />
                </div>
              )}
            </div>



            <div className="mb-3">
              <input
                type="text"
                value={title}
                placeholder="write a name"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                value={description}
                placeholder="Write description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                value={videolink}
                placeholder="Provide Video Link "
                className="form-control"
                onChange={(e) => setVideoLink(e.target.value)}
              />
            </div>


            <div className="mb-3">
              <input
                type="text"
                value={authorofcontent}
                placeholder="write a name of Author"
                className="form-control"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={linkofcontent}
                placeholder="link of material if any "
                className="form-control"
                onChange={(e) => setContentLink(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                value={price}
                placeholder="Price of course"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                value={videono}
                placeholder="Video No "
                className="form-control"
                onChange={(e) => setVideoNo(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <button className="btn btn-primary" onClick={handleCreate}>
                CREATE PRODUCT
              </button>

            </div>

         </form>


            </div>
          </div>
        </div>
        <Footer />

      </>
      )
}

      export default UploadContent
