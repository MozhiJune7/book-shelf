import "./BookStore.css";
import { useState, useEffect } from "react";
import axios from "axios";
import FormTable from "./FormTable";
import { MdAdd } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { LiaTrashAltSolid } from "react-icons/lia";

axios.defaults.baseURL = "http://localhost:8080/";

const BookStore =() => {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [formData, setFormData] = useState({
    no: "",
    name: "",
    author: "",
    publications: "",
  });
  const [editFormData, setEditFormData] = useState({
    no: "",
    name: "",
    author: "",
    publications: "",
    _id: "",
  });
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formData);
    console.log(formData);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        no: "",
        name: "",
        author: "",
        publications: "",
      });
    }
  };

  const getFetchData = async () => {
    try {
      const data = await axios.get("/");
      if (data.data.success) {
        setDataList(data.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put("/update", editFormData);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };

  const handleEditOnChange = async (e) => {
    const { value, name } = e.target;
    setEditFormData((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };
  const handleEdit = (val) => {
    setEditFormData(val);
    setEditSection(true);
  };
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center",color:"#03193b" }}>Book Store CRUD Operations</h1>
      </div>
      <div className="container">
        <button className="btn btn-add" onClick={() => setAddSection(true)}>
          <MdAdd />
          &nbsp;Add
        </button>
        {addSection && (
          <FormTable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={() => setAddSection(false)}
            rest={formData}
          />
        )}
        {editSection && (
          <FormTable
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={() => setEditSection(false)}
            rest={editFormData}
          />
        )}
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Book No</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Publications</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataList.length > 0 ? (
                dataList?.map((item) => {
                  return (
                    <tr>
                      <td>{item?.no}</td>
                      <td>{item?.name}</td>
                      <td>{item?.author}</td>
                      <td>{item?.publications}</td>
                      <td>
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEdit(item)}
                        >
                          <MdModeEdit />
                          &nbsp;Edit
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDelete(item._id)}
                        >
                          <LiaTrashAltSolid />
                          &nbsp; Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <td>No Data Available</td>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BookStore;
