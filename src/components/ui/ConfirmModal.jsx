import React, { useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './shadcn/alert-dialog';
import Icon from '../AppIcon';

const ConfirmModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText = "Confirmar", 
  cancelText = "Cancelar",
  variant = "default",
  icon = "AlertTriangle",
  loading = false
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'destructive':
        return {
          iconColor: 'text-destructive',
          iconBg: 'bg-destructive/10',
        };
      case 'warning':
        return {
          iconColor: 'text-warning',
          iconBg: 'bg-warning/10',
        };
      case 'success':
        return {
          iconColor: 'text-success',
          iconBg: 'bg-success/10',
        };
      default:
        return {
          iconColor: 'text-primary',
          iconBg: 'bg-primary/10',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader className="text-center">
          {/* Icon */}
          <div className={`w-16 h-16 ${styles.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <Icon name={icon} size={32} className={styles.iconColor} />
          </div>

          <AlertDialogTitle className="text-xl font-heading font-bold">
            {title}
          </AlertDialogTitle>
          
          <AlertDialogDescription className="font-body">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex-col sm:flex-row gap-3">
          <AlertDialogCancel 
            onClick={onClose}
            disabled={loading}
            className="w-full sm:w-auto"
          >
            {cancelText}
          </AlertDialogCancel>
          
          <AlertDialogAction
            onClick={onConfirm}
            disabled={loading}
            className={cn(
              "w-full sm:w-auto",
              variant === 'destructive' && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
              variant === 'warning' && "bg-warning text-warning-foreground hover:bg-warning/90",
              variant === 'success' && "bg-success text-success-foreground hover:bg-success/90"
            )}
          >
            {loading && (
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmModal;