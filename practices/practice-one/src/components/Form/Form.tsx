import Button from "components/Button/Button";
import Heading from "components/Heading/Heading";
import Input from "components/Input/Input";
import { ReactNode, FormEvent, ChangeEvent } from "react";
import "./form.css";
type FormProps = {
  action?: string;
  method?: "GET" | "POST";
  onChange?: (event: ChangeEvent) => void;
  onSubmit: (event: FormEvent) => void;
};

// this is sample data, will be deleted after merge
const categorys = [
  {
    id: "js",
    name: "Javascript",
  },
  {
    id: "ts",
    name: "TypeScript",
  },
  {
    id: "java",
    name: "Java",
  },
];

function Form(props: FormProps) {
  const { onChange, ...rest } = props;
  return (
    <form {...rest} className="form">
      <div className="form-item">
        <label htmlFor="title">title</label>
        <Input
          name="title"
          type="text"
          id="title"
          placeholder="Enter title..."
          onChange={onChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="category">category</label>
        <select name="category" id="category" onChange={onChange}>
          <option value="">--- Select caregory ---</option>
          {categorys.map(({ id, name }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="image">select image</label>
        <Input name="image" type="file" id="image" onChange={onChange} hidden />
      </div>
      <div className="form-item">
        <Button type="submit" title="submit" variant="primary" />
      </div>
    </form>
  );
}

export default Form;