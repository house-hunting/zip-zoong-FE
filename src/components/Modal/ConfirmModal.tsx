interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = () => {
  //   if (!showModal) {
  //     return null;
  //   }

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-xl w-19 xs:w-25 h-40 xs:h-52 flex justify-center items-center flex-col">
        <div className="w-full break-words text-sm xs:text-base">
          adsfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasfasdfasdfasdfasdfsfaasdfafdfasdfasdfasadfsdfasfsdfasfasfdfdfasdfas
          {/* {children} */}
        </div>
        <div className="flex w-full justify-between text-sm xs:text-base">
          <button
            //   onClick={onClose}
            className="mt-4 px-4 py-1 w-28 xs:w-40 text-font-gray100 bg-gray-100 rounded hover:bg-gray-200"
          >
            취소
          </button>
          <button className="mt-4 px-4 py-1 w-28 xs:w-40 xs:py-2 bg-primary-100 text-white rounded hover:bg-hover">
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
