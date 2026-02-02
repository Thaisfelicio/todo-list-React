import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";

export default function App() {
  

  return (
    <div className="grid gap-3">
      <Text>Olá mundo</Text>
      <Icon svg={TrashIcon} className="fill-green-base"/>
      <div>
        <Badge variant="primary">2</Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
    </div>
    
  )
}

