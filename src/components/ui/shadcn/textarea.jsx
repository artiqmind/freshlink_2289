import * as React from "react"
import { Label } from "./label"
import { cn } from "../../../lib/utils"

const Textarea = React.forwardRef(({ 
  className, 
  label,
  description,
  error,
  required = false,
  id,
  ...props 
}, ref) => {
  // Generate unique ID if not provided
  const textareaId = id || `textarea-${Math.random()?.toString(36)?.substr(2, 9)}`;

  if (label || description || error) {
    return (
      <div className="space-y-2">
        {label && (
          <Label
            htmlFor={textareaId}
            className={cn(
              error ? "text-destructive" : "text-foreground"
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}

        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          id={textareaId}
          {...props}
        />

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
  }

  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }