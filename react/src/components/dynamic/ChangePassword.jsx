import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import loginService from "../../service/loginService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function ChangePassword() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center flex-column align-items-center gap-3 mb-5 mt-5">
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          oldPassword: Yup.string()
            .required("Trường này bắt buộc nhập")
            .min(5, "Tên phải chứa ít nhất 5 ký tự")
            .max(20, "Tên không được vượt quá 20 ký tự"),
          newPassword: Yup.string()
            .required("Trường này bắt buộc nhập")
            .min(5, "Tên phải chứa ít nhất 5 ký tự")
            .max(20, "Tên không được vượt quá 20 ký tự"),
          confirmPassword: Yup.string()
            .required("Trường này bắt buộc nhập")
            .min(5, "Tên phải chứa ít nhất 5 ký tự")
            .max(20, "Tên không được vượt quá 20 ký tự"),
        })}
        onSubmit={(value) => {
          const changePassword = async () => {
            try {
              await loginService.changePassword(value);
              localStorage.removeItem("token");
              Swal.fire({
                icon: "success",
                title: "Thay đổi mật khẩu thành công. Vui lòng đăng nhập lại",
                showConfirmButton: false,
                timer: 1500,
              });
              document.getElementById("oldPasswordErr").innerHTML = "";
              document.getElementById("newPasswordErr").innerHTML = "";
              document.getElementById("confirmPasswordErr").innerHTML = "";
              navigate("/login");
            } catch (error) {
              const err = error.response.data;
              console.log(err);
              if (err.message === "Mật khẩu hiện tại không đúng") {
                document.getElementById("oldPasswordErr").innerHTML =
                  "Mật khẩu hiện tại không đúng";
              }

              if (
                err.message === "Mật khẩu mới không được trùng với mật khẩu cũ"
              ) {
                document.getElementById("newPasswordErr").innerHTML =
                  "Mật khẩu mới không được trùng với mật khẩu cũ";
              }

              if (err.message === "Mật khẩu xác nhận không trùng khớp") {
                document.getElementById("confirmPasswordErr").innerHTML =
                  "Mật khẩu xác nhận không trùng khớp";
              }
            }
          };
          changePassword();
        }}
      >
        <Form style={{ boxShadow: "8px 8px 16px 8px rgba(0, 0, 0, 0.2)", width: '34%' }} className="pe-5 ps-5 pb-4 pt-4">
          <div className="header">
            <h3 className="title mb-5 text-center" id="changePassword">
              Đổi mật khẩu
            </h3>
          </div>
          <div className="body">
            <div className="fs-5 d-flex justify-content-between">
              <div>
                <label htmlFor="mk-1">Mật khẩu cũ :</label>
              </div>
              <div>
                <div className="position-relative ">
                  <Field
                    id="mk-1"
                    type={showOldPassword ? "text" : "password"}
                    className="form-control "
                    placeholder="Nhập mật khẩu cũ"
                    name="oldPassword"
                  />
                  {showOldPassword ? (
                    <i
                      type="button"
                      onClick={() => {
                        setShowOldPassword(!showOldPassword);
                      }}
                      className="bi bi-eye-slash-fill position-absolute top-50 translate-middle-y me-2 end-0"
                    ></i>
                  ) : (
                    <i
                      type="button"
                      onClick={() => {
                        setShowOldPassword(!showOldPassword);
                      }}
                      className="bi bi-eye-fill position-absolute top-50 translate-middle-y me-2 end-0"
                    ></i>
                  )}
                </div>
                <ErrorMessage
                  name="oldPassword"
                  component="div"
                  className="text-danger err-msg mb-3"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <span className="text-danger" id="oldPasswordErr"></span>
            </div>
            <div className="fs-5 d-flex justify-content-between mt-3">
              <div>
                <label htmlFor="mk-2">Mật khẩu mới :</label>
              </div>
              <div>
                <div className="position-relative">
                  <Field
                    id="mk-2"
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu mới"
                    className="form-control"
                    name="newPassword"
                  />
                  {showNewPassword ? (
                    <i
                      type="button"
                      onClick={() => {
                        setShowNewPassword(!showNewPassword);
                      }}
                      className={`bi bi-eye-slash-fill me-2 position-absolute top-50 translate-middle-y end-0`}
                    ></i>
                  ) : (
                    <i
                      type="button"
                      onClick={() => {
                        setShowNewPassword(!showNewPassword);
                      }}
                      className={`bi bi-eye-fill me-2 position-absolute top-50 translate-middle-y end-0`}
                    ></i>
                  )}
                </div>
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-danger err-msg mb-3"
                />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-end">
                <span className="text-danger" id="newPasswordErr"></span>
              </div>
            </div>
            <div className="fs-5 d-flex justify-content-between mt-3">
              <div>
                <label htmlFor="mk-3">Xác nhận mật khẩu :</label>
              </div>
              <div>
                <div className="position-relative">
                  <Field
                    id="mk-3"
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Xác nhận mật khẩu"
                    name="confirmPassword"
                  />
                  {showConfirmPassword ? (
                    <i
                      type="button"
                      onClick={() => {
                        setShowConfirmPassword(!showConfirmPassword);
                      }}
                      className={`bi bi-eye-slash-fill me-2 position-absolute top-50 translate-middle-y end-0`}
                    ></i>
                  ) : (
                    <i
                      type="button"
                      onClick={() => {
                        setShowConfirmPassword(!showConfirmPassword);
                      }}
                      className={`bi bi-eye-fill me-2 position-absolute top-50 translate-middle-y end-0`}
                    ></i>
                  )}
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-danger err-msg mb-3"
                />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-end">
                <span className="text-danger" id="confirmPasswordErr"></span>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Xác nhận
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ChangePassword;
