import classes from "./Thanks.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function Thanks() {
  return (
    <>
      <h1 className={classes.thanx}>Tack! Vi återkommer så snart vi kan.</h1>
      <Link href="/">
        <Button className={classes.homebtn} variant="outlined" size="large">
          Till första sidan
        </Button>
      </Link>
    </>
  );
}