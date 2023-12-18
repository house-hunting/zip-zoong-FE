import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  roomType: yup.string().required("선택은 필수입니다"),
  roomInfo: yup.string().required("선택은 필수입니다"),
  cost: yup.string().required("선택은 필수입니다"),
  selectDate: yup.string().required("선택은 필수입니다"),
  elevator: yup.string().required("선택은 필수입니다"),
  parking: yup.string().required("선택은 필수입니다"),
  totalFloors: yup.string().required("선은 필수입니다"),
  floorsNumber: yup.string().required("선택은 필수입니다"),
});
