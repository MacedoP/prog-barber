"use client"

import { Input } from "./_components/ui/input"
import Header from "./_components/Header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import { Badge } from "./_components/ui/badge"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbeariashopItem from "./_components/barbershop-item"

//Server components
// eslint-disable-next-line @next/next/no-async-client-component
const Home = async () => {
  const barbershops = await db.barbershop.findMany({})


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

        <h2 className="text-sx mb-3 mt-6 font-bold uppercase text-gray-400">
          Agendamento
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/*Left conteudo*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cebelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/*Right conteudo*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Dezembro</p>
              <p className="text-2xl">12</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="text-sx mb-3 mt-6 font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        {barbershops.map(barbershops => <BarbeariashopItem key={barbershops.id} barbershop={barbershops}/>)}
      </div>
    </main>
  )
}

export default Home
