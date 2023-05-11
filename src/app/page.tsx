'use client'
import SpotifyFrame from "./components/SpotifyFrame"


export default function Home() {
  return (

    <main className="flex h-full w-full flex-col items-center p-4 lg:h-screen" style={
      {
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    }>
      <div className="flex flex-col bg-[#441757] p-4 mb-4 ask items-center justify-center">
        <h1 className="text-xl font-bold text-white  text-center">Musiquinha,vamo?😊❤️</h1>
      </div>
      <div className="flex flex-col bg-[#441757] p-4 ask items-center justify-center">
        <h2 className="text-xl font-bold text-white  text-center">Carol, você me faz bem desde o dia 1, até hj... obrigado por existir e ser você❤️ Fiz essa playlist... Toda vez que uma música lembrar você, vou colocar aqui. Beijos!</h2>
      </div>
      <SpotifyFrame content='
       <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/482X4Ba0mF0GWhcSNL2n4f?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'/>        
    </main>
  )
}
