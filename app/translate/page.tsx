"use client";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ListItem {
  key: string;
  value: string;
}

export default function Translate() {
  const [items, setItems] = useState<ListItem[]>([]);
  const [keyInput, setKeyInput] = useState("");
  const [valueInput, setValueInput] = useState("");

  const handleAdd = () => {
    if (keyInput && valueInput) {
      const newItem: ListItem = { key: keyInput, value: valueInput };
      setItems([...items, newItem]);
      setKeyInput("");
      setValueInput("");
    }
    console.log(items);
  };

  const handleDelete = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">SUBMIT</h3>
        <p className="text-sm text-muted-foreground">
          Enter to each key a value
        </p>
      </div>
      <Separator />

      {/* <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="key" />
        <Input type="text" placeholder="value" />
        <button type="submit">+</button>
  </div>*/}
      <div className="flex flex-col gap-3">
        <Button variant="outline" onClick={handleAdd} className="self-end">
          Add
        </Button>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="key"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
          />
          <Input
            type="text"
            placeholder="value"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
        </div>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex  items-center space-x-2">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input value={item.key} />
            <Input value={item.value} />
          </div>
          <Button type="button" onClick={() => handleDelete(index)}>
            Delete
          </Button>
        </div>
      ))}
      <Button type="button">Save On MongoDb</Button>
    </div>
  );
}
