import utilStyles from '@/styles/utils.module.scss';
import styles from './styles.module.scss';

type Props = {
  text: string;
  width?: number;
  height?: number;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({ text, width = 200, height = 64, onClick, disabled = false }: Props) => (
  <button
    className={`${utilStyles.borderCircle} ${styles.button}`}
    type="button"
    style={{ width, height }}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);
