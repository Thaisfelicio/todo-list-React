import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";

export default function App() {
  

  return (
    <Container>
    <div className="grid gap-10">
      <Text>Olá mundo</Text>
      <Icon svg={TrashIcon} className="fill-green-base"/>
      <div>
        <Badge variant="primary">2</Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon}></ButtonIcon>
        <ButtonIcon icon={TrashIcon} variant="secondary"></ButtonIcon>
        <ButtonIcon icon={TrashIcon} variant="tertiary"></ButtonIcon>
      </div>

      <div>
        <InputText/>
      </div>

      <div>
        <InputCheckbox/>
      </div>

      <div>
        <Card>Olá mundo</Card>
      </div>
    </div>
    </Container>
  )
}

