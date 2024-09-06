"use client"

import { Input } from "./_components/ui/input"
import Header from "./_components/ui/Header"
import { Button } from "./_components/ui/button"
import {SearchIcon } from "lucide-react"
import { Badge} from "./_components/ui/badge"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Avatar, AvatarImage } from "./_components/ui/avatar"


//Server components
const Home = () => {
  return (
    <main>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Macedo</h2>
        <p>Segnda-feira, 04 de Setembro.</p>

        {/*Campo de Busca*/}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faca sua busca..."></Input>
          <Button size="icon">
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        {/*Imagem do nosso Banner*/}
        <div className="relative flex h-[220px] w-full items-center justify-center">
          <Image
            src="/banner.png"
            alt="Banner Principal"
            fill
            className="h-[100%] w-[100%] rounded-xl object-cover"
          />
        </div>

        {/*Agentamentos Confirmados*/}
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/*Left conteudo*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cebelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></ AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/*Right conteudo*/}
            <div className="flex flex-col justify-center items-center px-5 border-l-2 border-solid ">
              <p className="text-sm">Dezembro</p>
              <p className="text-2xl">12</p>
              <p className="text-sm">20:00</p>

            </div>
            
          </CardContent>
        </Card>
        


      </div>
    </main>
  )
}

export default Home
