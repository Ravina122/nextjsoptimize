import dynamic from 'next/dynamic'
const Homepage = dynamic(() => import('./components/Homepage'));

export default function Home() {
  return (
  <Homepage />
  )
}
