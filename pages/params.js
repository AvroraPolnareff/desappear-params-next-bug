import {useRouter} from "next/router";

const Params = () => {
  const router = useRouter()

  return <div>{Object.entries(router.query).map(([key, value]) => <div>{key}: {value}</div>)}</div>
}

export async function getServerSideProps() {
  return { props: { } }
}

export default Params
