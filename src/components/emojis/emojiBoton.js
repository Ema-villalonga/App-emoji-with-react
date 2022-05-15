import styles from "./emojiPicker.module.scss";

export default function EmojiButton({ emoji, onClick }) {
  function handleOnClick() {
    onClick(emoji);
  }

  return (
    <button onClick={handleOnClick} className={styles.emojiBoton}>
      {emoji.symbol}
    </button>
  );
}
