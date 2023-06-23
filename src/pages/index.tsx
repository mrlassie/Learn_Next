// TODO:
// 1. please change how to get the countryList data using Static Side Generation (SSG) from "/api/resort/countries"

import { Inter } from "next/font/google";
import { Hero } from "@/sections/hero";
import { Places } from "@/sections/places";
import Head from "next/head";
import { getCountriesFromDb } from "@/queries/getCountries";
import { Country } from "@prisma/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ country_list }: { country_list: Country[] }) {
  return (
    <main>
      <Head>
        <title>Homepage - The Best Resort</title>
      </Head>
      <Hero />
      <Places country_list={country_list} />
    </main>
  );
}

export async function getStaticProps() {
  const countries = await getCountriesFromDb();
  return {
    props: {
      country_list: countries,
    },
    revalidate: 60,
  };
}
