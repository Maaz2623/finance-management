import CurrencyInput from "react-currency-input-field";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Info, InfoIcon, MinusCircleIcon, PlusCircleIcon } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
};

export const AmountInput = ({
  value,
  onChange,
  placeholder,
  disabled,
}: Props) => {
  const parsedValue = parseFloat(value);

  const isIncome = parsedValue > 0;

  const isExpense = parsedValue < 0;

  const onReverseValue = () => {
    if (!value) return;
    const newValue = parseFloat(value) * -1;
    onChange(newValue.toString());
  };

  return (
    <div className="relative">
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <button
              className={cn(
                "bg-slate-400 hover:bg-slate-500 absolute top-1 p-2 left-1 rounded-md flex items-center justify-center transition",
                isExpense && "bg-rose-500",
                isIncome && "bg-emerald-500"
              )}
              type="button"
              onClick={onReverseValue}
            >
              {!parsedValue && <InfoIcon className="size-4 font-medium text-white" />}
              {isIncome && <PlusCircleIcon className="size-4 font-medium text-white" />}
              {isExpense && <MinusCircleIcon className="size-4 font-medium text-white" />}
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Use [+] for income and [-] for expenses
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <CurrencyInput
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        decimalsLimit={2}
        decimalScale={2}
        placeholder={placeholder}
        prefix="$"
        className="flex pl-10 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <p className="text-xs text-muted-foreground mt-2">
        {isIncome && "This will count as income"}
        {isExpense && "This will count as expense"}
      </p>
    </div>
  );
};
