import { PropsWithChildren, forwardRef, useRef, useState } from "react";

import { Button } from "../../../components/library/Button";
import Container from "../../../components/site/Container";
import Section from "../../../components/site/Section";

export default function DialogPage() {
  return (
    <Container
      title="Dialog"
      description="A dialog is an overlay that prompts the user to enter or select a value. It is commonly used to confirm or alert a user's action."
    >
      <Section
        id="dialog-simple"
        title="Simple"
        description="Simple dialogs display content and can provide a distinct link that can be selected."
      >
        {/* TODO: extract to a component */}
        <DialogComponent />
      </Section>
    </Container>
  );
}

const DialogComponent = () => {
  const [dialogContent, setDialogContent] = useState<JSX.Element | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="text-base font-bold text-gray-800 dark:text-gray-400">
          Let's create some dialog
        </p>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              setDialogContent(<ModalContent1 />);
              toggleDialog();
            }}
            intent="secondary"
            size="sm"
          >
            Dialog 1
          </Button>
          <Button
            onClick={() => {
              setDialogContent(<ModalContent2 />);
              toggleDialog();
            }}
            intent="primary"
            size="sm"
          >
            Dialog 2
          </Button>
        </div>
      </div>

      <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
        {dialogContent}
      </Dialog>
    </>
  );
};

type DialogProps = {
  toggleDialog: () => void;
};

const Dialog = forwardRef<HTMLDialogElement, PropsWithChildren<DialogProps>>(
  ({ children, toggleDialog }, ref) => {
    return (
      <dialog
        ref={ref}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            toggleDialog();
          }
        }}
      >
        <div className="p-4">
          {children}
          <Button
            onClick={toggleDialog}
            className="mt-10"
            intent="destructive"
            size="sm"
          >
            Close
          </Button>
        </div>
      </dialog>
    );
  }
);

const ModalContent1 = () => {
  return <p>Modal content 1</p>;
};

const ModalContent2 = () => {
  return <p>Modal content 2</p>;
};
