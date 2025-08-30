import React from "react";
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./shadcn/select";
import { Label } from "./shadcn/label";
import { cn } from "../../utils/cn";

const Select = React.forwardRef(({
    className,
    options = [],
    value,
    placeholder = "Select an option",
    disabled = false,
    required = false,
    label,
    description,
    error,
    id,
    name,
    onChange,
    ...props
}, ref) => {
    // Generate unique ID if not provided
    const selectId = id || `select-${Math.random()?.toString(36)?.substr(2, 9)}`;

    return (
        <div className={cn("space-y-2", className)}>
            {label && (
                <Label
                    htmlFor={selectId}
                    className={cn(
                        error ? "text-destructive" : "text-foreground"
                    )}
                >
                    {label}
                    {required && <span className="text-destructive ml-1">*</span>}
                </Label>
            )}

            <ShadcnSelect
                value={value}
                onValueChange={onChange}
                disabled={disabled}
                name={name}
                {...props}
            >
                <SelectTrigger 
                    ref={ref}
                    id={selectId}
                    className={cn(
                        error && "border-destructive focus:ring-destructive"
                    )}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem 
                            key={option.value} 
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </ShadcnSelect>

            {description && !error && (
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            )}

            {error && (
                <p className="text-sm text-destructive">
                    {error}
                </p>
            )}
        </div>
    );
});

Select.displayName = "Select";

export default Select;