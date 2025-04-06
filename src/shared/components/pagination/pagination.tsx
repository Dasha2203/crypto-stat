import { ArrowRightIcon, ArrowLeftIcon } from "@icons";
import { Button } from "@shared/ui";
import { PaginationProps } from "./pagination.types";
import styles from "./styles.module.scss";

export const Pagination = ({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <Button
        variant="outlined"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles["button"]}
      >
        <ArrowLeftIcon />
      </Button>

      <Button
        variant={currentPage === 1 ? "contained" : "outlined"}
        className={styles["button"]}
        onClick={() => onChange(1)}
      >
        1
      </Button>

      {currentPage > 2 && <span>...</span>}
      {currentPage !== 1 && currentPage !== totalPages && (
        <Button className={styles["button"]}>{currentPage}</Button>
      )}
      {currentPage < totalPages - 1 && <span>...</span>}
      <Button
        variant={currentPage === totalPages ? "contained" : "outlined"}
        className={styles["button"]}
        onClick={() => onChange(totalPages)}
      >
        {totalPages}
      </Button>

      <Button
        variant="outlined"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles["button"]}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
};
