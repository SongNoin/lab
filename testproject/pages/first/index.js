import { Modal } from "antd";

import { useState } from "react";
export default function FirstPage() {
  function onTogleLogin() {
    setIsLoginOpen((prev) => !prev);
  }
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
      <div onClick={onTogleLogin}>모달 열기</div>
      {isLoginOpen && (
        <Modal
          visible={true}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          <div>모달입니다</div>
        </Modal>
      )}
    </>
  );
}
