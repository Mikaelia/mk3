import styles from "./banana.module.css";
import * as Popover from "@radix-ui/react-popover";

const Banana = () => (
  <div>
    <p className={styles.BananaStyle}>HELLO BANANA</p>
    <Popover.Root>
      <Popover.Trigger className={styles.PopoverStyle}>
        More info
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.PopoverStyle}>
          Some more info…
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  </div>
);

export default Banana;
