import Image from "next/image";
import  {NumForm}  from "@/components/ui/NumForm"

import { z } from "zod"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <NumForm/>
      </div>
    </main>
  );
}
