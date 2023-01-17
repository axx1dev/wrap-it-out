import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, contactData, typesVinyl } from "@/data";

import SliderBackground from "../components/SliderBackground";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative, Navigation, Lazy, Mousewheel } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/lazy";

import { useSelector } from "react-redux";
import MainSlider from "../components/MainSlider";

export function Home() {
  const teamData = useSelector(state => state.usersTeam)

  return (
    <>
      <section id="home" className="bg-black">
        <MainSlider />
      </section>

      <section id="services" className="bg-black px-4 pt-20">
        <div className="container mx-auto">
          
          {/*<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
              </div>*/}

          <div className="container mx-auto">
            <PageTitle heading="Nuestros servicios">
              Cotiza tu proyecto, con garantía de un año.
            </PageTitle>
            <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
              {typesVinyl.map(({ img, name, position, socials }) => (
                <TeamCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                  socials={
                    <div className="flex items-center gap-2">
                      {socials.map(({ color, name }) => (
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-lg fa-${name}`} />
                        </IconButton>
                      ))}
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="our-team" className="bg-black px-4 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Nuestro Equipo">
            Apasionados por las motos y autos
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section id="brands" className="relative bg-black py-1 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Marcas">
            Contamos con diferentes tipos de marcas de gama alta, media alta y media baja
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2 font-permanent">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500 font-permanent">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-us" className="relative bg-black py-1 px-4 pb-20">
          <PageTitle heading="Contáctanos">
            LLena los datos para enviarnos un mensaje
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center font-permanent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input variant="standard" size="lg" label="Nombre" />
              <Input variant="standard" size="lg" label="Correo" />
            </div>
            <div className="mt-4">
              <Textarea variant="standard" size="md" label="Mensaje" rows={8} />
            </div>
            <Button color="blue-gray" variant="gradient" size="md" className="mt-8 bg-transparent font-permanent">
              Envíar
            </Button>
          </form>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default Home;
