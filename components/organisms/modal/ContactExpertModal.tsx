import CustomModal from "@/components/atoms/CustomModal";

interface ContactExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactExpertModal = ({ isOpen, onClose }: ContactExpertModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} width="lg">
      <div className="h-44"></div>
    </CustomModal>
  );
};

export default ContactExpertModal;
