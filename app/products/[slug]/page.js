import Slug from "@/components/Slug";

const SlugRoute = ({params})=>{
    const decodeName = decodeURIComponent(params.slug)
    return <Slug name={decodeName}/>
}

export default SlugRoute