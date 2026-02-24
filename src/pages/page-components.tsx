import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import PlusIcon from "../assets/icons/plus.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";    

export default function PageComponents() {
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
        <ButtonIcon icon={TrashIcon} loading></ButtonIcon>
      </div>

      <div>
        <InputText/>
      </div>

      <div>
        <InputCheckbox/>
        <InputCheckbox loading />
      </div>

      <div className="flex gap-1">
        <Badge loading>5</Badge>
      </div>

      <div>
        <Card>Olá mundo</Card>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6"/>
        <Skeleton className="h-6"/>
        <Skeleton className="w-96 h-6"/>
      </div>
    </div>
    </Container>
  )
}

