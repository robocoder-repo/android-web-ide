
import AndroidIde from '../components/AndroidIde'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Android-based HTML, CSS, and JavaScript IDE</h1>
        <AndroidIde />
      </div>
    </main>
  )
}
