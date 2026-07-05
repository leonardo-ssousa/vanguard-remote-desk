import type { ButtonHTMLAttributes } from "react";
import { SidebarButtonWrapper } from "./styles";
import type { IconType } from "react-icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  activeUrl: string;
  children: React.ReactNode;
  Icon: IconType;
}

export const SidebarButton: React.FC<ButtonProps> = ({
  children,
  Icon,
  activeUrl,
  ...rest
}) => {

  const isButtonActive = window.location.pathname.includes(activeUrl)


  return (
    <SidebarButtonWrapper $isActive={isButtonActive} {...rest}>
      <div className="icon">
        <Icon />
      </div>
      {children}
    </SidebarButtonWrapper>
  );
};

export default SidebarButton;
