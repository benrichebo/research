import React, { useEffect, useRef, useState } from "react";
import Resizer from "react-image-file-resizer";
import { useMedia } from "../../hooks/useMedia";
import { MdInfo } from "react-icons/md";
import Spinner from "../ui/Spinner";

function Uploader({ setMediaUploaded }) {
  const [file, setFile] = useState("");
  const fileInputRef = useRef();
  const [size, setSize] = useState("")
  const { media, loading, uploadError, medias } = useMedia("medias");

  const [msg, setMsg] = useState("");

  const handleSubmit = async (uri) => {
    const data = {
      name: file?.name,
      uri,
      width: size.width,
      height: size.height,
    };

    const response = await media.addMedia(data);

    if (response?.url) {
      //push the image to medias
      setMediaUploaded(response);
    }
  };

  useEffect(() => {
    if (file) {
      console.log("file", file);
      const reader = new FileReader();
      reader.onloadstart = () => {
        //setMsg("loading start...");
      };
      reader.onprogress = () => {
        //setMsg("loading in progress...");
      };
      reader.onerror = () => {
        setMsg("error uploading image");
      };
      reader.onloadend = () => {
        //setMsg("loading done");

        if (file.type.substr(0, 5) === "image") {
          var image = new Image();
          image.src = reader.result;
          image.onload = () => {
            setSize({ width: image.width, height: image.height });
            Resizer.imageFileResizer(
              file,
              "100%",
              "100%",
              "JPEG",
              150,
              0,
              (uri) => {
                //setImage(uri);
                handleSubmit(uri);
              },
              "base64"
            );
          };
        }
      };

      reader.readAsDataURL(file);
    }
  }, [file]);

  if (medias?.length >= 0)
    return (
      <div>
        {uploadError ||
          (msg && (
            <span className="me-2">
              <MdInfo className={`text-${msg ? "info" : "danger"}`} />
            </span>
          ))}
        <label className="btn btn-light px-3">
          <input
            type="file"
            placeholder=""
            className="custom-file-input"
            aria-describedby="fileHelpId"
            ref={fileInputRef}
            onChange={(e) => setFile(e.target?.files[0])}
            hidden
          />
          {loading ? (
            <Spinner className="ms-2" />
          ) : (
            <span className="">Import image</span>
          )}
        </label>
      </div>
    );
}

export default Uploader;
