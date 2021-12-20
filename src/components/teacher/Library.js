import React, { useState, useEffect } from "react";
import Axios from "axios";

const Library = () => {

  return (
      <>
    <div>
      <form action="/imageupload" method="post">
        <input type="file" name="file" />
        {fileError && <div>{fileError}</div>}
        <button className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
    </>
  );
};

export default Library;
