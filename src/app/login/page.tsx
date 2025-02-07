import AuthImage from '@/public/Abstract Curves and Colors.jpeg'
import Image from 'next/image'
import Logo from '@/components/Logo'

const LoginPage = () => {
  return (
    <main className={`relative grid h-screen grid-cols-2`}>
        <div
            className={`relative flex w-full flex-col bg-muted p-10 text-primary-foreground`}
        >
            <div
                className={`to-black/50 absolute left-0 top-0 z-10 h-[30%] w-full bg-gradient-to-t from-transparent`}
            />
            <div
                className={`to-black/50 absolute left-0 bottom-0 z-10 h-[40%] w-full bg-gradient-to-b from-transparent`}
            />
            <Image
                src={AuthImage}
                alt={'Login Image'}
                fill
                className={`h-full w-full object-cover`}
            />
            <div className={`relative z-20 flex items-center`}>
                <Logo/>
            </div>
            <div className={`relative z-20 mt-auto`}>
                <blockquote className={`flex flex-col items-center gap-4 justify-center`}>
                    <p className={`text-lg text-center`}>
                        &ldquo;Pictoria AI has been a game changer for me. With this
                        wonderful app, I am now able to generate high quality headshots
                        within seconds. It has saved me countless hours of work and has
                        streamlined my success in the photography field.&ldquo;
                    </p>
                    <footer className={`text-sm text-center`}>David S.</footer>
                </blockquote>
            </div>
        </div>
        <div className={`relative flex flex-col items-center justify-center p-8 h-full`}>

        </div>
    </main>
  )
}

export default LoginPage
