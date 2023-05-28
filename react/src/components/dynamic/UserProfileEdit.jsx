import React, { useEffect, useState } from "react";
import userService from "../../service/userService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { Oval } from "react-loader-spinner";

function UserProfileEdit() {
  const [userDetail, setUserDetail] = useState();
  const [imageSrc, setImageSrc] = useState("");
  const [imgName, setImgName] = useState("");
  const [firebaseImg, setFirebaseImg] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);
  const [isChangeImg, setIsChangeImg] = useState(false);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSubmitAsync = async () => {
    return new Promise((resolve, reject) => {
      const file = imgName;
      if (!file) return reject("No file selected");
      const storageRef = ref(storage, `files/${file}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (error) => {
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setFirebaseImg(downloadURL);
          resolve(downloadURL);
        }
      );
    });
  };

  const getMinDate = () => {
    const today = new Date();
    return new Date(
      today.getFullYear() - 16,
      today.getMonth(),
      today.getDate()
    );
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImgName(file.name);
    setIsChangeImg(true);
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrl = reader.result;
      setImageSrc(imageUrl);
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const detail = async () => {
      try {
        const res = await userService.getUserDetail();
        setUserDetail(res.data);
        setImageSrc(res.data.avatar);
      } catch (error) {
        console.warn(error);
      }
    };
    detail();
  }, [token]);

  if (!userDetail) {
    return null;
  }

  return (
    <div>
      <div className="row mx-0 p-5">
        <div className="container p-5 shadow-cosmetics-1 ">
          <div className="row">
            <div className="col-3 mt-3">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={imageSrc}
                  className="border-avatar rounded-circle"
                  width="80%"
                  height="80%"
                  alt="avatar"
                />
                <label
                  htmlFor="avatar"
                  className="avatar mt-3 p-1"
                  style={{ height: "50px" }}
                >
                  <i className="bi bi-images fs-4"></i> Thay đổi avatar
                </label>
                <input
                  type="file"
                  className="d-none"
                  onChange={handleFileChange}
                  id="avatar"
                />
              </div>
            </div>
            <div className="col-9">
              <Formik
                initialValues={{
                  name: userDetail?.name,
                  email: userDetail?.email,
                  gender: userDetail?.gender,
                  dateOfBirth: userDetail?.dateOfBirth,
                  address: userDetail?.address,
                  phoneNumber: userDetail?.phoneNumber,
                  avatar: userDetail?.avatar,
                }}
                validationSchema={Yup.object({
                  name: Yup.string()
                    .required("Trường này bắt buộc nhập")
                    .matches(
                      "^[A-Z][a-z]+(\\s[A-Z][a-z]+)*$",
                      "Tên không được chứa số. Và các kí tự đầu tiên của mỗi từ phải viết hoa"
                    ),
                  email: Yup.string()
                    .required("Trường này bắt buộc nhập")
                    .email("Sai format email"),
                  phoneNumber: Yup.string()
                    .required("Trường này bắt buộc nhập")
                    .matches(
                      "^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$",
                      "Số điện thoại phải đúng định dạng 09xxxxxxxx hoặc 09xxxxxxxx hoặc (84)+9xxxxxxxx hoặc (84)+9xxxxxxxx."
                    ),
                  address: Yup.string().required("Trường này bắt buộc nhập"),
                  dateOfBirth: Yup.date()
                    .required("Trường này bắt buộc nhập")
                    .max(getMinDate(), "Bạn phải từ 16 tuổi trở lên"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  const register = async () => {
                    try {
                      if (isChangeImg) {
                        const newValues = { ...values, avatar: firebaseImg };
                        newValues.avatar = await handleSubmitAsync();
                        setIsChangeImg(false)
                      }
                      // await loginService.register(newValues);
                      Swal.fire({
                        icon: "success",
                        title: "Chỉnh sửa thông tin cá nhân thành công",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      
                      document.getElementById("email-err").innerText = "";
                      setSubmitting(false);
                      navigate("/profile");
                    } catch (error) {
                      console.warn(error);
                      setSubmitting(false);
                      const err = error.response?.data;
                      if (err === "Email đã tồn tại!") {
                        document.getElementById("email-err").innerText =
                          "Email đã tồn tại!";
                      }
                    }
                  };
                  register();
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="row ms-3 px-3">
                      <h2 className="text-center text-dieucosmetics">
                        THÔNG TIN CÁ NHÂN
                      </h2>
                      <div className="col-6 px-0">
                        <table className="fs-5 font-table text-secondary">
                          <thead>
                            <tr>
                              <th className="th-dieucosmetics">Họ và tên :</th>
                              <td>
                                <Field
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="name"
                                  component="div"
                                  className="text-danger fs-6"
                                />
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="th-dieucosmetics">Giới tính :</th>
                              <td>
                                <div className="form-check form-check-inline">
                                  <Field
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value={true}
                                    checked={userDetail?.gender === true}
                                  />
                                  <label
                                    className="form-check-label fs-6"
                                    htmlFor="female"
                                  >
                                    Nữ
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <Field
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    value={false}
                                    checked={userDetail?.gender === false}
                                  />
                                  <label
                                    className="form-check-label fs-6"
                                    htmlFor="male"
                                  >
                                    Nam
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="th-dieucosmetics">Ngày sinh :</th>
                              <td>
                                <Field
                                  type="date"
                                  name="dateOfBirth"
                                  id="dateOfBirth"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="dateOfBirth"
                                  component="div"
                                  className="text-danger fs-6"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th
                                className="th-dieucosmetics"
                                style={{ width: "220px" }}
                              >
                                Email :
                              </th>
                              <td className="w-50">
                                <Field
                                  type="text"
                                  id="email"
                                  name="email"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="text-danger fs-6"
                                />
                                <span
                                  id="email-err"
                                  className="text-danger"
                                ></span>
                              </td>
                            </tr>
                            <tr>
                              <th className="th-dieucosmetics">
                                Số điện thoại:
                              </th>
                              <td>
                                <Field
                                  type="text"
                                  name="phoneNumber"
                                  id="phoneNumber"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="phoneNumber"
                                  component="div"
                                  className="text-danger fs-6"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-6">
                        <table className="fs-5 font-table text-secondary">
                          <thead>
                            <tr>
                              <th
                                className="th-dieucosmetics"
                                style={{ width: "50%" }}
                              >
                                Địa chỉ :
                              </th>
                              <td>
                                <Field
                                  type="text"
                                  id="address"
                                  name="address"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="address"
                                  component="div"
                                  className="text-danger fs-6"
                                />
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="th-dieucosmetics"></th>
                              {isSubmitting ? (
                                <td>
                                  <Oval
                                    height={80}
                                    width={80}
                                    color="#4fa94d"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                    ariaLabel="oval-loading"
                                    secondaryColor="#4fa94d"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}
                                  />
                                </td>
                              ) : (
                                <td>
                                  <button
                                    type="submit"
                                    className="btn btn-outline-primary"
                                  >
                                    Lưu thông tin
                                  </button>
                                </td>
                              )}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileEdit;
