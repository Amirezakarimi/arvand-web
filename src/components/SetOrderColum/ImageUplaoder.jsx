import React, { useState, useEffect } from "react";
import Resizer from "react-image-file-resizer";
import PostReq from "../../hooks/PostReq";
const ImageUplaoder = ({ handleChangeForm }) => {
  const [image, setImage] = useState();
  const [thumb, setThumb] = useState();
  const [loading, setLoading] = useState(false);
  const resizeFile = (file, type) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1500,
        1200,
        type,
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  const resizeThumb = (file, type) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        250,
        250,
        type,
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  const Upload = async (type, base, name) => {
    const result = await PostReq({
      method: "post",
      url: "/panel/user/upload",
      body: { base64image: base, imgName: name, folderName: "product" },
    });
    handleChangeForm(type, result.url);
  };
  const handleUploadClick = async (event) => {
    var fileRaw = event.target.files[0];
    if (!fileRaw) return;
    setLoading(true); // Start loader
    var fileType = fileRaw.type;
    if (fileType === "image/png") fileType = "PNG";
    else fileType = "JPEG";
    const tempfile = await resizeFile(fileRaw, fileType);
    const thumbFile = await resizeThumb(fileRaw, fileType);
    const imageName = fileRaw.name.replaceAll(" ", "_").replaceAll(",", "_");
    const thumbName =
      "Thumb" + fileRaw.name.replaceAll(" ", "_").replaceAll(",", "_");

    await Upload("imageUrl", tempfile, imageName);
    await Upload("thumbUrl", thumbFile, thumbName);
    setLoading(false); // Stop loader
  };

  return (
    <>
      <label htmlFor="image" style={{ display: "block", marginBottom: "8px" }}>
        {loading ? (
          <span>در حال آپلود...</span> // You can replace this with a spinner component
        ) : (
          "آپلود عکس"
        )}
      </label>
      <input
        type="file"
        id="image"
        onChange={handleUploadClick}
        disabled={loading}
      />
    </>
  );
};

export default ImageUplaoder;
