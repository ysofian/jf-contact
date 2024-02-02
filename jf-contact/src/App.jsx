import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


export default function App() {
  const links = [
    {
      text: "Getting started? Order from Tokopedia!",
      link: "https://www.tokopedia.com/juraganfilmanalog",
    },
    {
      text: "Offline Store Location",
      link: "https://maps.app.goo.gl/tqmVfSKxSLoDecPk7",
    },
    {
      text: "Our Instagram",
      link: "https://instagram.com/juraganalog",
    },
    {
      text: "Contact Us via WhatsApp",
      link: "https:/wa.me/18058881030",
    },
    {
      text: "Bored? Watch our YouTube",
      link: "https://www.youtube.com/@juraganalog",
    }
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center">
	<div className="max-w-2xl mx-auto flex flex-col gap-5 py-5">
		<div className="h-48 w-48 mx-auto">
			<div className=" aspect-w-1 aspect-h-1">
				<img
					src="./img/logo.png"
					className="object-cover object-center"
				/>
			</div>
		</div>
		<div className="text-center p-3">
			<h1 className="text-4xl font-bold text-black title-font">Juragan Film Analog</h1>
			<p className="text-lg mt-3 text-black subtitle-font">
				The First Professional Wholesale Film Supplier in Indonesia
			</p>
		</div>
		<div className="flex flex-col gap-10">
			{links.map(({ text, color, link }, index) => {
				return (
					<a href={link} key={index} target="_blank">
						<div
							className={`rounded-md shadow-md links w-11/12 mx-auto text-center py-3 shadow-custom hover:shadow-xl transition-all hover:translate-x-1 hover:translate-y-1`}
						>
							{text}
						</div>
					</a>
				);
			})}
		</div>
    <div className="footer text-center subtitle-font py-10">
      <p className="text-xs"> admin@juraganalog.com | Jl. Bendungan Sutami No. 42 Malang | Glad You're Here!</p>
      <p className="ReallySmall py-1"> Juragan Film Analog, 2022-2024</p>
    </div>
	</div>
</div>
  );
}