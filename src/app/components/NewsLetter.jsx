"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";

export const Newsletter = ({ isOpen, onOpenChange }) => {
  const [phone, setPhone] = useState("");
  const [isNoticeModal, setNoticeModal] = useState(false);
  const [isNewsLetterMessage, setNewsLetterMessage] = useState(false);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  const submitPhone = async () => {
    const res = await fetch("api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phone,
      }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    onOpenChange(false);
    const result = await res.json();
    setNoticeModal(true);
    setNewsLetterMessage(result.message);
  };
  return (
    <section>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Sign up to our newsletter
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  onChange={handlePhoneChange}
                  label="Phone Number"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="default" onClick={submitPhone}>
                  Send
                </Button>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {!isOpen ? (
        <Modal isOpen={isNoticeModal} onOpenChange={setNoticeModal}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Thank You!
                </ModalHeader>
                <ModalBody>{isNewsLetterMessage}</ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      ) : (
        ""
      )}
    </section>
  );
};
