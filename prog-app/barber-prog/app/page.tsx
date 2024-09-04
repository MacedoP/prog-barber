"use client"

import { Input } from "./_components/ui/input"
import Header from "./_components/ui/Header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

//Server components
const Home = () => {
  return (
    <main>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Macedo</h2>
        <p>Segnda-feira, 04 de Setembro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faca sua busca..."></Input>
          <Button size="icon">
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        <div className="relative flex h-[220px] w-full items-center justify-center">
          <Image
            src="/banner.png"
            alt="Banner Principal"
            fill
            className="h-[100%] w-[100%] rounded-xl object-cover"
          />
        </div>
      </div>
    </main>
  )
}

export default Home
