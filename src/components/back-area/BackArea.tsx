import styles from './BackArea.module.scss'

interface IProps {
  isOpen: boolean
  onClose: () => void
}

const BackArea: React.FC<IProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className={styles.backarea}
          onClick={onClose}
        />
      )}
    </>
  )
}

export default BackArea
