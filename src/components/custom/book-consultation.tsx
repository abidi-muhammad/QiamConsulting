import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

const BookConsultation = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button size="sm">
          Book Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Book Consultation</DialogTitle>
          <DialogDescription>
            Book Consultation
          </DialogDescription>
        </DialogHeader>

      </DialogContent>
    </Dialog>
  );
}

export default BookConsultation;
