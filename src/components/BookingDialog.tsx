import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface BookingDialogProps {
  children: ReactNode;
}

export const BookingDialog = ({ children }: BookingDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0">
        <iframe
          src="https://hub.holaelo.app/agendar/silviagomezrinc-gmail-com"
          className="w-full h-[80vh] min-h-[600px] border-0 rounded-md"
          title="Agendar sesión con Silvia Gómez"
        />
      </DialogContent>
    </Dialog>
  );
};
