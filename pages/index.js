import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {

    const router = useRouter()

    const handleClick = () => {
        console.log('placing our order')
        router.push('/product')
    }

    return (
        <div>
                <h1>Home Page</h1>
                <Link href='/blog'>
                <a>Blog</a>
                </Link><br></br>
                <Link href='/product'>
                    <a>Products</a>
                </Link>
                <button onClick={handleClick}>Place Order</button>
        </div>
    )
}

export default Home;