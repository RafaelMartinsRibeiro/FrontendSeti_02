import { Form } from "./components/Form";
import { FormProvider } from "./contexts/FormContext";

export default function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}
