import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import '../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from './quill';
import './Home.css';

const Home = () => {

  const navigate=useNavigate();


  const [company, setCompany] = useState("");
  const [text,setText] =useState("");
  const [sub,setSub] = useState("");
  const [isName, setIsName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [refNo,setRefNo]=useState("");
  const [designation,setDesignation]=useState("");
  const [joiningDate,setJoiningDate]=useState("");
  const [logo,setLogo]=useState("https://rusutikaa.github.io/docs/developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/Art/defaultphoto_2x.png");

  const submitDetails=(e)=>{
      e.preventDefault();
    if(!company.trim()||!sub.trim()||logo==="https://rusutikaa.github.io/docs/developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/Art/defaultphoto_2x.png"  || !text.trim() || !username.trim())
    alert("Subject, Company, letter body, Logo, Employee Name are required!");
    else{
      navigate(`generateletter`,{state:{company,sub,isName,username,address,logo,refNo,designation,joiningDate,text}});
    }
  }

  useEffect(()=>{
    if(window.screen.width<585) alert("Please open in a larger device for best experience!");
  },[])

  // const handleCompany = (event) => {
  //   setCompany(event.target.value);
  //   console.log(event.target.value);
  // };

  // const handleLetterType = (event) => {
  //   setLetterType(event.target.value);
  //   console.log(event.target.value);
  // };

  const uploadImage=async(e)=>{
    const file=e.target.files[0];
    const base64=await convertBase64(file);
    setLogo(base64.toString());
  }
  
  const convertBase64=(file)=>{
    return new Promise((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
        resolve(fileReader.result);
      }
      
      fileReader.onerror=(err)=>{
        reject(err);
      }
    })
  }

  return (
    <div style={{minHeight:'100vh', minWidth:'100vw', backgroundColor: '#00c0d9',backgroundImage: `url("https://www.transparenttextures.com/patterns/gray-floral.png")`}}>

      <div className="container d-flex justify-content-center align-items-center text-center">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3"></div>
                <h1 className='heading' style={{color:'#24134d' }}>Letter Generator</h1>
          </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center mq" style={{height: '55%'}}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%'},
              }}
              noValidate
              autoComplete="off"
            >
              <div className="form-group text-center">
                <input type="file" className="form-control-file d-none" id="exampleFormControlFile1" onChange={(e)=>uploadImage(e)} />
              <div className="form-group">
              <div className="text-center mb-2"><img className="rounded mt-5" src={logo}  style={{width:"35%",height:"35%", border: "5px solid blue"}} alt="" /></div>
              <label htmlFor="exampleFormControlFile1" className='btn btn-primary mybtn'>Upload a logo</label>
              </div>
              </div>
            </Box>
            <div className="CKedit d-flex justify-content-center mt-3 ">
            <div className="editor" style={{backgroundColor:"#bee1e6"}}>
              <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={text}
                        placeholder="Write letter content here..."
                        onChange={(e)=>{
                          setText(e)
                        }}
                    />
            </div>
          </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4 tfield">
            

          <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%'},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Subject" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={sub} onChange={(e) => setSub(e.target.value)} />
            </Box>

          <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%', marginTop: '10px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Company Name" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={company} onChange={(e) => setCompany(e.target.value)} />
            </Box>




            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%', marginTop: '10px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Employee Name" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%', marginTop: '10px'},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Address" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={address} onChange={(e) => setAddress(e.target.value)} />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%' , marginTop: '10px' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Reference No." InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={refNo} onChange={(e) => setRefNo(e.target.value)} />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%', marginTop: '10px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Designation" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%', marginTop: '10px' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Joining Date" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%', marginTop: '10px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Issuer Name" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={isName} onChange={(e) => setIsName(e.target.value)} />
            </Box>


            <div className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-info mybtn text-white mt-3 mb-2' onClick={submitDetails}>Submit</button>
            </div>
          </div>
        
        
        </div>
      </div>
    </div>
  )
}

export default Home;


//<div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded mt-5" src={nImg}  style={{width:"80%"}}/><span className="font-weight-bold">Upload image</span><input type="file" className="text-center form-control" onChange={(e)=>{uploadImage(e)}}/></div>