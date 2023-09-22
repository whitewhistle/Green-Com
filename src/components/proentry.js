import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { FormGroup, Input } from 'reactstrap';
import axios from "axios";
import './proentry.css';
import { useNavigate } from "react-router-dom";


const initialEntry = {data: { title: "", desc: "", Price: "",category: "" }}; 

const initialImg ={ref: "api::product.product", refId: "", field: "img", files: ""}

export default function Proentry() {

  const [proentry, setProentry] = useState(initialEntry);
  const [Img, setImg] = useState(initialImg);
  const [file, setfile] = useState(null);
  const [id, setid] = useState("");
  const [deleteTriggered, setDeleteTriggered] = useState(false);
 

  var count=0;

  
  const navigate = useNavigate();
  const params = {
    headers: {
        Authorization:"Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
}; 



  const pentry = async () => {
    try {
      const url = `http://localhost:1337/api/products`;
        
      const res = await axios.post(url, proentry, params)
        
        
      alert("Entry added");
        
      
      const idString = res.data.data.id; 
      const idInteger = parseInt(idString, 10); 
      const incrementedId = idInteger + 1; 
      const incrementedIdString = String(incrementedId);
      setid(incrementedIdString)                              
        
                                      
        console.log(res.data.data.id);
        console.log(id);
        
        if(id!="" && !deleteTriggered)
        {
          setDeleteTriggered(true);
          const idString = res.data.data.id; 
          const idInteger = parseInt(idString, 10); 
          const incrementedId = idInteger - 1; 
          const incrementedIdString = String(incrementedId);  
          
          count=count+1

          const url = `http://localhost:1337/api/products/${incrementedIdString}`;
          try {
              const response = await axios.delete(url, params);
          
              console.log('Product deleted successfully:', response.data);
              count=count+1;
            } catch (error) {
              console.error('Error deleting product:', error);
            }
        }
        

        setProentry(initialEntry);
        await Iupload();

    } catch (error) {
      console.error(error);
    }
  };
  
  
    
  const Iupload = async () => {
    try {
      
      let formdata=new FormData();

      formdata.append('ref', "api::product.product");
      formdata.append('field', "img");
      formdata.append('files', file);
      formdata.append('refId', id);
      console.log(id);
      console.log(file);
      console.log(Img);    


      const url = `http://localhost:1337/api/upload`;
      setImg(initialImg);
        
        
        
        const res1 = await axios.post(url, formdata , params);
        console.log(res1);
        alert("Img added");



        

    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  
  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setProentry((currentEntry) => ({
      ...currentEntry,
      data: {
        ...currentEntry.data,
        [name]: value,
      },
    }));
  }

  

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the first selected file
    if (selectedFile) {
      // Read the selected image file
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result; // This contains the file data
        setImg((currentImg) => ({
          ...currentImg,
            files: imageData, // Store the image data in your state

        }));
      };
      reader.readAsDataURL(selectedFile);
     }
     setfile(selectedFile);
  };



  return (
    <div className='pregistercontainer'>
      <div className='pregistermargin'>
        <div className='pregisterPanel'>
          <div className='title'>Please add 1 buffer entry</div>
          <div className='inputer'>
            <input
              type="text"
              name="title"
              value={proentry.data.title}
              onChange={handleUserChange}
              placeholder="Enter your title"
            />
          </div>
          <div className='inputer'>
            <input
              type="text"
              name="desc"
              value={proentry.data.desc}
              onChange={handleUserChange}
              placeholder="Enter description"
            />
          </div>
          <div className='inputer'>
            <input
              type="number"
              name="Price"
              value={proentry.data.Price}
              onChange={handleUserChange}
              placeholder="Enter Price"
            />
          </div>
          <div className='inputer'>
            <input
              type="number"
              name="category"
              value={proentry.data.category}
              onChange={handleUserChange}
              placeholder="Enter category"
            />
          </div>
          <div className="inputer">
          <input 
  type="file" 
  accept="image/*" 
  onChange={(event) => { handleImageChange(event)}}
  name="img"
  value={null}
/>
             </div>
             <Button onClick={() => { pentry()}}>
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
}
