import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";

export default function App() {
  

  return (
    <div className="grid gap-3">
      <Text>Olá mundo</Text>
      <Icon svg={TrashIcon} className="fill-green-base"/>
    </div>
    
  )
}

