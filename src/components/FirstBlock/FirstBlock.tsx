"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    return (
        <div className="relative p-2 md:py-85">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            PokémonKingdom
                            <span className="block degradedBlue bg-textos">
                                oficial web
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Bienvenidos a la página oficial de Pokémon Kingdom, uno de los servidores más grandes hispanos con mucha actividad y actividades para todo tipo de usuarios, desde juegos con bots hasta eventos semanales.</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="../../../parte.html" className="px-4 py-3 rounded-md bg-botonJoin">Únete ahora</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/logo.png" alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
