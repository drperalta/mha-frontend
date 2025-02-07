import { Popover, PopoverDropdown, PopoverTarget, Button } from "@mantine/core"
import Link from "next/link"

export default function Home() {
  return (
    <div className="p-4 flex gap-2">
      <Button component={Link} href="#">
        Manila Hearing Aid
      </Button>

      <Popover>
        <PopoverTarget>
          <Button variant="default">Dropdown</Button>
        </PopoverTarget>
        <PopoverDropdown>Hello World!</PopoverDropdown>
      </Popover>
    </div>
  )
}
