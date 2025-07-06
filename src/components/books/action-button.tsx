import { Tooltip, TooltipContent, TooltipTrigger } from "../../components/ui/tooltip";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

interface ActionButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  actionLabel: string;
  icon?: React.ReactNode;
  isDeleteButton?: boolean;
}

const ActionButton = ({
  onClick,
  disabled,
  actionLabel,
  icon,
  isDeleteButton,
}: ActionButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          asChild
          variant="secondary"
          onClick={onClick}
          disabled={disabled}
          className={cn(
            isDeleteButton && "bg-red-500 hover:text-red-800",
            "w-4 bg-stone-100 hover:font-black cursor-pointer text-stone-900"
          )}
        >
          {icon && <span>{icon}</span>}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{actionLabel}</TooltipContent>
    </Tooltip>
  );
};

export default ActionButton;
