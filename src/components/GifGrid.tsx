
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loading } from "./Loading";

interface GifGridProps {
  category: string;
}




export const GifGrid: React.FC<GifGridProps> = ({ category }) => {
  // Si el array está vacío ([]), el efecto solo se ejecuta una vez, cuando el componente se monta

  const { images, isLoading } = useFetchGifs(category);


  return (
    <>
      <h3>{category}</h3>
      {/* {
        isLoading && <h2>Cargando ...</h2>
      } */}
      <Loading isLoading={isLoading} />
      <div className="card-grid">
        {
          images.map((image: any) => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  )
}

