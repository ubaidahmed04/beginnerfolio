import React, { useState } from "react";
import "./css/demo-card.css";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import "./embla/lineClamp.css";

function DemoCard({ title, description }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div class="notification">
        <div class="notiglow"></div>
        <div class="notiborderglow"></div>
        <div class="notititle nunito">{title}</div>
        <div class="notibody tailwing nunito">{description}
            <br  />
        </div>
            <button className="customButton" onClick={handleOpen}>Read more</button>
        
      </div>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="nunito">{title}</DialogHeader>
        <DialogBody className="nunito">{description}</DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="#212121" onClick={handleOpen}>
            <span>okay</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DemoCard;
