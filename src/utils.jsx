import { Button as CustomButton } from "@chakra-ui/react";

const Button = ({ text, onClick }) => {
  return (
    <CustomButton variant="solid" onClick={onClick}>
      {text}
    </CustomButton>
  );
};

export default Button;
