import Image from "next/image";
import React, { useEffect, useState } from "react";
import {FaCamera} from 'react-icons/fa'
import ContextMenu from "./ContextMenu";
import PhotoPicker from "./PhotoPicker";
import PhotoLibrary from "./PhotoLibrary";
import CapturePhoto from "./CapturePhoto";

function Avatar({ type, image, setImage }) {
  let [hover,setHover] = useState(false)
  const [isContextMenuVisible,setIsContextMenuVisible] =useState()
  const [contextMenuCordinates,setContextMenuCordinates] = useState({
    x:0,
    y:0
  })
  let [grabPhoto,setGrabPhoto] = useState(false)
  let [showPhotoLibrary,setShowPhotoLibrary] =useState(false)
  let [showCapturePhoto,setShowCapturePhoto] = useState(false)
  console.log(image,"hh");
  const showContextMenu =(e)=>{
        e.preventDefault();
        setContextMenuCordinates({ x:e.pageX,y:e.pageY})
        setIsContextMenuVisible(true)
  }

  useEffect(()=>{
    if(grabPhoto){
      const data = document.getElementById("photo-picker")
      data.click()
      document.body.onfocus = (e)=>{
        setTimeout(()=>{
          setGrabPhoto(false)
        },1000)
       
      }
    }
  },[grabPhoto])

  const contextMenuOptions = [
    {name:"Take Photo",callback:()=>{
      setShowCapturePhoto(true)
    }},
    {name:"Choose From Library",callback:()=>{
      setShowPhotoLibrary(true)
    }},
    {name:"Upload Photo",callback:()=>{
      setGrabPhoto(true)
    }},
    {name:"Remove Photo",callback:()=>{
      setImage("/default_avatar.png")
    }},
  ]

   const photoPickerChange = async (e)=>{
      const file = e.target.files[0];
      const reader = new FileReader();
      const data = document.createElement('img')
      reader.onload = function(event) {
        data.src = event.target.result;
        data.setAttribute("data",event.target.result)
      }
      reader.readAsDataURL(file)
      setTimeout(()=>{
        console.log(data.src,"srv");
        setImage(data.src)
      },100)
   }

  return <>
    <div className="flex items-center justify-center">
      {
        type === "sm" && (
          <div className="relative h-10 w-10">
            <Image src={image} alt="avater" className="rounded-full" fill/>
          </div>
        )}
        {
        type === "lg" && (
          <div className="relative h-14 w-14">
            <Image src={image} alt="avater" className="rounded-full" fill/>
          </div>
        )}
        {
        type === "xl" && (
          <div className="relative cursor-pointer z-0"
           onMouseEnter={()=>setHover(true)}
           onMouseLeave={()=>setHover(false)}
          >
          <div className={`z-10 flex bg-photopicker-overlay-background h-40 w-40 absolute top-0 left-0 items-center rounded-full justify-center flex-col text-center gap-2 ${hover ? "visible":"hidden"}`}
               onClick={(e)=>showContextMenu(e)}
          >
            <FaCamera 
              className="text-2xl" 
              id="context-opener"
              onClick={(e)=>showContextMenu(e)}
            />
            <span 
              id="context-opener"
              onClick={(e)=>showContextMenu(e)}
            >Change <br/> Profile <br/> Photo</span>
          </div>
          <div className="h-40 w-40 flex items-center justify-center">
            <Image src={image} alt="avater" className="rounded-full" fill/>
          </div>
          </div>
        )}
    </div>
    {
      isContextMenuVisible && 
        <ContextMenu 
          options={contextMenuOptions} 
          cordinates={contextMenuCordinates}
          contextMenu={isContextMenuVisible}
          setContextMenu={setIsContextMenuVisible}
        />
    }
    {
      showCapturePhoto && <CapturePhoto
        setImage={setImage}
        hide={setShowCapturePhoto}
      />
    }
    {
      showPhotoLibrary && <PhotoLibrary setImage={setImage} hidePhotoLibrary={setShowPhotoLibrary}/>
    }
    {
      grabPhoto && <PhotoPicker onChange={photoPickerChange}/>
    }
  </>;
}

export default Avatar;
