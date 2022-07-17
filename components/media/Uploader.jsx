import React, { useEffect, useRef, useState } from "react";
import Resizer from "react-image-file-resizer";
import { MdInfo } from "react-icons/md";
import Spinner from "../ui/Spinner";

function Uploader({ media, imageUploadLoading, imageUploadError }) {
  const [file, setFile] = useState("");
  const fileInputRef = useRef();
  const [size, setSize] = useState("");

  const [msg, setMsg] = useState("");

  const handleImageUpload = async (uri) => {
    const data = {
      name: file?.name,
      uri,
      width: size.width,
      height: size.height,
      type: "image",
    };

    await media.addMedia(data);
    await media.getMedias();
  };

  const handleDocumentUpload = async (uri) => {
    const fileData = {
      name: file?.name,
      uri,
      size: file?.size,
      type: "document",
    };

    await media.addMedia(fileData);
    await media.getMedias();
  };

  useEffect(() => {
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadstart = () => {
        //setMsg("uploadLoading start...");
      };
      reader.onprogress = () => {
        //setMsg("uploadLoading in progress...");
      };
      reader.onerror = () => {
        setMsg("error uploading image");
      };
      reader.onloadend = async () => {
        //setMsg("uploadLoading done");

        if (file?.size > 10000000) {
          setMsg(
            `The file size ${
              file?.size / 1000000
            } MB should not be more than 10MB`
          );
          return;
        }

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

  return (
    <div>
      {(file && imageUploadError) ||
        (msg && (
          <span className="me-2">
            <MdInfo className={`text-${msg ? "info" : "danger"}`} />
            {msg}
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
        {file && imageUploadLoading ? (
          <Spinner className="ms-2" />
        ) : (
          <span className="">Import image</span>
        )}
      </label>
    </div>
  );
}

export default Uploader;
