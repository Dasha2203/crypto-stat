import { Controller, useForm } from "react-hook-form";
import { useUpdateSearchParams } from "@shared/hooks";
import { Button, TextField } from "@shared/ui";
import { SearchFieldProps, SearchFormData } from "./search-field.types";
import styles from "./styles.module.scss";

export const SearchField = ({ placeHolder }: SearchFieldProps) => {
  const { updateSearchParams } = useUpdateSearchParams();
  const { control, handleSubmit } = useForm<SearchFormData>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = ({ search }: SearchFormData) => {
    updateSearchParams("search", search);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder={placeHolder}
            style={{ width: "100%", maxWidth: "none" }}
            className={styles["input"]}
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={styles["form__button"]}
      >
        Search
      </Button>
    </form>
  );
};
