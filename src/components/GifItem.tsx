import React from "react";


interface GifItemProps {

  title: string;
  url: string;
}



export const GifItem: React.FC<GifItemProps> = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
