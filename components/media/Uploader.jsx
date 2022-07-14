import React, { useEffect, useRef, useState } from "react";
import Resizer from "react-image-file-resizer";
import { useMedia } from "../../hooks/useMedia";
import { MdInfo } from "react-icons/md";
import Spinner from "../ui/Spinner";

function Uploader({ setMediaUploaded }) {
  const [file, setFile] = useState("");
  const fileInputRef = useRef();
  const [size, setSize] = useState("");
  const { media, uploadLoading, uploadError, medias } = useMedia("medias");

  const [msg, setMsg] = useState("");

  const handleImageUpload = async (uri) => {
    const data = {
      name: file?.name,
      uri,
      width: size.width,
      height: size.height,
      type: "image",
    };

    const response = await media.addMedia(data);

    if (response?.url) {
      //push the image to medias
      setMediaUploaded(response);
    }
  };

  const handleDocumentUpload = async (uri) => {
    const fileData = {
      name: file?.name,
      uri,
      type: "document",
    };

    const response = await media.addMedia(fileData);

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
        //setMsg("uploadLoading start...");
      };
      reader.onprogress = () => {
        //setMsg("uploadLoading in progress...");
      };
      reader.onerror = () => {
        setMsg("error upuploadLoading image");
      };
      reader.onloadend = async () => {
        //setMsg("uploadLoading done");

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
                handleImageUpload(uri);
              },
              "base64"
            );
          };
        } else {
          await handleDocumentUpload(reader.result);
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
          {uploadLoading ? (
            <Spinner className="ms-2" />
          ) : (
            <span className="">Import image</span>
          )}
        </label>
      </div>
    );
}

export default Uploader;
